---
title: "Week 19 Day 02: stack overflow와 buffer overflow 결과물 Worksheet"
draft: true
---

# Week 19 Day 02: stack overflow와 buffer overflow 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-19-day-02/study|Week 19 Day 02: stack overflow와 buffer overflow]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | stack overflow와 buffer overflow |
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
| 1회차 전 | [[_drafts/daily-study/week-19-day-01/index|Week 19 Day 01: vulnerability, exploit, exploit primitive]] | `vulnerability, exploit, exploit primitive`에서 기록한 target, input, observed result를 노트 없이 적고, 증상과 root cause 가설을 분리한다. 핵심어: vulnerability, exploit, exploit primitive. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-18-day-05/index|Week 18 Day 05: exfiltration pattern과 session reconstruction]] | `exfiltration pattern과 session reconstruction`의 field 관찰을 탐지 조건 1개로 바꾸고, 필요한 data source와 오탐 가능성을 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-18-day-01/index|Week 18 Day 01: C2 architecture와 payload staging]] | `C2 architecture와 payload staging` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: stack overflow 메모리 그림
- 한 문장 요약: <!-- 작성 -->
- 가장 중요한 관찰 1개: <!-- 작성 -->
- 아직 확신할 수 없는 점 1개: <!-- 작성 -->
- 다음에 확인할 질문 2개:
  1. <!-- 작성 -->
  2. <!-- 작성 -->

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 시스템 해킹/퍼징 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| target/version |  |
| input/reproducer |  |
| root cause/primitive |  |
| mitigation/variant |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| stack overflow |  |  |  |  |
| buffer overflow |  |  |  |  |
| stack frame |  |  |  |  |
| local buffer |  |  |  |  |
| saved RBP |  |  |  |  |
| return address overwrite |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `stack overflow와 buffer overflow`을 확인하기 위한 최소 입력은 무엇인가?
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
checksec --file=./<target>
gdb -q ./<target>
python3 - <<'PY'
from pwn import *
print(cyclic(64))
PY
./<target> < <input-file>
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

## 6. 취약점 분석 Writeup 초안

오늘 글은 `stack overflow와 buffer overflow` 주제를 “target -> trigger -> root cause -> primitive -> mitigation” 흐름으로 작성한다. `stack overflow 메모리 그림`은 CVE 후보 보고서처럼 재현 가능성과 한계를 분명히 적는 것이 기준이다.

```text
Target/Version: 분석 대상과 버전을 고정한다.
Trigger: crash, misbehavior, sanitizer finding, PoC 입력 중 재현 단서를 적는다.
Root Cause: bounds, lifetime, type confusion, race, logic flaw 중 원인 후보를 적는다.
Primitive: read/write, control-flow, info leak, DoS 중 실제 가능한 효과를 구분한다.
Mitigation/Next: 완화책 영향과 다음 검증 실험 1개를 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 19 Day 03 | `stack overflow와 buffer overflow`에서 기록한 target, input, observed result를 노트 없이 적고, 증상과 root cause 가설을 분리한다. 핵심어: stack overflow, buffer overflow, stack frame. |
| 3회차 후 | Week 19 Day 05 | `stack overflow와 buffer overflow`의 reproducer나 입력 예제가 root cause를 설명하는지 다시 본다. 부족하면 debugger, sanitizer, patch 근거 중 필요한 것 1개를 적는다. |
| 7회차 후 | Week 20 Day 03 | `stack overflow와 buffer overflow`에서 다룬 관찰을 같은 bug class를 찾는 variant hypothesis 1개와 연결하고, 공개 가능한 writeup 문장 1개로 정리한다. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `stack overflow 메모리 그림`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | Target 고정 | 제품/버전/build/환경을 재현 가능하게 고정했다. |
| [ ] | Trigger 보존 | crash, PoC 입력, sanitizer finding, log를 보존했다. |
| [ ] | Root Cause | bounds/lifetime/type/race/logic flaw 중 원인 후보를 좁혔다. |
| [ ] | Primitive 판단 | DoS/info leak/read/write/control-flow 중 실제 효과를 구분했다. |
| [ ] | Mitigation 영향 | 완화책이 exploitability와 재현성에 미치는 영향을 적었다. |
