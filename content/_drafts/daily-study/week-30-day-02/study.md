---
title: "Week 30 Day 02: SQLite와 plist artifact"
draft: true
---

# Week 30 Day 02: SQLite와 plist artifact

## 오늘의 목표

오늘은 `SQLite와 plist artifact`을 넓게 훑는 날이 아니라, 작은 입력이나 예제 하나로 관찰하고 기록하는 날이다. 오늘 끝나면 `SQLite/plist 분석 질문표`에 들어갈 최소 근거가 남아 있어야 한다.

오늘 하지 않을 것: 클라우드 계정 실험을 새로 벌이지 말고 공개 예시나 무해한 로그 조각으로 분석한다.

1. 오늘 주제인 `SQLite와 plist artifact`가 무엇을 다루는지 한 문장으로 적는다.
2. 핵심 키워드 `SQLite`, `plist`, `mobile artifact`, `browser cache` 중 3개를 골라 "정의, 관찰 방법, 보안 분석에서의 쓰임" 형태로 정리한다.
3. Primary 자료는 1개만 고르고, 실제로 읽은 범위와 이해 안 된 문장 1개를 남긴다.
4. 실습을 실행한다. 도구가 없으면 설치부터 하지 말고, 필요한 입력/명령어/옵션/예상 출력을 먼저 설계한다.
5. 공부 후 결과물 worksheet `week-30-day-02/index.md`에 `SQLite/plist 분석 질문표` 초안을 채운다.
6. 성공 기준: artifact source, identity, timestamp, action, scope limitation을 표로 정리한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: DFIR/증거 분석

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | artifact 하나만 고르고 provenance, timestamp, timezone 중 빠뜨리면 안 되는 기준을 표시한다. |
| minimum | artifact 이름, 수집 위치, 시간 기준을 적는다. |
| standard | actor/action/source/time/confidence를 분리해 timeline row 1개를 만든다. |
| stretch | 같은 결론을 검증할 보조 artifact나 telemetry를 제안한다. |
| 중단 후 복귀 | 새 자료를 열지 말고 SQLite와 plist artifact에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최근 DFIR 연구는 memory, mobile, SCADA, AI-assisted analysis에서도 artifact provenance와 confidence를 중시한다. 오늘은 증거가 말하는 것과 내 추정을 섞지 않는다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 문서의 복습 질문 2개에 5-10분만 답한다. Week 01 Day 01처럼 이전 회차 문서가 없으면 오늘 제목과 핵심 키워드를 훑고 "이미 아는 것 3개 / 헷갈리는 것 3개"를 적는다. 공부 중 새로 모르는 용어는 Warm-up이 아니라 Review의 Unknown에 적는다.
- Core reading: 공부 자료 중 primary 1개만 고르고 실제 읽은 범위와 핵심 문장 3개, 이해 안 된 문장 1개를 기록한다.
- Lab: tool version, timezone, input path/hash, exact command, stdout/stderr, exit status를 남긴다.
- Writing: 증거 출처, timestamp, actor/action, confidence, timeline gap을 근거 중심으로 정리한다.
- Review: 오늘 공부 중 끝까지 모르는 용어와 검증하지 못한 추정을 Unknown에 모으고, 다음 확인 방법을 적는다.

## 공부 자료

아래는 오늘의 후보 자료이다. 전부 읽지 않는다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽고, Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- 사이버 사고 대응 실무: cloud/SaaS/container incident triage와 scoping 관련 절
- AWS CloudTrail docs: eventName, userIdentity, sourceIPAddress, userAgent field
- Microsoft Entra/GCP/Kubernetes docs: audit/sign-in log와 identity field 관련 부분

### Reference
- Android/iOS forensic artifact overview: app sandbox, SQLite, plist, backup artifact
- Docker/Kubernetes docs: container logs, namespace, RBAC, audit log
- SQLite/plist docs: mobile artifact parser 실습용

### 읽기 분량 기준
- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽을 목표로 한다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 실습 시간이 부족해지면 읽기를 멈추고, 읽은 범위와 모르는 문장을 worksheet에 남긴다.

## 자료 선택 규칙

오늘의 primary 추천: mobile/cloud/container 공식 문서에서 오늘 log source나 artifact field 하나만 고른다.
- 아래 공부 자료는 전부 읽으라는 목록이 아니다. 오늘은 primary 자료 1개만 선택한다.
- 책을 고르면 실제 목표 범위를 쪽수나 절 제목으로 적고, 30-45분이 지나면 멈춘다.
- Reference는 실습 중 막히거나 용어가 불명확할 때 5-10분만 확인한다.
- 남은 시간은 실습 로그와 결과물 worksheet 작성에 쓴다.
- 자료를 다 읽지 못해도 결과물 worksheet에 읽은 범위, 모르는 문장, 다음 확인 질문을 남기면 성공으로 본다.

## 핵심 키워드

SQLite, plist, mobile artifact, browser cache, app database, timestamp format, deleted row

## 반드시 정리할 개념

아래 표는 정답을 미리 외우기 위한 표가 아니다. 오늘 읽은 자료와 실습 출력으로 각 질문에 답하면서 결과물 worksheet에 내 말로 정리한다.

