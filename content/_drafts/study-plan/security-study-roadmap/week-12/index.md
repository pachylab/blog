---
title: "Week 12: static reversing workflow, IDA/Ghidra"
draft: true
---

# Week 12: static reversing workflow, IDA/Ghidra

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 IDA/Ghidra project와 static/AI triage report 초안을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: 리버싱 핵심 원리, 실전 바이너리 분석 - debugger, breakpoint, watchpoint, xref, function boundary

- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 5장 IDA Pro
- Hex-Rays/IDA documentation: IDA View, graph view, xrefs, functions, names, comments, debugger 개요
- Ghidra Student Guide: CodeBrowser, Listing, Decompiler, Symbol Tree, References, Function Graph
- IDA/Ghidra MCP 사용 문서 또는 로컬 MCP 노트: 함수 목록, xref, decompiler output 조회, rename/comment 자동화
- LLM-assisted reversing 체크리스트: decompiler output 요약, 근거 주소, cross-check, hallucination 기록
- OpenSecurityTraining2 Intro x86/x64: disassembly 읽기와 control flow 추적 파트
- Malware Unicorn reversing workshops: strings, xrefs, functions, API flow 실습
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- 직접 만든 benign binary와 공개 교육용 crackme만 사용
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing
- CS:APP 3e: 7장 Linking 전체

## 핵심 키워드

static analysis, dynamic analysis, triage workflow, risk, artifact, safe lab, baseline, disassembly, decompilation, instruction, pseudo-C, compiler artifact, optimization, xref, function boundary, call instruction, jump table, function prologue, thunk, library wrapper, CFG, control-flow graph, call graph, basic block, branch, loop, recursion, string reference, library identification, FLIRT intro, constant, imported function, API usage

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | static analysis와 dynamic analysis 비교 | static analysis, dynamic analysis, triage workflow, risk, artifact, safe lab, baseline | static/dynamic triage 장단점 표 |
| Day 02 | disassembly와 decompilation 읽기 | disassembly, decompilation, instruction, pseudo-C, compiler artifact, optimization | assembly와 decompiler output 차이 메모 |
| Day 03 | xref와 function boundary | xref, function boundary, call instruction, jump table, function prologue, thunk, library wrapper | 함수 경계 검증 체크리스트 |
| Day 04 | CFG와 call graph | CFG, control-flow graph, call graph, basic block, branch, loop, recursion | 대상 함수 CFG와 call graph 스케치 |
| Day 05 | string reference와 library identification | string reference, library identification, FLIRT intro, constant, imported function, API usage | strings/xrefs/imports로 기능 추정 표 |
| Review | 주간 복습과 reversing 관찰 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 12 주간 개념 지도와 다음 주 질문 5개 |

## Week 12 글쓰기 훈련 흐름

Week 12의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-12-review` worksheet 1개
- 대표 산출물 후보: static/dynamic triage 장단점 표, assembly와 decompiler output 차이 메모, 함수 경계 검증 체크리스트
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
