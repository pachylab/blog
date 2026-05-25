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
}

const defaultOptions: TagContentOptions = {}

export default ((opts?: Partial<TagContentOptions>) => {
  const options: TagContentOptions = { ...defaultOptions, ...opts }

  const TagContent: QuartzComponent = (props: QuartzComponentProps) => {
    const { tree, fileData, allFiles, cfg } = props
    const slug = fileData.slug

    if (!(slug?.startsWith("tags/") || slug === "tags")) {
      throw new Error(`Component "TagContent" tried to render a non-tag page: ${slug}`)
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

      const midpoint = Math.ceil(tags.length / 2)
      const tagColumns = [tags.slice(0, midpoint), tags.slice(midpoint)].filter(
        (column) => column.length > 0,
      )
      const renderTagLink = (tag: string) => {
        const tagListingPage = `/tags/${tag}` as FullSlug
        const href = resolveRelative(fileData.slug!, tagListingPage)

        return (
          <li>
            <h2 class="tag-index-heading">
              <a class="internal" href={href}>
                <span aria-hidden="true">#</span>
                {tag}
              </a>
            </h2>
          </li>
        )
      }

      return (
        <div class="popover-hint">
          <article class={classes}>{content}</article>
          <div class="page-listing tag-index">
            <div class="tag-index-columns">
              {tagColumns.map((column) => (
                <ul class="tag-index-list">{column.map(renderTagLink)}</ul>
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

  TagContent.css = style
  return TagContent
}) satisfies QuartzComponentConstructor
