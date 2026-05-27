---
title: "Week 40 Day 05: advisory 공개 경계와 evidence redaction"
draft: true
---

# Week 40 Day 05: advisory 공개 경계와 evidence redaction

## 오늘의 목표

오늘은 자료를 일반 노트처럼 정리하는 날이 아니다. Week 39-40에서 만든 CVE/N-day 재현 노트, exploit writeup, malware/DFIR report 중 하나를 골라 "공개 가능한 주장"과 "비공개로 남겨야 할 evidence"를 분리한다.

이 주제가 보안에 중요한 이유는 명확하다. CVE/advisory에서는 affected version, impact, remediation은 공개 문장으로 다듬어야 하지만, weaponizable exploit detail, full PoC, 민감한 crash corpus는 공개 시점과 범위를 조절해야 한다. 악성코드/DFIR 보고서에서는 IOC나 behavior summary는 공유할 수 있어도 client data, internal IP, token, account id, 샘플 경로, 조사 중인 시스템 이름은 redaction이 필요하다.

오늘 하지 않을 것: 실제 신고, 공개, exploit 배포를 완료 조건으로 삼지 않는다. 학습용 report/advisory 초안을 안전하게 공개 가능한 형태로 바꾸는 기준만 만든다.

1. 오늘 주제인 `advisory 공개 경계와 evidence redaction`이 무엇을 다루는지 한 문장으로 적는다.
2. 핵심 키워드 `public advisory`, `private evidence`, `redaction`, `exploit detail` 중 3개를 골라 "정의, 관찰 방법, 보안 분석에서의 쓰임" 형태로 정리한다.
3. Week 39-40 산출물 중 하나를 고르고, 공개 가능한 claim과 private evidence를 분리한다.
4. 민감 정보, dual-use detail, 개인정보, 내부 환경 정보를 찾아 redaction 이유와 안전한 대체 문장을 적는다.
5. 공부 후 결과물 worksheet `week-40-day-05/index.md`에 `공개 advisory / private evidence 분리표` 초안을 채운다.
6. 성공 기준: public summary 1개, private evidence table 1개, redaction decision 3개, safe rewrite 1개를 남긴다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 복습/포트폴리오

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | Week 39-40 산출물 중 하나만 고른다. 새 자료를 열지 않는다. |
| minimum | 공개 가능한 claim 1개와 private evidence 1개를 분리한다. |
| standard | redaction decision 3개를 이유와 함께 적는다. |
| stretch | public advisory paragraph 1개를 5-8문장으로 다듬는다. |
| 중단 후 복귀 | 선택한 report에서 공개하면 안 되는 문자열, 경로, 샘플, exploit detail 중 하나만 표시한다. |

## 최신 연구 연결

최근 보안 연구와 실제 advisory는 exploit 성공보다 reproducibility, affected version, impact, patch boundary, disclosure boundary를 분리해 쓰는 능력을 요구한다. 공개 글은 연구 신뢰도를 만들고, private evidence는 재현성과 책임 있는 공개를 지킨다.
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
- Week 39 Day 05 산출물: CVSS, responsible disclosure, CVE/KVE reporting 초안
- Week 40 Day 03 산출물: 대표 분석 보고서 polished version
- 공개 vendor advisory 또는 CVE record 1개: summary, affected version, impact, remediation, reference 구조 확인

### Reference
- CVE Program/CNA rules: CVE record에 필요한 public reference와 disclosure boundary 확인
- FIRST CVSS v4.0 specification/calculator: impact claim을 metric 근거와 분리
- MITRE CWE/ATT&CK: weakness, behavior, data source 이름을 공개 가능한 표준 용어로 바꾸기
- 조직/프로젝트의 responsible disclosure policy: 공개 시점, PoC 범위, credit, embargo 조건 확인

### 읽기 분량 기준
- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽을 목표로 한다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 실습 시간이 부족해지면 읽기를 멈추고, 읽은 범위와 모르는 문장을 worksheet에 남긴다.

## 자료 선택 규칙

오늘의 primary 추천: 내가 이미 만든 report/advisory 초안 1개만 고른다.
- 아래 공부 자료는 전부 읽으라는 목록이 아니다. 오늘은 primary 자료 1개만 선택한다.
- 새 CVE를 찾으려 하지 않는다. 이미 만든 산출물을 공개 가능한 형태로 줄이는 것이 목표다.
- Reference는 redaction 기준이나 공개 문장 구조가 막힐 때만 5-10분 확인한다.
- 남은 시간은 worksheet의 분리표와 safe rewrite 작성에 쓴다.
- 자료를 다 읽지 못해도 공개 claim, private evidence, redaction reason을 남기면 성공으로 본다.

## 핵심 키워드

public advisory, private evidence, redaction, sensitive data, exploit detail, responsible disclosure, affected version, remediation, IOC sharing, client data, dual-use content

## 반드시 정리할 개념

