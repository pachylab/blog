---
title: "Week 06 Day 02: struct, union, enum과 padding 결과물 Worksheet"
draft: true
---

# Week 06 Day 02: struct, union, enum과 padding 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-06-day-02/study|Week 06 Day 02: struct, union, enum과 padding]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | struct, union, enum과 padding |
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
| 1회차 전 | [[_drafts/daily-study/week-06-day-01/index|Week 06 Day 01: C pointer, array, string]] | `C pointer, array, string`의 정의와 작은 예제 하나를 다시 쓴다. 핵심어: C pointer, pointer, array. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-05-day-05/index|Week 05 Day 05: PIE, RELRO, dynamic relocation]] | `PIE, RELRO, dynamic relocation`에서 배운 개념이 오늘 주제의 prerequisite인지, 도구 사용 습관인지, 보안 사고방식인지 하나로 분류한다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-05-day-01/index|Week 05 Day 01: virtual address space와 physical memory]] | `virtual address space와 physical memory` 주제를 pwn, RE, malware, DFIR 중 하나의 실제 분석 상황에 적용하는 예시 1개를 쓴다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: struct layout과 padding 계산표
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
| struct |  |  |  |  |
| union |  |  |  |  |
| enum |  |  |  |  |
| struct padding |  |  |  |  |
| alignment |  |  |  |  |
| offsetof |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `struct, union, enum과 padding`을 확인하기 위한 최소 입력은 무엇인가?
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
gcc -Wall -Wextra -g -O0 <source.c> -o <program>
clang -fsanitize=address,undefined -g <source.c> -o <program>
./<program>
objdump -d ./<program> | head
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

## 6. 코드와 실행 차이 분석 초안

오늘 글은 `struct, union, enum과 padding` 주제를 소스 코드 그대로 믿었을 때 놓치는 실행 결과를 밝히는 글이다. `struct layout과 padding 계산표`에는 코드 조각, 컴파일/실행 관찰, 메모리 또는 ABI 관점의 해석을 함께 넣는다.

```text
코드 조각: 오늘 분석한 최소 코드나 의사코드를 적는다.
컴파일/실행 관찰: warning, objdump, gdb, 실행 출력 중 근거 2개를 적는다.
차이가 생긴 이유: 타입, ABI, 최적화, undefined behavior 중 관련 항목을 고른다.
보안 위험: 이 차이가 bug class 또는 exploit primitive로 이어지는 조건을 적는다.
검증 실험: flag, 입력값, 컴파일러 옵션을 바꿔 확인할 후속 실험 1개를 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 06 Day 03 | `struct, union, enum과 padding`의 input, output, parameter를 작은 예제로 다시 만든다. 핵심어: struct, union, enum. |
| 3회차 후 | Week 06 Day 05 | `struct, union, enum과 padding`에서 primitive, mode, protocol, implementation misuse 중 무엇을 다룬 것인지 다시 구분한다. |
| 7회차 후 | Week 07 Day 03 | `struct, union, enum과 padding`의 misuse 사례를 malware/TLS/password/randomness 중 하나와 연결해 보안 분석 문장 1개를 쓴다. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `struct layout과 padding 계산표`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 코드 조각 | 분석에 필요한 최소 코드나 의사코드를 남겼다. |
| [ ] | 빌드 조건 | 컴파일러, flag, architecture, warning을 기록했다. |
| [ ] | 실행 근거 | objdump/gdb/output 등 실행 관찰 증거를 포함했다. |
| [ ] | 차이 원인 | 타입, ABI, 최적화, UB 중 관련 원인을 구분했다. |
| [ ] | 보안 영향 | bug class 또는 exploit primitive 가능성을 판단했다. |
