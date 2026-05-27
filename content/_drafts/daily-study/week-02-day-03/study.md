---
title: "Week 02 Day 03: endianness, word size, alignment"
draft: true
---

# Week 02 Day 03: endianness, word size, alignment

## 오늘의 목표

오늘은 `endianness, word size, alignment`을 넓게 훑는 날이 아니라, 작은 입력이나 예제 하나로 관찰하고 기록하는 날이다. 오늘 끝나면 `endianness와 struct padding hex dump 비교`에 들어갈 최소 근거가 남아 있어야 한다.

오늘 하지 않을 것: 큰 수학 단원을 끝내려 하지 말고, 오늘 값 하나를 끝까지 추적한다.

1. 오늘 주제인 `endianness, word size, alignment`가 무엇을 다루는지 한 문장으로 적는다.
2. 핵심 키워드 `endianness`, `little-endian`, `big-endian`, `word size` 중 3개를 골라 "정의, 관찰 방법, 보안 분석에서의 쓰임" 형태로 정리한다.
3. Primary 자료는 1개만 고르고, 실제로 읽은 범위와 이해 안 된 문장 1개를 남긴다.
4. 실습을 실행한다. 도구가 없으면 설치부터 하지 말고, 필요한 입력/명령어/옵션/예상 출력을 먼저 설계한다.
5. 공부 후 결과물 worksheet `week-02-day-03/index.md`에 `endianness와 struct padding hex dump 비교` 초안을 채운다.
6. 성공 기준: 작은 값 3개를 골라 2진수/10진수/16진수/byte view/signedness 해석을 표로 연결한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 기초/시스템 개념

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | 제목과 키워드 3개를 보고 이미 아는 것/모르는 것 1개씩만 적는다. |
| minimum | 정의 1개와 작은 관찰 1개를 남긴다. |
| standard | 명령어 출력, 그림, 손계산 중 하나를 근거로 붙인다. |
| stretch | 나중에 pwn, RE, DFIR 중 어디서 다시 쓰이는지 연결한다. |
| 중단 후 복귀 | 새 자료를 열지 말고 endianness, word size, alignment에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최신 보안 논문은 주소, 타입, 로그, 재현 환경 같은 기초를 전제로 한다. 오늘은 나중에 논문을 읽을 때 막힐 prerequisite을 줄이는 날이다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 문서의 복습 질문 2개에 5-10분만 답한다. Week 01 Day 01처럼 이전 회차 문서가 없으면 오늘 제목과 핵심 키워드를 훑고 "이미 아는 것 3개 / 헷갈리는 것 3개"를 적는다. 공부 중 새로 모르는 용어는 Warm-up이 아니라 Review의 Unknown에 적는다.
- Core reading: 공부 자료 중 primary 1개만 고르고 실제 읽은 범위와 핵심 문장 3개, 이해 안 된 문장 1개를 기록한다.
- Lab: tool version, timezone, input path/hash, exact command, stdout/stderr, exit status를 남긴다.
- Writing: 오늘 배운 개념을 정의, 작은 예제, 보안에서 쓰이는 이유, 흔한 오해 1개로 설명한다.
- Review: 오늘 공부 중 끝까지 모르는 용어와 검증하지 못한 추정을 Unknown에 모으고, 다음 확인 방법을 적는다.

## 공부 자료

아래는 오늘의 후보 자료이다. 전부 읽지 않는다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽고, Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations 중 오늘 키워드와 맞는 10-15쪽
- 해커의 기쁨: 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- 컴퓨터시스템 딥다이브: bit, byte, integer representation 관련 절

### Reference
- C reference: stdint.h, limits.h, integer conversion, signed overflow
- Python int/bin/hex 문서 또는 짧은 REPL 실험
- xxd/file/stat man page: byte view 확인용

### 읽기 분량 기준
- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽을 목표로 한다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 실습 시간이 부족해지면 읽기를 멈추고, 읽은 범위와 모르는 문장을 worksheet에 남긴다.

## 자료 선택 규칙

오늘의 primary 추천: CS:APP 또는 해커의 기쁨에서 정수 표현/bit 연산과 직접 맞는 10-15쪽만 고른다.
- 아래 공부 자료는 전부 읽으라는 목록이 아니다. 오늘은 primary 자료 1개만 선택한다.
- 책을 고르면 실제 목표 범위를 쪽수나 절 제목으로 적고, 30-45분이 지나면 멈춘다.
- Reference는 실습 중 막히거나 용어가 불명확할 때 5-10분만 확인한다.
- 남은 시간은 실습 로그와 결과물 worksheet 작성에 쓴다.
- 자료를 다 읽지 못해도 결과물 worksheet에 읽은 범위, 모르는 문장, 다음 확인 질문을 남기면 성공으로 본다.

## 핵심 키워드

endianness, little-endian, big-endian, word size, alignment, struct padding, memory layout

## 반드시 정리할 개념

아래 표는 정답을 미리 외우기 위한 표가 아니다. 오늘 읽은 자료와 실습 출력으로 각 질문에 답하면서 결과물 worksheet에 내 말로 정리한다.

