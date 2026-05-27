---
title: "Week 03: register, stack frame, ABI, privilege transition"
draft: true
---

# Week 03: register, stack frame, ABI, privilege transition

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 함수 호출 stack diagram, register/ABI 관찰 노트, syscall transition 노트을 완성한다.

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

register, general-purpose register, flag register, RAX, RBX, RCX, RDX, program counter, RIP, stack pointer, RSP, base pointer, RBP, segment register, calling convention, ABI, System V AMD64 ABI, Microsoft x64 calling convention, argument register, return value, caller-saved register, stack frame, prologue, epilogue, return address, saved RBP, local variable, stack alignment, user mode, kernel mode, privilege level, ring 0, ring 3, interrupt, exception

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | general-purpose register와 flag register | register, general-purpose register, flag register, RAX, RBX, RCX, RDX | register 역할과 조건 분기 flag 해석표 |
| Day 02 | program counter, stack pointer, base pointer | program counter, RIP, stack pointer, RSP, base pointer, RBP, segment register | GDB single-step으로 본 RIP/RSP/RBP 변화 로그 |
| Day 03 | calling convention과 ABI | calling convention, ABI, System V AMD64 ABI, Microsoft x64 calling convention, argument register, return value, caller-saved register | SysV와 Microsoft x64 calling convention 비교표 |
| Day 04 | stack frame, prologue, epilogue | stack frame, prologue, epilogue, return address, saved RBP, local variable, stack alignment | 함수 3개의 stack frame diagram |
| Day 05 | user/kernel mode와 interrupt/exception/trap | user mode, kernel mode, privilege level, ring 0, ring 3, interrupt, exception | syscall과 exception 흐름도 |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 03 주간 개념 지도와 다음 주 질문 5개 |

## Week 03 글쓰기 훈련 흐름

Week 03의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-03-review` worksheet 1개
- 대표 산출물 후보: register 역할과 조건 분기 flag 해석표, GDB single-step으로 본 RIP/RSP/RBP 변화 로그, SysV와 Microsoft x64 calling convention 비교표
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
