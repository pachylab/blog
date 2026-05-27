---
title: "Week 01 Day 04: boolean, set, relation, function 기초"
draft: true
---

# Week 01 Day 04: boolean, set, relation, function 기초

## 오늘의 목표

오늘의 초점은 `boolean, set, relation, function 기초` 전체를 넓게 훑는 것이 아니다. 오늘 끝나면 완성해야 할 산출물은 `보안 조건식을 boolean expression으로 바꾼 예시 5개`이다.

오늘 하지 않을 것: 오늘은 추상대수나 증명까지 가지 않는다. truth table, set operation, relation/function 구분만 한다.

1. boolean 값, AND/OR/NOT, truth table을 손으로 만든다.
2. set, relation, function의 차이를 예시와 반례로 구분한다.
3. 간단한 보안 판단 조건을 boolean expression과 set operation으로 바꿔 본다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 기초/시스템 개념

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | 제목과 키워드 3개를 보고 이미 아는 것/모르는 것 1개씩만 적는다. |
| minimum | 정의 1개와 작은 관찰 1개를 남긴다. |
| standard | 명령어 출력, 그림, 손계산 중 하나를 근거로 붙인다. |
| stretch | 나중에 pwn, RE, DFIR 중 어디서 다시 쓰이는지 연결한다. |
| 중단 후 복귀 | 새 자료를 열지 말고 boolean, set, relation, function 기초에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

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
- [Discrete Mathematics: An Open Introduction](https://open.umn.edu/opentextbooks/textbooks/discrete-mathematics-an-open-introduction): logic, sets, functions 관련 절
- [OpenStax Algebra and Trigonometry 2e - Functions and Function Notation](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-1-functions-and-function-notation): relation과 function 기초
- 중학교/고등학교 수학 복습: 집합, 명제, 함수의 정의와 예시

### Reference
- Python docs: set type, boolean operators를 실습 확인용으로만 사용
- MITRE ATT&CK 또는 탐지 rule 예시: 조건식 예시가 필요할 때만 참고
- 해커의 기쁨: bit vector 감각이 필요한 경우 보조 참고

### 읽기 분량 기준

- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽만 읽는다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 자료를 다 읽지 못해도 읽은 범위, 막힌 문장, 다음 질문을 worksheet에 남기면 성공으로 본다.

## 핵심 키워드

boolean algebra, truth table, set, relation, function, bit vector, logical operator

## 반드시 정리할 개념

| 개념 | 오늘 정리할 내용 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| boolean expression | 참/거짓을 입력받아 참/거짓을 내는 조건식이다. | A, B 두 조건으로 AND/OR/NOT truth table을 만든다. | 탐지 룰, 접근 제어, exploit 조건을 명확하게 표현한다. |
| set | 대상들의 모음이다. | 프로세스 집합, 네트워크 연결 집합 같은 작은 예시를 만든다. | IOC 목록, 이벤트 필터, 권한 그룹을 다룰 때 쓰인다. |
| relation | 두 집합 원소 사이의 ordered pair 집합이다. | 사용자와 권한, 프로세스와 파일 접근 관계를 pair로 적는다. | 그래프, dependency, call relation, access relation의 기본이다. |
| function | 각 입력이 정확히 하나의 출력에 대응되는 relation이다. | 같은 입력이 서로 다른 출력으로 가는 반례를 만든다. | hash, parser, mapping table을 이해할 때 필요하다. |
| bit vector | 여러 boolean flag를 bit 묶음으로 표현한 것이다. | 4개 flag를 0000-1111로 나열한다. | 권한 mask, CPU flag, protocol flag 해석에 연결된다. |

## 실습

- `A = 파일 확장자가 exe`, `B = hash가 allowlist에 없음`, `C = 외부 IP 접속 있음` 같은 조건 3개를 만든다.
- `alert = (A AND B) OR C`의 truth table을 직접 작성한다.
- 프로세스 3개와 파일 3개를 예로 relation을 만들고, 그 relation이 function인지 아닌지 판정한다.

## 질문형 실습 프롬프트

아래 질문은 답을 외우기 위한 것이 아니라, 오늘 실습 로그를 채우기 위한 질문이다. 질문마다 실제 출력이나 손계산 근거를 하나 이상 붙인다.

1. 오늘 만든 보안 조건 A, B, C는 각각 참/거짓으로 판정 가능한가?
2. `A AND B`와 `A OR B`의 결과가 달라지는 입력 조합은 무엇인가?
3. 프로세스와 파일 접근 pair를 relation으로 적으면 어떤 정보가 보이고, 어떤 정보가 빠지는가?
4. 내가 만든 relation이 function이 아닌 이유를 반례 하나로 설명할 수 있는가?
5. 탐지 조건을 자연어가 아니라 boolean expression으로 쓰면 어떤 모호함이 줄어드는가?

### 테스트 해 볼 명령어 후보

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

## 글쓰기 훈련

### 정의와 반례 쓰기

오늘은 개념을 정의한 뒤 반례를 붙이는 연습을 한다. “function은 relation이다”에서 끝내지 말고, function이 아닌 relation을 하나 들어 차이를 설명한다.

- 오늘 구분한 두 개념은 ___ 와 ___ 이다.
- ___ 는 ___ 라고 정의할 수 있다.
- 반면 ___ 는 ___ 이다.
- 예를 들어 ___ 는 relation이지만 function은 아니다. 왜냐하면 ___ 때문이다.
- 보안 분석에서는 이 구분이 ___ 상황에서 중요하다.

## 오늘 남길 산출물

- 강의 산출물: `보안 조건식을 boolean expression으로 바꾼 예시 5개`을 작성한다. 형태는 개념 설명, 작은 예제, 보안 연결이 모두 있는 mini lesson이다.
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

1. truth table은 어떤 질문에 답하기 위한 도구인가?
2. set과 relation의 차이를 내 예시로 설명하면 무엇인가?
3. function이 되기 위해 relation이 만족해야 하는 조건은 무엇인가?
4. `AND`와 `OR`를 혼동하면 탐지 룰에서 어떤 문제가 생길 수 있는가?
5. 오늘 만든 조건식 중 가장 애매했던 조건은 무엇이고 왜 애매했는가?
