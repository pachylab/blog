---
title: "Week 33 Day 02: PRNG, CSPRNG, entropy"
draft: true
---

# Week 33 Day 02: PRNG, CSPRNG, entropy

## 오늘의 목표

- PRNG, CSPRNG, random seed를 확률, distribution, entropy, predictability 관점에서 설명한다.
- nonce generation, key generation에서 entropy 부족과 seed 재사용이 왜 치명적인지 사례 중심으로 정리한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Cryptography & Network Security, Malware Analysis and Detection Engineering - PRNG/CSPRNG, entropy, malware config decryption
- Khan Academy Probability and statistics: sample space, independence, conditional probability, expected value 기초
- OpenStax Introductory Statistics: probability, distribution, descriptive statistics, sampling bias
- MIT 6.042J Mathematics for Computer Science: probability, random variables, expectation, concentration intuition
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor
- Python docs: hashlib, hmac, secrets, base64, urllib.parse, cryptography tutorials

## 핵심 키워드

probability, distribution, entropy, min-entropy, information content, PRNG, CSPRNG, random seed, predictability, nonce generation, key generation, secrets module

## 반드시 정리할 개념

- probability/distribution: sample space, event, uniform distribution을 정의하고 random byte가 균등해야 하는 이유를 적는다.
- entropy/min-entropy: 모든 값이 비슷하게 나오는 경우와 특정 값에 치우친 경우를 비교해 예측 가능성을 설명한다.
- PRNG: deterministic generator라는 점을 적고, seed를 알거나 추측할 수 있을 때 출력 예측이 가능해지는 이유를 정리한다.
- CSPRNG: 일반 PRNG와 달리 보안 목적의 unpredictability가 필요한 이유와 OS entropy source 사용 원칙을 정리한다.
- random seed: 시간값, PID, 짧은 seed처럼 추측 가능한 seed가 위험한 이유를 적는다.
- nonce generation: nonce는 비밀이 아니어도 재사용되면 안 되는 경우가 있다는 점을 AES-GCM/stream cipher 예시와 연결한다.
- key generation: key는 충분한 entropy와 CSPRNG가 필요하며 사람이 만든 문자열과 무작위 key의 차이를 설명한다.

## 실습

- Python `random`과 `secrets`의 사용 목적 차이를 정리하고, 작은 sample에서 값 분포와 반복 여부를 관찰한다.
- toy nonce reuse 예제를 만들어 같은 keystream 재사용이 어떤 단서를 남기는지 high-level로 설명한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 난수 생성과 entropy 실수 사례 정리
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. uniform distribution과 biased distribution을 random byte 예시로 구분할 수 있는가?
2. entropy가 낮다는 말을 "후보 수가 적다"와 "특정 값에 치우친다"로 설명할 수 있는가?
3. PRNG와 CSPRNG의 차이를 seed 예측 가능성 관점에서 설명할 수 있는가?
4. nonce는 비밀이 아닌데도 왜 재사용되면 안 되는 경우가 있는가?
5. Python `random`과 `secrets` 중 key generation에 써야 하는 것은 무엇이며 이유는 무엇인가?
6. malware나 ransomware 분석에서 약한 randomness를 발견하면 어떤 artifact를 남겨야 하는가?
7. 오늘 산출물인 "난수 생성과 entropy 실수 사례 정리"가 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
