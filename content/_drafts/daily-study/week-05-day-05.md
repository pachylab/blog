---
title: "Week 05 Day 05: PIE, RELRO, dynamic relocation"
draft: true
---

# Week 05 Day 05: PIE, RELRO, dynamic relocation

## 오늘의 목표

- PIE, RELRO, GOT를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- PLT, relocation, dynamic linking가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브, 운영체제 - Stallings, 운영체제 - Silberschatz - virtual memory, page table, page fault, syscall, protection, user/kernel mode
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table
- System V ABI: ELF header, sections, program headers, dynamic linking 개요
- Apple Mach-O Runtime Reference: Mach-O file structure, load commands 개요
- Practical Binary Analysis: ELF structure, symbol tables, disassembly workflow 관련 장

## 핵심 키워드

PIE, RELRO, GOT, PLT, relocation, dynamic linking, checksec

## 반드시 정리할 개념

- PIE: 각 mitigation이 막는 공격 primitive와 우회에 필요한 leak/write/control primitive를 연결한다.
- RELRO: 각 mitigation이 막는 공격 primitive와 우회에 필요한 leak/write/control primitive를 연결한다.
- GOT: header, section/segment, import/export, relocation, dynamic linking 구조를 OS별로 비교하고 loader 작업을 정리한다.
- PLT: header, section/segment, import/export, relocation, dynamic linking 구조를 OS별로 비교하고 loader 작업을 정리한다.
- relocation: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- dynamic linking: dynamic linking의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- checksec: checksec의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- 간단한 바이너리를 readelf/otool/dumpbin 등으로 열어 header, sections, imports, relocations, dynamic symbols를 표로 정리한다.
- 하나의 소스를 .i, .s, .o, executable 단계로 나누고 nm/readelf/objdump로 symbol과 relocation을 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- checksec 결과 해석과 GOT/PLT 연결 노트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. PIE는 어떤 공격 단계를 막고 우회에는 어떤 leak 또는 write primitive가 필요한가?
2. RELRO는 어떤 공격 단계를 막고 우회에는 어떤 leak 또는 write primitive가 필요한가?
3. GOT 구조가 loader, dynamic linking, import resolution 중 어느 단계와 연결되는가?
4. PLT 구조가 loader, dynamic linking, import resolution 중 어느 단계와 연결되는가?
5. relocation 단계에서 생성되거나 소비되는 artifact는 무엇이고 reversing에서는 어디서 확인하는가?
6. dynamic linking를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "checksec 결과 해석과 GOT/PLT 연결 노트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
