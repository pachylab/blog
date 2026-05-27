---
title: "Week 12 Day 06: IDA/Ghidra 프로젝트 정리"
draft: true
---

# Week 12 Day 06: IDA/Ghidra 프로젝트 정리

## 오늘의 목표

- IDA와 Ghidra에서 같은 binary를 열었을 때 function boundary, xref, decompiler output이 어떻게 다른지 비교한다.
- 함수명 변경, type 지정, comment, bookmark가 분석 근거를 보존하는 방식과 한계를 정리한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리버싱 핵심 원리, 실전 바이너리 분석 - debugger, breakpoint, watchpoint, xref, function boundary
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 5장 IDA Pro
- Hex-Rays/IDA documentation: IDA View, graph view, xrefs, functions, names, comments, debugger 개요
- Ghidra Student Guide: CodeBrowser, Listing, Decompiler, Symbol Tree, References, Function Graph
- OpenSecurityTraining2 Intro x86/x64: disassembly 읽기와 control flow 추적 파트
- Malware Unicorn reversing workshops: strings, xrefs, functions, API flow 실습
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper

## 핵심 키워드

IDA, IDA View, Hex-Rays, Ghidra, CodeBrowser, Decompiler, Symbol Tree, xref, function rename, data type, comment

## 반드시 정리할 개념

- IDA: IDA View, graph view, functions window, names, xrefs가 각각 답하는 질문을 정리한다.
- Ghidra: Listing, Decompiler, Symbol Tree, Function Graph가 각각 답하는 질문을 정리한다.
- Decompiler: pseudo-C는 근거가 아니라 가설이라는 점을 적고, assembly/xref/runtime evidence로 확인해야 하는 항목을 표시한다.
- xref: string, import, call xref를 구분하고 기능 추정에 어떤 근거가 되는지 정리한다.
- function rename: 이름 변경 기준을 입력, 처리, 출력, 근거 주소 형태로 남겨 다른 사람이 검토할 수 있게 한다.
- data type: structure, pointer, array, enum type 지정이 decompiler output을 바꾸는 방식과 오판 위험을 적는다.
- comment: 사실, 추정, 질문, TODO를 구분해 comment에 남기는 규칙을 만든다.

## 실습

- 직접 컴파일한 benign binary를 IDA와 Ghidra에 각각 로드하고 strings, xrefs, function graph, decompiler 결과를 서로 검증한다.
- 하나의 소스를 .i, .s, .o, executable 단계로 나누고 nm/readelf/objdump로 symbol과 relocation을 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 분석 프로젝트 내 함수명/주석 정리
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. IDA와 Ghidra가 다르게 잡은 function boundary가 있다면 어느 근거로 판단했는가?
2. Decompiler output을 그대로 믿으면 안 되는 지점은 무엇이며 어떤 assembly/xref로 검증했는가?
3. xref가 기능 추정에 도움이 되는 경우와 오해를 만드는 경우는 각각 무엇인가?
4. function rename 기준을 나중에 검토할 수 있게 남기려면 어떤 주소와 근거가 필요한가?
5. data type 지정이 decompiler output을 어떻게 바꿨고, 오판 위험은 무엇인가?
6. comment에 사실과 추정을 분리했는가? 분리하지 않으면 보고서에서 어떤 문제가 생기는가?
7. 오늘 산출물인 "분석 프로젝트 내 함수명/주석 정리"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
