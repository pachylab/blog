---
title: "Week 13 Day 04: Frida와 API tracing 결과물 Worksheet"
draft: true
---

# Week 13 Day 04: Frida와 API tracing 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-13-day-04/study|Week 13 Day 04: Frida와 API tracing]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | Frida와 API tracing |
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
| 1회차 전 | [[_drafts/daily-study/week-13-day-03/index|Week 13 Day 03: x64dbg와 WinDbg 기본]] | `x64dbg와 WinDbg 기본`에서 확인한 static evidence 1개와 behavior evidence 1개를 분리해 적는다. 핵심어: x64dbg, WinDbg, symbols. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-13-day-01/index|Week 13 Day 01: GDB/IDA debugger: breakpoint와 single-step]] | `GDB/IDA debugger: breakpoint와 single-step`의 behavior hypothesis가 IOC, TTP, detection idea 중 어디로 이어지는지 확인하고 false positive 가능성 1개를 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-12-day-03/index|Week 12 Day 03: xref와 function boundary]] | `xref와 function boundary` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: 간단한 API hook 스크립트와 로그
- 한 문장 요약: <!-- 작성 -->
- 가장 중요한 관찰 1개: <!-- 작성 -->
- 아직 확신할 수 없는 점 1개: <!-- 작성 -->
- 다음에 확인할 질문 2개:
  1. <!-- 작성 -->
  2. <!-- 작성 -->

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 리버싱/바이너리 분석 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| 분석 단위 |  |
| 자동 추정 |  |
| 직접 확인한 근거 |  |
| rename/type 가설 |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| Frida |  |  |  |  |
| API tracing |  |  |  |  |
| Interceptor.attach |  |  |  |  |
| hooking |  |  |  |  |
| argument logging |  |  |  |  |
| return value |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `Frida와 API tracing`을 확인하기 위한 최소 입력은 무엇인가?
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
file <binary>
strings -a <binary> | head
objdump -d <binary> | head
readelf -s <binary> | head
gdb -q <binary>
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

## 6. 리버싱 관찰 리포트 초안

오늘 글은 `Frida와 API tracing`에 대해 “무엇을 봤는가”와 “무엇을 추정했는가”를 분리한다. `간단한 API hook 스크립트와 로그`에는 함수 이름, xref, 문자열, 동적 trace 중 최소 2종류의 근거를 포함한다.

```text
대상 식별: 파일명, hash, format, architecture를 적는다.
정적 근거: 문자열, import, xref, CFG, decompiler output 중 핵심 근거를 적는다.
동적 근거: breakpoint, trace, memory/register 변화 중 확인한 사실을 적는다.
가설: 함수 역할 또는 데이터 흐름에 대한 해석을 한 문단으로 적는다.
불확실성: decompiler 착시, 최적화, anti-analysis 가능성 중 남은 위험을 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 13 Day 05 | `Frida와 API tracing`에서 확인한 static evidence 1개와 behavior evidence 1개를 분리해 적는다. 핵심어: Frida, API tracing, Interceptor.attach. |
| 3회차 후 | Week 14 Day 01 | `Frida와 API tracing`의 behavior hypothesis가 IOC, TTP, detection idea 중 어디로 이어지는지 확인하고 false positive 가능성 1개를 적는다. |
| 7회차 후 | Week 14 Day 05 | `Frida와 API tracing` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `간단한 API hook 스크립트와 로그`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 대상 식별 | 파일 형식, architecture, hash 또는 빌드 단서를 기록했다. |
| [ ] | 정적 근거 | string/import/xref/CFG/decompiler 근거를 남겼다. |
| [ ] | 동적 근거 | breakpoint/trace/register/memory 변화 중 하나 이상을 확인했다. |
| [ ] | 가설 검증 | 함수 역할이나 데이터 흐름 가설을 근거로 갱신했다. |
| [ ] | 불확실성 | decompiler 착시, 최적화, anti-analysis 가능성을 표시했다. |
