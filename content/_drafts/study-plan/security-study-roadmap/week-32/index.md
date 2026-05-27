---
title: "Week 32: applied cryptography: symmetric, asymmetric, TLS"
draft: true
---

# Week 32: applied cryptography: symmetric, asymmetric, TLS

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 AES/RSA/TLS handshake 실습 노트을 완성한다.

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

symmetric encryption, AES, block cipher, mode, ECB, CBC, GCM, authenticated encryption, IV, nonce, padding, PKCS#7, padding oracle intro, nonce reuse, randomness, stream cipher, ChaCha20, RC4 historical risk, keystream, XOR, bias, modular arithmetic, prime, gcd, Euclidean algorithm, modular inverse, modular exponentiation, finite field intro, discrete logarithm, asymmetric encryption, RSA, ECC, Diffie-Hellman, key exchange, public key, private key, digital signature, certificate, PKI, certificate chain, CA, trust store, revocation, TLS certificate, TLS handshake, SNI, ALPN, certificate validation, session key, TLS

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | AES와 block cipher mode | symmetric encryption, AES, block cipher, mode, ECB, CBC, GCM | AES mode별 보안 속성 비교표 |
| Day 02 | IV, nonce, padding | IV, nonce, padding, PKCS#7, padding oracle intro, nonce reuse, randomness | IV/nonce/padding 실수 사례 정리 |
| Day 03 | stream cipher: ChaCha20와 RC4 | stream cipher, ChaCha20, RC4 historical risk, keystream, nonce, XOR, bias | stream cipher 사용 조건과 RC4 위험 노트 |
| Day 04 | RSA, ECC, Diffie-Hellman와 모듈러 산술 | modular arithmetic, prime, gcd, modular inverse, modular exponentiation, RSA, ECC, Diffie-Hellman | 공개키 암호 primitive와 수학 역할 비교 |
| Day 05 | digital signature, certificate, PKI | digital signature, certificate, PKI, certificate chain, CA, trust store, revocation | certificate chain 검증 흐름도 |
| Day 06 | TLS certificate와 handshake 분석 | TLS certificate, TLS handshake, key exchange, SNI, ALPN, certificate validation, session key | Wireshark로 본 TLS handshake 필드 정리 |
| Day 07 | 주간 복습과 crypto misuse 목록 | AES, IV, nonce, padding, ChaCha20, RSA, PKI | Week 32 applied crypto checklist |

## 주간 산출물

- AES/RSA/TLS handshake 실습 노트와 공개키 수학 체크리스트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
