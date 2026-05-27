import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import type { FileTrieNode } from "./quartz/util/fileTrie"

const explorerSortFn = (a: FileTrieNode, b: FileTrieNode) => {
  const rootOrder = ["journal", "wiki", "papers", "maps"]
  const aPath = a.slug.replace(/\/index$/, "")
  const bPath = b.slug.replace(/\/index$/, "")
  const aRootIndex = !aPath.includes("/") ? rootOrder.indexOf(aPath) : -1
  const bRootIndex = !bPath.includes("/") ? rootOrder.indexOf(bPath) : -1

  if (aRootIndex !== -1 || bRootIndex !== -1) {
    if (aRootIndex === -1) return 1
    if (bRootIndex === -1) return -1
    return aRootIndex - bRootIndex
  }

  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  }

  return !a.isFolder && b.isFolder ? 1 : -1
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "최근 기록",
        limit: 10,
        filter: (f) =>
          f.slug !== "index" && !f.slug?.endsWith("/index") && f.frontmatter?.draft !== true,
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) =>
        page.fileData.slug !== "index" && page.fileData.frontmatter?.listing !== true,
    }),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.DesktopOnly(Component.ReaderMode()) },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "link",
      folderDefaultState: "open",
      useSavedState: true,
      filterFn: () => true,
      sortFn: explorerSortFn,
    }),
  ],

  right: [Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.DesktopOnly(Component.ReaderMode()) },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "link",
      folderDefaultState: "open",
      useSavedState: true,
      filterFn: () => true,
      sortFn: explorerSortFn,
    }),
  ],

  right: [],
}
