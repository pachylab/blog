---
title: "Week 03: register, stack frame, ABI, privilege transition"
draft: true
---

# Week 03: register, stack frame, ABI, privilege transition

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 함수 호출 stack diagram, syscall transition 노트, x86/ARM 비교표을 완성한다.

## 공부 자료
- 보유 서적: 해킹: 공격의 예술, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - C/assembly/debugging 연결부

- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing
- 작은 C 함수 5개를 -O0/-O2로 컴파일해 stack frame 차이를 비교
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- CS:APP 3e: 3.7 Procedures, 3.10 Combining Control and Data in Machine-Level Programs
- System V AMD64 ABI: Function Calling Sequence, register usage, stack alignment
- Microsoft Learn: x64 calling convention, stack allocation, prolog and epilog
- CS:APP 3e: 8.1 Exceptions, 8.2 Processes, 8.4 Process Control

## 핵심 키워드

register, general-purpose register, flag register, RAX, RBX, RCX, RDX, ZF/CF/SF/OF, program counter, RIP, stack pointer, RSP, base pointer, RBP, segment register, stack growth, calling convention, ABI, System V AMD64 ABI, Microsoft x64 calling convention, argument register, return value, caller-saved register, callee-saved register, stack frame, prologue, epilogue, return address, saved RBP, local variable, stack alignment, user mode, kernel mode, privilege level, ring 0, ring 3, interrupt, exception, trap, syscall transition, x86 assembly, x64 assembly, ARM assembly, ARM64 assembly, AArch64, load/store architecture, condition flag

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | general-purpose register와 flag register | register, general-purpose register, flag register, RAX, RBX, RCX, RDX | register 역할과 조건 분기 flag 해석표 |
| Day 02 | program counter, stack pointer, base pointer | program counter, RIP, stack pointer, RSP, base pointer, RBP, segment register | GDB single-step으로 본 RIP/RSP/RBP 변화 로그 |
| Day 03 | calling convention과 ABI | calling convention, ABI, System V AMD64 ABI, Microsoft x64 calling convention, argument register, return value, caller-saved register | SysV와 Microsoft x64 calling convention 비교표 |
| Day 04 | stack frame, prologue, epilogue | stack frame, prologue, epilogue, return address, saved RBP, local variable, stack alignment | 함수 3개의 stack frame diagram |
| Day 05 | user/kernel mode와 interrupt/exception/trap | user mode, kernel mode, privilege level, ring 0, ring 3, interrupt, exception | syscall과 exception 흐름도 |
| Day 06 | x86/x64와 ARM/ARM64 assembly 입문 | x86 assembly, x64 assembly, ARM assembly, ARM64 assembly, AArch64, load/store architecture, condition flag | 동일 C 함수의 x64/AArch64 assembly 비교 |
| Day 07 | 주간 복습과 stack 기반 사고 | register, stack frame, calling convention, ABI, syscall transition, x86 assembly, ARM64 assembly | Week 03 함수 호출과 권한 전환 개념 지도 |

## 주간 산출물

- 함수 호출 stack diagram, syscall transition 노트, x86/ARM 비교표
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
