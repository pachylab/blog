---
title: "Week 38 Day 07: 주간 복습과 exploit report"
draft: true
---

# Week 38 Day 07: 주간 복습과 exploit report

## 오늘의 목표

- threat model, crash triage, exploit primitive를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- ROP, patch design, patch diffing가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 바이너리 분석, The Shellcoder's Handbook, 메타스플로잇 - N-day reproduction, patch diffing, PoC reliability
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 5장 IDA Pro
- Ghidra Student Guide: CodeBrowser, Listing, Decompiler, Symbol Tree, References, Function Graph
- OpenSecurityTraining2 Intro x86/x64: disassembly 읽기와 control flow 추적 파트
- Malware Unicorn reversing workshops: strings, xrefs, functions, API flow 실습
- AFL++ docs: instrumentation, corpus, crashes, afl-tmin/afl-cmin workflow
- LLVM Sanitizers docs: AddressSanitizer, UndefinedBehaviorSanitizer, coverage instrumentation
- angr docs: symbolic execution, state, solver, constraints, CFGFast 개요
- Z3Py guide: bit-vectors, constraints, solver model 읽기
- BinDiff 또는 Diaphora docs: patch diffing and function matching 개요

## 핵심 키워드

threat model, crash triage, exploit primitive, ROP, patch design, patch diffing, variant analysis

## 반드시 정리할 개념

- threat model: threat model의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- crash triage: crash triage의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- exploit primitive: 핵심 primitive가 read, write, allocation control, control-flow hijack 중 무엇인지 확인 절차와 mitigation 영향을 적는다.
- ROP: 핵심 primitive가 read, write, allocation control, control-flow hijack 중 무엇인지 확인 절차와 mitigation 영향을 적는다.
- patch design: patch design의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- patch diffing: input corpus, coverage, sanitizer report, constraint, source/sink, patch 차이를 재현 가능한 입력과 함께 기록한다.
- variant analysis: variant analysis의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- pwn.college 또는 ROP Emporium 문제를 하나 선택해 crash 재현, offset 계산, primitive 확인, mitigation 확인을 순서대로 기록한다.
- 작은 parser나 toy binary에 sanitizer/fuzzer를 붙이고 crash input을 최소화한다. 가능하면 Z3/angr로 같은 조건을 표현한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 38 exploit and patch report
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. threat model를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. crash triage를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. exploit primitive에서 핵심 primitive는 read, write, allocation control, control-flow hijack 중 무엇이고 어떻게 확인했는가?
4. ROP에서 핵심 primitive는 read, write, allocation control, control-flow hijack 중 무엇이고 어떻게 확인했는가?
5. patch design를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. patch diffing를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "Week 38 exploit and patch report"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
