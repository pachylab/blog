import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

import style from "../styles/listPage.scss"
import { SortFn } from "../PageList"
import { QuartzPluginData } from "../../plugins/vfile"
import { BuildTimeTrieData, trieFromAllFiles } from "../../util/ctx"
import { FileTrieNode } from "../../util/fileTrie"
import { FullSlug, resolveRelative } from "../../util/path"
import { Date, getDate } from "../Date"

interface FolderContentOptions {
  showSubfolders: boolean
  sort?: SortFn
}

const defaultOptions: FolderContentOptions = {
  showSubfolders: true,
}

export default ((opts?: Partial<FolderContentOptions>) => {
  const options: FolderContentOptions = { ...defaultOptions, ...opts }

  const FolderContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { fileData, allFiles, cfg } = props

    const trie = (props.ctx.trie ??= trieFromAllFiles(allFiles))
    const folder = trie.findNode(fileData.slug!.split("/"))
    if (!folder) {
      return null
    }

    const nodeData = (node: FileTrieNode<BuildTimeTrieData>): QuartzPluginData => {
      return (
        node.data ?? {
          slug: node.slug,
          frontmatter: {
            title: node.displayName,
            tags: [],
          },
        }
      )
    }

    const sortNodes = (
      nodes: Array<FileTrieNode<BuildTimeTrieData>>,
    ): Array<FileTrieNode<BuildTimeTrieData>> => {
      return [...nodes].sort((a, b) => {
        if (a.isFolder && !b.isFolder) return -1
        if (!a.isFolder && b.isFolder) return 1

        if (options.sort) {
          return options.sort(nodeData(a), nodeData(b))
        }

        return a.displayName.localeCompare(b.displayName, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      })
    }

    const visibleChildren = (node: FileTrieNode<BuildTimeTrieData>) =>
      sortNodes(
        node.children.filter((child) => child.data || (options.showSubfolders && child.isFolder)),
      )

    const directChildren = visibleChildren(folder)

    const folderDescription = (node: FileTrieNode<BuildTimeTrieData>) =>
      node.data?.frontmatter?.description ?? node.data?.description

    const renderNode = (node: FileTrieNode<BuildTimeTrieData>) => {
      const isFolder = node.isFolder
      const title = node.displayName
      const description = isFolder ? folderDescription(node) : undefined
      const page = node.data
      const showDate = !isFolder && page?.dates

      return (
        <li class={isFolder ? "folder-tree-item folder-entry" : "folder-tree-item note-entry"}>
          <div class="folder-tree-row">
            <div class="folder-tree-title">
              {showDate && <Date date={getDate(cfg, page)!} locale={cfg.locale} />}
              <a href={resolveRelative(fileData.slug!, node.slug as FullSlug)} class="internal">
                {title}
              </a>
            </div>
            {description && <p class="folder-tree-description">{description}</p>}
          </div>
        </li>
      )
    }

    return (
      <div class="popover-hint">
        <div class="page-listing">
          <ul class="folder-tree">{directChildren.map(renderNode)}</ul>
        </div>
      </div>
    )
  }

  FolderContent.css = style
  return FolderContent
}) satisfies QuartzComponentConstructor
