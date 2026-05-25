---
title: "Meta"
description: "블로그 운영 규칙, 템플릿, 태그 정책을 정리합니다."
draft: true
---

이 문서는 블로그에 새 글을 만들 때 지킬 작성 규칙입니다. `content/meta/`는 Quartz 설정상 공개 사이트에 보이지 않는 운영 문서 공간입니다.

## 기본 작성 흐름

새 글은 먼저 성격에 맞는 폴더에 둡니다.

- 완성형 해설 글: `content/articles/`
- 재사용 가능한 개념: `content/wiki/`
- 논문 리뷰: `content/papers/YYYY/`
- 공부 일기: `content/journal/YYYY/`
- 실습, 재현, write-up: `content/labs/`
- 장기 프로젝트: `content/projects/`
- 주제별 입구 페이지: `content/maps/`
- 공개 전 초안: `content/_drafts/`

가장 단순한 작성 방식은 frontmatter 없이 첫 줄에 H1만 쓰는 것입니다.

```markdown
# IAT

Import Address Table에 대한 메모를 작성합니다.
```

Quartz의 `FrontMatter` transformer가 첫 H1을 `title`로 사용하고, 본문에서는 해당 H1을 제거합니다. 파일 경로는 slug가 됩니다. 예를 들어 파일명이 `content/journal/2026/2026-05-25-code-test.md`이면 제목이 `2026-05-25 코드 테스트`여도 slug는 `journal/2026/2026-05-25-code-test`입니다.

## 파일명과 Slug

파일명은 가능한 짧은 영어 kebab-case로 둡니다.

- 좋은 예: `iat.md`, `pe.md`, `dyn-link.md`, `2026-05-25-code-test.md`
- 피할 예: `Import Address Table.md`, `2026년 5월 25일 코드 테스트.md`

화면에 보이는 제목은 H1 또는 `title` metadata로 정하고, URL은 파일명으로 안정적으로 관리합니다. 특별한 이유가 없으면 `permalink`는 쓰지 않습니다.

## Metadata

직접 적는 metadata는 최소로 유지합니다.

자주 쓰는 값은 다음 정도입니다.

```yaml
---
description: "짧은 설명"
date: "2026-05-25"
draft: true
listing: true
aliases:
  - Import Address Table
tags:
  - security/re
  - cs/bin
---
```

각 값의 용도는 다음과 같습니다.

- `title`: 보통 쓰지 않습니다. 첫 H1에서 자동으로 가져옵니다. H1과 다른 제목을 강제로 쓰고 싶을 때만 사용합니다.
- `description`: 폴더 index, map, portfolio, about, 긴 글의 검색 설명에 사용합니다.
- `date`: 공부 일기, 논문 리뷰, 날짜가 중요한 글에 사용합니다. 형식은 `YYYY-MM-DD`로 통일합니다.
- `draft: true`: 공개하지 않을 글에 사용합니다. `labs/`, `projects/`, `papers/queue.md`, `content/_drafts/`, `content/meta/`는 기본적으로 숨기는 쪽을 우선합니다.
- `listing: true`: 글처럼 작성하지만 목록에서는 폴더처럼 보이게 할 때 사용합니다. `about.md`, `portfolio.md`, `maps/*.md`, `papers/queue.md` 같은 문서에 적합합니다.
- `aliases`: 약어, 한글/영문 혼용, 다른 표기가 많은 개념에 사용합니다.
- `tags`: 자동 태그만으로 부족할 때만 직접 추가합니다.

사용하지 않는 값은 다음입니다.

- `id`
- `type`
- `status`
- `area`
- `subarea`
- `category`
- `tools`

이 값들은 현재 구조에서 중복 분류를 만들기 쉬우므로 쓰지 않습니다.

## Tags

태그는 폴더를 보완하는 다중 분류 용도입니다. 폴더 index와 `listing: true` 페이지에는 태그를 붙이지 않습니다.

자동으로 붙는 태그는 다음 기준을 따릅니다.

- `content/wiki/cs/bin/iat.md` → `cs/bin`
- `content/wiki/cs/os/mem/vm.md` → `cs/os/mem`
- `content/wiki/security/pwn/rop.md` → `security/pwn`
- `content/wiki/security/dfir/mem.md` → `security/dfir`
- `content/wiki/platforms/windows/...` → `platform/windows`
- `content/wiki/tools/gdb.md` → `tool`
- `content/journal/2026/2026-05-25.md` → `journal/2026`
- `content/papers/2026/...` → `papers/2026`

직접 태그를 추가할 때는 아래 형식을 사용합니다.

```yaml
tags:
  - security/re
  - security/malware
  - cs/bin
  - platform/windows
  - tool
```

태그에는 `domain/`, `type/`, `status/`, `tool/gdb` 같은 prefix를 쓰지 않습니다. 도구 관련 글은 `tool` 하나만 사용하고, 어떤 도구인지는 파일 위치와 제목으로 구분합니다.

## 폴더 Index

폴더의 `index.md`에는 태그를 넣지 않습니다. 폴더 index는 설명과 하위 문서 안내만 담당합니다.

```markdown
---
title: "Computer Science"
description: "보안 지식을 이해하기 위한 기반 컴퓨터 과학 개념입니다."
---

짧은 설명과 주요 링크를 둡니다.
```

## Study Log

공부 일기는 날짜 중심으로만 관리합니다.

권장 경로는 다음입니다.

```text
content/journal/2026/2026-05-25.md
```

권장 metadata는 날짜만 둡니다.

```yaml
---
date: "2026-05-25"
---
```

제목은 첫 H1에서 가져오게 둡니다.

```markdown
# 2026-05-25 Study Log

## 오늘 공부한 것

## 작성/수정한 노트

## 실습

## 막힌 점

## 다음 할 일
```

템플릿은 [[_drafts/templates/study-log|Study Log Template]]을 사용합니다.

## Paper Review

논문 리뷰는 날짜와 논문 정보를 남깁니다.

```yaml
---
date: "2026-05-25"
paper_title: "Original Paper Title"
authors:
  - Author A
venue: "USENIX Security"
year: 2024
url: ""
tags:
  - security/malware
  - cs/bin
---
```

논문 리뷰에는 반드시 다음 섹션을 둡니다.

- 3줄 요약
- 문제
- 핵심 아이디어
- 방법론
- 한계
- 내가 얻은 것
- 구현하거나 재현해볼 것
- 연결된 노트

## 보안 글 작성 주의

공개 블로그에는 실제 악성코드 샘플, 실제 서비스 대상 공격 절차, 민감한 포렌식 데이터, 그대로 실행 가능한 위험 exploit 코드를 올리지 않습니다.

공개 글은 해시, 요약, toy sample, 재현 가능한 안전한 실습 중심으로 작성합니다. 위험도가 있는 코드는 `draft: true`로 두거나 비공개 저장소에서 관리합니다.
