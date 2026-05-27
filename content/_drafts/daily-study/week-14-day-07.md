---
title: "Week 14 Day 07: 주간 복습과 안전 원칙 재점검"
draft: true
---

# Week 14 Day 07: 주간 복습과 안전 원칙 재점검

## 오늘의 목표

- malware taxonomy, safe lab, static triage를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- dynamic triage, IOC, TTP가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Learning Malware Analysis, 실전 리눅스 악성코드 분석, 시스인터널스 도구로 윈도우 문제 해결하기 - triage, sandbox, Linux/Windows malware 관찰
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 5장 IDA Pro
- Ghidra Student Guide: CodeBrowser, Listing, Decompiler, Symbol Tree, References, Function Graph
- OpenSecurityTraining2 Intro x86/x64: disassembly 읽기와 control flow 추적 파트
- Malware Unicorn reversing workshops: strings, xrefs, functions, API flow 실습
- 실제 미검증 샘플 실행 금지. 교육용 샘플, benign simulator, 문서화된 PCAP만 사용

## 핵심 키워드

malware taxonomy, safe lab, static triage, dynamic triage, IOC, TTP, report structure

## 반드시 정리할 개념

- malware taxonomy: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.
- safe lab: 분석 VM, snapshot, host-only network, sample hash, 실행 금지 원칙을 안전 절차로 정리하고 원본과 분석 복제본을 분리한다.
- static triage: static triage의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- dynamic triage: dynamic triage의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- IOC: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.
- TTP: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.
- report structure: 포트폴리오 산출물은 재현성, 기술 깊이, 근거 품질, 공개 가능성으로 평가한다. 민감 정보와 dual-use 세부사항은 분리한다.

## 실습

- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 14 triage report 1차본
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. malware taxonomy 유형을 기능, persistence, C2, payload 관점에서 다른 유형과 구분할 수 있는가?
2. safe lab를 지키지 않으면 host 오염, 증거 훼손, 네트워크 유출 중 어떤 위험이 생기는가?
3. static triage를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. dynamic triage를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. IOC를 보고서나 rule로 쓸 때 false positive를 줄이기 위한 조건은 무엇인가?
6. TTP를 보고서나 rule로 쓸 때 false positive를 줄이기 위한 조건은 무엇인가?
7. 오늘 산출물인 "Week 14 triage report 1차본"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
