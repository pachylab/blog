---
title: "Week 32: applied cryptography: symmetric, asymmetric, TLS"
draft: true
---

# Week 32: applied cryptography: symmetric, asymmetric, TLS

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 AES/RSA/TLS handshake 실습 노트을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: Concrete Mathematics, Cryptography & Network Security - modular arithmetic, RSA, Diffie-Hellman, ECC 전제 수학

- Khan Academy Algebra 1/2, Precalculus: 지수법칙, 로그, 함수/역함수, 다항식 기초
- OpenStax Algebra and Trigonometry: exponents, logarithms, functions, inverse functions
- MIT 6.042J Mathematics for Computer Science: modular arithmetic, number theory, probability 관련 강의
- The Joy of Cryptography: one-time pad, pseudorandomness, public-key encryption, number-theory 기반 암호 개요
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor
- Python docs: hashlib, hmac, secrets, base64, urllib.parse, cryptography tutorials
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata
- Malware Traffic Analysis 교육용 PCAP: DNS/HTTP/TLS 추적 실습

## 핵심 키워드

symmetric encryption, AES, block cipher, mode, ECB, CBC, GCM, IV, nonce, padding, PKCS#7, padding oracle intro, nonce reuse, randomness, stream cipher, ChaCha20, RC4 historical risk, keystream, XOR, bias, modular arithmetic, prime, gcd, modular inverse, modular exponentiation, RSA, ECC, Diffie-Hellman, digital signature, certificate, PKI, certificate chain, CA, trust store, revocation

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | AES와 block cipher mode | symmetric encryption, AES, block cipher, mode, ECB, CBC, GCM | AES mode별 보안 속성 비교표 |
| Day 02 | IV, nonce, padding | IV, nonce, padding, PKCS#7, padding oracle intro, nonce reuse, randomness | IV/nonce/padding 실수 사례 정리 |
| Day 03 | stream cipher: ChaCha20와 RC4 | stream cipher, ChaCha20, RC4 historical risk, keystream, nonce, XOR, bias | stream cipher 사용 조건과 RC4 위험 노트 |
| Day 04 | RSA, ECC, Diffie-Hellman와 모듈러 산술 | modular arithmetic, prime, gcd, modular inverse, modular exponentiation, RSA, ECC, Diffie-Hellman | 공개키 암호 primitive와 수학 역할 비교 |
| Day 05 | digital signature, certificate, PKI | digital signature, certificate, PKI, certificate chain, CA, trust store, revocation | certificate chain 검증 흐름도 |
| Review | 주간 복습과 crypto misuse 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 32 주간 개념 지도와 다음 주 질문 5개 |

## Week 32 글쓰기 훈련 흐름

Week 32의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-32-review` worksheet 1개
- 대표 산출물 후보: AES mode별 보안 속성 비교표, IV/nonce/padding 실수 사례 정리, stream cipher 사용 조건과 RC4 위험 노트
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
