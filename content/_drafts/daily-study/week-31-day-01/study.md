---
title: "Week 31 Day 01: 암호학 수학 gate와 encoding 구분"
draft: true
---

# Week 31 Day 01: 암호학 수학 gate와 encoding 구분

## 오늘의 목표

오늘은 `암호학 수학 gate와 encoding 구분`을 넓게 훑는 날이 아니라, 작은 입력이나 예제 하나로 관찰하고 기록하는 날이다. 오늘 끝나면 `중등/고등 수학 점검표와 encoding/encryption/hashing 비교표`에 들어갈 최소 근거가 남아 있어야 한다.

오늘 하지 않을 것: 증명 전체를 완주하려 하지 말고, 오늘 실습에 필요한 정의와 예제만 다룬다.

1. 오늘 주제인 `암호학 수학 gate와 encoding 구분`가 무엇을 다루는지 한 문장으로 적는다.
2. 핵심 키워드 `integer`, `factor`, `multiple`, `prime factorization` 중 3개를 골라 "정의, 관찰 방법, 보안 분석에서의 쓰임" 형태로 정리한다.
3. Primary 자료는 1개만 고르고, 실제로 읽은 범위와 이해 안 된 문장 1개를 남긴다.
4. 실습을 실행한다. 도구가 없으면 설치부터 하지 말고, 필요한 입력/명령어/옵션/예상 출력을 먼저 설계한다.
5. 공부 후 결과물 worksheet `week-31-day-01/index.md`에 `중등/고등 수학 점검표와 encoding/encryption/hashing 비교표` 초안을 채운다.
6. 성공 기준: 정의 1개, 손계산 예제 1개, 보안 분석에서 쓰이는 위치 1개를 연결한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 암호/수학 응용

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | input, output, key/nonce/IV, assumption 중 하나를 고르고 작은 test vector로 시작한다. |
| minimum | 작은 입력 1개와 기대 출력 또는 변환 과정을 적는다. |
| standard | primitive, mode, protocol, implementation misuse를 구분한다. |
| stretch | malware config, TLS, password storage, randomness 중 연결 지점 1개를 쓴다. |
| 중단 후 복귀 | 새 자료를 열지 말고 암호학 수학 gate와 encoding 구분에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최신 암호/보안 연구는 수학적 가정과 구현 실수를 분리한다. 오늘은 입력, 출력, parameter, misuse boundary를 정확히 기록한다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 문서의 복습 질문 2개에 5-10분만 답한다. Week 01 Day 01처럼 이전 회차 문서가 없으면 오늘 제목과 핵심 키워드를 훑고 "이미 아는 것 3개 / 헷갈리는 것 3개"를 적는다. 공부 중 새로 모르는 용어는 Warm-up이 아니라 Review의 Unknown에 적는다.
- Core reading: 공부 자료 중 primary 1개만 고르고 실제 읽은 범위와 핵심 문장 3개, 이해 안 된 문장 1개를 기록한다.
- Lab: tool version, timezone, input path/hash, exact command, stdout/stderr, exit status를 남긴다.
- Writing: 암호 성질, 가정, 입력/출력 예시, 오용 시나리오, 보안 영향을 연결한다.
- Review: 오늘 공부 중 끝까지 모르는 용어와 검증하지 못한 추정을 Unknown에 모으고, 다음 확인 방법을 적는다.

## 공부 자료

아래는 오늘의 후보 자료이다. 전부 읽지 않는다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽고, Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- 중학교-고등학교 수학 복습: 정수, 소인수분해, 함수, 확률, 경우의 수 중 오늘 키워드 1개
- Concrete Mathematics: 합, 점화식, 정수론, 확률 중 오늘 개념과 맞는 예제 1개
- SICP 또는 기본 자료구조 강의: list/tree/graph/complexity와 연결되는 부분

### Reference
- Khan Academy 또는 공개 수학 강의: 막히는 기초 개념 1개만 보충
- Python docs: collections, heapq, re 등 자료구조/문자열 실험용
- Z3Py guide: constraint/SMT가 나오는 날의 미니 실험용

### 읽기 분량 기준
- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽을 목표로 한다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 실습 시간이 부족해지면 읽기를 멈추고, 읽은 범위와 모르는 문장을 worksheet에 남긴다.

## 자료 선택 규칙

오늘의 primary 추천: 중고등 수학/이산수학/자료구조 자료 중 오늘 개념 1개를 손으로 풀 수 있는 범위만 고른다.
- 아래 공부 자료는 전부 읽으라는 목록이 아니다. 오늘은 primary 자료 1개만 선택한다.
- 책을 고르면 실제 목표 범위를 쪽수나 절 제목으로 적고, 30-45분이 지나면 멈춘다.
- Reference는 실습 중 막히거나 용어가 불명확할 때 5-10분만 확인한다.
- 남은 시간은 실습 로그와 결과물 worksheet 작성에 쓴다.
- 자료를 다 읽지 못해도 결과물 worksheet에 읽은 범위, 모르는 문장, 다음 확인 질문을 남기면 성공으로 본다.

## 핵심 키워드

integer, factor, multiple, prime factorization, fraction, ratio, exponent rule, function, inverse function, counting, probability, encoding vs encryption vs hashing, reversibility, key, integrity, confidentiality, Base64, hex

## 반드시 정리할 개념

아래 표는 정답을 미리 외우기 위한 표가 아니다. 오늘 읽은 자료와 실습 출력으로 각 질문에 답하면서 결과물 worksheet에 내 말로 정리한다.

