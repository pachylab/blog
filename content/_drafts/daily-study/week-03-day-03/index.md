---
title: "Week 03 Day 03: calling convention과 ABI 결과물 Worksheet"
draft: true
---

# Week 03 Day 03: calling convention과 ABI 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-03-day-03/study|Week 03 Day 03: calling convention과 ABI]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | calling convention과 ABI |
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
| 1회차 전 | [[_drafts/daily-study/week-03-day-02/index|Week 03 Day 02: program counter, stack pointer, base pointer]] | `program counter, stack pointer, base pointer`의 정의와 작은 예제 하나를 다시 쓴다. 핵심어: program counter, RIP, stack pointer. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-02-review/index|Week 02 Review: 주간 복습과 산출물 정리]] | 이번 주에 남긴 unknown/backlog 중 하나를 해결, 연기, 폐기 중 하나로 결정하고 이유를 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-02-day-02/index|Week 02 Day 02: two complement와 overflow]] | `two complement와 overflow`에서 다룬 관찰을 같은 bug class를 찾는 variant hypothesis 1개와 연결하고, 공개 가능한 writeup 문장 1개로 정리한다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: SysV와 Microsoft x64 calling convention 비교표
- 한 문장 요약: <!-- 작성 -->
- 가장 중요한 관찰 1개: <!-- 작성 -->
- 아직 확신할 수 없는 점 1개: <!-- 작성 -->
- 다음에 확인할 질문 2개:
  1. <!-- 작성 -->
  2. <!-- 작성 -->

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 기초/시스템 개념 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| 기준 정의 |  |
| 작은 관찰 |  |
| 보안 분야 연결 |  |
| 헷갈린 용어 |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| calling convention |  |  |  |  |
| ABI |  |  |  |  |
| System V AMD64 ABI |  |  |  |  |
| Microsoft x64 calling convention |  |  |  |  |
| argument register |  |  |  |  |
| return value |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `calling convention과 ABI`을 확인하기 위한 최소 입력은 무엇인가?
   - 내 답: <!-- 작성 -->
2. 어떤 명령어 또는 도구를 먼저 써야 하는가?
   - 내 답: <!-- 작성 -->
3. 어떤 옵션을 추가해야 출력이 더 검증 가능해지는가?
   - 내 답: <!-- 작성 -->

### 참고한 명령어 후보

```bash
pwd
date
<tool> --version 또는 <tool> -V
gcc -g -O0 <source.c> -o <program>
gcc -S -O0 <source.c>
objdump -d ./<program> | head
readelf -s ./<program> | head
gdb -q ./<program>
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

## 6. 개념 설명 미니 레슨 초안

오늘 글의 주제는 `calling convention과 ABI`이다. 처음 보는 후배 연구원에게 5분 동안 설명한다는 기준으로 쓴다. 목표는 `SysV와 Microsoft x64 calling convention 비교표`이 단순 요약이 아니라, 보안 문제를 이해하는 데 필요한 mental model이 되도록 만드는 것이다.

```text
정의: 오늘 주제를 한 문장으로 정의한다.
작은 예제: 숫자, 주소, 파일, 패킷 등 손으로 추적 가능한 예를 든다.
보안 연결: 이 개념이 exploit, reversing, malware, DFIR 중 어디에서 쓰이는지 적는다.
흔한 오해: 오늘 개념을 잘못 이해했을 때 생기는 오류 1개를 적는다.
다음 질문: 내일 실습에서 확인할 수 있는 검증 질문 1개를 남긴다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 03 Day 04 | `calling convention과 ABI` 주제를 한 문장으로 설명하고, 관찰 근거 1개를 적는다. 핵심어: calling convention, ABI, System V AMD64 ABI. |
| 3회차 후 | Week 03 Review | `calling convention과 ABI`에서 배운 개념이 오늘 주제의 prerequisite인지, 도구 사용 습관인지, 보안 사고방식인지 하나로 분류한다. |
| 7회차 후 | Week 04 Day 04 | `calling convention과 ABI` 주제를 pwn, RE, malware, DFIR 중 하나의 실제 분석 상황에 적용하는 예시 1개를 쓴다. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `SysV와 Microsoft x64 calling convention 비교표`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 개념 정의 | 핵심 개념을 외운 문장이 아니라 내 말로 정의했다. |
| [ ] | 작은 예제 | 손으로 추적 가능한 예제를 하나 만들고 결과를 설명했다. |
| [ ] | 보안 연결 | exploit/reversing/malware/DFIR 중 최소 1개 활용처를 연결했다. |
| [ ] | 오해 제거 | 혼동하기 쉬운 개념이나 잘못된 직관을 하나 반박했다. |
| [ ] | 후속 질문 | 다음 실습에서 검증할 질문을 하나 남겼다. |
