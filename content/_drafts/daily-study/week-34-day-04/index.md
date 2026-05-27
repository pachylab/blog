---
title: "Week 34 Day 04: sorting, searching, Big-O 결과물 Worksheet"
draft: true
---

# Week 34 Day 04: sorting, searching, Big-O 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-34-day-04/study|Week 34 Day 04: sorting, searching, Big-O]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | sorting, searching, Big-O |
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
| 1회차 전 | [[_drafts/daily-study/week-34-day-03/index|Week 34 Day 03: tree, B-tree, trie, heap data structure]] | `tree, B-tree, trie, heap data structure`에서 확인한 static evidence 1개와 behavior evidence 1개를 분리해 적는다. 핵심어: tree, B-tree, trie. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-34-day-01/index|Week 34 Day 01: array, linked list, stack, queue]] | `array, linked list, stack, queue`의 예제에 반례나 경계 조건을 하나 추가하고, 어디서 조건이 깨지는지 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-33-day-03/index|Week 33 Day 03: malware config decryption]] | `malware config decryption` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: 정렬/탐색 알고리즘 복잡도 비교
- 한 문장 요약: <!-- 작성 -->
- 가장 중요한 관찰 1개: <!-- 작성 -->
- 아직 확신할 수 없는 점 1개: <!-- 작성 -->
- 다음에 확인할 질문 2개:
  1. <!-- 작성 -->
  2. <!-- 작성 -->

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 수학/알고리즘 기반 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| 작은 예제 |  |
| 정의와 조건 |  |
| 반례/경계 |  |
| 보안 적용 |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| sorting |  |  |  |  |
| searching |  |  |  |  |
| Big-O |  |  |  |  |
| complexity |  |  |  |  |
| space complexity |  |  |  |  |
| stable sort |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `sorting, searching, Big-O`을 확인하기 위한 최소 입력은 무엇인가?
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
python3 - <<'PY'
# 작은 예제를 직접 계산해 본다.
PY
python3 -m doctest <note-or-script>.py
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

## 6. 분석 알고리즘 설명 초안

오늘 글은 `sorting, searching, Big-O` 주제를 보안 분석 도구의 내부 부품처럼 설명한다. `정렬/탐색 알고리즘 복잡도 비교`에는 문제 정의, 자료구조 선택, 복잡도, 실제 분석 적용처를 연결한다.

```text
Problem: 오늘 풀어야 하는 분석 문제를 입력/출력 형태로 적는다.
Method: 사용한 자료구조나 알고리즘의 핵심 단계를 적는다.
Complexity: 시간/공간 비용과 데이터가 커질 때의 병목을 적는다.
Security Use: fuzzing, reversing, malware clustering, timeline 분석 중 활용처를 적는다.
Validation: 작은 테스트 케이스와 기대 결과를 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 34 Day 05 | `sorting, searching, Big-O`의 정의와 작은 예제 하나를 다시 쓴다. 핵심어: sorting, searching, Big-O. |
| 3회차 후 | Week 35 Day 01 | `sorting, searching, Big-O`의 예제에 반례나 경계 조건을 하나 추가하고, 어디서 조건이 깨지는지 적는다. |
| 7회차 후 | Week 35 Day 05 | `sorting, searching, Big-O` 개념을 쓰는 보안 문제 1개를 직접 만들고, 풀이 첫 단계만 적는다. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `정렬/탐색 알고리즘 복잡도 비교`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 문제 정의 | 입력, 출력, 제약 조건을 명확히 적었다. |
| [ ] | 방법 선택 | 자료구조나 알고리즘을 선택한 이유를 설명했다. |
| [ ] | 복잡도 | 시간/공간 비용과 병목 조건을 적었다. |
| [ ] | 보안 적용 | 분석 자동화, fuzzing, reversing, timeline 중 활용처를 연결했다. |
| [ ] | 검증 케이스 | 작은 테스트와 기대 결과를 남겼다. |
