---
title: "Week 13: debugging, tracing, patching"
draft: true
---

# Week 13: debugging, tracing, patching

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 디버깅 재현 로그와 patch 영향 분석을 완성한다.

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
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈

## 핵심 키워드

debugging, breakpoint, single-step, instruction pointer, register, call stack, GDB, IDA debugger, IDA graph view, debugger database, watchpoint, memory write, data breakpoint, tracing, stack, heap, global variable, x64dbg, WinDbg, symbols, module list, memory map, exception, Frida, API tracing, Interceptor.attach, hooking, argument logging, return value, dynamic instrumentation, patching, NOP, conditional jump, checksum risk, code cave, binary diff, behavior change, reproducibility, crash input, breakpoint script, trace log, symbol path, tool version

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | GDB/IDA debugger: breakpoint와 single-step | debugging, breakpoint, single-step, instruction pointer, register, call stack, GDB, IDA debugger | breakpoint 위치와 register 변화 로그 |
| Day 02 | watchpoint와 memory tracing | watchpoint, memory write, data breakpoint, tracing, stack, heap, global variable | watchpoint로 찾은 값 변경 경로 |
| Day 03 | x64dbg와 WinDbg 기본 | x64dbg, WinDbg, symbols, module list, memory map, call stack, exception | Windows debugger 화면별 읽을 항목 정리 |
| Day 04 | Frida와 API tracing | Frida, API tracing, Interceptor.attach, hooking, argument logging, return value, dynamic instrumentation | 간단한 API hook 스크립트와 로그 |
| Day 05 | patching과 behavioral change | patching, NOP, conditional jump, checksum risk, code cave, binary diff, behavior change | patch 전후 기능 변화와 위험 분석 |
| Day 06 | debugging report 재현성 | reproducibility, crash input, breakpoint script, trace log, symbol path, tool version | 다른 사람이 재현 가능한 디버깅 절차 |
| Day 07 | 주간 복습과 동적 분석 연결 | breakpoint, watchpoint, tracing, Frida, patching, WinDbg, GDB | Week 13 dynamic analysis checklist |

## 주간 산출물

- 디버깅 재현 로그와 patch 영향 분석
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
