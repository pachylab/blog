---
title: "Week 12 Day 01: static analysis와 dynamic analysis 비교"
draft: true
---

# Week 12 Day 01: static analysis와 dynamic analysis 비교

## 오늘의 목표

- static analysis, dynamic analysis, triage workflow를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- risk, artifact, safe lab가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리버싱 핵심 원리, 실전 바이너리 분석 - debugger, breakpoint, watchpoint, xref, function boundary
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 5장 IDA Pro
- Ghidra Student Guide: CodeBrowser, Listing, Decompiler, Symbol Tree, References, Function Graph
- OpenSecurityTraining2 Intro x86/x64: disassembly 읽기와 control flow 추적 파트
- Malware Unicorn reversing workshops: strings, xrefs, functions, API flow 실습
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- 직접 만든 benign binary와 공개 교육용 crackme만 사용

## 핵심 키워드

static analysis, dynamic analysis, triage workflow, risk, artifact, safe lab, baseline

## 반드시 정리할 개념

- static analysis: 자동 분석 결과를 그대로 믿지 않고 xref, function boundary, CFG/call graph, runtime evidence로 교차 검증한다.
- dynamic analysis: 자동 분석 결과를 그대로 믿지 않고 xref, function boundary, CFG/call graph, runtime evidence로 교차 검증한다.
- triage workflow: triage workflow의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- risk: risk의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- artifact: artifact의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- safe lab: 분석 VM, snapshot, host-only network, sample hash, 실행 금지 원칙을 안전 절차로 정리하고 원본과 분석 복제본을 분리한다.
- baseline: baseline의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 직접 컴파일한 benign binary를 Ghidra에 로드하고 strings, xrefs, function graph, decompiler 결과를 서로 검증한다.
- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- static/dynamic triage 장단점 표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. static analysis 결과를 도구가 만든 값 그대로 믿지 않기 위해 어떤 교차 검증을 했는가?
2. dynamic analysis를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. triage workflow를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. risk를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. artifact를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. safe lab를 지키지 않으면 host 오염, 증거 훼손, 네트워크 유출 중 어떤 위험이 생기는가?
7. 오늘 산출물인 "static/dynamic triage 장단점 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
