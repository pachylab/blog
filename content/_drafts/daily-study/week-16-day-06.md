---
title: "Week 16 Day 06: malware config extraction"
draft: true
---

# Week 16 Day 06: malware config extraction

## 오늘의 목표

- config extraction, malware config, C2 address를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- mutex, campaign id, decode function가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Learning Malware Analysis, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식 - persistence, registry artifact, config extraction, detection mapping
- Practical Malware Analysis: persistence, Windows API, DLL injection, process replacement 관련 장
- MITRE ATT&CK: T1547 Boot or Logon Autostart Execution, T1055 Process Injection, T1027 Obfuscated Files or Information
- Microsoft Learn: Registry Run and RunOnce keys, Task Scheduler, WMI permanent event subscription
- Sysinternals: Autoruns, Process Explorer, Procmon 사용 가이드
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3

## 핵심 키워드

config extraction, malware config, C2 address, mutex, campaign id, decode function, parser automation

## 반드시 정리할 개념

- config extraction: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- malware config: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.
- C2 address: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- mutex: mutex의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- campaign id: campaign id의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- decode function: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- parser automation: parser automation의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- benign simulator 또는 문서 예제로 persistence/injection 흐름을 API 단계와 artifact 단계로 나누어 표기한다.
- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- config extractor Python 스크립트 초안
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. config extraction를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
2. malware config 유형을 기능, persistence, C2, payload 관점에서 다른 유형과 구분할 수 있는가?
3. C2 address를 단일 IOC가 아니라 시간 패턴, TLS metadata, byte volume으로 판단하려면 어떤 증거가 필요한가?
4. mutex를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. campaign id를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. decode function 관점에서 입력 집합, 출력 집합, 매핑 규칙을 보안 로그 예시로 설명할 수 있는가?
7. 오늘 산출물인 "config extractor Python 스크립트 초안"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
