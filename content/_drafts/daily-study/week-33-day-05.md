---
title: "Week 33 Day 05: hash-based IOC와 crypto artifact"
draft: true
---

# Week 33 Day 05: hash-based IOC와 crypto artifact

## 오늘의 목표

- hash-based IOC, HMAC, file hash를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- certificate fingerprint, public key hash, YARA string가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Cryptography & Network Security, Malware Analysis and Detection Engineering - PRNG/CSPRNG, entropy, malware config decryption
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor
- Python docs: hashlib, hmac, secrets, base64, urllib.parse, cryptography tutorials

## 핵심 키워드

hash-based IOC, HMAC, file hash, certificate fingerprint, public key hash, YARA string, false positive

## 반드시 정리할 개념

- hash-based IOC: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.
- HMAC: reversible 여부, key 필요 여부, integrity 제공 여부, nonce/salt/randomness 요구사항을 비교한다.
- file hash: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- certificate fingerprint: certificate fingerprint의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- public key hash: public key hash의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- YARA string: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- false positive: YARA는 file/content, Sigma는 log/event 중심이라는 차이를 정리하고 rule 목적, 조건, false positive 관리 방법을 적는다.

## 실습

- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- 오늘 artifact를 기준으로 YARA 또는 Sigma rule 초안을 만들고 benign sample 3개에 대한 false positive 가능성을 적는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- crypto artifact 기반 IOC 표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. hash-based IOC를 보고서나 rule로 쓸 때 false positive를 줄이기 위한 조건은 무엇인가?
2. HMAC를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. file hash artifact가 증명할 수 있는 행위와 증명할 수 없는 행위는 무엇인가?
4. certificate fingerprint를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. public key hash를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. YARA string를 보고서나 rule로 쓸 때 false positive를 줄이기 위한 조건은 무엇인가?
7. 오늘 산출물인 "crypto artifact 기반 IOC 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
