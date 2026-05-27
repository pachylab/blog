---
title: "Week 19: system hacking: stack overflow 입문"
draft: true
---

# Week 19: system hacking: stack overflow 입문

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 stack overflow writeup와 exploit primitive 노트을 완성한다.

## 공부 자료
- 보유 서적: 해킹: 공격의 예술, The Shellcoder's Handbook, 메타스플로잇 - stack overflow, shellcode, exploit validation

- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- GDB manual: breakpoints, watchpoints, examining memory/registers, disassemble, backtrace
- x64dbg documentation: breakpoints, memory map, modules, patching workflow

## 핵심 키워드

vulnerability, exploit, exploit primitive, crash, control primitive, read primitive, write primitive, stack overflow, buffer overflow, stack frame, local buffer, saved RBP, return address overwrite, crash analysis, cyclic pattern, offset, GDB, core dump, RIP control, segmentation fault, ret2win, calling convention, stack alignment, win function, payload layout, shellcode intro, NX, executable stack, syscall, bad character, payload encoding, pwntools, process, remote, sendline, recvuntil, ELF helper, exploit script

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | vulnerability, exploit, exploit primitive | vulnerability, exploit, exploit primitive, crash, control primitive, read primitive, write primitive | bug/vulnerability/exploit/primitive 구분표 |
| Day 02 | stack overflow와 buffer overflow | stack overflow, buffer overflow, stack frame, local buffer, saved RBP, return address overwrite | stack overflow 메모리 그림 |
| Day 03 | crash 분석과 offset 계산 | crash analysis, cyclic pattern, offset, GDB, core dump, RIP control, segmentation fault | cyclic offset 계산 로그 |
| Day 04 | ret2win 기초 | ret2win, return address overwrite, calling convention, stack alignment, win function, payload layout | ret2win payload 구조와 성공 조건 |
| Day 05 | shellcode와 NX 관계 맛보기 | shellcode intro, NX, executable stack, syscall, bad character, payload encoding | NX on/off 전략 비교 노트 |
| Day 06 | pwntools exploit skeleton | pwntools, process, remote, sendline, recvuntil, ELF helper, exploit script | 재사용 가능한 pwntools skeleton |
| Day 07 | 주간 복습과 stack exploit report | exploit primitive, stack overflow, offset, ret2win, NX, pwntools, RIP control | Week 19 stack overflow writeup |

## 주간 산출물

- stack overflow writeup와 exploit primitive 노트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
