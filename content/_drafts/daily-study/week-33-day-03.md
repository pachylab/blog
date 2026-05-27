---
title: "Week 33 Day 03: malware config decryption"
draft: true
---

# Week 33 Day 03: malware config decryption

## 오늘의 목표

- malware config decryption, config extraction, XOR를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- AES, hardcoded key, decode loop가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Cryptography & Network Security, Malware Analysis and Detection Engineering - PRNG/CSPRNG, entropy, malware config decryption
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- Practical Malware Analysis: persistence, Windows API, DLL injection, process replacement 관련 장
- MITRE ATT&CK: T1547 Boot or Logon Autostart Execution, T1055 Process Injection, T1027 Obfuscated Files or Information
- Microsoft Learn: Registry Run and RunOnce keys, Task Scheduler, WMI permanent event subscription
- Sysinternals: Autoruns, Process Explorer, Procmon 사용 가이드
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장

## 핵심 키워드

malware config decryption, config extraction, XOR, AES, hardcoded key, decode loop, schema

## 반드시 정리할 개념

- malware config decryption: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.
- config extraction: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- XOR: reversible 여부, key 필요 여부, integrity 제공 여부, nonce/salt/randomness 요구사항을 비교한다.
- AES: reversible 여부, key 필요 여부, integrity 제공 여부, nonce/salt/randomness 요구사항을 비교한다.
- hardcoded key: hardcoded key의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- decode loop: decode loop의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- schema: schema의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- benign simulator 또는 문서 예제로 persistence/injection 흐름을 API 단계와 artifact 단계로 나누어 표기한다.
- Python으로 encoding/hash/encryption 예제를 실행하고 입력, key/nonce/salt, 출력, 복호화 가능 여부를 표로 비교한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- toy config decryptor 스크립트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. malware config decryption 유형을 기능, persistence, C2, payload 관점에서 다른 유형과 구분할 수 있는가?
2. config extraction를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
3. XOR를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. AES는 reversible 여부, key 필요 여부, integrity 제공 여부 중 어떤 속성을 가지는가?
5. hardcoded key를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. decode loop를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "toy config decryptor 스크립트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
