---
title: "Week 12 Day 02: disassembly와 decompilation 읽기"
draft: true
---

# Week 12 Day 02: disassembly와 decompilation 읽기

## 오늘의 목표

- disassembly, decompilation, instruction를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- pseudo-C, compiler artifact, optimization가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리버싱 핵심 원리, 실전 바이너리 분석 - debugger, breakpoint, watchpoint, xref, function boundary
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 5장 IDA Pro
- Ghidra Student Guide: CodeBrowser, Listing, Decompiler, Symbol Tree, References, Function Graph
- OpenSecurityTraining2 Intro x86/x64: disassembly 읽기와 control flow 추적 파트
- Malware Unicorn reversing workshops: strings, xrefs, functions, API flow 실습
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing
- CS:APP 3e: 7장 Linking 전체

## 핵심 키워드

disassembly, decompilation, instruction, pseudo-C, compiler artifact, optimization

## 반드시 정리할 개념

- disassembly: 자동 분석 결과를 그대로 믿지 않고 xref, function boundary, CFG/call graph, runtime evidence로 교차 검증한다.
- decompilation: 자동 분석 결과를 그대로 믿지 않고 xref, function boundary, CFG/call graph, runtime evidence로 교차 검증한다.
- instruction: CPU가 instruction을 fetch/decode/execute하는 관점에서 ISA, opcode, operand, addressing mode를 구분하고 disassembly 한 줄을 분해한다.
- pseudo-C: pseudo-C의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- compiler artifact: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- optimization: AST, IR, CFG, SSA, bytecode/VM/JIT를 컴파일러와 decompiler가 사용하는 중간 표현으로 구분한다.

## 실습

- 직접 컴파일한 benign binary를 Ghidra에 로드하고 strings, xrefs, function graph, decompiler 결과를 서로 검증한다.
- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 하나의 소스를 .i, .s, .o, executable 단계로 나누고 nm/readelf/objdump로 symbol과 relocation을 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- assembly와 decompiler output 차이 메모
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. disassembly를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. decompilation 결과를 도구가 만든 값 그대로 믿지 않기 위해 어떤 교차 검증을 했는가?
3. instruction를 disassembly 한 줄에서 어떻게 식별했고 control flow 이해에 어떤 도움을 줬는가?
4. pseudo-C를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. compiler artifact 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
6. optimization를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "assembly와 decompiler output 차이 메모"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
