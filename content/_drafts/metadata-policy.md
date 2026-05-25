---
title: "메타데이터 정책"
draft: true
---

Quartz 빌드에서는 `FolderMetadata` transformer가 경로를 보고 기본 `draft`, `tags`를 채웁니다.

직접 노트를 만들 때는 frontmatter 없이 첫 줄에 H1만 적어도 됩니다.

```markdown
# DNS

DNS 메모를 여기에 작성합니다.
```

빌드 시 `FrontMatter` transformer가 첫 H1을 `title`로 사용하고, 본문에서는 같은 H1을 제거합니다. 나머지 기본 메타데이터는 파일 경로 기준으로 채워집니다.

직접 작성하는 frontmatter는 필요한 값만 둡니다. 기본값은 `title`, `description`, `date`, `draft: true`, `listing`, 의미 있는 `aliases` 정도이며, `tags`는 경로 기반 기본값으로 부족할 때만 직접 추가합니다.

## 공개 위치 기준

- 완성형 글: `content/articles/`
- 재사용 개념: `content/wiki/`
- 실습과 write-up: `content/labs/`
- 논문 리뷰: `content/papers/`
- 공부 기록: `content/journal/`
- 주제별 입구: `content/maps/`
- 공개 전 초안: `content/_drafts/`
