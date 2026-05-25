import { FileTrieNode } from "../../util/fileTrie"
import { FullSlug, resolveRelative, simplifySlug } from "../../util/path"
import { ContentDetails } from "../../plugins/emitters/contentIndex"

type MaybeHTMLElement = HTMLElement | undefined

interface ParsedOptions {
  folderClickBehavior: "collapse" | "link"
  folderDefaultState: "collapsed" | "open"
  useSavedState: boolean
  sortFn: (a: FileTrieNode, b: FileTrieNode) => number
  filterFn: (node: FileTrieNode) => boolean
  mapFn: (node: FileTrieNode) => void
  order: "sort" | "filter" | "map"[]
}

type FolderState = {
  path: string
  collapsed: boolean
}

let currentExplorerState: Array<FolderState>

function directChildWithClass(parent: HTMLElement, className: string): HTMLElement | undefined {
  return Array.from(parent.children).find(
    (child): child is HTMLElement =>
      child instanceof HTMLElement && child.classList.contains(className),
  )
}

function directChildTag(parent: HTMLElement, tagName: string): HTMLElement | undefined {
  return Array.from(parent.children).find(
    (child): child is HTMLElement =>
      child instanceof HTMLElement && child.tagName.toLowerCase() === tagName,
  )
}

function folderContainsSlug(folderPath: string | undefined, slug: FullSlug): boolean {
  if (!folderPath) return false

  const folderSlug = simplifySlug(folderPath as FullSlug).replace(/\/$/, "")
  const currentSlug = simplifySlug(slug).replace(/\/$/, "")
  return (
    folderSlug !== "/" && (currentSlug === folderSlug || currentSlug.startsWith(`${folderSlug}/`))
  )
}

function isHomeSlug(slug: FullSlug): boolean {
  return simplifySlug(slug) === "/"
}

function updateExplorerState(folderPath: string | undefined, collapsed: boolean) {
  if (!folderPath) return

  const currentFolderState = currentExplorerState.find((item) => item.path === folderPath)
  if (currentFolderState) {
    currentFolderState.collapsed = collapsed
  } else {
    currentExplorerState.push({
      path: folderPath,
      collapsed,
    })
  }
}

function persistExplorerState() {
  localStorage.setItem("fileTree", JSON.stringify(currentExplorerState))
}

type DirectFolderItem = {
  folderContainer: HTMLElement
  folderOuter: HTMLElement
}

function directFolderItems(parentList: Element): DirectFolderItem[] {
  return Array.from(parentList.children)
    .filter((child): child is HTMLElement => child instanceof HTMLElement)
    .map((child) => ({
      folderContainer: directChildWithClass(child, "folder-container"),
      folderOuter: directChildWithClass(child, "folder-outer"),
    }))
    .filter((item): item is DirectFolderItem => Boolean(item.folderContainer && item.folderOuter))
}

function closeFolderTree(folderContainer: HTMLElement, folderOuter: HTMLElement) {
  setFolderState(folderOuter, true)
  updateExplorerState(folderContainer.dataset.folderpath, true)

  const childList = directChildTag(folderOuter, "ul")
  if (!childList) return

  for (const child of directFolderItems(childList)) {
    closeFolderTree(child.folderContainer, child.folderOuter)
  }
}

function closeAllFolders(parentList: Element) {
  for (const item of directFolderItems(parentList)) {
    closeFolderTree(item.folderContainer, item.folderOuter)
  }
}

function closeSiblingFolders(folderContainer: HTMLElement) {
  const parentList = folderContainer.parentElement?.parentElement
  if (!parentList) return

  for (const sibling of directFolderItems(parentList)) {
    if (sibling.folderContainer === folderContainer) continue

    closeFolderTree(sibling.folderContainer, sibling.folderOuter)
  }
}

