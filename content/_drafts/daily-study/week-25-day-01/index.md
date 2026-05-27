---
title: "Week 25 Day 01: kernel, module, syscall table 결과물 Worksheet"
draft: true
---

# Week 25 Day 01: kernel, module, syscall table 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-25-day-01/study|Week 25 Day 01: kernel, module, syscall table]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | kernel, module, syscall table |
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
| 1회차 전 | [[_drafts/daily-study/week-24-review/index|Week 24 Review: 주간 복습과 system boundary 정리]] | 이번 주 best artifact의 핵심 주장, 근거, 한계를 한 줄씩 적는다. 핵심어: Windows Internals, object manager, object namespace. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-24-day-04/index|Week 24 Day 04: Windows memory manager]] | `Windows memory manager`의 예제에 반례나 경계 조건을 하나 추가하고, 어디서 조건이 깨지는지 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-23-review/index|Week 23 Review: 주간 복습과 exploit 사고 정리]] | 이번 주 복습 결과가 다음 주 학습에 실제로 이어졌는지 확인하고, 이어지지 않았다면 질문을 더 작게 바꾼다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: Linux syscall과 kernel module 개념도
- 한 문장 요약: <!-- 작성 -->
- 가장 중요한 관찰 1개: <!-- 작성 -->
- 아직 확신할 수 없는 점 1개: <!-- 작성 -->
- 다음에 확인할 질문 2개:
  1. <!-- 작성 -->
  2. <!-- 작성 -->

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 시스템 보안/커널 경계 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| security boundary |  |
| identity/capability/policy |  |
| observable telemetry |  |
| hardening/우회 가설 |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| Linux Kernel |  |  |  |  |
| kernel |  |  |  |  |
| kernel module |  |  |  |  |
| syscall table |  |  |  |  |
| system call |  |  |  |  |
| kernel space |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `kernel, module, syscall table`을 확인하기 위한 최소 입력은 무엇인가?
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
uname -a
ls /proc | head
cat /proc/self/status | head
systemctl status <unit>
journalctl -n 20
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

## 6. 권한 경계 분석 노트 초안

오늘 글은 `kernel, module, syscall table` 주제를 권한 경계 관점으로 설명한다. `Linux syscall과 kernel module 개념도`에는 subject, object, syscall/API, telemetry, hardening을 서로 연결해 “어디서 권한이 바뀌는가”를 보여준다.

```text
Subject/Object: 행위 주체와 보호 대상 객체를 적는다.
Boundary: user/kernel, low/high integrity, namespace, capability 중 관련 경계를 고른다.
Transition: syscall, driver, policy, token, hook 중 경계 통과 지점을 적는다.
Telemetry: audit, ETW, eBPF, log, crash dump 중 관찰 가능한 신호를 적는다.
Hardening: 우회 가능성과 방어 설정의 한계를 각각 1개씩 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 25 Day 02 | `kernel, module, syscall table`의 주체, 객체, 권한, 관찰 가능한 telemetry를 각각 적는다. 핵심어: Linux Kernel, kernel, kernel module. |
| 3회차 후 | Week 25 Day 04 | `kernel, module, syscall table`의 권한 경계를 정상 동작과 오용/우회 시나리오로 나눠 다시 설명한다. |
| 7회차 후 | Week 26 Day 02 | `kernel, module, syscall table`의 boundary를 hardening 또는 detection rule 관점으로 바꾸고, 관찰 가능한 signal 1개를 적는다. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `Linux syscall과 kernel module 개념도`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | Subject/Object | 권한을 행사하는 주체와 보호 대상 객체를 구분했다. |
| [ ] | Boundary | user/kernel, integrity, namespace, capability 경계를 표시했다. |
| [ ] | Transition | syscall/API/driver/policy/token/hook 흐름을 설명했다. |
| [ ] | Telemetry | ETW/audit/eBPF/log/dump 등 관찰 가능한 신호를 적었다. |
| [ ] | Hardening | 방어 설정의 효과와 우회 가능성을 함께 평가했다. |
