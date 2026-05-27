---
title: "Week 01 Day 05: C 프로그램과 메모리 영역 맛보기"
draft: true
---

# Week 01 Day 05: C 프로그램과 메모리 영역 맛보기

## 오늘의 목표

오늘의 초점은 `C 프로그램과 메모리 영역 맛보기` 전체를 넓게 훑는 것이 아니다. 오늘 끝나면 완성해야 할 산출물은 `간단한 C 프로그램의 주소 출력과 영역별 해석`이다.

오늘 하지 않을 것: 오늘은 exploit, buffer overflow, ROP로 넘어가지 않는다. C 객체의 lifetime과 주소 관찰만 한다.

1. C 변수의 storage duration과 흔히 말하는 stack/heap/global 영역을 구분한다.
2. 작은 C 프로그램을 컴파일하고 주소 출력 결과를 관찰한다.
3. 주소 출력만으로 확정할 수 있는 것과 아직 추정인 것을 분리한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 기초/시스템 개념

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | 제목과 키워드 3개를 보고 이미 아는 것/모르는 것 1개씩만 적는다. |
| minimum | 정의 1개와 작은 관찰 1개를 남긴다. |
| standard | 명령어 출력, 그림, 손계산 중 하나를 근거로 붙인다. |
| stretch | 나중에 pwn, RE, DFIR 중 어디서 다시 쓰이는지 연결한다. |
| 중단 후 복귀 | 새 자료를 열지 말고 C 프로그램과 메모리 영역 맛보기에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

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
- [cppreference - C storage-class specifiers](https://en.cppreference.com/w/c/language/storage_class_specifiers.html): static/automatic storage duration 확인
- [cppreference - C object lifetime](https://en.cppreference.com/w/c/language/lifetime.html): object lifetime 개념 확인
- K&R C 또는 모던 C: 변수, pointer, malloc/free가 나오는 짧은 절

### Reference
- CS:APP 3e: 3장 machine-level programs, 9장 memory 개요 중 주소와 memory mapping 관련 부분
- 전문가를 위한 C: pointer와 memory allocation 관련 절
- man pages: malloc, free, printf, cc/clang/gcc

### 읽기 분량 기준

- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽만 읽는다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 자료를 다 읽지 못해도 읽은 범위, 막힌 문장, 다음 질문을 worksheet에 남기면 성공으로 본다.

## 핵심 키워드

C program, compiler, memory address, stack, heap, global data, pointer intro

## 반드시 정리할 개념

| 개념 | 오늘 정리할 내용 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| automatic storage duration | block에 들어갈 때 생기고 block을 나갈 때 lifetime이 끝나는 객체의 duration이다. | local variable 주소를 출력한다. | stack frame, dangling pointer, local buffer 해석의 기초가 된다. |
| static storage duration | 프로그램 시작부터 종료까지 lifetime이 유지되는 객체의 duration이다. | global 변수와 static local 변수 주소를 비교한다. | global data, BSS/data section, malware global config 해석에 연결된다. |
| allocated storage duration | malloc 같은 allocation function으로 얻고 free로 끝나는 duration이다. | malloc pointer 주소를 출력하고 free 위치를 기록한다. | heap bug, UAF, memory leak 분석의 기초다. |
| pointer | 객체의 주소를 값으로 담는 변수다. | `%p`로 주소를 출력하고 `&var`와 pointer value를 비교한다. | 리버싱, crash 분석, exploit primitive 이해에 필요하다. |

## 실습

- 아래 예시와 비슷한 20줄 이하 C 프로그램을 만든다: global 변수, local 변수, static local 변수, malloc으로 받은 버퍼의 주소를 출력한다.
- `cc -Wall -Wextra -g -O0`로 컴파일하고 실행 결과를 두 번 이상 비교한다.
- 주소가 매번 같거나 달라지는 항목을 표로 적되, 원인을 단정하지 말고 가능한 설명을 함께 적는다.

### 실습 코드 예시

```c
#include <stdio.h>
#include <stdlib.h>

int global_value = 7;

int main(void) {
    int local_value = 3;
    static int static_local = 5;
    int *heap_value = malloc(sizeof(int));
    if (heap_value == NULL) return 1;
    *heap_value = 9;

    printf("global      %p\n", (void *)&global_value);
    printf("static local %p\n", (void *)&static_local);
    printf("local       %p\n", (void *)&local_value);
    printf("heap        %p\n", (void *)heap_value);

    free(heap_value);
    return 0;
}
```

## 질문형 실습 프롬프트

아래 질문은 답을 외우기 위한 것이 아니라, 오늘 실습 로그를 채우기 위한 질문이다. 질문마다 실제 출력이나 손계산 근거를 하나 이상 붙인다.

1. 내 코드에서 automatic, static, allocated storage duration에 해당하는 변수는 각각 무엇인가?
2. 주소 출력 결과만 보고 “stack/heap/global”이라고 부를 때 어떤 점을 조심해야 하는가?
3. 두 번 실행했을 때 주소가 달라진 항목이 있는가? 그 현상을 설명할 수 있는 후보 원인은 무엇인가?
4. `malloc` 실패를 확인하지 않으면 어떤 문제가 생길 수 있는가?
5. 오늘 관찰한 내용이 나중에 stack frame과 heap exploitation을 공부할 때 어떤 기초가 되는가?

### 테스트 해 볼 명령어 후보

```bash
cc --version || clang --version || gcc --version
cc -Wall -Wextra -g -O0 memory_probe.c -o memory_probe
./memory_probe
./memory_probe
file memory_probe
size memory_probe
shasum -a 256 memory_probe
```

## 글쓰기 훈련

### 원인과 한계 쓰기

오늘은 “봤다”에서 끝내지 말고, 관찰 결과의 원인 후보와 한계를 함께 쓴다. 특히 C 표준의 storage duration과 OS 구현상의 stack/heap 용어를 섞지 않도록 주의한다.

- 내 C 프로그램은 ___ 종류의 객체 주소를 출력했다.
- 관찰 결과 ___ 주소는 ___ 처럼 보였다.
- 이 결과는 ___ 라고 해석할 수 있지만, 주소 출력만으로 ___ 까지는 확정할 수 없다.
- C 언어 관점에서는 ___ 라는 storage duration으로 설명하는 것이 더 정확하다.
- 다음에 확인할 것은 ___ 이다.

## 오늘 남길 산출물

- 강의 산출물: `간단한 C 프로그램의 주소 출력과 영역별 해석`을 작성한다. 형태는 개념 설명, 작은 예제, 보안 연결이 모두 있는 mini lesson이다.
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

1. automatic, static, allocated storage duration의 lifetime 차이는 무엇인가?
2. local variable을 무조건 “stack”이라고만 설명하면 어떤 한계가 있는가?
3. pointer value와 pointee value의 차이는 무엇인가?
4. 주소가 실행마다 달라질 수 있는 이유 후보는 무엇인가?
5. 오늘 실습에서 확실히 관찰한 사실과 아직 추정인 설명을 하나씩 고르면 무엇인가?
