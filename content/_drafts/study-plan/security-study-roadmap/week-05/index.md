---
title: "Week 05: virtual memory와 exploit mitigation"
draft: true
---

# Week 05: virtual memory와 exploit mitigation

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 memory map 해석 노트, page fault 정리, mitigation 매트릭스을 완성한다.

## 공부 자료
- 보유 서적: Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브, 운영체제 - Stallings, 운영체제 - Silberschatz - virtual memory, page table, page fault, syscall, protection, user/kernel mode

- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- CS:APP 3e: 6.1 Storage Technologies, 6.2 Locality, 6.4 Cache Memories
- OSTEP: Paging: Faster Translations (TLBs), Paging: Smaller Tables
- Computer Organization and Design: pipelining, branch prediction, cache organization 개요
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table

## 핵심 키워드

virtual address space, virtual address, physical memory, MMU, address translation, page table, page, page fault, demand paging, TLB, minor fault, major fault, stack, heap, mmap, shared memory, copy-on-write, COW, memory permission, ASLR, DEP, NX, stack canary, information leak, memory corruption, mitigation bypass, PIE, RELRO, GOT, PLT, relocation, dynamic linking, checksec, proc_pid_maps, pmap, GDB, segmentation fault, core dump, virtual memory

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | virtual address space와 physical memory | virtual address space, virtual address, physical memory, MMU, address translation, page table | virtual-to-physical translation 흐름도 |
| Day 02 | page, page table, page fault | page, page table, page fault, demand paging, TLB, minor fault, major fault | page fault 유형과 원인 정리표 |
| Day 03 | stack, heap, mmap, shared memory | stack, heap, mmap, shared memory, copy-on-write, COW, memory permission | memory region별 생성/권한/lifetime 표 |
| Day 04 | ASLR, DEP/NX, stack canary | ASLR, DEP, NX, stack canary, information leak, memory corruption, mitigation bypass | mitigation별 막는 공격과 우회 조건 표 |
| Day 05 | PIE, RELRO, dynamic relocation | PIE, RELRO, GOT, PLT, relocation, dynamic linking, checksec | checksec 결과 해석과 GOT/PLT 연결 노트 |
| Day 06 | memory map과 crash 원인 분석 실습 | proc_pid_maps, pmap, GDB, segmentation fault, page fault, memory permission, core dump | crash 주소를 memory map으로 해석한 실습 로그 |
| Day 07 | 주간 복습과 exploit/forensics 연결 | virtual memory, page table, stack, heap, ASLR, NX, RELRO | Week 05 memory와 mitigation 개념 지도 |

## 주간 산출물

- memory map 해석 노트, page fault 정리, mitigation 매트릭스
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
