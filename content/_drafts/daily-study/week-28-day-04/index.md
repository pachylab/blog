---
title: "Week 28 Day 04: VAD와 malfind 결과물 Worksheet"
draft: true
---

# Week 28 Day 04: VAD와 malfind 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-28-day-04/study|Week 28 Day 04: VAD와 malfind]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | VAD와 malfind |
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
| 1회차 전 | [[_drafts/daily-study/week-28-day-03/index|Week 28 Day 03: DLL list, handle, object]] | `DLL list, handle, object`의 주체, 객체, 권한, 관찰 가능한 telemetry를 각각 적는다. 핵심어: DLL list, dlllist, handle. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-28-day-01/index|Week 28 Day 01: memory acquisition와 profile/symbol]] | `memory acquisition와 profile/symbol`의 timeline row를 다시 보고 actor, action, source, time 중 빈칸을 보강하거나 한계로 표시한다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-27-day-03/index|Week 27 Day 03: deleted recovery와 file carving]] | `deleted recovery와 file carving` 관찰을 incident scope 관점에서 다시 본다. 확정 가능한 사실, confidence, telemetry gap을 각각 1개 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: 의심 VAD와 injected code 판단표
- 한 문장 요약: <!-- 작성 -->
- 가장 중요한 관찰 1개: <!-- 작성 -->
- 아직 확신할 수 없는 점 1개: <!-- 작성 -->
- 다음에 확인할 질문 2개:
  1. <!-- 작성 -->
  2. <!-- 작성 -->

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 DFIR/증거 분석 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| artifact provenance |  |
| 시간 기준 |  |
| actor/action/source |  |
| confidence와 한계 |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| VAD |  |  |  |  |
| vadinfo |  |  |  |  |
| malfind |  |  |  |  |
| memory permission |  |  |  |  |
| injected code |  |  |  |  |
| private memory |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `VAD와 malfind`을 확인하기 위한 최소 입력은 무엇인가?
   - 내 답: <!-- 작성 -->
2. 어떤 명령어 또는 도구를 먼저 써야 하는가?
   - 내 답: <!-- 작성 -->
3. 어떤 옵션을 추가해야 출력이 더 검증 가능해지는가?
   - 내 답: <!-- 작성 -->

### 참고한 명령어 후보

```bash
date
vol -h
vol -f <memory.raw> windows.pslist.PsList
vol -f <memory.raw> windows.pstree.PsTree
vol -f <memory.raw> windows.vadinfo.VadInfo --pid <pid>
vol -f <memory.raw> windows.netscan.NetScan
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

## 6. 증거 기반 Incident Note 초안

오늘 글은 `VAD와 malfind`에서 “증거가 말하는 것”과 “분석가의 해석”을 분리한다. `의심 VAD와 injected code 판단표`에는 timestamp, 출처, confidence, gap을 반드시 남긴다.

```text
Evidence Source: artifact 이름, 경로, 수집 방법을 적는다.
Timestamp: timezone, clock skew, 생성/수정/접근 의미를 구분한다.
Actor/Action: 누가 무엇을 했다고 볼 수 있는지 증거 기반으로 적는다.
Confidence: high/medium/low와 이유를 적는다.
Gap/Next: 아직 입증하지 못한 부분과 추가 수집 대상을 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 28 Day 05 | `VAD와 malfind`에서 확인한 static evidence 1개와 behavior evidence 1개를 분리해 적는다. 핵심어: VAD, vadinfo, malfind. |
| 3회차 후 | Week 29 Day 01 | `VAD와 malfind`의 behavior hypothesis가 IOC, TTP, detection idea 중 어디로 이어지는지 확인하고 false positive 가능성 1개를 적는다. |
| 7회차 후 | Week 29 Day 05 | `VAD와 malfind` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `의심 VAD와 injected code 판단표`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 증거 출처 | artifact 경로, 수집 방법, 무결성 단서를 기록했다. |
| [ ] | 시간 해석 | timezone, clock skew, 생성/수정/접근 의미를 구분했다. |
| [ ] | Timeline Row | actor/action/source/confidence가 있는 timeline row를 작성했다. |
| [ ] | Confidence | high/medium/low 판단과 이유를 적었다. |
| [ ] | Gap | 추가 수집이 필요한 telemetry gap을 명확히 남겼다. |
