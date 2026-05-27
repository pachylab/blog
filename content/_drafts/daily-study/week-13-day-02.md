---
title: "Week 13 Day 02: watchpoint와 memory tracing"
draft: true
---

# Week 13 Day 02: watchpoint와 memory tracing

## 오늘의 목표

- watchpoint, memory write, data breakpoint를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- tracing, stack, heap가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리버싱 핵심 원리, 해킹: 공격의 예술 - Windows API tracing, PE, dynamic analysis
- GDB manual: breakpoints, watchpoints, examining memory/registers, disassemble, backtrace
- x64dbg documentation: breakpoints, memory map, modules, patching workflow
- Microsoft Learn: WinDbg getting started, symbols, commands, user-mode debugging
- Frida docs: JavaScript API, Interceptor.attach, Stalker 개요
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈

## 핵심 키워드

watchpoint, memory write, data breakpoint, tracing, stack, heap, global variable

## 반드시 정리할 개념

- watchpoint: breakpoint, watchpoint, trace, patch가 답하는 질문과 프로그램 상태를 바꾸는 정도를 구분한다.
- memory write: memory write의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- data breakpoint: breakpoint, watchpoint, trace, patch가 답하는 질문과 프로그램 상태를 바꾸는 정도를 구분한다.
- tracing: breakpoint, watchpoint, trace, patch가 답하는 질문과 프로그램 상태를 바꾸는 정도를 구분한다.
- stack: virtual address가 page table을 거쳐 physical memory로 변환되는 흐름과 stack/heap/mmap/shared memory의 생성 주체, 권한, lifetime을 비교한다.
- heap: virtual address가 page table을 거쳐 physical memory로 변환되는 흐름과 stack/heap/mmap/shared memory의 생성 주체, 권한, lifetime을 비교한다.
- global variable: global variable의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 작은 프로그램을 디버거에 올리고 breakpoint, watchpoint, register/memory view, single-step, patch를 각각 수행해 차이를 기록한다.
- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- pwn.college 또는 ROP Emporium 문제를 하나 선택해 crash 재현, offset 계산, primitive 확인, mitigation 확인을 순서대로 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- watchpoint로 찾은 값 변경 경로
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. watchpoint는 프로그램 상태를 바꾸는가, 관찰만 하는가? 그 차이가 분석 결론에 미치는 영향은 무엇인가?
2. memory write를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. data breakpoint는 프로그램 상태를 바꾸는가, 관찰만 하는가? 그 차이가 분석 결론에 미치는 영향은 무엇인가?
4. tracing를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. stack가 proc maps 또는 디버거 memory view에서 어떻게 드러나는가?
6. heap가 proc maps 또는 디버거 memory view에서 어떻게 드러나는가?
7. 오늘 산출물인 "watchpoint로 찾은 값 변경 경로"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
