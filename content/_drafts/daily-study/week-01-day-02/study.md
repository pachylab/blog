---
title: "Week 01 Day 02: bit/byte와 진수 변환"
draft: true
---

# Week 01 Day 02: bit/byte와 진수 변환

## 오늘의 목표

오늘의 초점은 `bit/byte와 진수 변환` 전체를 넓게 훑는 것이 아니다. 오늘 끝나면 완성해야 할 산출물은 `2진수/10진수/16진수 변환표와 hex dump 해석 예시`이다.

오늘 하지 않을 것: 오늘은 signed/unsigned, two's complement를 깊게 들어가지 않는다. 값 표현과 hex dump 읽기에 집중한다.

1. bit, nibble, byte의 크기 관계를 손으로 설명한다.
2. 10진수, 2진수, 16진수 표기가 같은 값을 다르게 표현한다는 점을 확인한다.
3. hex dump의 offset, hex byte, ASCII column을 구분한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 기초/시스템 개념

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | 제목과 키워드 3개를 보고 이미 아는 것/모르는 것 1개씩만 적는다. |
| minimum | 정의 1개와 작은 관찰 1개를 남긴다. |
| standard | 명령어 출력, 그림, 손계산 중 하나를 근거로 붙인다. |
| stretch | 나중에 pwn, RE, DFIR 중 어디서 다시 쓰이는지 연결한다. |
| 중단 후 복귀 | 새 자료를 열지 말고 bit/byte와 진수 변환에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최신 보안 논문은 주소, 타입, 로그, 재현 환경 같은 기초를 전제로 한다. 오늘은 나중에 논문을 읽을 때 막힐 prerequisite을 줄이는 날이다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 복습 질문 2개에 5-10분만 답한다. 새로 모르는 용어는 Warm-up에 억지로 쓰지 말고 Review의 Unknown에 모은다.
- Core reading: Primary 후보 중 1개만 고르고 실제 읽은 범위를 쓴다. 이해 안 된 문장 1개를 그대로 옮겨 적고, 왜 막혔는지 적는다.
- Lab: 오늘 실습에서 생성하거나 사용한 파일, 명령어, 출력, tool version, timezone, exit status를 남긴다.
- Writing: 오늘 배운 개념을 정의, 작은 예제, 보안에서 쓰이는 이유, 흔한 오해 1개로 설명한다.
- Review: Fact, Inference, Unknown을 분리하고 다음 확인 질문을 남긴다.

## 공부 자료

