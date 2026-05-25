import { QuartzTransformerPlugin } from "../types"
import { slugTag } from "../../util/path"

type FolderDefaults = {
  draft?: boolean
  tags: string[]
}

const knownSecurityDomains = new Set([
  "pwn",
  "re",
  "malware",
  "dfir",
  "crypto",
  "system-hacking",
  "reversing",
  "reverse-engineering",
  "malware-analysis",
  "forensics",
  "digital-forensics",
  "cryptography",
])

const knownCsDomains = new Set([
  "arch",
  "os",
  "bin",
  "lang",
  "dsa",
  "math",
  "crypto",
  "net",
  "db",
  "computer-architecture",
  "operating-systems",
  "binary-formats",
  "compilers-and-languages",
  "data-structures-and-algorithms",
  "mathematics",
  "cryptography",
  "networking",
  "databases-and-storage",
])

const securityDomainAliases = new Map([
  ["df", "dfir"],
  ["system-hacking", "pwn"],
  ["reversing", "re"],
  ["reverse-engineering", "re"],
  ["malware-analysis", "malware"],
  ["forensics", "dfir"],
  ["digital-forensics", "dfir"],
  ["cryptography", "crypto"],
])

const csDomainAliases = new Map([
  ["computer-architecture", "arch"],
  ["operating-systems", "os"],
  ["binary-formats", "bin"],
  ["compilers-and-languages", "lang"],
  ["data-structures-and-algorithms", "dsa"],
  ["mathematics", "math"],
  ["cryptography", "crypto"],
  ["networking", "net"],
  ["databases-and-storage", "db"],
])

function fileStem(path: string) {
  const last = path.split("/").at(-1) ?? ""
  return last.replace(/\.md$/, "")
}

function trimContentPath(parts: string[], start: number) {
  const trimmed = parts.slice(start)
  const last = trimmed.at(-1)

  if (!last || last === "index") return []
  return trimmed.slice(0, -1).filter((part) => part && part !== "index")
}

function normalizeSecuritySegment(value: string) {
  return securityDomainAliases.get(value) ?? value
}

function normalizeCsSegment(value: string) {
  return csDomainAliases.get(value) ?? value
}

function scopedPathTag(scope: string, segments: string[]) {
  if (segments.length === 0) return scope

  const [first, ...rest] = segments
  const normalizedFirst =
    scope === "security"
      ? normalizeSecuritySegment(first)
      : scope === "cs"
        ? normalizeCsSegment(first)
        : first

  return [scope, normalizedFirst, ...rest].filter(Boolean).join("/")
}

function inferDraftDefaults(parts: string[]): FolderDefaults {
  const section = parts[1]
  const scope = parts[2]
  const areaPath = trimContentPath(parts, 3)

  if (section === "study-plan") {
    return {
      draft: true,
      tags: [],
    }
  }

  if (section === "study-elements") {
    const tags: string[] = []

    if (scope === "cs" && areaPath.length > 0) tags.push(scopedPathTag("cs", areaPath))
    if (scope === "security" && areaPath.length > 0) tags.push(scopedPathTag("security", areaPath))
    if (scope === "platforms" && areaPath.length > 0) tags.push(scopedPathTag("platform", areaPath))
    if (scope === "tools" && areaPath.length > 0) tags.push("tool")

    return {
      draft: true,
      tags,
    }
  }

  if (section === "templates") {
    return {
      draft: true,
      tags: [],
    }
  }

  return {
    draft: true,
    tags: [],
  }
}

function inferPublicDefaults(parts: string[], relativePath: string): FolderDefaults {
  const root = parts[0]
  const stem = fileStem(relativePath)
  const rootPath = trimContentPath(parts, 1)

  switch (root) {
    case "articles":
      return {
        tags: [],
      }
    case "labs":
      return {
        draft: true,
        tags: rootPath.length > 0 ? [scopedPathTag("security", rootPath)] : [],
      }
    case "papers":
      return {
        tags: rootPath.length > 0 ? [scopedPathTag("papers", rootPath)] : [],
      }
    case "journal":
      return {
        tags: rootPath.length > 0 ? [scopedPathTag("journal", rootPath)] : [],
      }
    case "projects":
      return {
        draft: true,
        tags: [],
      }
    case "maps":
      return {
        tags: [domainTag(stem)],
      }
    case "tools":
      return {
        tags: ["tool"],
      }
    case "wiki":
      return inferWikiDefaults(parts)
    default:
      return {
        tags: [],
      }
  }
}

function domainTag(value?: string) {
  if (!value || value === "index") return ""
  const securityAlias = securityDomainAliases.get(value)
  if (securityAlias) return `security/${securityAlias}`
  const csAlias = csDomainAliases.get(value)
  if (csAlias) return `cs/${csAlias}`
  if (knownSecurityDomains.has(value)) return `security/${value}`
  if (knownCsDomains.has(value)) return `cs/${value}`
  return value
}

function inferWikiDefaults(parts: string[]): FolderDefaults {
  const scope = parts[1]
  const scopePath = trimContentPath(parts, 2)

  if (scope === "cs") {
    return {
      tags: [scopedPathTag("cs", scopePath)],
    }
  }

  if (scope === "security") {
    return {
      tags: [scopedPathTag("security", scopePath)],
    }
  }

  if (scope === "tools") {
    return {
      tags: ["tool"],
    }
  }

  if (scope === "platforms") {
    return {
      tags: [scopedPathTag("platform", scopePath)],
    }
  }

  return {
    tags: [],
  }
}

function mergeTags(existing: unknown, defaults: string[]) {
  const current = Array.isArray(existing)
    ? existing.filter((tag): tag is string | number => ["string", "number"].includes(typeof tag))
    : []

  return [
    ...new Set(
      [...current.map((tag) => tag.toString()), ...defaults.filter(Boolean)].map((tag) =>
        slugTag(tag),
      ),
    ),
  ]
}

export const FolderMetadata: QuartzTransformerPlugin = () => ({
  name: "FolderMetadata",
  markdownPlugins() {
    return [
      () => {
        return (_, file) => {
          const relativePath = file.data.relativePath?.toString()
          if (!relativePath || !file.data.frontmatter) return

          const parts = relativePath.replace(/\.md$/, "").split("/")
          const defaults =
            parts[0] === "_drafts"
              ? inferDraftDefaults(parts)
              : inferPublicDefaults(parts, relativePath)

          const frontmatter = file.data.frontmatter as Record<string, unknown>
          const isFolderIndex = parts.at(-1) === "index"
          const isListingPage = frontmatter.listing === true || frontmatter.listEntry === true

          if (frontmatter.draft == null && defaults.draft != null)
            frontmatter.draft = defaults.draft
          frontmatter.tags =
            isFolderIndex || isListingPage ? [] : mergeTags(frontmatter.tags, defaults.tags)
        }
      },
    ]
  },
})