| 개념 | 오늘 확인할 질문 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| endianness | `endianness`가 같은 값을 다른 표현으로 읽을 때 어떤 차이를 만드는가? | 손계산, Python 출력, hex dump, 작은 C 코드 결과를 서로 비교한다. | integer bug, binary parsing, packet/format 해석 실수를 줄인다. |
| little-endian | `little-endian`가 같은 값을 다른 표현으로 읽을 때 어떤 차이를 만드는가? | 손계산, Python 출력, hex dump, 작은 C 코드 결과를 서로 비교한다. | integer bug, binary parsing, packet/format 해석 실수를 줄인다. |
| big-endian | `big-endian`가 같은 값을 다른 표현으로 읽을 때 어떤 차이를 만드는가? | 손계산, Python 출력, hex dump, 작은 C 코드 결과를 서로 비교한다. | integer bug, binary parsing, packet/format 해석 실수를 줄인다. |
| word size | `word size`가 같은 값을 다른 표현으로 읽을 때 어떤 차이를 만드는가? | 손계산, Python 출력, hex dump, 작은 C 코드 결과를 서로 비교한다. | integer bug, binary parsing, packet/format 해석 실수를 줄인다. |
| alignment | `alignment`가 같은 값을 다른 표현으로 읽을 때 어떤 차이를 만드는가? | 손계산, Python 출력, hex dump, 작은 C 코드 결과를 서로 비교한다. | integer bug, binary parsing, packet/format 해석 실수를 줄인다. |
| struct padding | `struct padding`가 같은 값을 다른 표현으로 읽을 때 어떤 차이를 만드는가? | 손계산, Python 출력, hex dump, 작은 C 코드 결과를 서로 비교한다. | integer bug, binary parsing, packet/format 해석 실수를 줄인다. |
| memory layout | `memory layout`가 같은 값을 다른 표현으로 읽을 때 어떤 차이를 만드는가? | 손계산, Python 출력, hex dump, 작은 C 코드 결과를 서로 비교한다. | integer bug, binary parsing, packet/format 해석 실수를 줄인다. |

## 실습

오늘 실습은 크게 벌리지 않는다. 아래 항목 중 오늘 산출물에 필요한 최소 범위만 수행하고, 실패하면 실패 로그를 그대로 남긴다.

- 작은 숫자 3개 또는 8-16 byte 입력 1개를 고르고 2진수/10진수/16진수/byte view를 비교한다.
- signed/unsigned 또는 endian 해석이 달라지는 지점을 하나 찾는다.
- 계산 결과와 도구 출력이 다르면 어느 단계에서 해석이 달라졌는지 적는다.

## 질문형 실습 프롬프트

아래 명령어는 모두 실행하라는 뜻이 아니다. 오늘 산출물에 필요한 것만 고르고, 환경에 없는 도구는 설치부터 하지 말고 어떤 역할의 도구가 필요한지만 적는다.

### 테스트 해 볼 명령어 후보

```bash
pwd
date
<tool> --version 또는 <tool> -V
python3 -c "print(hex(<number>), bin(<number>))"
printf "%x\n" <number>
xxd -g 1 -l 64 <input-file>
gcc -g -O0 <source.c> -o <program>
```

### 스스로 답할 질문

1. `endianness, word size, alignment`을 확인하기 위한 가장 작은 입력 파일, 샘플, 코드, 로그, 보고서 조각은 무엇인가?
2. 그 대상을 처음 확인할 때 어떤 명령어, 도구, 문서 항목을 먼저 봐야 할까?
3. 출력에 상세 정보, 줄 번호, hex view, filter, field, version 정보를 추가하려면 어떤 옵션이나 기록 항목이 필요할까?
4. 같은 값이 bit, byte, integer, signedness 관점에서 다르게 보이는 지점은 어디인가?
5. 오늘 결과를 블로그 글로 바꿀 때 공개하면 안 되는 경로, 샘플, 토큰, exploit detail, 개인정보는 무엇인가?

## 오늘 남길 산출물

- 강의 산출물: `endianness와 struct padding hex dump 비교`을 작성한다. 형태는 개념 설명, 작은 예제, 보안 연결이 모두 있는 mini lesson이다.
- 실습 증거: 오늘 사용한 명령, 로그, trace, screenshot, code diff 중 해당 주제에 맞는 근거를 최소 2개 남긴다.
- 글쓰기 산출물: 오늘 배운 개념을 정의, 작은 예제, 보안에서 쓰이는 이유, 흔한 오해 1개로 설명한다.
- 공개 판단: 공개 가능한 주장과 비공개로 남겨야 할 세부사항을 각각 1개 이상 표시한다.

## 산출물 체크 표

| 체크 | 항목 | 기준 |
|---|---|---|
| [ ] | 개념 정의 | 핵심 개념을 외운 문장이 아니라 내 말로 정의했다. |
| [ ] | 작은 예제 | 손으로 추적 가능한 예제를 하나 만들고 결과를 설명했다. |
| [ ] | 보안 연결 | exploit/reversing/malware/DFIR 중 최소 1개 활용처를 연결했다. |
| [ ] | 오해 제거 | 혼동하기 쉬운 개념이나 잘못된 직관을 하나 반박했다. |
| [ ] | 후속 질문 | 다음 실습에서 검증할 질문을 하나 남겼다. |

## 복습 질문

1. 오늘 주제 `endianness, word size, alignment`를 한 문장으로 설명하면 무엇인가?
2. `endianness`는 어떤 입력, 출력, field, instruction, artifact에서 확인했는가?
3. `little-endian`와 `big-endian`를 혼동하면 어떤 분석 오류가 생길 수 있는가?
4. 같은 값을 다른 진법, 크기, signedness로 읽으면 어떤 결론이 달라지는가?
5. 오늘 사용한 명령어, 옵션, 도구 version 중 재현성에 꼭 필요한 것은 무엇인가?
6. 오늘 결론에서 아직 Unknown으로 남겨야 하는 것은 무엇인가?
7. 오늘 산출물인 "endianness와 struct padding hex dump 비교"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
