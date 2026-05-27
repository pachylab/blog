---
title: "Week 14 Review: 주간 복습과 malware 분석 정리 결과물 Worksheet"
draft: true
---

# Week 14 Review: 주간 복습과 malware 분석 정리 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-14-review/study|Week 14 Review: 주간 복습과 malware 분석 정리]]

이 문서는 주간 복습 후 직접 채우는 결과물 초안이다. 새 진도를 시작하지 말고 Day 01-05에서 이미 만든 기록만 재료로 삼는다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | 주간 복습과 malware 분석 정리 |
| 공부 날짜 |  |
| 이번 주 best artifact |  |
| 가장 약한 개념 1개 |  |
| 공개 가능 여부 | [ ] public  [ ] private  [ ] redaction 필요 |

<!-- due-review:start -->
## 1-1. 오늘의 간격 반복 복습

새 내용을 시작하기 전에 아래 복습을 먼저 한다. 답을 보기 전에 3분만 회상하고, 틀린 부분은 길게 보충하지 말고 오늘 worksheet의 Unknown 또는 Next check에 한 줄로 남긴다.

| 복습 간격 | 복습 대상 | 오늘 할 일 | 완료 기준 |
|---|---|---|---|
| 1회차 전 | [[_drafts/daily-study/week-14-day-05/index|Week 14 Day 05: IOC, TTP, ATT&CK-style thinking]] | `IOC, TTP, ATT&CK-style thinking` 주제를 한 문장으로 설명하고, 관찰 근거 1개를 적는다. 핵심어: IOC, TTP, MITRE ATT&CK. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-14-day-03/index|Week 14 Day 03: static triage: hash, strings, imports]] | `static triage: hash, strings, imports`의 reproducer나 입력 예제가 root cause를 설명하는지 다시 본다. 부족하면 debugger, sanitizer, patch 근거 중 필요한 것 1개를 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-13-day-05/index|Week 13 Day 05: patching과 behavioral change]] | `patching과 behavioral change` 주제를 pwn, RE, malware, DFIR 중 하나의 실제 분석 상황에 적용하는 예시 1개를 쓴다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: Week 14 주간 개념 지도와 다음 주 질문 5개
- 이번 주 한 문장 요약:
- 가장 중요한 근거 2개:
  1.
  2.
- 아직 확신할 수 없는 점 1개:
- 다음 주 첫 행동 1개:

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 복습/포트폴리오 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| 회상한 핵심 3개 |  |
| 살릴 산출물 |  |
| 버릴 backlog |  |
| 다음 질문 |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. Day 01-05 산출물 점검

| 회차 | 주제 | 산출물 | 남길 것 | 보류할 것 |
|---|---|---|---|---|
| Day 01 | malware taxonomy 개요 | malware 유형별 기능/흔적 비교표 |  |  |
| Day 02 | safe lab와 sample handling | 악성코드 분석 전 안전 절차 체크리스트 |  |  |
| Day 03 | static triage: hash, strings, imports | static triage 표 |  |  |
| Day 04 | dynamic triage: process, file, registry, network | 동적 관찰 항목별 evidence 표 |  |  |
| Day 05 | IOC, TTP, ATT&CK-style thinking | IOC와 TTP 분리표 |  |  |

## 4. 개념 지도 초안

| 개념 A | 연결 이유 | 개념 B | 근거가 되는 산출물 |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## 5. Unknown 정리

| Unknown | 처리 | 이유 | 다음 행동 |
|---|---|---|---|
|  | [ ] 해결 [ ] 연기 [ ] 폐기 |  |  |
|  | [ ] 해결 [ ] 연기 [ ] 폐기 |  |  |
|  | [ ] 해결 [ ] 연기 [ ] 폐기 |  |  |

## 6. 주간 연구 회고 초안

이번 회고 글은 `주간 복습과 malware 분석 정리`에서 “배운 것”보다 “검증된 역량과 남은 결함”을 중심으로 쓴다. `Week 14 주간 개념 지도와 다음 주 질문 5개`은 다음 주 진도를 열어도 되는지 판단하는 evidence packet이어야 한다.

```text
Best Evidence: 이번 주 가장 강한 실습 증거 1개를 고른다.
Weakest Assumption: 아직 근거가 약한 주장 1개를 적는다.
Repair Plan: 30분 안에 보강할 실험 또는 재작성 항목을 적는다.
Hiring Signal: 이 주차 산출물이 연구원 채용 기준에서 증명하는 역량을 적는다.
Next Gate: 다음 주 시작 전에 통과해야 할 조건 1개를 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 15 Day 01 | 이번 주 best artifact의 핵심 주장, 근거, 한계를 한 줄씩 적는다. 핵심어: malware taxonomy, loader, dropper. |
| 3회차 후 | Week 15 Day 03 | 이번 주에 남긴 unknown/backlog 중 하나를 해결, 연기, 폐기 중 하나로 결정하고 이유를 적는다. |
| 7회차 후 | Week 16 Day 01 | 이번 주 복습 결과가 다음 주 학습에 실제로 이어졌는지 확인하고, 이어지지 않았다면 질문을 더 작게 바꾼다. |
<!-- retrieval-card:end -->


## 7. 산출물 체크 표

오늘의 산출물 `Week 14 주간 개념 지도와 다음 주 질문 5개`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 증거 선별 | 이번 주 가장 강한 artifact와 이유를 골랐다. |
| [ ] | 결함 인정 | 아직 약한 개념, 실습, 설명 중 하나를 명시했다. |
| [ ] | 보강 계획 | 30분 안에 실행 가능한 repair task를 작성했다. |
| [ ] | 채용 신호 | 이번 주 결과물이 연구원 기준에서 보여주는 역량을 적었다. |
| [ ] | 진입 조건 | 다음 주 진도를 시작하기 전 통과 기준을 정했다. |