function enforceCurrentFolderPath(parentList: Element, currentSlug: FullSlug) {
  const folderItems = directFolderItems(parentList)
  const currentFolder = folderItems.find(({ folderContainer }) =>
    folderContainsSlug(folderContainer.dataset.folderpath, currentSlug),
  )

  if (!currentFolder) return

  for (const item of folderItems) {
    const shouldCollapse = item !== currentFolder
    if (shouldCollapse) {
      closeFolderTree(item.folderContainer, item.folderOuter)
    } else {
      setFolderState(item.folderOuter, false)
      updateExplorerState(item.folderContainer.dataset.folderpath, false)
    }
  }

  const childList = directChildTag(currentFolder.folderOuter, "ul")
  if (childList) {
    enforceCurrentFolderPath(childList, currentSlug)
  }
}

function openFolderOnly(this: HTMLElement) {
  const folderContainer = this.closest(".folder-container") as MaybeHTMLElement
  if (!folderContainer) return

  const childFolderContainer = folderContainer.nextElementSibling as MaybeHTMLElement
  if (!childFolderContainer) return

  setFolderState(childFolderContainer, false)
  updateExplorerState(folderContainer.dataset.folderpath, false)
  closeSiblingFolders(folderContainer)
  persistExplorerState()
}

function toggleExplorer(this: HTMLElement) {
  const nearestExplorer = this.closest(".explorer") as HTMLElement
  if (!nearestExplorer) return
  const explorerCollapsed = nearestExplorer.classList.toggle("collapsed")
  nearestExplorer.setAttribute(
    "aria-expanded",
    nearestExplorer.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )

  if (!explorerCollapsed) {
    // Stop <html> from being scrollable when mobile explorer is open
    document.documentElement.classList.add("mobile-no-scroll")
  } else {
    document.documentElement.classList.remove("mobile-no-scroll")
  }
}

function toggleFolder(evt: MouseEvent) {
  evt.stopPropagation()
  const target = evt.target as MaybeHTMLElement
  if (!target) return

  // Check if target was svg icon or button
  const isSvg = target.nodeName === "svg"

  // corresponding <ul> element relative to clicked button/folder
  const folderContainer = (
    isSvg
      ? // svg -> div.folder-container
        target.parentElement
      : // button.folder-button -> div -> div.folder-container
        target.parentElement?.parentElement
  ) as MaybeHTMLElement
  if (!folderContainer) return
  const childFolderContainer = folderContainer.nextElementSibling as MaybeHTMLElement
  if (!childFolderContainer) return

  childFolderContainer.classList.toggle("open")

  // Collapse folder container
  const isCollapsed = !childFolderContainer.classList.contains("open")
  if (isCollapsed) {
    closeFolderTree(folderContainer, childFolderContainer)
  } else {
    setFolderState(childFolderContainer, false)
    updateExplorerState(folderContainer.dataset.folderpath, false)
    closeSiblingFolders(folderContainer)
  }

  persistExplorerState()
}

function createFileNode(currentSlug: FullSlug, node: FileTrieNode): HTMLLIElement {
  const template = document.getElementById("template-file") as HTMLTemplateElement
  const clone = template.content.cloneNode(true) as DocumentFragment
  const li = clone.querySelector("li") as HTMLLIElement
  const a = li.querySelector("a") as HTMLAnchorElement
  a.href = resolveRelative(currentSlug, node.slug)
  a.dataset.for = node.slug
  a.textContent = node.displayName

  if (currentSlug === node.slug) {
    a.classList.add("active")
  }

  return li
}

