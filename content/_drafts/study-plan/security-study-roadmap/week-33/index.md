---
title: "Week 33: crypto misuse, randomness, malware config"
draft: true
---

# Week 33: crypto misuse, randomness, malware config

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 crypto misuse 분석표, entropy 노트, config decryptor 초안을 완성한다.

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

KDF, salt, password hashing, PBKDF2, bcrypt, scrypt, Argon2, work factor, probability, distribution, entropy, min-entropy, information content, PRNG, CSPRNG, random seed, predictability, nonce generation, key generation, secrets module, malware config decryption, config extraction, XOR, AES, hardcoded key, decode loop, schema, ransomware encryption, file key, master key, hybrid encryption, RSA/ECC wrapping, key management, recovery limit, hash-based IOC, HMAC, file hash, certificate fingerprint, public key hash, YARA string, false positive, nonce reuse, ECB mode, padding oracle, weak KDF, insecure PRNG, side-channel intro, config decryption

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | KDF, salt, password hashing | KDF, salt, password hashing, PBKDF2, bcrypt, scrypt, Argon2 | password storage 실수와 올바른 설계 비교 |
| Day 02 | PRNG, CSPRNG, entropy | probability, distribution, entropy, min-entropy, PRNG, CSPRNG, random seed, predictability | 난수 생성과 entropy 실수 사례 정리 |
| Day 03 | malware config decryption | malware config decryption, config extraction, XOR, AES, hardcoded key, decode loop, schema | toy config decryptor 스크립트 |
| Day 04 | ransomware encryption model | ransomware encryption, file key, master key, hybrid encryption, RSA/ECC wrapping, key management, recovery limit | ransomware crypto 구조 흐름도 |
| Day 05 | hash-based IOC와 crypto artifact | hash-based IOC, HMAC, file hash, certificate fingerprint, public key hash, YARA string, false positive | crypto artifact 기반 IOC 표 |
| Day 06 | crypto implementation pitfalls | nonce reuse, ECB mode, padding oracle, weak KDF, hardcoded key, insecure PRNG, side-channel intro | crypto misuse 탐지 체크리스트 |
| Day 07 | 주간 복습과 malware crypto report | KDF, salt, CSPRNG, config decryption, ransomware encryption, hash-based IOC, nonce reuse | Week 33 malware crypto mini report |

## 주간 산출물

- crypto misuse 분석표, entropy 노트, config decryptor 초안
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
