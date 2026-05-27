---
title: "Week 12: static reversing workflow, IDA/Ghidra, AI-assisted analysis"
draft: true
---

# Week 12: static reversing workflow, IDA/Ghidra, AI-assisted analysis

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 IDA/Ghidra project와 static/AI triage report 초안을 완성한다.

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

static analysis, dynamic analysis, triage workflow, risk, artifact, safe lab, baseline, disassembly, decompilation, instruction, pseudo-C, compiler artifact, optimization, xref, function boundary, call instruction, jump table, function prologue, thunk, library wrapper, CFG, control-flow graph, call graph, basic block, branch, loop, recursion, string reference, library identification, FLIRT intro, constant, imported function, API usage, IDA, IDA View, Hex-Rays, Ghidra, CodeBrowser, Decompiler, Symbol Tree, function rename, data type, comment, IDA MCP, Ghidra MCP, LLM-assisted decompilation, prompt log, hallucination check, vulnerability pattern

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | static analysis와 dynamic analysis 비교 | static analysis, dynamic analysis, triage workflow, risk, artifact, safe lab, baseline | static/dynamic triage 장단점 표 |
| Day 02 | disassembly와 decompilation 읽기 | disassembly, decompilation, instruction, pseudo-C, compiler artifact, optimization | assembly와 decompiler output 차이 메모 |
| Day 03 | xref와 function boundary | xref, function boundary, call instruction, jump table, function prologue, thunk, library wrapper | 함수 경계 검증 체크리스트 |
| Day 04 | CFG와 call graph | CFG, control-flow graph, call graph, basic block, branch, loop, recursion | 대상 함수 CFG와 call graph 스케치 |
| Day 05 | string reference와 library identification | string reference, library identification, FLIRT intro, constant, imported function, API usage | strings/xrefs/imports로 기능 추정 표 |
| Day 06 | IDA/Ghidra 프로젝트 정리 | IDA, IDA View, Hex-Rays, Ghidra, CodeBrowser, Decompiler, Symbol Tree, function rename, data type, comment | 분석 프로젝트 내 함수명/주석 정리 |
| Day 07 | AI-assisted binary analysis와 triage report | LLM-assisted decompilation, IDA MCP, Ghidra MCP, xref, function boundary, CFG, hallucination check, vulnerability pattern | AI 보조 분석 검증표와 Week 12 static triage report |

## 주간 산출물

- IDA/Ghidra project와 static/AI triage report 초안
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
