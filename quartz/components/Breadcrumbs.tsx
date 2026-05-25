import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import breadcrumbsStyle from "./styles/breadcrumbs.scss"
import { FullSlug, SimpleSlug, resolveRelative, simplifySlug } from "../util/path"
import { classNames } from "../util/lang"
import { trieFromAllFiles } from "../util/ctx"

type CrumbData = {
  displayName: string
  path: string
}

interface BreadcrumbOptions {
  /**
   * Symbol between crumbs
   */
  spacerSymbol: string
  /**
   * Name of first crumb
   */
  rootName: string
  /**
   * Whether to look up frontmatter title for folders (could cause performance problems with big vaults)
   */
  resolveFrontmatterTitle: boolean
  /**
   * Whether to display the current page in the breadcrumbs.
   */
  showCurrentPage: boolean
}

const defaultOptions: BreadcrumbOptions = {
  spacerSymbol: "❯",
  rootName: "Home",
  resolveFrontmatterTitle: true,
  showCurrentPage: true,
}

function formatCrumb(
  displayName: string,
  baseSlug: FullSlug,
  currentSlug: SimpleSlug,
  preserveHyphen: boolean,
): CrumbData {
  return {
    displayName: preserveHyphen ? displayName : displayName.replaceAll("-", " "),
    path: resolveRelative(baseSlug, currentSlug),
  }
}

export default ((opts?: Partial<BreadcrumbOptions>) => {
  const options: BreadcrumbOptions = { ...defaultOptions, ...opts }
  const Breadcrumbs: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps) => {
    const slug = fileData.slug!

    if (slug.startsWith("tags/") && slug !== "tags/index") {
      const crumbs: CrumbData[] = [
        {
          displayName: options.rootName,
          path: resolveRelative(slug, "index" as SimpleSlug),
        },
        {
          displayName: "Tags",
          path: resolveRelative(slug, "tags" as SimpleSlug),
        },
        {
          displayName: fileData.frontmatter?.title ?? slug.replace(/^tags\//, "태그: "),
          path: "",
        },
      ]

      return (
        <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
          {crumbs.map((crumb, index) => {
            const isCurrentPage = index === crumbs.length - 1
            const classes = ["breadcrumb-element"]

            if (isCurrentPage) {
              classes.push("breadcrumb-note")
            }

            return (
              <div class={classes.join(" ")}>
                <a href={crumb.path}>{crumb.displayName}</a>
                {!isCurrentPage && <p>{` ${options.spacerSymbol} `}</p>}
              </div>
            )
          })}
        </nav>
      )
    }

    const trie = trieFromAllFiles(allFiles)
    const slugParts = slug.split("/")
    const pathNodes = trie.ancestryChain(slugParts)

    if (!pathNodes) {
      return null
    }

    const crumbs: CrumbData[] = pathNodes.map((node, idx) => {
      const hasFrontmatterTitle =
        options.resolveFrontmatterTitle && Boolean(node.data?.title && node.data.title !== "index")
      const displayName = hasFrontmatterTitle ? node.data!.title : node.displayName
      const crumb = formatCrumb(displayName, slug, simplifySlug(node.slug), hasFrontmatterTitle)
      if (idx === 0) {
        crumb.displayName = options.rootName
      }

      // For last node (current page), set empty path
      if (idx === pathNodes.length - 1) {
        crumb.path = ""
      }

      return crumb
    })

    if (!options.showCurrentPage) {
      crumbs.pop()
    }

    const isCurrentPageNote =
      Boolean(fileData.filePath) &&
      slug !== "index" &&
      !slug.endsWith("/index") &&
      !slug.startsWith("tags/")

    return (
      <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
        {crumbs.map((crumb, index) => {
          const isCurrentPage = index === crumbs.length - 1
          const classes = ["breadcrumb-element"]

          if (isCurrentPage && isCurrentPageNote) {
            classes.push("breadcrumb-note")
          }

          return (
            <div class={classes.join(" ")}>
              <a href={crumb.path}>{crumb.displayName}</a>
              {!isCurrentPage && <p>{` ${options.spacerSymbol} `}</p>}
            </div>
          )
        })}
      </nav>
    )
  }
  Breadcrumbs.css = breadcrumbsStyle

  return Breadcrumbs
}) satisfies QuartzComponentConstructor
