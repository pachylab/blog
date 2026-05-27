---
title: "Week 07 Day 02: symbol, relocation, debug information"
draft: true
---

# Week 07 Day 02: symbol, relocation, debug information

## 오늘의 목표

오늘은 `symbol, relocation, debug information`을 넓게 훑는 날이 아니라, 작은 입력이나 예제 하나로 관찰하고 기록하는 날이다. 오늘 끝나면 `nm/readelf/objdump로 본 symbol과 relocation 표`에 들어갈 최소 근거가 남아 있어야 한다.

오늘 하지 않을 것: 컴파일러 이론 전체가 아니라 오늘 관찰할 artifact 하나만 본다.

1. 오늘 주제인 `symbol, relocation, debug information`가 무엇을 다루는지 한 문장으로 적는다.
2. 핵심 키워드 `symbol`, `symbol table`, `relocation`, `debug information` 중 3개를 골라 "정의, 관찰 방법, 보안 분석에서의 쓰임" 형태로 정리한다.
3. Primary 자료는 1개만 고르고, 실제로 읽은 범위와 이해 안 된 문장 1개를 남긴다.
4. 실습을 실행한다. 도구가 없으면 설치부터 하지 말고, 필요한 입력/명령어/옵션/예상 출력을 먼저 설계한다.
5. 공부 후 결과물 worksheet `week-07-day-02/index.md`에 `nm/readelf/objdump로 본 symbol과 relocation 표` 초안을 채운다.
6. 성공 기준: source, object/binary, symbol/relocation/debug info 중 2개 이상을 연결한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 기초/시스템 개념

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | 제목과 키워드 3개를 보고 이미 아는 것/모르는 것 1개씩만 적는다. |
| minimum | 정의 1개와 작은 관찰 1개를 남긴다. |
| standard | 명령어 출력, 그림, 손계산 중 하나를 근거로 붙인다. |
| stretch | 나중에 pwn, RE, DFIR 중 어디서 다시 쓰이는지 연결한다. |
| 중단 후 복귀 | 새 자료를 열지 말고 symbol, relocation, debug information에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최신 보안 논문은 주소, 타입, 로그, 재현 환경 같은 기초를 전제로 한다. 오늘은 나중에 논문을 읽을 때 막힐 prerequisite을 줄이는 날이다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 문서의 복습 질문 2개에 5-10분만 답한다. Week 01 Day 01처럼 이전 회차 문서가 없으면 오늘 제목과 핵심 키워드를 훑고 "이미 아는 것 3개 / 헷갈리는 것 3개"를 적는다. 공부 중 새로 모르는 용어는 Warm-up이 아니라 Review의 Unknown에 적는다.
- Core reading: 공부 자료 중 primary 1개만 고르고 실제 읽은 범위와 핵심 문장 3개, 이해 안 된 문장 1개를 기록한다.
- Lab: tool version, timezone, input path/hash, exact command, stdout/stderr, exit status를 남긴다.
- Writing: 소스 코드와 실제 실행 결과가 달라지는 지점을 코드, 메모리, 컴파일 결과 기준으로 설명한다.
- Review: 오늘 공부 중 끝까지 모르는 용어와 검증하지 못한 추정을 Unknown에 모으고, 다음 확인 방법을 적는다.

## 공부 자료

아래는 오늘의 후보 자료이다. 전부 읽지 않는다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽고, Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- CS:APP 3e: 7장 Linking 중 symbol, relocation, object file 관련 절
- 실전 바이너리 분석: compiler output, symbol, relocation, binary analysis 관련 절
- LLD docs 또는 Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 글 1개

### Reference
- LLVM docs: IR, basic block, CFG, SSA form 개요
- Crafting Interpreters: bytecode VM, compiler, runtime 관련 장
- DWARF/PDB overview: debug information과 line table 확인용

### 읽기 분량 기준
- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽을 목표로 한다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 실습 시간이 부족해지면 읽기를 멈추고, 읽은 범위와 모르는 문장을 worksheet에 남긴다.

## 자료 선택 규칙

오늘의 primary 추천: compiler/linker/loader 또는 IR/CFG 자료 중 오늘 pipeline 한 단계만 고른다.
- 아래 공부 자료는 전부 읽으라는 목록이 아니다. 오늘은 primary 자료 1개만 선택한다.
- 책을 고르면 실제 목표 범위를 쪽수나 절 제목으로 적고, 30-45분이 지나면 멈춘다.
- Reference는 실습 중 막히거나 용어가 불명확할 때 5-10분만 확인한다.
- 남은 시간은 실습 로그와 결과물 worksheet 작성에 쓴다.
- 자료를 다 읽지 못해도 결과물 worksheet에 읽은 범위, 모르는 문장, 다음 확인 질문을 남기면 성공으로 본다.

## 핵심 키워드

symbol, symbol table, relocation, debug information, PDB, DWARF, line table

## 반드시 정리할 개념

아래 표는 정답을 미리 외우기 위한 표가 아니다. 오늘 읽은 자료와 실습 출력으로 각 질문에 답하면서 결과물 worksheet에 내 말로 정리한다.