| 개념 | 오늘 확인할 질문 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| crypto math gate | 암호학 전에 정수, 모듈러 산술, 확률/엔트로피 중 어느 부분이 약한지 점검했는가? | 작은 손계산 3개와 Python 검산 1개를 남긴다. | RSA/ECC/TLS, malware crypto, hash artifact 해석의 진입 조건이다. |
| encoding | encoding은 보안성을 제공하지 않고 byte 표현을 다른 문자 체계로 바꾸는 변환임을 설명할 수 있는가? | hex, base64, URL encoding을 같은 byte로 비교한다. | malware config, log artifact, HTTP parameter 분석에서 암호화와 혼동하면 안 된다. |
| decoding | decoding 실패가 데이터 손상인지 encoding 선택 오류인지 구분할 수 있는가? | 같은 문자열을 UTF-8, hex, base64로 바꿔 round-trip을 확인한다. | 샘플 문자열 추출, forensic artifact 파싱에서 필요하다. |
| representation | 같은 값이 2진수, 10진수, 16진수, byte string에서 어떻게 보이는지 설명할 수 있는가? | `xxd`, Python `int.to_bytes`, `bytes.fromhex`로 확인한다. | 리버싱, exploit payload, PCAP field 해석의 공통 기반이다. |
| integer / modular arithmetic | 정수 연산과 나머지 연산이 언제 같은 직관으로 동작하지 않는지 설명할 수 있는가? | 작은 modulus에서 덧셈, 곱셈, inverse 가능 여부를 계산한다. | 암호 프로토콜과 integer bug 분석의 교차 기초다. |
| entropy | randomness와 entropy가 password, nonce, key에서 왜 중요한지 예시로 설명할 수 있는가? | 작은 sample space를 세고 brute-force 비용을 계산한다. | CSPRNG, token, ransomware key handling의 품질 판단에 필요하다. |

## 실습

오늘 실습은 크게 벌리지 않는다. 아래 항목 중 오늘 산출물에 필요한 최소 범위만 수행하고, 실패하면 실패 로그를 그대로 남긴다.

- 종이에 풀 수 있는 작은 예제 1개를 만들고 계산 과정을 생략하지 않는다.
- 가능하면 Python 5-15줄로 같은 결과를 확인한다.
- 이 개념이 암호학, 리버싱, 포렌식, 탐지 중 어디에 쓰이는지 한 문장으로 적는다.

## 질문형 실습 프롬프트

아래 명령어는 모두 실행하라는 뜻이 아니다. 오늘 산출물에 필요한 것만 고르고, 환경에 없는 도구는 설치부터 하지 말고 어떤 역할의 도구가 필요한지만 적는다.

### 테스트 해 볼 명령어 후보

```bash
pwd
date
<tool> --version 또는 <tool> -V
python3 - <<'PY'
# 작은 예제를 직접 계산해 본다.
PY
python3 -m doctest <note-or-script>.py
```

### 스스로 답할 질문

1. `암호학 수학 gate와 encoding 구분`을 확인하기 위한 가장 작은 입력 파일, 샘플, 코드, 로그, 보고서 조각은 무엇인가?
2. 그 대상을 처음 확인할 때 어떤 명령어, 도구, 문서 항목을 먼저 봐야 할까?
3. 출력에 상세 정보, 줄 번호, hex view, filter, field, version 정보를 추가하려면 어떤 옵션이나 기록 항목이 필요할까?
4. 오늘 수학 개념이 보안 분석에서 입력, 상태, 제약, 탐지 조건 중 무엇을 설명하는가?
5. 오늘 결과를 블로그 글로 바꿀 때 공개하면 안 되는 경로, 샘플, 토큰, exploit detail, 개인정보는 무엇인가?

## 오늘 남길 산출물

- 강의 산출물: `중등/고등 수학 점검표와 encoding/encryption/hashing 비교표`을 작성한다. 형태는 property, assumption, misuse가 연결된 crypto note이다.
- 실습 증거: 오늘 사용한 명령, 로그, trace, screenshot, code diff 중 해당 주제에 맞는 근거를 최소 2개 남긴다.
- 글쓰기 산출물: 암호 성질, 가정, 입력/출력 예시, 오용 시나리오, 보안 영향을 연결한다.
- 공개 판단: 공개 가능한 주장과 비공개로 남겨야 할 세부사항을 각각 1개 이상 표시한다.

## 산출물 체크 표

| 체크 | 항목 | 기준 |
|---|---|---|
| [ ] | 성질 구분 | 보장하는 성질과 보장하지 않는 것을 분리했다. |
| [ ] | 가정 명시 | 공격자 능력과 secret/public 정보를 구분했다. |
| [ ] | 예제 | 작은 입력/출력 또는 의사코드 예시를 포함했다. |
| [ ] | 오용 조건 | nonce/key/randomness/padding/API misuse 중 관련 조건을 적었다. |
| [ ] | 보안 영향 | 프로토콜, malware, forensic, exploit 분석에서의 의미를 연결했다. |

## 복습 질문

1. 오늘 주제 `암호학 수학 gate와 encoding 구분`를 한 문장으로 설명하면 무엇인가?
2. `integer`는 어떤 입력, 출력, field, instruction, artifact에서 확인했는가?
3. `factor`와 `multiple`를 혼동하면 어떤 분석 오류가 생길 수 있는가?
4. 정의만 외웠을 때와 작은 예제로 계산했을 때 이해가 어떻게 달라지는가?
5. 오늘 사용한 명령어, 옵션, 도구 version 중 재현성에 꼭 필요한 것은 무엇인가?
6. 오늘 결론에서 아직 Unknown으로 남겨야 하는 것은 무엇인가?
7. 오늘 산출물인 "중등/고등 수학 점검표와 encoding/encryption/hashing 비교표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
