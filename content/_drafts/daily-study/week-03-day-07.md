---
title: "Week 03 Day 07: 주간 복습과 stack 기반 사고"
draft: true
---

# Week 03 Day 07: 주간 복습과 stack 기반 사고

## 오늘의 목표

- register, stack frame, calling convention를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- ABI, syscall transition, x86 assembly가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - C/assembly/debugging 연결부
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing
- CS:APP 3e: 3.7 Procedures, 3.10 Combining Control and Data in Machine-Level Programs
- System V AMD64 ABI: Function Calling Sequence, register usage, stack alignment
- Microsoft Learn: x64 calling convention, stack allocation, prolog and epilog
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping

## 핵심 키워드

register, stack frame, calling convention, ABI, syscall transition, x86 assembly, ARM64 assembly

## 반드시 정리할 개념

- register: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.
- stack frame: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- calling convention: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- ABI: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- syscall transition: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- x86 assembly: x86 assembly의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- ARM64 assembly: ARM64 assembly의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- ps, top, pstree, lsof, strace, procfs로 하나의 프로세스를 관찰하고 thread, fd, memory map, syscall 흔적을 연결한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 03 함수 호출과 권한 전환 개념 지도
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. register를 disassembly 한 줄에서 어떻게 식별했고 control flow 이해에 어떤 도움을 줬는가?
2. stack frame를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
3. calling convention를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
4. ABI를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
5. syscall transition가 보안 경계 또는 crash 분석에서 중요한 이유를 user/kernel 전환 흐름으로 설명할 수 있는가?
6. x86 assembly를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "Week 03 함수 호출과 권한 전환 개념 지도"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
