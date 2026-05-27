---
title: "Week 40 Day 02: best artifacts 선정과 정리"
draft: true
---

# Week 40 Day 02: best artifacts 선정과 정리

## 오늘의 목표

오늘은 `best artifacts 선정과 정리`을 넓게 훑는 날이 아니라, 작은 입력이나 예제 하나로 관찰하고 기록하는 날이다. 오늘 끝나면 `공개 후보 산출물 10개 목록`에 들어갈 최소 근거가 남아 있어야 한다.

오늘 하지 않을 것: 실제 신고나 공개를 완료 조건으로 삼지 않고, 학습용 advisory-grade 기록을 만든다.

1. 오늘 주제인 `best artifacts 선정과 정리`가 무엇을 다루는지 한 문장으로 적는다.
2. 핵심 키워드 `portfolio`, `artifact selection`, `report`, `writeup` 중 3개를 골라 "정의, 관찰 방법, 보안 분석에서의 쓰임" 형태로 정리한다.
3. Primary 자료는 1개만 고르고, 실제로 읽은 범위와 이해 안 된 문장 1개를 남긴다.
4. 실습을 실행한다. 도구가 없으면 설치부터 하지 말고, 필요한 입력/명령어/옵션/예상 출력을 먼저 설계한다.
5. 공부 후 결과물 worksheet `week-40-day-02/index.md`에 `공개 후보 산출물 10개 목록` 초안을 채운다.
6. 성공 기준: claim, evidence, limitation, redaction boundary가 들어간 보고서/체크리스트 초안을 만든다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 복습/포트폴리오

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | 새 자료를 열기 전에 이번 주 산출물 제목만 훑고 가장 중요한 것 1개를 고른다. |
| minimum | 키워드 3개, 남길 산출물 1개, 버릴 backlog 1개를 적는다. |
| standard | best artifact에서 fact/inference/unknown/next check 분리를 고친다. |
| stretch | public/private/redaction 기준과 다음 주 질문 2개를 정한다. |
| 중단 후 복귀 | 새 자료를 열지 말고 best artifacts 선정과 정리에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최신 연구를 따라가려면 읽은 양보다 누적된 질문과 재현 가능한 산출물이 중요하다. 복습일은 pruning, consolidation, next hypothesis를 만드는 날이다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 문서의 복습 질문 2개에 5-10분만 답한다. Week 01 Day 01처럼 이전 회차 문서가 없으면 오늘 제목과 핵심 키워드를 훑고 "이미 아는 것 3개 / 헷갈리는 것 3개"를 적는다. 공부 중 새로 모르는 용어는 Warm-up이 아니라 Review의 Unknown에 적는다.
- Core reading: 공부 자료 중 primary 1개만 고르고 실제 읽은 범위와 핵심 문장 3개, 이해 안 된 문장 1개를 기록한다.
- Lab: tool version, timezone, input path/hash, exact command, stdout/stderr, exit status를 남긴다.
- Writing: 공개 가능한 주장과 재현 가능한 근거를 분리해 최종 포트폴리오 수준의 초안을 작성한다.
- Review: 오늘 공부 중 끝까지 모르는 용어와 검증하지 못한 추정을 Unknown에 모으고, 다음 확인 방법을 적는다.

## 공부 자료

아래는 오늘의 후보 자료이다. 전부 읽지 않는다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽고, Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- 선택한 논문, CVE advisory, vendor patch note: threat model, root cause, affected version, patch diff 중심으로 읽기
- FIRST CVSS v4.0 specification/calculator: metric 하나씩 근거와 함께 산정
- MITRE CVE Program/CNA rules 또는 KISA/KVE 안내: report field와 disclosure boundary 확인

### Reference
- NVD/CWE/CAPEC: 취약점 분류, weakness pattern, affected product/version 확인
- 실전 버그바운티: reproducible report, impact, responsible disclosure 관련 절
- 좋은 public advisory 예시 1개: summary, impact, remediation, timeline 구조 비교

### 읽기 분량 기준
- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽을 목표로 한다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 실습 시간이 부족해지면 읽기를 멈추고, 읽은 범위와 모르는 문장을 worksheet에 남긴다.

## 자료 선택 규칙

오늘의 primary 추천: 공식 기준, vendor advisory, CVSS calculator, 보고서 템플릿 중 오늘 작성할 항목 하나만 고른다.
- 아래 공부 자료는 전부 읽으라는 목록이 아니다. 오늘은 primary 자료 1개만 선택한다.
- 책을 고르면 실제 목표 범위를 쪽수나 절 제목으로 적고, 30-45분이 지나면 멈춘다.
- Reference는 실습 중 막히거나 용어가 불명확할 때 5-10분만 확인한다.
- 남은 시간은 실습 로그와 결과물 worksheet 작성에 쓴다.
- 자료를 다 읽지 못해도 결과물 worksheet에 읽은 범위, 모르는 문장, 다음 확인 질문을 남기면 성공으로 본다.

## 핵심 키워드

portfolio, artifact selection, report, writeup, tool note, code quality, reproducibility

## 반드시 정리할 개념

아래 표는 정답을 미리 외우기 위한 표가 아니다. 오늘 읽은 자료와 실습 출력으로 각 질문에 답하면서 결과물 worksheet에 내 말로 정리한다.

