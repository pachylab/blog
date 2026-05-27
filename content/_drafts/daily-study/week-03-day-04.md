---
title: "Week 03 Day 04: stack frame, prologue, epilogue"
draft: true
---

# Week 03 Day 04: stack frame, prologue, epilogue

## 오늘의 목표

- stack frame, prologue, epilogue를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- return address, saved RBP, local variable가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - C/assembly/debugging 연결부
- CS:APP 3e: 3.7 Procedures, 3.10 Combining Control and Data in Machine-Level Programs
- System V AMD64 ABI: Function Calling Sequence, register usage, stack alignment
- Microsoft Learn: x64 calling convention, stack allocation, prolog and epilog
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트

## 핵심 키워드

stack frame, prologue, epilogue, return address, saved RBP, local variable, stack alignment

## 반드시 정리할 개념

- stack frame: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- prologue: prologue가 saved RBP와 local variable 공간을 만들고 epilogue가 이를 되돌리는 순서를 instruction 단위로 정리한다. return address가 overwrite되면 control flow가 어떻게 바뀌는지 적는다.
- epilogue: prologue가 saved RBP와 local variable 공간을 만들고 epilogue가 이를 되돌리는 순서를 instruction 단위로 정리한다. return address가 overwrite되면 control flow가 어떻게 바뀌는지 적는다.
- return address: prologue가 saved RBP와 local variable 공간을 만들고 epilogue가 이를 되돌리는 순서를 instruction 단위로 정리한다. return address가 overwrite되면 control flow가 어떻게 바뀌는지 적는다.
- saved RBP: prologue가 saved RBP와 local variable 공간을 만들고 epilogue가 이를 되돌리는 순서를 instruction 단위로 정리한다. return address가 overwrite되면 control flow가 어떻게 바뀌는지 적는다.
- local variable: prologue가 saved RBP와 local variable 공간을 만들고 epilogue가 이를 되돌리는 순서를 instruction 단위로 정리한다. return address가 overwrite되면 control flow가 어떻게 바뀌는지 적는다.
- stack alignment: multi-byte 값의 저장 순서, word size, alignment가 struct layout, ABI, 파일/패킷 파싱에 미치는 영향을 정리한다.

## 실습

- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- 작은 C 프로그램 또는 Python 스크립트로 정수 값을 hex dump하고 signed/unsigned, endian, sizeof/alignof 결과를 표로 정리한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 함수 3개의 stack frame diagram
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. stack frame를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
2. prologue instruction을 보면 stack pointer와 base pointer가 어떤 순서로 바뀌는가?
3. epilogue instruction을 보면 stack pointer와 base pointer가 어떤 순서로 바뀌는가?
4. return address가 stack frame 안에서 어디에 있으며 overflow가 발생하면 어떤 순서로 손상되는가?
5. saved RBP가 stack frame 안에서 어디에 있으며 overflow가 발생하면 어떤 순서로 손상되는가?
6. local variable가 stack frame 안에서 어디에 있으며 overflow가 발생하면 어떤 순서로 손상되는가?
7. 오늘 산출물인 "함수 3개의 stack frame diagram"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
