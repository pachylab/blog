---
title: "Week 32 Day 04: RSA, ECC, Diffie-Hellman와 모듈러 산술"
draft: true
---

# Week 32 Day 04: RSA, ECC, Diffie-Hellman와 모듈러 산술

## 오늘의 목표

- RSA, ECC, Diffie-Hellman을 그냥 외우지 않고 모듈러 산술, 소수, GCD, 모듈러 역원, 모듈러 거듭제곱 관점에서 설명한다.
- public/private key, key exchange, digital signature가 서로 다른 목표를 갖는 primitive라는 점을 비교한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Concrete Mathematics, Cryptography & Network Security - modular arithmetic, RSA, Diffie-Hellman, ECC 전제 수학
- Khan Academy Algebra 1/2, Precalculus: 지수법칙, 로그, 함수/역함수, 다항식 기초
- OpenStax Algebra and Trigonometry: exponents, logarithms, functions, inverse functions
- MIT 6.042J Mathematics for Computer Science: modular arithmetic, number theory, probability 관련 강의
- The Joy of Cryptography: public-key encryption, Diffie-Hellman, number-theory 기반 암호 개요
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor
- Python docs: hashlib, hmac, secrets, base64, urllib.parse, cryptography tutorials
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata

## 핵심 키워드

modular arithmetic, prime, gcd, Euclidean algorithm, modular inverse, modular exponentiation, finite field intro, discrete logarithm, asymmetric encryption, RSA, ECC, Diffie-Hellman, key exchange, public key, private key

## 반드시 정리할 개념

- modular arithmetic: `a mod n`의 의미, 동치류, wraparound를 작은 숫자로 계산하고 RSA/DH에서 왜 필요한지 적는다.
- gcd/Euclidean algorithm: 서로소 조건과 모듈러 역원이 존재하는 조건을 예제로 확인한다.
- modular inverse: `a * x = 1 mod n` 형태를 손계산으로 풀고 private key 계산과 연결한다.
- modular exponentiation: 반복 제곱법의 아이디어를 정리하고 큰 지수 계산이 왜 naive 반복과 다른지 설명한다.
- RSA: 소수 선택, modulus, public exponent, private exponent, padding 필요성을 high-level로 정리한다.
- Diffie-Hellman: 공개값을 주고받아 shared secret을 만드는 흐름과 discrete logarithm 가정의 역할을 적는다.
- ECC: finite field 위의 점 연산이라는 직관과, 오늘은 세부 증명보다 protocol에서 관찰되는 artifact를 우선한다.

## 실습

- 작은 숫자로 `gcd`, modular inverse, modular exponentiation 예제를 손으로 풀고 Python `pow(a, b, n)` 결과와 비교한다.
- RSA/DH/ECC가 TLS handshake 또는 certificate에서 어떤 필드로 드러나는지 하나씩 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 공개키 암호 primitive와 수학 역할 비교
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. `gcd(a, n) = 1` 조건이 모듈러 역원과 왜 연결되는가?
2. RSA에서 소수, modulus, public exponent, private exponent는 각각 어떤 역할인가?
3. Diffie-Hellman이 encryption 자체가 아니라 key exchange인 이유는 무엇인가?
4. discrete logarithm이 어렵다는 가정이 깨지면 DH/ECC에 어떤 문제가 생기는가?
5. certificate나 TLS handshake에서 공개키 알고리즘 정보를 어디서 확인할 수 있는가?
6. toy 수식으로 이해한 공개키 암호와 실제 구현에서 padding/parameter 검증이 중요한 이유는 무엇인가?
7. 오늘 산출물인 "공개키 암호 primitive와 수학 역할 비교"가 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
