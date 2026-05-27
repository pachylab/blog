---
title: "Week 37 Day 04: config extraction과 C2 timeline 결과물 Worksheet"
draft: true
---

# Week 37 Day 04: config extraction과 C2 timeline 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-37-day-04/study|Week 37 Day 04: config extraction과 C2 timeline]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | config extraction과 C2 timeline |
| 공부 날짜 |  |
| 오늘 선택한 primary 자료 |  |
| 실제 읽은 범위 |  |
| OS / VM / shell |  |
| tool version |  |
| timezone |  |
| 작업 디렉터리 |  |
| 입력 파일, 샘플, 코드, 로그 |  |
| 입력 hash 또는 식별자 |  |
| 공개 가능 여부 | [ ] public  [ ] private  [ ] redaction 필요 |

<!-- due-review:start -->
## 1-1. 오늘의 간격 반복 복습

새 내용을 시작하기 전에 아래 복습을 먼저 한다. 답을 보기 전에 3분만 회상하고, 틀린 부분은 길게 보충하지 말고 오늘 worksheet의 Unknown 또는 Next check에 한 줄로 남긴다.

| 복습 간격 | 복습 대상 | 오늘 할 일 | 완료 기준 |
|---|---|---|---|
| 1회차 전 | [[_drafts/daily-study/week-37-day-03/index|Week 37 Day 03: dynamic behavior와 host artifact]] | `dynamic behavior와 host artifact`에서 확인한 static evidence 1개와 behavior evidence 1개를 분리해 적는다. 핵심어: dynamic analysis, process tree, file write. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-37-day-01/index|Week 37 Day 01: project scope와 safe lab 재확인]] | `project scope와 safe lab 재확인`의 timeline row를 다시 보고 actor, action, source, time 중 빈칸을 보강하거나 한계로 표시한다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-36-day-03/index|Week 36 Day 03: Android DEX와 Dalvik/ART]] | `Android DEX와 Dalvik/ART` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: config와 network timeline 연결표
- 한 문장 요약: <!-- 작성 -->
- 가장 중요한 관찰 1개: <!-- 작성 -->
- 아직 확신할 수 없는 점 1개: <!-- 작성 -->
- 다음에 확인할 질문 2개:
  1. <!-- 작성 -->
  2. <!-- 작성 -->

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 악성코드 분석/탐지 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| 안전 범위 |  |
| static evidence |  |
| dynamic evidence |  |
| IOC/TTP/detection |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| config extraction |  |  |  |  |
| C2 address |  |  |  |  |
| beaconing |  |  |  |  |
| DNS |  |  |  |  |
| HTTP |  |  |  |  |
| TLS |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `config extraction과 C2 timeline`을 확인하기 위한 최소 입력은 무엇인가?
   - 내 답: <!-- 작성 -->
2. 어떤 명령어 또는 도구를 먼저 써야 하는가?
   - 내 답: <!-- 작성 -->
3. 어떤 옵션을 추가해야 출력이 더 검증 가능해지는가?
   - 내 답: <!-- 작성 -->

### 참고한 명령어 후보

```bash
date
tcpdump -nn -r <capture.pcap> | head
tshark -r <capture.pcap> -q -z conv,tcp
zeek -r <capture.pcap>
jq . <eve.json> | head
```

### 실제 실행한 명령어

```bash
# 여기에 실제 실행한 명령어를 순서대로 적는다.

```

| 명령어 | stdout 요약 | stderr | exit status | 내가 해석한 의미 |
|---|---|---|---:|---|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

## 5. 사실 / 해석 / 미확인

| 구분 | 작성 내용 |
|---|---|
| Fact |  |
| Fact |  |
| Inference |  |
| Unknown |  |
| Next check |  |

## 6. 악성 행위 분석 리포트 초안

오늘 글은 `config extraction과 C2 timeline`에서 관찰한 행위를 안전하게 재현 가능한 수준으로 기록한다. `config와 network timeline 연결표`에는 행위 증거, IOC/TTP, 탐지 아이디어, 오탐 위험을 분리한다.

```text
분석 안전 조건: 격리, 네트워크, 샘플 보관 조건을 적는다.
관찰 행위: 파일, 프로세스, 레지스트리, 네트워크, persistence 중 확인한 행위를 적는다.
근거: 로그, sandbox trace, string, disassembly, memory artifact 중 2개를 연결한다.
IOC/TTP: 단순 indicator와 ATT&CK식 행위 설명을 구분한다.
탐지/한계: rule idea 1개와 오탐 또는 우회 가능성 1개를 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 37 Day 05 | `config extraction과 C2 timeline`에서 확인한 static evidence 1개와 behavior evidence 1개를 분리해 적는다. 핵심어: config extraction, C2 address, beaconing. |
| 3회차 후 | Week 38 Day 01 | `config extraction과 C2 timeline`의 behavior hypothesis가 IOC, TTP, detection idea 중 어디로 이어지는지 확인하고 false positive 가능성 1개를 적는다. |
| 7회차 후 | Week 38 Day 05 | `config extraction과 C2 timeline` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `config와 network timeline 연결표`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 격리 조건 | 샘플 보관, 네트워크, VM snapshot 조건을 기록했다. |
| [ ] | 행위 증거 | 파일/프로세스/레지스트리/네트워크/persistence 증거를 남겼다. |
| [ ] | IOC/TTP 분리 | 단순 indicator와 행위 기반 TTP를 구분했다. |
| [ ] | 탐지 초안 | YARA/Sigma/behavior rule 아이디어를 하나 작성했다. |
| [ ] | 오탐/우회 | 오탐 가능성 또는 우회 가능성을 하나 적었다. |
