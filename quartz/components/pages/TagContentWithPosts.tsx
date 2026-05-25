import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "../styles/listPage.scss"
import { byDateAndAlphabeticalFolderFirst, SortFn } from "../PageList"
import { FullSlug, getAllSegmentPrefixes, resolveRelative, simplifySlug } from "../../util/path"
import { QuartzPluginData } from "../../plugins/vfile"
import { Root } from "hast"
import { htmlToJsx } from "../../util/jsx"
import { ComponentChildren } from "preact"

interface TagContentOptions {
  sort?: SortFn
  numPages: number
}

const defaultOptions: TagContentOptions = {
  numPages: 10,
}

export default ((opts?: Partial<TagContentOptions>) => {
  const options: TagContentOptions = { ...defaultOptions, ...opts }

  const TagContentWithPosts: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles, cfg } = props
    const slug = fileData.slug

    if (!(slug?.startsWith("tags/") || slug === "tags")) {
      throw new Error(`Component "TagContentWithPosts" tried to render a non-tag page: ${slug}`)
    }

    const tag = slug === "tags" ? "/" : simplifySlug(slug.slice("tags/".length) as FullSlug)
    const allPagesWithTag = (tag: string) =>
      allFiles.filter((file) =>
        (file.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes).includes(tag),
      )

    const content = (
      (tree as Root).children.length === 0
        ? fileData.description
        : htmlToJsx(fileData.filePath!, tree)
    ) as ComponentChildren
    const cssClasses: string[] = fileData.frontmatter?.cssclasses ?? []
    const classes = cssClasses.join(" ")

    const sortPages = (pages: QuartzPluginData[]) => {
      const sorter = options.sort ?? byDateAndAlphabeticalFolderFirst(cfg)
      return [...pages].sort(sorter)
    }

    const renderPageList = (pages: QuartzPluginData[], limit?: number) => {
      const visiblePages = limit ? sortPages(pages).slice(0, limit) : sortPages(pages)

      return (
        <ul class="tag-page-list">
          {visiblePages.map((page) => {
            const title = page.frontmatter?.title

            return (
              <li>
                <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
      )
    }

    if (tag === "/") {
      const tags = [
        ...new Set(
          allFiles.flatMap((data) => data.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes),
        ),
      ].sort((a, b) => a.localeCompare(b))
      const tagItemMap: Map<string, QuartzPluginData[]> = new Map()
      for (const tag of tags) {
        tagItemMap.set(tag, allPagesWithTag(tag))
      }

      const midpoint = Math.ceil(tags.length / 2)
      const tagColumns = [tags.slice(0, midpoint), tags.slice(midpoint)].filter(
        (column) => column.length > 0,
      )
      const renderTagGroup = (tag: string) => {
        const pages = tagItemMap.get(tag)!
        const contentPage = allFiles.filter((file) => file.slug === `tags/${tag}`).at(0)

        const root = contentPage?.htmlAst
        const content =
          !root || root?.children.length === 0
            ? contentPage?.description
            : htmlToJsx(contentPage.filePath!, root)

        const tagListingPage = `/tags/${tag}` as FullSlug
        const href = resolveRelative(fileData.slug!, tagListingPage)

        return (
          <section class="tag-group">
            <h2 class="tag-group-heading">
              <a class="internal" href={href}>
                <span aria-hidden="true">#</span>
                {tag}
              </a>
            </h2>
            {content && <div class="tag-group-description">{content}</div>}
            {renderPageList(pages)}
          </section>
        )
      }

      return (
        <div class="popover-hint">
          <article class={classes}>{content}</article>
          <div class="page-listing">
            <div class="tag-groups">
              {tagColumns.map((column) => (
                <div class="tag-column">{column.map(renderTagGroup)}</div>
              ))}
            </div>
          </div>
        </div>
      )
    } else {
      const pages = allPagesWithTag(tag)

      return (
        <div class="popover-hint">
          <article class={classes}>{content}</article>
          <div class="page-listing">{renderPageList(pages)}</div>
        </div>
      )
    }
  }

  TagContentWithPosts.css = style
  return TagContentWithPosts
}) satisfies QuartzComponentConstructor
