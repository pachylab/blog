---
title: "Week 32 Day 04: RSA, ECC, Diffie-Hellman와 모듈러 산술 결과물 Worksheet"
draft: true
---

# Week 32 Day 04: RSA, ECC, Diffie-Hellman와 모듈러 산술 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-32-day-04/study|Week 32 Day 04: RSA, ECC, Diffie-Hellman와 모듈러 산술]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | RSA, ECC, Diffie-Hellman와 모듈러 산술 |
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
| 1회차 전 | [[_drafts/daily-study/week-32-day-03/index|Week 32 Day 03: stream cipher: ChaCha20와 RC4]] | `stream cipher: ChaCha20와 RC4`의 input, output, parameter를 작은 예제로 다시 만든다. 핵심어: stream cipher, ChaCha20, RC4 historical risk. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-32-day-01/index|Week 32 Day 01: AES와 block cipher mode]] | `AES와 block cipher mode`에서 primitive, mode, protocol, implementation misuse 중 무엇을 다룬 것인지 다시 구분한다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-31-day-03/index|Week 31 Day 03: XOR encoding과 반복키]] | `XOR encoding과 반복키` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: 공개키 암호 primitive와 수학 역할 비교
- 한 문장 요약: <!-- 작성 -->
- 가장 중요한 관찰 1개: <!-- 작성 -->
- 아직 확신할 수 없는 점 1개: <!-- 작성 -->
- 다음에 확인할 질문 2개:
  1. <!-- 작성 -->
  2. <!-- 작성 -->

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 암호/수학 응용 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| 입력과 출력 |  |
| parameter |  |
| primitive/mode/protocol |  |
| misuse/보안 가정 |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| modular arithmetic |  |  |  |  |
| RSA |  |  |  |  |
| Diffie-Hellman |  |  |  |  |
| ECC |  |  |  |  |
| modular inverse |  |  |  |  |
| modular exponentiation |  |  |  |  |
| discrete logarithm |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `RSA, ECC, Diffie-Hellman와 모듈러 산술`을 확인하기 위한 최소 입력은 무엇인가?
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
python3 - <<'PY'
import hashlib
print(hashlib.sha256(b"test").hexdigest())
PY
openssl version
openssl dgst -sha256 <input-file>
xxd -g 1 <input-file> | head
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

## 6. 암호 성질/오용 분석 노트 초안

오늘 글은 `RSA, ECC, Diffie-Hellman와 모듈러 산술` 주제를 “보장하는 성질”과 “보장하지 않는 것”으로 나눈다. `공개키 암호 primitive와 수학 역할 비교`에는 작은 입력/출력 예시와 실제 구현 오용 시나리오를 함께 넣는다.

```text
Primitive/Property: 오늘 다룬 암호 구성요소와 보안 성질을 적는다.
Assumption: 공격자가 무엇을 알고 무엇을 할 수 있는지 적는다.
Example: 작은 입력/출력 또는 의사코드 예시를 적는다.
Misuse: nonce 재사용, padding, key handling, randomness 등 오용 조건을 적는다.
Security Impact: exploit, malware, forensic, protocol 분석에서의 의미를 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 32 Day 05 | `RSA, ECC, Diffie-Hellman와 모듈러 산술`의 input, output, parameter를 작은 예제로 다시 만든다. 핵심어: RSA, Diffie-Hellman, ECC. |
| 3회차 후 | Week 33 Day 01 | `RSA, ECC, Diffie-Hellman와 모듈러 산술`에서 primitive, mode, protocol, implementation misuse 중 무엇을 다룬 것인지 다시 구분한다. |
| 7회차 후 | Week 33 Day 05 | `RSA, ECC, Diffie-Hellman와 모듈러 산술`의 misuse 사례를 malware/TLS/password/randomness 중 하나와 연결해 보안 분석 문장 1개를 쓴다. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `공개키 암호 primitive와 수학 역할 비교`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 성질 구분 | 보장하는 성질과 보장하지 않는 것을 분리했다. |
| [ ] | 가정 명시 | 공격자 능력과 secret/public 정보를 구분했다. |
| [ ] | 예제 | 작은 입력/출력 또는 의사코드 예시를 포함했다. |
| [ ] | 오용 조건 | nonce/key/randomness/padding/API misuse 중 관련 조건을 적었다. |
| [ ] | 보안 영향 | 프로토콜, malware, forensic, exploit 분석에서의 의미를 연결했다. |
