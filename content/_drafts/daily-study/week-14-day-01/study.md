---
title: "Week 14 Day 01: malware taxonomy 개요"
draft: true
---

# Week 14 Day 01: malware taxonomy 개요

## 오늘의 목표

오늘은 `malware taxonomy 개요`을 넓게 훑는 날이 아니라, 작은 입력이나 예제 하나로 관찰하고 기록하는 날이다. 오늘 끝나면 `malware 유형별 기능/흔적 비교표`에 들어갈 최소 근거가 남아 있어야 한다.

오늘 하지 않을 것: 허가되지 않은 실제 악성 샘플 실행이나 외부 네트워크 연결을 하지 않는다.

1. 오늘 주제인 `malware taxonomy 개요`가 무엇을 다루는지 한 문장으로 적는다.
2. 핵심 키워드 `malware taxonomy`, `loader`, `dropper`, `downloader` 중 3개를 골라 "정의, 관찰 방법, 보안 분석에서의 쓰임" 형태로 정리한다.
3. Primary 자료는 1개만 고르고, 실제로 읽은 범위와 이해 안 된 문장 1개를 남긴다.
4. 실습을 실행한다. 도구가 없으면 설치부터 하지 말고, 필요한 입력/명령어/옵션/예상 출력을 먼저 설계한다.
5. 공부 후 결과물 worksheet `week-14-day-01/index.md`에 `malware 유형별 기능/흔적 비교표` 초안을 채운다.
6. 성공 기준: 샘플 대신 교육용 artifact 또는 안전한 예제로 behavior, IOC, 근거, 한계를 표로 정리한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 악성코드 분석/탐지

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | static signal, dynamic behavior, IOC, TTP 중 하나만 고르고 안전 범위를 먼저 확인한다. |
| minimum | 샘플/로그 식별자, 안전 범위, 관찰 신호 1개를 적는다. |
| standard | static evidence와 dynamic evidence를 분리하고 behavior hypothesis 1개를 세운다. |
| stretch | YARA/Sigma/ATT&CK/data source 중 하나로 탐지 아이디어를 쓴다. |
| 중단 후 복귀 | 새 자료를 열지 말고 malware taxonomy 개요에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최근 악성코드 연구는 family 이름보다 behavior evidence, config, C2, detection data source를 분리한다. 오늘은 attribution보다 근거와 공개 가능성을 우선한다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 문서의 복습 질문 2개에 5-10분만 답한다. Week 01 Day 01처럼 이전 회차 문서가 없으면 오늘 제목과 핵심 키워드를 훑고 "이미 아는 것 3개 / 헷갈리는 것 3개"를 적는다. 공부 중 새로 모르는 용어는 Warm-up이 아니라 Review의 Unknown에 적는다.
- Core reading: 공부 자료 중 primary 1개만 고르고 실제 읽은 범위와 핵심 문장 3개, 이해 안 된 문장 1개를 기록한다.
- Lab: tool version, timezone, input path/hash, exact command, stdout/stderr, exit status를 남긴다.
- Writing: 샘플 안전 조건, 관찰 행위, IOC/TTP, 탐지 아이디어와 오탐 위험을 분리해 쓴다.
- Review: 오늘 공부 중 끝까지 모르는 용어와 검증하지 못한 추정을 Unknown에 모으고, 다음 확인 방법을 적는다.

## 공부 자료

아래는 오늘의 후보 자료이다. 전부 읽지 않는다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽고, Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- Learning Malware Analysis: static/dynamic triage, Windows artifact, config extraction 관련 장
- Malware Analysis and Detection Engineering: detection logic, malware behavior, false positive 관리 관련 장
- 실전 리눅스 악성코드 분석: Linux malware behavior, persistence, ELF 분석 관련 장

### Reference
- Practical Malware Analysis: basic static/dynamic analysis와 report 구조
- Malware Unicorn: methodology, anti-analysis, unpacking, config extraction 자료
- REMnux docs: FakeDNS, INetSim, strings, FLOSS, safe tooling 개요

### 읽기 분량 기준
- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽을 목표로 한다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 실습 시간이 부족해지면 읽기를 멈추고, 읽은 범위와 모르는 문장을 worksheet에 남긴다.

## 자료 선택 규칙

오늘의 primary 추천: malware analysis 서적 또는 실습 문서에서 오늘 behavior family나 artifact 하나만 고른다.
- 아래 공부 자료는 전부 읽으라는 목록이 아니다. 오늘은 primary 자료 1개만 선택한다.
- 책을 고르면 실제 목표 범위를 쪽수나 절 제목으로 적고, 30-45분이 지나면 멈춘다.
- Reference는 실습 중 막히거나 용어가 불명확할 때 5-10분만 확인한다.
- 남은 시간은 실습 로그와 결과물 worksheet 작성에 쓴다.
- 자료를 다 읽지 못해도 결과물 worksheet에 읽은 범위, 모르는 문장, 다음 확인 질문을 남기면 성공으로 본다.

## 핵심 키워드

malware taxonomy, loader, dropper, downloader, RAT, ransomware, botnet

## 반드시 정리할 개념

아래 표는 정답을 미리 외우기 위한 표가 아니다. 오늘 읽은 자료와 실습 출력으로 각 질문에 답하면서 결과물 worksheet에 내 말로 정리한다.

