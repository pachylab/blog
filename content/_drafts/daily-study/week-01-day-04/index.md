---
title: "Week 01 Day 04: boolean, set, relation, function 기초 결과물 Worksheet"
draft: true
---

# Week 01 Day 04: boolean, set, relation, function 기초 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-01-day-04/study|Week 01 Day 04: boolean, set, relation, function 기초]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 읽은 자료와 실행한 실습 근거로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | boolean, set, relation, function 기초 |
| 공부 날짜 |  |
| 오늘 선택한 Primary 자료 |  |
| 실제 읽은 범위 |  |
| 이해 안 된 문장 1개 |  |
| OS / VM / shell |  |
| tool version |  |
| timezone |  |
| 작업 디렉터리 |  |
| 입력 파일, 코드, 로그, 노트 |  |
| 입력 hash 또는 식별자 |  |
| 공개 가능 여부 | [ ] public  [ ] private  [ ] redaction 필요 |

<!-- due-review:start -->
## 1-1. 오늘의 간격 반복 복습

새 내용을 시작하기 전에 아래 복습을 먼저 한다. 답을 보기 전에 3분만 회상하고, 틀린 부분은 길게 보충하지 말고 오늘 worksheet의 Unknown 또는 Next check에 한 줄로 남긴다.

| 복습 간격 | 복습 대상 | 오늘 할 일 | 완료 기준 |
|---|---|---|---|
| 1회차 전 | [[_drafts/daily-study/week-01-day-03/index|Week 01 Day 03: 분석 VM 분리와 샘플 취급 원칙]] | `분석 VM 분리와 샘플 취급 원칙`에서 다룬 artifact의 provenance, timestamp 기준, confidence를 각각 한 줄로 적는다. 핵심어: safe lab, VM isolation, snapshot. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-01-day-01/index|Week 01 Day 01: Linux CLI와 분석 노트 구조]] | `Linux CLI와 분석 노트 구조`의 권한 경계를 정상 동작과 오용/우회 시나리오로 나눠 다시 설명한다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: 보안 조건식을 boolean expression으로 바꾼 예시 5개
- 오늘 한 문장 요약:
- 가장 중요한 관찰 1개:
- 아직 확신할 수 없는 점 1개:
- 다음에 확인할 질문 2개:
  1.
  2.

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

## 3. 자료 읽기 기록

| 자료 | 읽은 범위 | 얻은 내용 | 막힌 지점 |
|---|---|---|---|
| [Discrete Mathematics: An Open Introduction](https://open.umn.edu/opentextbooks/textbooks/discrete-mathematics-an-open-introduction): logic, sets, functions 관련 절 |  |  |  |
| [OpenStax Algebra and Trigonometry 2e - Functions and Function Notation](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-1-functions-and-function-notation): relation과 function 기초 |  |  |  |
| 중학교/고등학교 수학 복습: 집합, 명제, 함수의 정의와 예시 |  |  |  |
| Python docs: set type, boolean operators를 실습 확인용으로만 사용 |  |  |  |
| MITRE ATT&CK 또는 탐지 rule 예시: 조건식 예시가 필요할 때만 참고 |  |  |  |
| 해커의 기쁨: bit vector 감각이 필요한 경우 보조 참고 |  |  |  |

## 4. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| boolean algebra |  |  |  |  |
| truth table |  |  |  |  |
| set |  |  |  |  |
| relation |  |  |  |  |
| function |  |  |  |  |
| bit vector |  |  |  |  |
| logical operator |  |  |  |  |

## 5. 실습 질문 기록

### 실행 전 질문

1. 오늘 만든 보안 조건 A, B, C는 각각 참/거짓으로 판정 가능한가?
   - 내 답:
2. `A AND B`와 `A OR B`의 결과가 달라지는 입력 조합은 무엇인가?
   - 내 답:
3. 프로세스와 파일 접근 pair를 relation으로 적으면 어떤 정보가 보이고, 어떤 정보가 빠지는가?
   - 내 답:
4. 내가 만든 relation이 function이 아닌 이유를 반례 하나로 설명할 수 있는가?
   - 내 답:
5. 탐지 조건을 자연어가 아니라 boolean expression으로 쓰면 어떤 모호함이 줄어드는가?
   - 내 답:

### 참고한 명령어 후보

```bash
python3 - <<'PY'
for A in [False, True]:
  for B in [False, True]:
    for C in [False, True]:
      alert = (A and B) or C
      print(A, B, C, alert)
PY
python3 - <<'PY'
processes = {"p1", "p2", "p3"}
networked = {"p2", "p3"}
suspicious = {"p3"}
print(networked & suspicious)
PY
```

### 실제 실행한 명령어 또는 손계산

```bash
# 여기에 실제 실행한 명령어를 순서대로 적는다.
```

| 명령어 / 계산 | stdout 또는 계산 결과 | stderr | exit status | 내가 해석한 의미 |
|---|---|---|---:|---|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

## 6. 개념 설명 미니 레슨 초안

오늘 글의 주제는 `boolean, set, relation, function 기초`이다. 처음 보는 후배 연구원에게 5분 동안 설명한다는 기준으로 쓴다. 목표는 `보안 조건식을 boolean expression으로 바꾼 예시 5개`이 단순 요약이 아니라, 보안 문제를 이해하는 데 필요한 mental model이 되도록 만드는 것이다.

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
| 1회차 후 | Week 01 Day 05 | `boolean, set, relation, function 기초`에서 확인한 static evidence 1개와 behavior evidence 1개를 분리해 적는다. 핵심어: boolean algebra, truth table, set. |
| 3회차 후 | Week 02 Day 01 | `boolean, set, relation, function 기초`의 behavior hypothesis가 IOC, TTP, detection idea 중 어디로 이어지는지 확인하고 false positive 가능성 1개를 적는다. |
| 7회차 후 | Week 02 Day 05 | `boolean, set, relation, function 기초` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. |
<!-- retrieval-card:end -->


## 7. 산출물 체크 표

오늘의 산출물 `보안 조건식을 boolean expression으로 바꾼 예시 5개`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 개념 정의 | 핵심 개념을 외운 문장이 아니라 내 말로 정의했다. |
| [ ] | 작은 예제 | 손으로 추적 가능한 예제를 하나 만들고 결과를 설명했다. |
| [ ] | 보안 연결 | exploit/reversing/malware/DFIR 중 최소 1개 활용처를 연결했다. |
| [ ] | 오해 제거 | 혼동하기 쉬운 개념이나 잘못된 직관을 하나 반박했다. |
| [ ] | 후속 질문 | 다음 실습에서 검증할 질문을 하나 남겼다. |
