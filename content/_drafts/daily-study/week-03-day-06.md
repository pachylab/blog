---
title: "Week 03 Day 06: x86/x64와 ARM/ARM64 assembly 입문"
draft: true
---

# Week 03 Day 06: x86/x64와 ARM/ARM64 assembly 입문

## 오늘의 목표

- x86 assembly, x64 assembly, ARM assembly를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- ARM64 assembly, AArch64, load/store architecture가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - C/assembly/debugging 연결부
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing
- 작은 C 함수 5개를 -O0/-O2로 컴파일해 stack frame 차이를 비교

## 핵심 키워드

x86 assembly, x64 assembly, ARM assembly, ARM64 assembly, AArch64, load/store architecture, condition flag

## 반드시 정리할 개념

- x86 assembly: x86 assembly의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- x64 assembly: x64 assembly의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- ARM assembly: ARM assembly의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- ARM64 assembly: ARM64 assembly의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- AArch64: AArch64의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- load/store architecture: load/store architecture의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- condition flag: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.

## 실습

- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 동일 C 함수의 x64/AArch64 assembly 비교
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. x86 assembly를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. x64 assembly를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. ARM assembly를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. ARM64 assembly를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. AArch64를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. load/store architecture를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "동일 C 함수의 x64/AArch64 assembly 비교"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
