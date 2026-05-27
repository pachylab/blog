---
title: "Week 31: crypto math primer, encodings, hashing"
draft: true
---

# Week 31: crypto math primer, encodings, hashing

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 중등/고등 수학 점검표와 encoding/hash/HMAC 실습 코드를 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

integer, prime factorization, gcd, exponent rule, function, probability, encoding vs encryption vs hashing, Base64, hex, URL encoding, Unicode, UTF-8, code point, normalization, XOR encoding, single-byte XOR, repeating-key XOR, known plaintext, crib dragging, malware string hiding, hash function, MD5, SHA-1, SHA-256, collision, preimage, pigeonhole principle, birthday bound, hash-based IOC, HMAC, keyed hash, message authentication, integrity, length extension risk, secret key

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | 암호학 수학 gate와 encoding 구분 | integer, prime factorization, gcd, exponent rule, function, probability, encoding vs encryption vs hashing | 중등/고등 수학 점검표와 encoding 비교표 |
| Day 02 | Base64, hex, URL encoding, Unicode | Base64, hex, URL encoding, Unicode, UTF-8, code point, normalization | 문자열 인코딩 변환 예제 모음 |
| Day 03 | XOR encoding과 반복키 | XOR encoding, single-byte XOR, repeating-key XOR, known plaintext, crib dragging, malware string hiding | XOR decode 스크립트와 한계 |
| Day 04 | hash function: MD5, SHA-1, SHA-256 | hash function, MD5, SHA-1, SHA-256, collision, preimage, pigeonhole principle, birthday bound, hash-based IOC | hash 알고리즘별 사용/위험 정리 |
| Day 05 | HMAC과 keyed integrity | HMAC, keyed hash, message authentication, integrity, length extension risk, secret key | HMAC 입력/출력/검증 코드 |
| Review | 주간 복습과 crypto misuse 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 31 주간 개념 지도와 다음 주 질문 5개 |

## Week 31 글쓰기 훈련 흐름

Week 31의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-31-review` worksheet 1개
- 대표 산출물 후보: 중등/고등 수학 점검표와 encoding 비교표, 문자열 인코딩 변환 예제 모음, XOR decode 스크립트와 한계
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
