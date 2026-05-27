---
title: "Week 23 Day 03: symbolic execution과 SMT 미니 예제"
draft: true
---

# Week 23 Day 03: symbolic execution과 SMT 미니 예제

## 오늘의 목표

오늘은 `symbolic execution과 SMT 미니 예제`을 넓게 훑는 날이 아니라, 작은 입력이나 예제 하나로 관찰하고 기록하는 날이다. 오늘 끝나면 `간단한 branch 조건을 Z3로 푼 미니 예제 노트`에 들어갈 최소 근거가 남아 있어야 한다.

오늘 하지 않을 것: 실제 바이너리 전체 symbolic execution을 시도하지 말고 5-20줄 미니 예제로 제한한다.

1. 오늘 주제인 `symbolic execution과 SMT 미니 예제`가 무엇을 다루는지 한 문장으로 적는다.
2. 핵심 키워드 `symbolic execution`, `SMT`, `constraint`, `Z3` 중 3개를 골라 "정의, 관찰 방법, 보안 분석에서의 쓰임" 형태로 정리한다.
3. Primary 자료는 1개만 고르고, 실제로 읽은 범위와 이해 안 된 문장 1개를 남긴다.
4. 실습을 실행한다. 도구가 없으면 설치부터 하지 말고, 필요한 입력/명령어/옵션/예상 출력을 먼저 설계한다.
5. 공부 후 결과물 worksheet `week-23-day-03/index.md`에 `간단한 branch 조건을 Z3로 푼 미니 예제 노트` 초안을 채운다.
6. 성공 기준: branch 조건 하나를 constraint로 쓰고, sat/unsat/model을 직접 확인한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 시스템 해킹/퍼징

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | target, input, crash/reproducer, mitigation 중 하나만 초점으로 고른다. |
| minimum | target/version, 입력, 기대 결과, 실제 결과를 적는다. |
| standard | crash/reproducer 또는 primitive 가설에 sanitizer/debugger/patch 근거를 붙인다. |
| stretch | root cause, mitigation, variant hypothesis 중 하나를 advisory-grade 문장으로 다듬는다. |
| 중단 후 복귀 | 새 자료를 열지 말고 symbolic execution과 SMT 미니 예제에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최근 시스템 해킹 연구는 coverage-guided fuzzing, directed fuzzing, stateful target modeling, sanitizer triage, patch diffing을 결합한다. 오늘은 공격 성공보다 root cause evidence와 재현성을 남긴다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 문서의 복습 질문 2개에 5-10분만 답한다. Week 01 Day 01처럼 이전 회차 문서가 없으면 오늘 제목과 핵심 키워드를 훑고 "이미 아는 것 3개 / 헷갈리는 것 3개"를 적는다. 공부 중 새로 모르는 용어는 Warm-up이 아니라 Review의 Unknown에 적는다.
- Core reading: 공부 자료 중 primary 1개만 고르고 실제 읽은 범위와 핵심 문장 3개, 이해 안 된 문장 1개를 기록한다.
- Lab: tool version, timezone, input path/hash, exact command, stdout/stderr, exit status를 남긴다.
- Writing: 대상/버전, trigger, root cause, primitive, mitigation 영향을 취약점 보고서 흐름으로 작성한다.
- Review: 오늘 공부 중 끝까지 모르는 용어와 검증하지 못한 추정을 Unknown에 모으고, 다음 확인 방법을 적는다.

## 공부 자료

아래는 오늘의 후보 자료이다. 전부 읽지 않는다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽고, Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- Z3Py guide: bit-vectors, constraints, solver model 읽기
- angr docs: symbolic execution, state, solver, constraints, CFGFast 개요 중 미니 예제
- 실전 바이너리 분석: symbolic execution 또는 automated analysis 개요 부분

### Reference
- SMT-LIB 또는 solver 개요 자료: sat/unsat/model 용어 확인용
- CS:APP 2장 integer/bit-vector: overflow와 bit-vector 의미 보충
- 작은 Python script: 조건식과 model 출력 기록용

### 읽기 분량 기준
- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽을 목표로 한다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 실습 시간이 부족해지면 읽기를 멈추고, 읽은 범위와 모르는 문장을 worksheet에 남긴다.

## 자료 선택 규칙

오늘의 primary 추천: Z3Py 또는 angr 문서 중 bit-vector constraint 또는 path condition 예제 하나만 고른다.
- 아래 공부 자료는 전부 읽으라는 목록이 아니다. 오늘은 primary 자료 1개만 선택한다.
- 책을 고르면 실제 목표 범위를 쪽수나 절 제목으로 적고, 30-45분이 지나면 멈춘다.
- Reference는 실습 중 막히거나 용어가 불명확할 때 5-10분만 확인한다.
- 남은 시간은 실습 로그와 결과물 worksheet 작성에 쓴다.
- 자료를 다 읽지 못해도 결과물 worksheet에 읽은 범위, 모르는 문장, 다음 확인 질문을 남기면 성공으로 본다.

## 핵심 키워드

symbolic execution, SMT, constraint, Z3, bit vector, path explosion, solver model

## 반드시 정리할 개념

아래 표는 정답을 미리 외우기 위한 표가 아니다. 오늘 읽은 자료와 실습 출력으로 각 질문에 답하면서 결과물 worksheet에 내 말로 정리한다.

