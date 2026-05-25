import { QuartzFilterPlugin } from "../types"
import { ProcessedContent } from "../vfile"

function isDraft([_tree, vfile]: ProcessedContent): boolean {
  const draftFlag = vfile.data?.frontmatter?.draft
  return draftFlag === true || draftFlag === "true"
}

function folderPrefixFromIndexSlug(slug: string | undefined): string | undefined {
  if (!slug || slug === "index" || !slug.endsWith("/index")) {
    return undefined
  }

  return slug.slice(0, -"/index".length)
}

function isUnderHiddenFolder(slug: string | undefined, hiddenFolderPrefixes: string[]): boolean {
  if (!slug) {
    return false
  }

  return hiddenFolderPrefixes.some(
    (folderPrefix) => slug === `${folderPrefix}/index` || slug.startsWith(`${folderPrefix}/`),
  )
}

export const RemoveDrafts: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveDrafts",
  shouldPublish(_ctx, content) {
    return !isDraft(content)
  },
  filterContent(_ctx, content) {
    const hiddenFolderPrefixes = content
      .filter(isDraft)
      .map(([_tree, vfile]) => folderPrefixFromIndexSlug(vfile.data.slug))
      .filter((prefix): prefix is string => Boolean(prefix))

    return content.filter(
      (item) => !isDraft(item) && !isUnderHiddenFolder(item[1].data.slug, hiddenFolderPrefixes),
    )
  },
})
