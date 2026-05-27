---
title: "Week 19 Day 02: stack overflow와 buffer overflow"
draft: true
---

# Week 19 Day 02: stack overflow와 buffer overflow

## 오늘의 목표

- stack overflow, buffer overflow, stack frame를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- local buffer, saved RBP, return address overwrite가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, The Shellcoder's Handbook, 메타스플로잇 - stack overflow, shellcode, exploit validation
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제

## 핵심 키워드

stack overflow, buffer overflow, stack frame, local buffer, saved RBP, return address overwrite

## 반드시 정리할 개념

- stack overflow: 같은 bit pattern을 signed/unsigned로 다르게 해석하는 이유와 two complement, wraparound, undefined behavior를 취약점 관점으로 정리한다.
- buffer overflow: 같은 bit pattern을 signed/unsigned로 다르게 해석하는 이유와 two complement, wraparound, undefined behavior를 취약점 관점으로 정리한다.
- stack frame: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- local buffer: local buffer의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- saved RBP: prologue가 saved RBP와 local variable 공간을 만들고 epilogue가 이를 되돌리는 순서를 instruction 단위로 정리한다. return address가 overwrite되면 control flow가 어떻게 바뀌는지 적는다.
- return address overwrite: prologue가 saved RBP와 local variable 공간을 만들고 epilogue가 이를 되돌리는 순서를 instruction 단위로 정리한다. return address가 overwrite되면 control flow가 어떻게 바뀌는지 적는다.

## 실습

- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- pwn.college 또는 ROP Emporium 문제를 하나 선택해 crash 재현, offset 계산, primitive 확인, mitigation 확인을 순서대로 기록한다.
- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- stack overflow 메모리 그림
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. stack overflow 때문에 같은 bit pattern이 다른 값으로 해석되는 예와 취약점 조건을 설명할 수 있는가?
2. buffer overflow 때문에 같은 bit pattern이 다른 값으로 해석되는 예와 취약점 조건을 설명할 수 있는가?
3. stack frame를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
4. local buffer를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. saved RBP가 stack frame 안에서 어디에 있으며 overflow가 발생하면 어떤 순서로 손상되는가?
6. return address overwrite가 stack frame 안에서 어디에 있으며 overflow가 발생하면 어떤 순서로 손상되는가?
7. 오늘 산출물인 "stack overflow 메모리 그림"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