| 개념 | 오늘 확인할 질문 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| portfolio | 어떤 산출물이 내 역량을 가장 정확하게 보여 주는가? | pwn, RE/malware, DFIR, tooling, report 산출물을 후보로 모은다. | 단순 학습 기록을 포트폴리오 evidence로 바꾼다. |
| artifact selection | 공개 후보로 고를 기준은 무엇인가? | 재현성, 독창성, 근거 품질, 공개 가능성, 설명력을 점수화한다. | 보여 줄 산출물과 private lab note를 구분한다. |
| report | technical depth와 reader context가 충분한가? | scope, facts, inference, limitation, remediation 필드를 확인한다. | CVE/advisory/DFIR/malware report 품질을 판단한다. |
| writeup | 독자가 따라갈 수 있는 흐름이 있는가? | problem, setup, observation, root cause, result, limitation 순서를 확인한다. | pwn/RE writeup을 설명 가능한 산출물로 만든다. |
| tool note | 도구 사용법과 해석 기준이 재사용 가능한가? | input, output, command, option, version, failure mode를 확인한다. | 분석 자동화와 재현 가능한 workflow를 증명한다. |
| code quality | 스크립트나 PoC가 안전하고 읽을 수 있는가? | README, test input, error handling, hardcoded secret 여부를 확인한다. | 공개 가능한 tooling artifact의 품질을 보장한다. |
| reproducibility | 다른 환경에서 같은 관찰을 재현할 수 있는가? | version pinning, hash, command, expected/observed result를 확인한다. | CVE/N-day 재현과 보고서 신뢰도를 만든다. |

## 실습

오늘 실습은 크게 벌리지 않는다. 아래 항목 중 오늘 산출물에 필요한 최소 범위만 수행하고, 실패하면 실패 로그를 그대로 남긴다.

- Week 01-40 산출물 중 공개 후보 10개를 고른다.
- 각 후보에 domain, proof, reproducibility, public risk, polish cost를 점수화한다.
- 최종 공개 후보, private 유지 후보, 폐기/backlog 후보를 나눈다.

## 질문형 실습 프롬프트

아래 명령어는 모두 실행하라는 뜻이 아니다. 오늘 산출물에 필요한 것만 고르고, 환경에 없는 도구는 설치부터 하지 말고 어떤 역할의 도구가 필요한지만 적는다.

### 테스트 해 볼 명령어 후보

```bash
date
git status --short
find content/_drafts/daily-study -name "index.md" | wc -l
rg -n "산출물 주제|대표 분석 보고서|primitive|timeline|YARA|CVE" content/_drafts/daily-study -g "index.md"
git status --short
```

### 스스로 답할 질문

1. `best artifacts 선정과 정리`을 확인하기 위한 가장 작은 입력 파일, 샘플, 코드, 로그, 보고서 조각은 무엇인가?
2. 그 대상을 처음 확인할 때 어떤 명령어, 도구, 문서 항목을 먼저 봐야 할까?
3. 출력에 상세 정보, 줄 번호, hex view, filter, field, version 정보를 추가하려면 어떤 옵션이나 기록 항목이 필요할까?
4. 공개 가능한 주장과 비공개로 남겨야 하는 evidence는 어떻게 나눌 것인가?
5. 오늘 결과를 블로그 글로 바꿀 때 공개하면 안 되는 경로, 샘플, 토큰, exploit detail, 개인정보는 무엇인가?

## 오늘 남길 산출물

- 강의 산출물: `공개 후보 산출물 10개 목록`을 작성한다. 형태는 public claim, evidence, private boundary가 분리된 capstone artifact이다.
- 실습 증거: 오늘 사용한 명령, 로그, trace, screenshot, code diff 중 해당 주제에 맞는 근거를 최소 2개 남긴다.
- 글쓰기 산출물: 공개 가능한 주장과 재현 가능한 근거를 분리해 최종 포트폴리오 수준의 초안을 작성한다.
- 공개 판단: 공개 가능한 주장과 비공개로 남겨야 할 세부사항을 각각 1개 이상 표시한다.

## 산출물 체크 표

| 체크 | 항목 | 기준 |
|---|---|---|
| [ ] | 공개 주장 | 외부 공개 가능한 claim을 한 문장으로 고정했다. |
| [ ] | 재현 근거 | log/diff/trace/report excerpt 중 검증 가능한 근거를 연결했다. |
| [ ] | 비공개 경계 | 민감한 exploit detail, IOC, 대상 정보, 개인 정보를 분리했다. |
| [ ] | 연구 가치 | 이 산출물이 증명하는 연구 역량을 명확히 적었다. |
| [ ] | 검토 질문 | 면접관/리뷰어/수강생이 물을 검증 질문을 하나 남겼다. |

## 복습 질문

1. 오늘 주제 `best artifacts 선정과 정리`를 한 문장으로 설명하면 무엇인가?
2. `portfolio`는 어떤 입력, 출력, field, instruction, artifact에서 확인했는가?
3. `artifact selection`와 `report`를 혼동하면 어떤 분석 오류가 생길 수 있는가?
4. 오늘 작성한 주장 중 공개 가능한 것과 비공개 evidence로 남겨야 할 것은 무엇인가?
5. 오늘 사용한 명령어, 옵션, 도구 version 중 재현성에 꼭 필요한 것은 무엇인가?
6. 오늘 결론에서 아직 Unknown으로 남겨야 하는 것은 무엇인가?
7. 오늘 산출물인 "공개 후보 산출물 10개 목록"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
