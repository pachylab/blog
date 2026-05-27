---
title: "Week 13: debugging, tracing, patching"
draft: true
---

# Week 13: debugging, tracing, patching

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 디버깅 재현 로그와 patch 영향 분석을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

debugging, breakpoint, single-step, instruction pointer, register, call stack, GDB, IDA debugger, watchpoint, memory write, data breakpoint, tracing, stack, heap, global variable, x64dbg, WinDbg, symbols, module list, memory map, exception, Frida, API tracing, Interceptor.attach, hooking, argument logging, return value, dynamic instrumentation, patching, NOP, conditional jump, checksum risk, code cave, binary diff, behavior change

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | GDB/IDA debugger: breakpoint와 single-step | debugging, breakpoint, single-step, instruction pointer, register, call stack, GDB, IDA debugger | breakpoint 위치와 register 변화 로그 |
| Day 02 | watchpoint와 memory tracing | watchpoint, memory write, data breakpoint, tracing, stack, heap, global variable | watchpoint로 찾은 값 변경 경로 |
| Day 03 | x64dbg와 WinDbg 기본 | x64dbg, WinDbg, symbols, module list, memory map, call stack, exception | Windows debugger 화면별 읽을 항목 정리 |
| Day 04 | Frida와 API tracing | Frida, API tracing, Interceptor.attach, hooking, argument logging, return value, dynamic instrumentation | 간단한 API hook 스크립트와 로그 |
| Day 05 | patching과 behavioral change | patching, NOP, conditional jump, checksum risk, code cave, binary diff, behavior change | patch 전후 기능 변화와 위험 분석 |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 13 주간 개념 지도와 다음 주 질문 5개 |

## Week 13 글쓰기 훈련 흐름

Week 13의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-13-review` worksheet 1개
- 대표 산출물 후보: breakpoint 위치와 register 변화 로그, watchpoint로 찾은 값 변경 경로, Windows debugger 화면별 읽을 항목 정리
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