function createFolderNode(
  currentSlug: FullSlug,
  node: FileTrieNode,
  opts: ParsedOptions,
): HTMLLIElement {
  const template = document.getElementById("template-folder") as HTMLTemplateElement
  const clone = template.content.cloneNode(true) as DocumentFragment
  const li = clone.querySelector("li") as HTMLLIElement
  const folderContainer = li.querySelector(".folder-container") as HTMLElement
  const titleContainer = folderContainer.querySelector("div") as HTMLElement
  const folderOuter = li.querySelector(".folder-outer") as HTMLElement
  const ul = folderOuter.querySelector("ul") as HTMLUListElement

  const folderPath = node.slug
  folderContainer.dataset.folderpath = folderPath

  if (currentSlug === folderPath) {
    folderContainer.classList.add("active")
  }

  if (opts.folderClickBehavior === "link") {
    // Replace button with link for link behavior
    const button = titleContainer.querySelector(".folder-button") as HTMLElement
    const a = document.createElement("a")
    a.href = resolveRelative(currentSlug, folderPath)
    a.dataset.for = folderPath
    a.className = "folder-title"
    a.textContent = node.displayName
    button.replaceWith(a)
  } else {
    const span = titleContainer.querySelector(".folder-title") as HTMLElement
    span.textContent = node.displayName
  }

  // if the saved state is collapsed or the default state is collapsed
  const isCollapsed =
    currentExplorerState.find((item) => item.path === folderPath)?.collapsed ??
    opts.folderDefaultState === "collapsed"

  // if this folder is a prefix of the current path we
  // want to open it anyways
  const folderIsPrefixOfCurrentSlug = folderContainsSlug(folderPath, currentSlug)
  const shouldOpen = folderIsPrefixOfCurrentSlug || (isHomeSlug(currentSlug) && !isCollapsed)

  if (shouldOpen) {
    folderOuter.classList.add("open")
  }

  for (const child of node.children) {
    const childNode = child.isFolder
      ? createFolderNode(currentSlug, child, opts)
      : createFileNode(currentSlug, child)
    ul.appendChild(childNode)
  }

  return li
}

async function setupExplorer(currentSlug: FullSlug) {
  const allExplorers = document.querySelectorAll("div.explorer") as NodeListOf<HTMLElement>

  for (const explorer of allExplorers) {
    const dataFns = JSON.parse(explorer.dataset.dataFns || "{}")
    const opts: ParsedOptions = {
      folderClickBehavior: (explorer.dataset.behavior || "collapse") as "collapse" | "link",
      folderDefaultState: (explorer.dataset.collapsed || "collapsed") as "collapsed" | "open",
      useSavedState: explorer.dataset.savestate === "true",
      order: dataFns.order || ["filter", "map", "sort"],
      sortFn: new Function("return " + (dataFns.sortFn || "undefined"))(),
      filterFn: new Function("return " + (dataFns.filterFn || "undefined"))(),
      mapFn: new Function("return " + (dataFns.mapFn || "undefined"))(),
    }

    // Get folder state from local storage
    const storageTree = localStorage.getItem("fileTree")
    const serializedExplorerState = storageTree && opts.useSavedState ? JSON.parse(storageTree) : []
    const oldIndex = new Map<string, boolean>(
      serializedExplorerState.map((entry: FolderState) => [entry.path, entry.collapsed]),
    )

    const data = await fetchData
    const entries = [...Object.entries(data)] as [FullSlug, ContentDetails][]
    const trie = FileTrieNode.fromEntries(entries)

    // Apply functions in order
    for (const fn of opts.order) {
      switch (fn) {
        case "filter":
          if (opts.filterFn) trie.filter(opts.filterFn)
          break
        case "map":
          if (opts.mapFn) trie.map(opts.mapFn)
          break
        case "sort":
          if (opts.sortFn) trie.sort(opts.sortFn)
          break
      }
    }

    // Get folder paths for state management
    const folderPaths = trie.getFolderPaths()
    currentExplorerState = folderPaths.map((path) => {
      const previousState = oldIndex.get(path)
      return {
        path,
        collapsed:
          previousState === undefined ? opts.folderDefaultState === "collapsed" : previousState,
      }
    })

    const explorerUl = explorer.querySelector(".explorer-ul")
    if (!explorerUl) continue

    // Create and insert new content
    const fragment = document.createDocumentFragment()
    for (const child of trie.children) {
      const node = child.isFolder
        ? createFolderNode(currentSlug, child, opts)
        : createFileNode(currentSlug, child)

      fragment.appendChild(node)
    }
    explorerUl.insertBefore(fragment, explorerUl.firstChild)

    if (isHomeSlug(currentSlug)) {
      closeAllFolders(explorerUl)
    } else {
      enforceCurrentFolderPath(explorerUl, currentSlug)
    }
    persistExplorerState()

    // restore explorer scrollTop position if it exists
    const scrollTop = sessionStorage.getItem("explorerScrollTop")
    if (scrollTop) {
      explorerUl.scrollTop = parseInt(scrollTop)
    } else {
      // try to scroll to the active element if it exists
      const activeElement = explorerUl.querySelector(".active")
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth" })
      }
    }

    // Set up event handlers
    const explorerButtons = explorer.getElementsByClassName(
      "explorer-toggle",
    ) as HTMLCollectionOf<HTMLElement>
    for (const button of explorerButtons) {
      button.addEventListener("click", toggleExplorer)
      window.addCleanup(() => button.removeEventListener("click", toggleExplorer))
    }

    // Set up folder click handlers
    if (opts.folderClickBehavior === "collapse") {
      const folderButtons = explorer.getElementsByClassName(
        "folder-button",
      ) as HTMLCollectionOf<HTMLElement>
      for (const button of folderButtons) {
        button.addEventListener("click", toggleFolder)
        window.addCleanup(() => button.removeEventListener("click", toggleFolder))
      }
    } else {
      const folderLinks = explorer.querySelectorAll(
        ".folder-container > div > a.folder-title",
      ) as NodeListOf<HTMLElement>
      for (const link of folderLinks) {
        link.addEventListener("click", openFolderOnly)
        window.addCleanup(() => link.removeEventListener("click", openFolderOnly))
      }
    }

    const folderIcons = explorer.getElementsByClassName(
      "folder-icon",
    ) as HTMLCollectionOf<HTMLElement>
    for (const icon of folderIcons) {
      icon.addEventListener("click", toggleFolder)
      window.addCleanup(() => icon.removeEventListener("click", toggleFolder))
    }
  }
}

