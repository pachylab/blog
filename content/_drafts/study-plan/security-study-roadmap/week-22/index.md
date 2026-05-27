---
title: "Week 22: ROP, ret2libc, mitigation bypass"
draft: true
---

# Week 22: ROP, ret2libc, mitigation bypass

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 ROP chain writeup와 mitigation bypass 전략표을 완성한다.

## 공부 자료
- 보유 서적: 해킹: 공격의 예술, The Shellcoder's Handbook - ROP, ret2libc, mitigation bypass

- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table

## 핵심 키워드

ret2libc, libc leak, ASLR bypass, GOT leak, system, bin/sh, calling convention, ROP, gadget, pop rdi, ret, stack alignment, chain, ROPgadget, one_gadget risk, JOP, SROP, stack pivot, fake stack, sigreturn frame, dispatcher gadget, control-flow, stack canary, PIE, RELRO, information leak, partial overwrite, GOT overwrite, format string, seccomp, sandbox, syscall filter, allowed syscall, ORW chain, read/open/write, exploit reliability, remote exploit, network latency, environment difference, libc version, Docker, pwntools, mitigation bypass

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | ret2libc와 leak 기반 exploit | ret2libc, libc leak, ASLR bypass, GOT leak, system, bin/sh, calling convention | ret2libc 주소 계산과 payload 표 |
| Day 02 | ROP gadget과 chain 구성 | ROP, gadget, pop rdi, ret, stack alignment, chain, ROPgadget | ROP chain register state 계획표 |
| Day 03 | JOP, SROP, stack pivot | JOP, SROP, stack pivot, fake stack, sigreturn frame, dispatcher gadget, control-flow | ROP/JOP/SROP 차이와 필요 조건표 |
| Day 04 | canary, PIE, RELRO 우회 사고 | stack canary, PIE, RELRO, information leak, partial overwrite, GOT overwrite, format string | mitigation별 필요한 primitive 표 |
| Day 05 | seccomp와 sandbox 제약 | seccomp, sandbox, syscall filter, allowed syscall, ORW chain, read/open/write | seccomp profile 해석과 exploit 전략 |
| Day 06 | exploit 안정화와 remote 환경 | exploit reliability, remote exploit, network latency, environment difference, libc version, Docker, pwntools | local/remote 차이 디버깅 체크리스트 |
| Day 07 | 주간 복습과 mitigation matrix | ret2libc, ROP, JOP, SROP, stack pivot, seccomp, mitigation bypass | Week 22 mitigation bypass matrix |

## 주간 산출물

- ROP chain writeup와 mitigation bypass 전략표
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