| 개념 | 오늘 확인할 질문 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| symbol | `symbol`가 build pipeline의 어느 단계에서 생기는 artifact인가? | source, object file, symbol table, relocation, disassembly 중 2개를 비교한다. | decompiler output, reverse engineering, patch diffing, loader behavior 해석에 필요하다. |
| symbol table | `symbol table`가 build pipeline의 어느 단계에서 생기는 artifact인가? | source, object file, symbol table, relocation, disassembly 중 2개를 비교한다. | decompiler output, reverse engineering, patch diffing, loader behavior 해석에 필요하다. |
| relocation | `relocation`가 build pipeline의 어느 단계에서 생기는 artifact인가? | source, object file, symbol table, relocation, disassembly 중 2개를 비교한다. | decompiler output, reverse engineering, patch diffing, loader behavior 해석에 필요하다. |
| debug information | `debug information`가 build pipeline의 어느 단계에서 생기는 artifact인가? | source, object file, symbol table, relocation, disassembly 중 2개를 비교한다. | decompiler output, reverse engineering, patch diffing, loader behavior 해석에 필요하다. |
| PDB | `PDB`가 build pipeline의 어느 단계에서 생기는 artifact인가? | source, object file, symbol table, relocation, disassembly 중 2개를 비교한다. | decompiler output, reverse engineering, patch diffing, loader behavior 해석에 필요하다. |
| DWARF | `DWARF`가 build pipeline의 어느 단계에서 생기는 artifact인가? | source, object file, symbol table, relocation, disassembly 중 2개를 비교한다. | decompiler output, reverse engineering, patch diffing, loader behavior 해석에 필요하다. |
| line table | `line table`가 build pipeline의 어느 단계에서 생기는 artifact인가? | source, object file, symbol table, relocation, disassembly 중 2개를 비교한다. | decompiler output, reverse engineering, patch diffing, loader behavior 해석에 필요하다. |

## 실습

오늘 실습은 크게 벌리지 않는다. 아래 항목 중 오늘 산출물에 필요한 최소 범위만 수행하고, 실패하면 실패 로그를 그대로 남긴다.

- 작은 소스 파일 하나를 compile/assemble/link 단계로 나눠 관찰한다.
- symbol table, relocation, debug info, binary section 중 오늘 주제와 맞는 출력 하나를 기록한다.
- optimization level을 바꾸면 decompiler/disassembly가 어떻게 달라지는지 한 가지 관찰한다.

## 질문형 실습 프롬프트

아래 명령어는 모두 실행하라는 뜻이 아니다. 오늘 산출물에 필요한 것만 고르고, 환경에 없는 도구는 설치부터 하지 말고 어떤 역할의 도구가 필요한지만 적는다.

### 테스트 해 볼 명령어 후보

```bash
pwd
date
<tool> --version 또는 <tool> -V
gcc -c -g -O0 <source.c> -o <source.o>
gcc -g -O0 <source.o> -o <program>
readelf -s <source.o> | head
readelf -r <source.o> | head
objdump -d ./<program> | head
```

### 스스로 답할 질문

1. `symbol, relocation, debug information`을 확인하기 위한 가장 작은 입력 파일, 샘플, 코드, 로그, 보고서 조각은 무엇인가?
2. 그 대상을 처음 확인할 때 어떤 명령어, 도구, 문서 항목을 먼저 봐야 할까?
3. 출력에 상세 정보, 줄 번호, hex view, filter, field, version 정보를 추가하려면 어떤 옵션이나 기록 항목이 필요할까?
4. 오늘 artifact가 compiler, assembler, linker, loader 중 어느 단계에서 만들어졌는가?
5. 오늘 결과를 블로그 글로 바꿀 때 공개하면 안 되는 경로, 샘플, 토큰, exploit detail, 개인정보는 무엇인가?

## 오늘 남길 산출물

- 강의 산출물: `nm/readelf/objdump로 본 symbol과 relocation 표`을 작성한다. 형태는 코드, 빌드 조건, 실행 관찰이 있는 code-to-runtime note이다.
- 실습 증거: 오늘 사용한 명령, 로그, trace, screenshot, code diff 중 해당 주제에 맞는 근거를 최소 2개 남긴다.
- 글쓰기 산출물: 소스 코드와 실제 실행 결과가 달라지는 지점을 코드, 메모리, 컴파일 결과 기준으로 설명한다.
- 공개 판단: 공개 가능한 주장과 비공개로 남겨야 할 세부사항을 각각 1개 이상 표시한다.

## 산출물 체크 표

| 체크 | 항목 | 기준 |
|---|---|---|
| [ ] | 코드 조각 | 분석에 필요한 최소 코드나 의사코드를 남겼다. |
| [ ] | 빌드 조건 | 컴파일러, flag, architecture, warning을 기록했다. |
| [ ] | 실행 근거 | objdump/gdb/output 등 실행 관찰 증거를 포함했다. |
| [ ] | 차이 원인 | 타입, ABI, 최적화, UB 중 관련 원인을 구분했다. |
| [ ] | 보안 영향 | bug class 또는 exploit primitive 가능성을 판단했다. |

## 복습 질문

1. 오늘 주제 `symbol, relocation, debug information`를 한 문장으로 설명하면 무엇인가?
2. `symbol`는 어떤 입력, 출력, field, instruction, artifact에서 확인했는가?
3. `symbol table`와 `relocation`를 혼동하면 어떤 분석 오류가 생길 수 있는가?
4. symbol, relocation, debug information을 구분하지 못하면 reversing에서 어떤 해석 오류가 생기는가?
5. 오늘 사용한 명령어, 옵션, 도구 version 중 재현성에 꼭 필요한 것은 무엇인가?
6. 오늘 결론에서 아직 Unknown으로 남겨야 하는 것은 무엇인가?
7. 오늘 산출물인 "nm/readelf/objdump로 본 symbol과 relocation 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
