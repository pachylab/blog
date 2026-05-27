---
title: "Week 04 Day 03: process 생성과 exec 흐름 결과물 Worksheet"
draft: true
---

# Week 04 Day 03: process 생성과 exec 흐름 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-04-day-03/study|Week 04 Day 03: process 생성과 exec 흐름]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | process 생성과 exec 흐름 |
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
| 1회차 전 | [[_drafts/daily-study/week-04-day-02/index|Week 04 Day 02: scheduler와 context switching]] | `scheduler와 context switching`의 정의와 작은 예제 하나를 다시 쓴다. 핵심어: scheduler, context switching, run queue. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-03-review/index|Week 03 Review: 주간 복습과 산출물 정리]] | 이번 주에 남긴 unknown/backlog 중 하나를 해결, 연기, 폐기 중 하나로 결정하고 이유를 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-03-day-02/index|Week 03 Day 02: program counter, stack pointer, base pointer]] | `program counter, stack pointer, base pointer` 개념을 쓰는 보안 문제 1개를 직접 만들고, 풀이 첫 단계만 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: fork/exec 실습 로그와 process tree
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
| fork |  |  |  |  |
| execve |  |  |  |  |
| wait |  |  |  |  |
| environment variable |  |  |  |  |
| argv |  |  |  |  |
| process tree |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `process 생성과 exec 흐름`을 확인하기 위한 최소 입력은 무엇인가?
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
ps aux | head
ps -ef | head
ls -l /proc/<pid>
lsof -p <pid>
strace -f -o trace.log <command>
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

## 6. 시스템 동작 분석 노트 초안

오늘 글은 `process 생성과 exec 흐름`에서 관찰한 시스템 동작을 “자원 -> 상태 변화 -> 권한/신뢰 경계 -> 증거” 순서로 설명한다. `fork/exec 실습 로그와 process tree`에는 추상 설명보다 직접 확인 가능한 관찰값을 우선 배치한다.

```text
자원/객체: 오늘 다룬 메모리, 파일, 프로세스, 권한 객체를 적는다.
상태 변화: 입력 전/후에 무엇이 바뀌는지 단계별로 적는다.
경계: 사용자/커널, 프로세스/파일, 신뢰/비신뢰 중 어느 경계가 관련되는지 적는다.
관찰 증거: 명령 출력, 로그, hexdump, 스크린샷 중 2개를 연결한다.
보안 의미: 공격자나 분석가가 이 동작을 왜 알아야 하는지 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 04 Day 04 | `process 생성과 exec 흐름`에서 기록한 target, input, observed result를 노트 없이 적고, 증상과 root cause 가설을 분리한다. 핵심어: fork, execve, wait. |
| 3회차 후 | Week 04 Review | `process 생성과 exec 흐름`의 reproducer나 입력 예제가 root cause를 설명하는지 다시 본다. 부족하면 debugger, sanitizer, patch 근거 중 필요한 것 1개를 적는다. |
| 7회차 후 | Week 05 Day 04 | `process 생성과 exec 흐름`에서 다룬 관찰을 같은 bug class를 찾는 variant hypothesis 1개와 연결하고, 공개 가능한 writeup 문장 1개로 정리한다. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `fork/exec 실습 로그와 process tree`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 자원 식별 | 오늘 다룬 메모리/파일/프로세스/권한 객체를 정확히 적었다. |
| [ ] | 상태 변화 | 입력 전후 변화와 그 원인을 단계별로 설명했다. |
| [ ] | 경계 표시 | 신뢰/권한/주소공간 경계를 표시하고 보안 의미를 적었다. |
| [ ] | 관찰 증거 | 명령 출력, 로그, dump, hexdump 중 2개 이상을 연결했다. |
| [ ] | 공격/방어 의미 | 분석가 또는 공격자가 이 동작을 왜 알아야 하는지 적었다. |