아래 표는 정답을 미리 외우기 위한 표가 아니다. 오늘 고른 report/advisory 초안에서 각 항목을 직접 찾아 worksheet에 내 말로 정리한다.

| 개념 | 오늘 확인할 질문 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| public advisory | 외부에 공개해도 되는 claim은 무엇인가? | summary, affected version, impact, remediation, reference를 표시한다. | CVE/N-day reproduction을 신뢰 가능한 공개 글로 바꾼다. |
| private evidence | 공개 글에는 빼지만 재현성 때문에 보관해야 할 근거는 무엇인가? | full PoC, crash input, private log, internal path, sample location을 분리한다. | 재현성과 책임 있는 공개를 동시에 지킨다. |
| redaction | 어떤 값을 삭제, 일반화, hash 처리, 범주화해야 하는가? | token, account, internal IP, client name, exact exploit chain을 표시하고 safe rewrite를 만든다. | DFIR/malware/pwn 보고서의 민감 정보 노출을 막는다. |
| sensitive data | 개인정보, 고객 정보, 내부 환경 정보, credential이 포함되어 있는가? | report에서 계정, IP, path, key, cookie, hostname, email을 검색한다. | 보고서 공유와 법적/윤리적 위험을 관리한다. |
| exploit detail | 공개하면 재현을 넘어 weaponization에 가까운 정보는 무엇인가? | exploit chain, target-specific offset, full payload, bypass detail을 분리한다. | public writeup과 private lab note의 경계를 정한다. |
| responsible disclosure | 공개 시점과 공개 범위는 누가 결정해야 하는가? | vendor policy, CNA rule, project security policy, embargo 조건을 확인한다. | CVE/KVE reporting과 공개 글 작성의 기준이 된다. |
| IOC sharing | IOC, hash, YARA/Sigma, detection idea 중 무엇을 공개할 수 있는가? | hash, domain, rule condition, false positive note, sample availability를 점검한다. | malware/DFIR 산출물을 안전하게 공유 가능한 탐지 자료로 바꾼다. |

## 실습

오늘 실습은 크게 벌리지 않는다. 아래 항목 중 오늘 산출물에 필요한 최소 범위만 수행하고, 실패하면 실패 로그를 그대로 남긴다.

- Week 39-40 report/advisory 초안 1개를 고른다.
- 공개 가능 claim, private evidence, redaction 필요 항목, safe rewrite를 표로 나눈다.
- exploit/pwn, malware/RE, DFIR 중 어떤 맥락의 보고서인지 먼저 표시한다.
- 공개 가능한 문장은 "관찰된 사실, 영향, affected version, remediation, 한계" 중심으로 쓴다.

## 질문형 실습 프롬프트

아래 명령어는 모두 실행하라는 뜻이 아니다. 오늘 산출물에 필요한 것만 고르고, 환경에 없는 도구는 설치부터 하지 말고 어떤 역할의 도구가 필요한지만 적는다.

### 테스트 해 볼 명령어 후보

```bash
date
git status --short
grep -nE "token|password|secret|cookie|client|internal|PoC|exploit|payload|offset|sample|IP|hostname" <report-or-note.md>
grep -nE "affected|impact|remediation|version|patch|timeline|IOC|detection" <report-or-note.md>
shasum -a 256 <evidence-file>
```

### 스스로 답할 질문

1. `advisory 공개 경계와 evidence redaction`을 확인할 report/advisory 초안은 무엇인가?
2. 공개 가능한 핵심 claim 1개는 무엇이며, 어떤 evidence가 그것을 뒷받침하는가?
3. private evidence로 남길 항목은 무엇이며, 공개하지 않는 이유는 무엇인가?
4. redaction이 필요한 문자열, 경로, 샘플, exploit detail, 개인정보는 무엇인가?
5. public advisory 문장으로 바꾸면 어떤 단어와 수치를 일반화해야 하는가?

## 오늘 남길 산출물

- 강의 산출물: `공개 advisory / private evidence 분리표`을 작성한다. 형태는 public claim, evidence, private boundary가 분리된 capstone artifact이다.
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

1. 오늘 주제 `advisory 공개 경계와 evidence redaction`을 한 문장으로 설명하면 무엇인가?
2. `public advisory`와 `private evidence`는 어떤 기준으로 나누었는가?
3. full PoC, crash corpus, exploit chain, client data 중 무엇을 공개하면 안 되는가?
4. CVE/advisory와 DFIR/malware report에서 redaction 기준은 어떻게 달라지는가?
5. 오늘 작성한 public claim은 affected version, impact, remediation, limitation을 포함하는가?
6. 오늘 결론에서 아직 Unknown으로 남겨야 하는 것은 무엇인가?
7. 오늘 산출물인 "공개 advisory / private evidence 분리표"가 다음 공개 글이나 신고에 재사용 가능하려면 어떤 정보가 더 필요한가?
