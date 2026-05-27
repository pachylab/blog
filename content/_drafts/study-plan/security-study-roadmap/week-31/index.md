---
title: "Week 31: crypto math primer, encodings, hashing"
draft: true
---

# Week 31: crypto math primer, encodings, hashing

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 중등/고등 수학 점검표와 encoding/hash/HMAC 실습 코드를 완성한다.

## 공부 자료
- 보유 서적: Concrete Mathematics, Cryptography & Network Security - set/function/modular arithmetic, encoding/hash 기초

- Khan Academy: Pre-algebra, Algebra basics, Algebra 1, Algebra 2, Probability and statistics에서 정수, 분수, 비례, 함수, 지수/로그, 확률 기초
- OpenStax Prealgebra/Algebra and Trigonometry/Introductory Statistics: 소인수분해, 지수법칙, 함수, 확률/통계 보충
- MIT 6.042J Mathematics for Computer Science: sets, functions, counting, probability intro
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor
- Python docs: hashlib, hmac, secrets, base64, urllib.parse, cryptography tutorials
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 2: I/O System, Storage Management, Registry, Services, WMI 관련 장
- Microsoft Learn: Registry hives, Event Log, Prefetch, Task Scheduler, Services, ETW 개요
- 13Cubed Windows Forensics: Registry, Prefetch, ShimCache, AmCache, SRUM, LNK/JumpList 강의 범위
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms

## 핵심 키워드

integer, fraction, ratio, prime factorization, gcd, exponent rule, logarithm, function, inverse function, probability, sample space, counting, encoding vs encryption vs hashing, reversibility, key, integrity, confidentiality, Base64, hex, URL encoding, Unicode, UTF-8, code point, normalization, XOR encoding, single-byte XOR, repeating-key XOR, known plaintext, crib dragging, malware string hiding, hash function, MD5, SHA-1, SHA-256, collision, preimage, pigeonhole principle, birthday bound, hash-based IOC, HMAC, keyed hash, message authentication, length extension risk, secret key, fuzzy hash intro, sample identity, collision risk, file metadata, YARA complement, encoding, XOR

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | 암호학 수학 gate와 encoding 구분 | integer, prime factorization, gcd, exponent rule, function, probability, encoding vs encryption vs hashing | 중등/고등 수학 점검표와 encoding 비교표 |
| Day 02 | Base64, hex, URL encoding, Unicode | Base64, hex, URL encoding, Unicode, UTF-8, code point, normalization | 문자열 인코딩 변환 예제 모음 |
| Day 03 | XOR encoding과 반복키 | XOR encoding, single-byte XOR, repeating-key XOR, known plaintext, crib dragging, malware string hiding | XOR decode 스크립트와 한계 |
| Day 04 | hash function: MD5, SHA-1, SHA-256 | hash function, MD5, SHA-1, SHA-256, collision, preimage, pigeonhole principle, birthday bound, hash-based IOC | hash 알고리즘별 사용/위험 정리 |
| Day 05 | HMAC과 keyed integrity | HMAC, keyed hash, message authentication, integrity, length extension risk, secret key | HMAC 입력/출력/검증 코드 |
| Day 06 | hash-based IOC와 malware triage | hash-based IOC, fuzzy hash intro, sample identity, collision risk, file metadata, YARA complement | hash IOC의 장단점 표 |
| Day 07 | 주간 복습과 encoding script 정리 | encoding, Base64, Unicode, XOR, MD5, SHA-256, HMAC | Week 31 crypto basics notebook |

## 주간 산출물

- 중등/고등 수학 점검표와 encoding/hash/HMAC 실습 코드
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
