---
title: "암호학 수학 기초 로드맵"
draft: true
---

# 암호학 수학 기초 로드맵

## 확인 결과

현재 40주 커리큘럼에는 bit/byte, 정수 표현, boolean algebra, set/relation/function, modular arithmetic, probability, entropy가 들어가 있다. 다만 원래 배치에서는 Week 35의 수학 심화가 Week 31-33의 암호학 뒤에 있어서, 암호학을 처음 공부하는 입장에서는 RSA, Diffie-Hellman, CSPRNG, entropy를 이해할 때 필요한 수학이 늦게 등장하는 문제가 있었다.

보강 방향은 전체 40주 순서를 크게 흔들지 않고, Week 31-33 안에 암호학 수학 gate를 넣는 방식이다. Week 35는 여전히 수학 심화 주차로 남기되, Week 31부터 중학교-고등학교 수학과 이산수학 기초를 필요한 만큼 끌어와 쓰도록 한다.

## 수학 계단

| 단계 | 수학 범위 | 꼭 알아야 할 개념 | 암호학 연결 |
|---|---|---|---|
| 0 | 중학 수학 | 정수, 약수, 배수, 소수, 소인수분해, 최대공약수, 최소공배수, 분수, 비례, 백분율 | key size, 후보 수, hash 비교, GCD, modular inverse의 바닥 |
| 1 | 중학-고1 대수 | 문자식, 방정식, 부등식, 함수, 그래프, 역함수 | encoding/encryption/hash를 함수로 이해, reversible/irreversible 구분 |
| 2 | 고등 수학 | 지수법칙, 로그, 다항식, 수열 기초 | brute force 후보 수, `2^n`, keyspace, exponential growth |
| 3 | 확률과 통계 | 경우의 수, 순열/조합, sample space, event, 조건부 확률, 기댓값, 분포 | collision probability, nonce reuse, false positive, randomness 판단 |
| 4 | 이산수학 | set, relation, function, predicate, boolean algebra, truth table, pigeonhole principle | hash collision, detection condition, protocol state, certificate chain 관계 |
| 5 | 정수론 | modular arithmetic, congruence, Euclidean algorithm, modular inverse, modular exponentiation, Fermat/Euler intro | RSA, Diffie-Hellman, ECC, signature primitive |
| 6 | bit/finite field 입문 | bit vector, XOR, rotate, GF(2) 직관, polynomial operation 맛보기 | stream cipher, AES, GHASH, CRC/hash-like 구조 이해 |
| 7 | 정보 이론 입문 | entropy, min-entropy, information content, bias | CSPRNG, password strength, malware DGA entropy, anomaly detection |

## 주차별 반영

| 위치 | 반영 내용 | 산출물 |
|---|---|---|
| Week 01 Day 04 | boolean, set, relation, function을 보안 탐지 조건과 연결 | truth table과 set/function 노트 |
| Week 02 | 정수, two's complement, overflow, bit vector | 정수 표현 실습 코드 |
| Week 31 Day 01 | 중등/고등 수학 gate: 소인수분해, GCD, 지수, 함수, 경우의 수, 확률 | 수학 점검표 |
| Week 31 Day 04 | hash를 function, pigeonhole principle, birthday bound로 해석 | hash collision/preimage 노트 |
| Week 32 Day 04 | RSA/DH/ECC를 modular arithmetic, gcd, modular inverse로 해석 | 공개키 수학 체크리스트 |
| Week 33 Day 02 | PRNG/CSPRNG를 entropy, distribution, predictability로 해석 | entropy와 난수 실수 사례 |
| Week 35 | finite automaton, boolean algebra, modular arithmetic, SMT, probability, entropy, graph theory 심화 | math-for-security cheat sheet |

## 암호학 시작 전 gate

Week 31을 시작하기 전에 아래 질문에 답할 수 있어야 한다. 막히는 항목은 Khan Academy나 OpenStax에서 해당 단원만 짧게 복습한다.

1. 84와 120의 GCD를 손으로 구할 수 있는가?
2. `2^10`, `2^20`, `2^40`의 크기 감각을 설명할 수 있는가?
3. 함수 `f(x) = x + 3`과 역함수의 의미를 설명할 수 있는가?
4. reversible transform과 irreversible-looking transform을 예시로 구분할 수 있는가?
5. sample space와 event를 동전 던지기 또는 random byte 예시로 설명할 수 있는가?
6. `a mod n`의 의미를 시계 산술로 설명할 수 있는가?
7. XOR에서 `x ^ k ^ k = x`가 왜 성립하는지 truth table로 보일 수 있는가?

## 자료 우선순위

1. 중학-고등 수학이 막히면 Khan Academy 또는 EBSi로 개념을 먼저 복습한다.
2. 영어 원서식 설명이 괜찮으면 OpenStax로 같은 단원을 확인한다.
3. discrete math는 MIT 6.042J에서 필요한 lecture만 골라 본다.
4. 암호학 구현 감각은 Cryptopals/CryptoHack으로 붙인다.
5. 이론 설명은 Serious Cryptography와 The Joy of Cryptography를 병행한다.

## 연결 문서

- [[_drafts/study-plan/security-study-roadmap/resource-catalog/index|공부 자료 카탈로그]]
- [[_drafts/study-plan/security-study-roadmap/week-31/index|Week 31: crypto math primer, encodings, hashing]]
- [[_drafts/study-plan/security-study-roadmap/week-32/index|Week 32: applied cryptography]]
- [[_drafts/study-plan/security-study-roadmap/week-33/index|Week 33: crypto misuse, randomness, malware config]]
- [[_drafts/study-plan/security-study-roadmap/week-35/index|Week 35: math foundations for security analysis]]