document.addEventListener("prenav", async () => {
  // save explorer scrollTop position
  const explorer = document.querySelector(".explorer-ul")
  if (!explorer) return
  sessionStorage.setItem("explorerScrollTop", explorer.scrollTop.toString())
})

document.addEventListener("nav", async (e: CustomEventMap["nav"]) => {
  const currentSlug = e.detail.url
  await setupExplorer(currentSlug)

  for (const explorer of document.getElementsByClassName("explorer")) {
    const explorerElement = explorer as HTMLElement
    const mobileExplorer = explorerElement.querySelector(".mobile-explorer")
    if (!mobileExplorer) continue

    if (mobileExplorer.checkVisibility()) {
      explorerElement.classList.add("collapsed")
      explorerElement.setAttribute("aria-expanded", "false")

      // Allow <html> to be scrollable when mobile explorer is collapsed
      document.documentElement.classList.remove("mobile-no-scroll")
    } else {
      explorerElement.classList.remove("collapsed")
      explorerElement.setAttribute("aria-expanded", "true")
      document.documentElement.classList.remove("mobile-no-scroll")
    }

    mobileExplorer.classList.remove("hide-until-loaded")
  }
})

window.addEventListener("resize", function () {
  // Desktop explorer opens by default, and it stays open when the window is resized
  // to mobile screen size. Applies `no-scroll` to <html> in this edge case.
  for (const explorer of document.getElementsByClassName("explorer")) {
    const explorerElement = explorer as HTMLElement
    const mobileExplorer = explorerElement.querySelector(".mobile-explorer")
    if (!mobileExplorer) continue

    if (!mobileExplorer.checkVisibility()) {
      explorerElement.classList.remove("collapsed")
      explorerElement.setAttribute("aria-expanded", "true")
      document.documentElement.classList.remove("mobile-no-scroll")
    } else if (!explorerElement.classList.contains("collapsed")) {
      document.documentElement.classList.add("mobile-no-scroll")
    }
  }
})

function setFolderState(folderElement: HTMLElement, collapsed: boolean) {
  return collapsed ? folderElement.classList.remove("open") : folderElement.classList.add("open")
}
