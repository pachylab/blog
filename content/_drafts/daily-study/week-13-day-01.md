---
title: "Week 13 Day 01: GDB/IDA debugger: breakpoint와 single-step"
draft: true
---

# Week 13 Day 01: GDB/IDA debugger: breakpoint와 single-step

## 오늘의 목표

- GDB와 IDA debugger에서 breakpoint, single-step, register/memory view를 비교한다.
- instruction pointer, register, call stack이 crash 재현과 control-flow 이해에 어떤 근거를 주는지 정리한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리버싱 핵심 원리, 해킹: 공격의 예술 - Windows API tracing, PE, dynamic analysis
- GDB manual: breakpoints, watchpoints, examining memory/registers, disassemble, backtrace
- Hex-Rays/IDA documentation: local/remote debugging, breakpoints, register/memory views, graph/disassembly sync
- x64dbg documentation: breakpoints, memory map, modules, patching workflow
- Microsoft Learn: WinDbg getting started, symbols, commands, user-mode debugging
- Frida docs: JavaScript API, Interceptor.attach, Stalker 개요
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures

## 핵심 키워드

debugging, breakpoint, single-step, instruction pointer, register, call stack, GDB, IDA debugger, IDA graph view, debugger database

## 반드시 정리할 개념

- debugging: breakpoint, watchpoint, trace, patch가 답하는 질문과 프로그램 상태를 바꾸는 정도를 구분한다.
- breakpoint: breakpoint, watchpoint, trace, patch가 답하는 질문과 프로그램 상태를 바꾸는 정도를 구분한다.
- single-step: single-step의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- instruction pointer: CPU가 instruction을 fetch/decode/execute하는 관점에서 ISA, opcode, operand, addressing mode를 구분하고 disassembly 한 줄을 분해한다.
- register: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.
- call stack: virtual address가 page table을 거쳐 physical memory로 변환되는 흐름과 stack/heap/mmap/shared memory의 생성 주체, 권한, lifetime을 비교한다.
- GDB: CLI 기반으로 breakpoint, register, memory, disassembly, backtrace를 재현 가능하게 기록하는 방식을 정리한다.
- IDA debugger: disassembly/graph/decompiler context와 runtime state가 함께 보이는 장점과, debugger database 상태를 기록해야 하는 이유를 정리한다.

## 실습

- 작은 프로그램을 GDB와 IDA debugger에 각각 올리고 breakpoint, register/memory view, single-step 결과를 비교한다.
- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- C 예제를 작성해 pointer arithmetic, string terminator, struct padding, function pointer 호출을 GDB와 sanitizer로 확인한다.
- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- breakpoint 위치와 register 변화 로그
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. GDB와 IDA debugger에서 같은 breakpoint를 걸었을 때 관찰 가능한 정보가 어떻게 달랐는가?
2. breakpoint는 프로그램 상태를 바꾸는가, 관찰만 하는가? 그 차이가 분석 결론에 미치는 영향은 무엇인가?
3. single-step를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. instruction pointer를 disassembly 한 줄에서 어떻게 식별했고 control flow 이해에 어떤 도움을 줬는가?
5. register를 disassembly 한 줄에서 어떻게 식별했고 control flow 이해에 어떤 도움을 줬는가?
6. call stack가 proc maps 또는 디버거 memory view에서 어떻게 드러나는가?
7. 오늘 산출물인 "breakpoint 위치와 register 변화 로그"가 다음 분석 단계에서 재사용 가능하려면 binary hash, ASLR 상태, symbol 경로, debugger 버전 중 무엇이 더 필요한가?