| 개념 | 오늘 확인할 질문 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| malware taxonomy | `malware taxonomy`가 malware behavior나 artifact에서 어떻게 관찰되는가? | 안전한 lab note, toy sample, report excerpt, log artifact 중 하나로 확인한다. | IOC/TTP, detection rule, incident scoping, report evidence로 이어진다. |
| loader | `loader`가 malware behavior나 artifact에서 어떻게 관찰되는가? | 안전한 lab note, toy sample, report excerpt, log artifact 중 하나로 확인한다. | IOC/TTP, detection rule, incident scoping, report evidence로 이어진다. |
| dropper | `dropper`가 malware behavior나 artifact에서 어떻게 관찰되는가? | 안전한 lab note, toy sample, report excerpt, log artifact 중 하나로 확인한다. | IOC/TTP, detection rule, incident scoping, report evidence로 이어진다. |
| downloader | `downloader`가 malware behavior나 artifact에서 어떻게 관찰되는가? | 안전한 lab note, toy sample, report excerpt, log artifact 중 하나로 확인한다. | IOC/TTP, detection rule, incident scoping, report evidence로 이어진다. |
| RAT | `RAT`가 malware behavior나 artifact에서 어떻게 관찰되는가? | 안전한 lab note, toy sample, report excerpt, log artifact 중 하나로 확인한다. | IOC/TTP, detection rule, incident scoping, report evidence로 이어진다. |
| ransomware | `ransomware`가 malware behavior나 artifact에서 어떻게 관찰되는가? | 안전한 lab note, toy sample, report excerpt, log artifact 중 하나로 확인한다. | IOC/TTP, detection rule, incident scoping, report evidence로 이어진다. |
| botnet | `botnet`가 malware behavior나 artifact에서 어떻게 관찰되는가? | 안전한 lab note, toy sample, report excerpt, log artifact 중 하나로 확인한다. | IOC/TTP, detection rule, incident scoping, report evidence로 이어진다. |

## 실습

오늘 실습은 크게 벌리지 않는다. 아래 항목 중 오늘 산출물에 필요한 최소 범위만 수행하고, 실패하면 실패 로그를 그대로 남긴다.

- 실제 샘플 대신 공개 writeup, toy binary, lab-safe artifact 중 하나를 선택한다.
- behavior, evidence, IOC/TTP, confidence, limitation을 분리해 기록한다.
- 비슷한 family/technique와 비교할 수 있는 질문 1개를 남긴다.

## 질문형 실습 프롬프트

아래 명령어는 모두 실행하라는 뜻이 아니다. 오늘 산출물에 필요한 것만 고르고, 환경에 없는 도구는 설치부터 하지 말고 어떤 역할의 도구가 필요한지만 적는다.

### 테스트 해 볼 명령어 후보

```bash
pwd
date
<tool> --version 또는 <tool> -V
shasum -a 256 <sample-or-test-file>
file <sample-or-test-file>
strings -a <sample-or-test-file> | head
yara <rule.yar> <sample-or-dir>
grep -n "<ioc-or-api>" <report-or-log>
```

### 스스로 답할 질문

1. `malware taxonomy 개요`을 확인하기 위한 가장 작은 입력 파일, 샘플, 코드, 로그, 보고서 조각은 무엇인가?
2. 그 대상을 처음 확인할 때 어떤 명령어, 도구, 문서 항목을 먼저 봐야 할까?
3. 출력에 상세 정보, 줄 번호, hex view, filter, field, version 정보를 추가하려면 어떤 옵션이나 기록 항목이 필요할까?
4. 오늘 artifact가 IOC인지, TTP인지, 단순한 관찰 사실인지 어떻게 구분할 수 있는가?
5. 오늘 결과를 블로그 글로 바꿀 때 공개하면 안 되는 경로, 샘플, 토큰, exploit detail, 개인정보는 무엇인가?

## 오늘 남길 산출물

- 강의 산출물: `malware 유형별 기능/흔적 비교표`을 작성한다. 형태는 safe handling, behavior evidence, IOC/TTP가 있는 malware note이다.
- 실습 증거: 오늘 사용한 명령, 로그, trace, screenshot, code diff 중 해당 주제에 맞는 근거를 최소 2개 남긴다.
- 글쓰기 산출물: 샘플 안전 조건, 관찰 행위, IOC/TTP, 탐지 아이디어와 오탐 위험을 분리해 쓴다.
- 공개 판단: 공개 가능한 주장과 비공개로 남겨야 할 세부사항을 각각 1개 이상 표시한다.

## 산출물 체크 표

| 체크 | 항목 | 기준 |
|---|---|---|
| [ ] | 격리 조건 | 샘플 보관, 네트워크, VM snapshot 조건을 기록했다. |
| [ ] | 행위 증거 | 파일/프로세스/레지스트리/네트워크/persistence 증거를 남겼다. |
| [ ] | IOC/TTP 분리 | 단순 indicator와 행위 기반 TTP를 구분했다. |
| [ ] | 탐지 초안 | YARA/Sigma/behavior rule 아이디어를 하나 작성했다. |
| [ ] | 오탐/우회 | 오탐 가능성 또는 우회 가능성을 하나 적었다. |

## 복습 질문

1. 오늘 주제 `malware taxonomy 개요`를 한 문장으로 설명하면 무엇인가?
2. `malware taxonomy`는 어떤 입력, 출력, field, instruction, artifact에서 확인했는가?
3. `loader`와 `dropper`를 혼동하면 어떤 분석 오류가 생길 수 있는가?
4. malware behavior를 fact, inference, confidence로 나누면 보고서 품질이 어떻게 달라지는가?
5. 오늘 사용한 명령어, 옵션, 도구 version 중 재현성에 꼭 필요한 것은 무엇인가?
6. 오늘 결론에서 아직 Unknown으로 남겨야 하는 것은 무엇인가?
7. 오늘 산출물인 "malware 유형별 기능/흔적 비교표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