아래 자료는 전부 읽는 목록이 아니다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽는다. Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- CS:APP 3e: 2.1 Information Storage 중 bit/byte와 hexadecimal notation 부분 6-10쪽
- [OpenStax Introduction to Computer Science 5.3](https://openstax.org/books/introduction-computer-science/pages/5-3-machine-level-information-representation): machine-level representation 개요
- [Princeton IntroCS - Representing Information](https://introcs.cs.princeton.edu/java/61data/): binary, decimal, hexadecimal 변환 설명

### Reference
- [Ubuntu xxd manpage](https://manpages.ubuntu.com/manpages/resolute/man1/xxd.1.html): hex dump 출력 읽기
- [GNU Coreutils Manual](https://www.gnu.org/software/coreutils/manual/coreutils.html): `printf`, checksum, file utility 참고
- 해커의 기쁨: 1장 Introduction, 2장 Basics 중 bit 연산 맛보기

### 읽기 분량 기준

- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽만 읽는다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 자료를 다 읽지 못해도 읽은 범위, 막힌 문장, 다음 질문을 worksheet에 남기면 성공으로 본다.

## 핵심 키워드

bit/byte, binary, decimal, hexadecimal, nibble, base conversion, hex dump, ASCII view

## 반드시 정리할 개념

| 개념 | 오늘 정리할 내용 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| bit | 0 또는 1 하나를 담는 가장 작은 정보 단위다. | 1비트, 2비트, 4비트, 8비트가 표현할 수 있는 값 개수를 직접 계산한다. | 권한 flag, bit mask, network/protocol field 해석의 출발점이다. |
| byte | 일반적으로 8bit이며 hex 두 자리로 표현할 수 있다. | `xxd -g 1` 출력에서 byte 단위가 어떻게 보이는지 확인한다. | 파일 포맷, shellcode, packet payload를 읽을 때 기본 단위가 된다. |
| nibble | 4bit이며 hex 한 자리와 정확히 대응된다. | 0x0부터 0xf까지 4bit 표를 만든다. | hex dump를 binary로 빠르게 바꾸는 기준이 된다. |
| ASCII view | byte 값을 사람이 읽을 수 있는 문자로 해석한 보조 view다. | `A`, `0`, newline 같은 문자를 hex 값과 비교한다. | 문자열 추출, malware string triage, protocol payload 확인에 쓰인다. |

## 실습

- 값 `65`, `255`, `0x41`, `0xff`를 2진수/10진수/16진수로 바꿔 표를 만든다.
- `ABC
`을 파일로 만들고 `xxd -g 1`로 offset, hex byte, ASCII column을 표시한다.
- hex 한 자리, 두 자리, 네 자리가 각각 몇 bit/byte를 나타내는지 손으로 설명한다.

## 질문형 실습 프롬프트

아래 질문은 답을 외우기 위한 것이 아니라, 오늘 실습 로그를 채우기 위한 질문이다. 질문마다 실제 출력이나 손계산 근거를 하나 이상 붙인다.

1. `65`, `0x41`, `01000001`은 같은 값인가, 다른 값인가? 근거는 무엇인가?
2. hex dump에서 왼쪽 offset, 가운데 byte, 오른쪽 ASCII column은 각각 무엇을 뜻하는가?
3. hex 한 자리와 4bit가 대응되는 이유를 0부터 15까지의 표로 설명할 수 있는가?
4. 문자 `A`와 byte `0x41`을 같은 것으로 말하면 언제 맞고 언제 위험한가?
5. 오늘 만든 변환표가 악성코드 문자열이나 패킷 payload를 읽을 때 어떻게 재사용될 수 있을까?

### 테스트 해 볼 명령어 후보

```bash
python3 -c "for n in [65, 255, 0x41, 0xff]: print(n, bin(n), hex(n))"
printf "ABC\n" > week01-bytes.bin
xxd -g 1 week01-bytes.bin
xxd -g 1 -c 4 week01-bytes.bin
python3 -c "print(bytes([0x41, 0x42, 0x43, 0x0a]))"
```

## 글쓰기 훈련

### 예시로 설명하기

오늘은 추상 개념을 예시 하나로 설명하는 연습을 한다. `0x41` 또는 `ABC\n` 하나를 골라 숫자, byte, 문자 관점이 어떻게 다른지 6-8문장으로 쓴다.

- 내가 고른 예시는 ___ 이다.
- 10진수로 보면 ___ 이고, 2진수로 보면 ___ 이며, 16진수로 보면 ___ 이다.
- hex dump에서는 ___ 처럼 보였다.
- ASCII column에서는 ___ 로 보였는데, 이것은 ___ 라는 해석이다.
- 이 예시는 byte와 문자 해석이 같지 않다는 점을 보여준다.
- 보안 분석에서는 이 차이를 모르면 ___ 를 잘못 해석할 수 있다.

## 오늘 남길 산출물

- 강의 산출물: `2진수/10진수/16진수 변환표와 hex dump 해석 예시`을 작성한다. 형태는 개념 설명, 작은 예제, 보안 연결이 모두 있는 mini lesson이다.
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

1. 1 byte는 몇 bit이며, hex 몇 자리로 표현되는가?
2. nibble이 hex 읽기에 유용한 이유는 무엇인가?
3. hex dump의 offset은 파일 안의 무엇을 가리키는가?
4. ASCII view는 원본 byte 자체인가, 해석인가?
5. 오늘 변환표에서 가장 헷갈린 값 하나와 그 이유는 무엇인가?
