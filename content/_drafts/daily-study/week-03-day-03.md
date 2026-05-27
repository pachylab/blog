---
title: "Week 03 Day 03: calling convention과 ABI"
draft: true
---

# Week 03 Day 03: calling convention과 ABI

## 오늘의 목표

- calling convention, ABI, System V AMD64 ABI를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- Microsoft x64 calling convention, argument register, return value가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - C/assembly/debugging 연결부
- CS:APP 3e: 3.7 Procedures, 3.10 Combining Control and Data in Machine-Level Programs
- System V AMD64 ABI: Function Calling Sequence, register usage, stack alignment
- Microsoft Learn: x64 calling convention, stack allocation, prolog and epilog
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing
- 작은 C 함수 5개를 -O0/-O2로 컴파일해 stack frame 차이를 비교

## 핵심 키워드

calling convention, ABI, System V AMD64 ABI, Microsoft x64 calling convention, argument register, return value, caller-saved register, callee-saved register

## 반드시 정리할 개념

- calling convention: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- ABI: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- System V AMD64 ABI: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- Microsoft x64 calling convention: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- argument register: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.
- return value: return value의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- caller-saved register: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.
- callee-saved register: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.

## 실습

- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- SysV와 Microsoft x64 calling convention 비교표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. calling convention를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
2. ABI를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
3. System V AMD64 ABI를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
4. Microsoft x64 calling convention를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
5. argument register를 disassembly 한 줄에서 어떻게 식별했고 control flow 이해에 어떤 도움을 줬는가?
6. return value를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "SysV와 Microsoft x64 calling convention 비교표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