| 개념 | 오늘 확인할 질문 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| SQLite | `SQLite`가 mobile/cloud/container artifact에서 어떤 행위 단서를 제공하는가? | 공식 log field, sample event, SQLite/plist row, container log 중 하나를 확인한다. | incident scoping, identity correlation, cloud/mobile DFIR report에 필요하다. |
| plist | `plist`가 mobile/cloud/container artifact에서 어떤 행위 단서를 제공하는가? | 공식 log field, sample event, SQLite/plist row, container log 중 하나를 확인한다. | incident scoping, identity correlation, cloud/mobile DFIR report에 필요하다. |
| mobile artifact | `mobile artifact`가 mobile/cloud/container artifact에서 어떤 행위 단서를 제공하는가? | 공식 log field, sample event, SQLite/plist row, container log 중 하나를 확인한다. | incident scoping, identity correlation, cloud/mobile DFIR report에 필요하다. |
| browser cache | `browser cache`가 mobile/cloud/container artifact에서 어떤 행위 단서를 제공하는가? | 공식 log field, sample event, SQLite/plist row, container log 중 하나를 확인한다. | incident scoping, identity correlation, cloud/mobile DFIR report에 필요하다. |
| app database | `app database`가 mobile/cloud/container artifact에서 어떤 행위 단서를 제공하는가? | 공식 log field, sample event, SQLite/plist row, container log 중 하나를 확인한다. | incident scoping, identity correlation, cloud/mobile DFIR report에 필요하다. |
| timestamp format | `timestamp format`가 mobile/cloud/container artifact에서 어떤 행위 단서를 제공하는가? | 공식 log field, sample event, SQLite/plist row, container log 중 하나를 확인한다. | incident scoping, identity correlation, cloud/mobile DFIR report에 필요하다. |
| deleted row | `deleted row`가 mobile/cloud/container artifact에서 어떤 행위 단서를 제공하는가? | 공식 log field, sample event, SQLite/plist row, container log 중 하나를 확인한다. | incident scoping, identity correlation, cloud/mobile DFIR report에 필요하다. |

## 실습

오늘 실습은 크게 벌리지 않는다. 아래 항목 중 오늘 산출물에 필요한 최소 범위만 수행하고, 실패하면 실패 로그를 그대로 남긴다.

- sample log/event/artifact 하나를 골라 actor, action, target, timestamp, source를 표로 채운다.
- 권한/identity/tenant scope에서 확인할 수 없는 정보를 Unknown으로 남긴다.
- 공개 글에 공개하면 안 되는 account id, token, IP, user 정보 여부를 점검한다.

## 질문형 실습 프롬프트

아래 명령어는 모두 실행하라는 뜻이 아니다. 오늘 산출물에 필요한 것만 고르고, 환경에 없는 도구는 설치부터 하지 말고 어떤 역할의 도구가 필요한지만 적는다.

### 테스트 해 볼 명령어 후보

```bash
date
jq . <event.json> | head
sqlite3 <artifact.db> ".tables"
plutil -p <artifact.plist>
kubectl get events --all-namespaces
```

### 스스로 답할 질문

1. `SQLite와 plist artifact`을 확인하기 위한 가장 작은 입력 파일, 샘플, 코드, 로그, 보고서 조각은 무엇인가?
2. 그 대상을 처음 확인할 때 어떤 명령어, 도구, 문서 항목을 먼저 봐야 할까?
3. 출력에 상세 정보, 줄 번호, hex view, filter, field, version 정보를 추가하려면 어떤 옵션이나 기록 항목이 필요할까?
4. 이 log source가 actor/action/target/timestamp 중 무엇을 직접 보여주고 무엇은 보여주지 않는가?
5. 오늘 결과를 블로그 글로 바꿀 때 공개하면 안 되는 경로, 샘플, 토큰, exploit detail, 개인정보는 무엇인가?

## 오늘 남길 산출물

- 강의 산출물: `SQLite/plist 분석 질문표`을 작성한다. 형태는 artifact, timestamp, confidence가 있는 evidence note이다.
- 실습 증거: 오늘 사용한 명령, 로그, trace, screenshot, code diff 중 해당 주제에 맞는 근거를 최소 2개 남긴다.
- 글쓰기 산출물: 증거 출처, timestamp, actor/action, confidence, timeline gap을 근거 중심으로 정리한다.
- 공개 판단: 공개 가능한 주장과 비공개로 남겨야 할 세부사항을 각각 1개 이상 표시한다.

## 산출물 체크 표

| 체크 | 항목 | 기준 |
|---|---|---|
| [ ] | 증거 출처 | artifact 경로, 수집 방법, 무결성 단서를 기록했다. |
| [ ] | 시간 해석 | timezone, clock skew, 생성/수정/접근 의미를 구분했다. |
| [ ] | Timeline Row | actor/action/source/confidence가 있는 timeline row를 작성했다. |
| [ ] | Confidence | high/medium/low 판단과 이유를 적었다. |
| [ ] | Gap | 추가 수집이 필요한 telemetry gap을 명확히 남겼다. |

## 복습 질문

1. 오늘 주제 `SQLite와 plist artifact`를 한 문장으로 설명하면 무엇인가?
2. `SQLite`는 어떤 입력, 출력, field, instruction, artifact에서 확인했는가?
3. `plist`와 `mobile artifact`를 혼동하면 어떤 분석 오류가 생길 수 있는가?
4. cloud/mobile/container artifact에서 identity와 scope를 분리하지 않으면 어떤 오판이 생기는가?
5. 오늘 사용한 명령어, 옵션, 도구 version 중 재현성에 꼭 필요한 것은 무엇인가?
6. 오늘 결론에서 아직 Unknown으로 남겨야 하는 것은 무엇인가?
7. 오늘 산출물인 "SQLite/plist 분석 질문표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
