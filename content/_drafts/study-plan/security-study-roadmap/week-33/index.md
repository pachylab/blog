---
title: "Week 33: crypto misuse, randomness, malware config"
draft: true
---

# Week 33: crypto misuse, randomness, malware config

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 crypto misuse 분석표, entropy 노트, config decryptor 초안을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- Practical Malware Analysis: persistence, Windows API, DLL injection, process replacement 관련 장
- MITRE ATT&CK: T1547 Boot or Logon Autostart Execution, T1055 Process Injection, T1027 Obfuscated Files or Information
- Microsoft Learn: Registry Run and RunOnce keys, Task Scheduler, WMI permanent event subscription
- Sysinternals: Autoruns, Process Explorer, Procmon 사용 가이드

## 핵심 키워드

KDF, salt, password hashing, PBKDF2, bcrypt, scrypt, Argon2, probability, distribution, entropy, min-entropy, PRNG, CSPRNG, random seed, predictability, malware config decryption, config extraction, XOR, AES, hardcoded key, decode loop, schema, ransomware encryption, file key, master key, hybrid encryption, RSA/ECC wrapping, key management, recovery limit, hash-based IOC, HMAC, file hash, certificate fingerprint, public key hash, YARA string, false positive

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | KDF, salt, password hashing | KDF, salt, password hashing, PBKDF2, bcrypt, scrypt, Argon2 | password storage 실수와 올바른 설계 비교 |
| Day 02 | PRNG, CSPRNG, entropy | probability, distribution, entropy, min-entropy, PRNG, CSPRNG, random seed, predictability | 난수 생성과 entropy 실수 사례 정리 |
| Day 03 | malware config decryption | malware config decryption, config extraction, XOR, AES, hardcoded key, decode loop, schema | toy config decryptor 스크립트 |
| Day 04 | ransomware encryption model | ransomware encryption, file key, master key, hybrid encryption, RSA/ECC wrapping, key management, recovery limit | ransomware crypto 구조 흐름도 |
| Day 05 | hash-based IOC와 crypto artifact | hash-based IOC, HMAC, file hash, certificate fingerprint, public key hash, YARA string, false positive | crypto artifact 기반 IOC 표 |
| Review | 주간 복습과 malware 분석 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 33 주간 개념 지도와 다음 주 질문 5개 |

## Week 33 글쓰기 훈련 흐름

Week 33의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-33-review` worksheet 1개
- 대표 산출물 후보: password storage 실수와 올바른 설계 비교, 난수 생성과 entropy 실수 사례 정리, toy config decryptor 스크립트
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
