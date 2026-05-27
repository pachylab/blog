---
title: "Week 31 Day 01: 암호학 수학 gate와 encoding 구분"
draft: true
---

# Week 31 Day 01: 암호학 수학 gate와 encoding 구분

## 오늘의 목표

- 암호학을 시작하기 전에 중등/고등 수학 gate를 점검한다: 정수, 약수/배수, 소인수분해, 분수/비례, 지수법칙, 함수/역함수, 경우의 수, 확률.
- encoding, encryption, hashing의 차이를 reversible 여부, key, integrity/confidentiality, 수학적 함수 관점에서 비교한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

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

## 핵심 키워드

integer, factor, multiple, prime factorization, fraction, ratio, exponent rule, function, inverse function, counting, probability, encoding vs encryption vs hashing, reversibility, key, integrity, confidentiality, Base64, hex

## 반드시 정리할 개념

- integer/factor/multiple: GCD, modular arithmetic, key size 계산으로 이어지는 기초이므로 손으로 예제 3개를 풀고 막히는 지점을 표시한다.
- fraction/ratio: 확률, false positive rate, entropy 직관으로 이어지므로 분수와 백분율을 서로 변환한다.
- exponent rule: keyspace, brute force 시간, RSA/DH의 거듭제곱 연산을 이해하기 위해 지수법칙과 로그 의미를 정리한다.
- function/inverse function: encoding은 함수처럼 입력을 출력으로 바꾸고, encryption은 key가 있는 reversible function이며, hash는 일반적으로 역함수가 어려운 함수라는 식으로 연결한다.
- counting/probability: hash collision, nonce reuse, random guessing을 설명할 때 필요한 sample space와 event를 정의한다.
- encoding vs encryption vs hashing: reversible 여부, key 필요 여부, integrity 제공 여부, nonce/salt/randomness 요구사항을 비교한다.
- reversibility: reversibility의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- key: key의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- integrity: integrity의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- confidentiality: confidentiality의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- Base64: reversible 여부, key 필요 여부, integrity 제공 여부, nonce/salt/randomness 요구사항을 비교한다.
- hex: 같은 값을 2진수, 10진수, 16진수로 변환하고 byte 단위로 끊어 읽는다. hex dump에서 offset, byte, ASCII view를 구분한다.

## 실습

- 중등/고등 수학 gate 표를 만들고 각 항목을 `설명 가능`, `예제 풀이 가능`, `암호학 연결 가능`으로 체크한다.
- Python으로 encoding/hash/encryption 예제를 실행하고 입력, key/nonce/salt, 출력, 복호화 가능 여부를 표로 비교한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 중등/고등 수학 점검표와 encoding/encryption/hashing 비교표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. 소인수분해, GCD, 지수법칙 중 암호학 예제로 바로 연결하지 못한 항목은 무엇인가?
2. 함수와 역함수 관점에서 encoding, encryption, hashing을 구분할 수 있는가?
3. keyspace가 `2^n`일 때 n이 1 증가하면 brute force 후보 수가 어떻게 변하는가?
4. sample space와 event를 사용해 hash collision 또는 nonce reuse를 설명할 수 있는가?
5. Base64는 왜 encryption이 아니며 어떤 수학적/형식적 변환으로 볼 수 있는가?
6. integrity와 confidentiality가 같은 목표가 아닌 이유를 예시로 설명할 수 있는가?
7. 오늘 산출물인 "중등/고등 수학 점검표와 encoding/encryption/hashing 비교표"가 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