| 개념 | 오늘 확인할 질문 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| symbolic execution | `symbolic execution`가 path condition이나 solver model에서 어떤 역할을 하는가? | Z3Py로 작은 조건식을 만들고 sat/unsat/model을 확인한다. | symbolic execution, path pruning, exploit input generation의 기초가 된다. |
| SMT | `SMT`가 path condition이나 solver model에서 어떤 역할을 하는가? | Z3Py로 작은 조건식을 만들고 sat/unsat/model을 확인한다. | symbolic execution, path pruning, exploit input generation의 기초가 된다. |
| constraint | `constraint`가 path condition이나 solver model에서 어떤 역할을 하는가? | Z3Py로 작은 조건식을 만들고 sat/unsat/model을 확인한다. | symbolic execution, path pruning, exploit input generation의 기초가 된다. |
| Z3 | `Z3`가 path condition이나 solver model에서 어떤 역할을 하는가? | Z3Py로 작은 조건식을 만들고 sat/unsat/model을 확인한다. | symbolic execution, path pruning, exploit input generation의 기초가 된다. |
| bit vector | `bit vector`가 path condition이나 solver model에서 어떤 역할을 하는가? | Z3Py로 작은 조건식을 만들고 sat/unsat/model을 확인한다. | symbolic execution, path pruning, exploit input generation의 기초가 된다. |
| path explosion | `path explosion`가 path condition이나 solver model에서 어떤 역할을 하는가? | Z3Py로 작은 조건식을 만들고 sat/unsat/model을 확인한다. | symbolic execution, path pruning, exploit input generation의 기초가 된다. |
| solver model | `solver model`가 path condition이나 solver model에서 어떤 역할을 하는가? | Z3Py로 작은 조건식을 만들고 sat/unsat/model을 확인한다. | symbolic execution, path pruning, exploit input generation의 기초가 된다. |

## 실습

오늘 실습은 크게 벌리지 않는다. 아래 항목 중 오늘 산출물에 필요한 최소 범위만 수행하고, 실패하면 실패 로그를 그대로 남긴다.

- if 조건이 1-2개인 작은 Python/Z3 예제 또는 toy C 조건을 고른다.
- constraint, solver result, model, 사람이 기대한 입력을 비교한다.
- path explosion이나 false assumption이 생길 수 있는 지점을 Unknown으로 남긴다.

## 질문형 실습 프롬프트

아래 명령어는 모두 실행하라는 뜻이 아니다. 오늘 산출물에 필요한 것만 고르고, 환경에 없는 도구는 설치부터 하지 말고 어떤 역할의 도구가 필요한지만 적는다.

### 테스트 해 볼 명령어 후보

```bash
pwd
date
<tool> --version 또는 <tool> -V
python3 - <<'PY'
from z3 import *
x = BitVec("x", 32)
s = Solver()
s.add((x ^ 0x55) == 0x10)
print(s.check())
print(s.model())
PY
python3 <z3-mini.py>
```

### 스스로 답할 질문

1. `symbolic execution과 SMT 미니 예제`을 확인하기 위한 가장 작은 입력 파일, 샘플, 코드, 로그, 보고서 조각은 무엇인가?
2. 그 대상을 처음 확인할 때 어떤 명령어, 도구, 문서 항목을 먼저 봐야 할까?
3. 출력에 상세 정보, 줄 번호, hex view, filter, field, version 정보를 추가하려면 어떤 옵션이나 기록 항목이 필요할까?
4. solver model이 실제 프로그램 입력으로 바로 쓸 수 있는 값인지 어떤 추가 검증이 필요한가?
5. 오늘 결과를 블로그 글로 바꿀 때 공개하면 안 되는 경로, 샘플, 토큰, exploit detail, 개인정보는 무엇인가?

## 오늘 남길 산출물

- 강의 산출물: `간단한 branch 조건을 Z3로 푼 미니 예제 노트`을 작성한다. 형태는 target, trigger, root cause, primitive가 있는 vulnerability note이다.
- 실습 증거: 오늘 사용한 명령, 로그, trace, screenshot, code diff 중 해당 주제에 맞는 근거를 최소 2개 남긴다.
- 글쓰기 산출물: 대상/버전, trigger, root cause, primitive, mitigation 영향을 취약점 보고서 흐름으로 작성한다.
- 공개 판단: 공개 가능한 주장과 비공개로 남겨야 할 세부사항을 각각 1개 이상 표시한다.

## 산출물 체크 표

| 체크 | 항목 | 기준 |
|---|---|---|
| [ ] | Target 고정 | 제품/버전/build/환경을 재현 가능하게 고정했다. |
| [ ] | Trigger 보존 | crash, PoC 입력, sanitizer finding, log를 보존했다. |
| [ ] | Root Cause | bounds/lifetime/type/race/logic flaw 중 원인 후보를 좁혔다. |
| [ ] | Primitive 판단 | DoS/info leak/read/write/control-flow 중 실제 효과를 구분했다. |
| [ ] | Mitigation 영향 | 완화책이 exploitability와 재현성에 미치는 영향을 적었다. |

## 복습 질문

1. 오늘 주제 `symbolic execution과 SMT 미니 예제`를 한 문장으로 설명하면 무엇인가?
2. `symbolic execution`는 어떤 입력, 출력, field, instruction, artifact에서 확인했는가?
3. `SMT`와 `constraint`를 혼동하면 어떤 분석 오류가 생길 수 있는가?
4. constraint, path condition, solver model을 구분하면 symbolic execution 결과 해석이 어떻게 명확해지는가?
5. 오늘 사용한 명령어, 옵션, 도구 version 중 재현성에 꼭 필요한 것은 무엇인가?
6. 오늘 결론에서 아직 Unknown으로 남겨야 하는 것은 무엇인가?
7. 오늘 산출물인 "간단한 branch 조건을 Z3로 푼 미니 예제 노트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
