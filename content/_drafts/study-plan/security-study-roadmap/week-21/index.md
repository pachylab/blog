---
title: "Week 21: heap internals와 heap exploitation"
draft: true
---

# Week 21: heap internals와 heap exploitation

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 heap allocator 구조와 UAF/double-free 실습 노트을 완성한다.

## 공부 자료
- 보유 서적: 해킹: 공격의 예술, 전문가를 위한 C, The Shellcoder's Handbook - heap object lifetime, UAF, double free, allocator behavior

- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime

## 핵심 키워드

heap internals, malloc, free, chunk metadata, arena, top chunk, heap layout, fastbin, tcache, unsorted bin, bin list, freelist, safe-linking, allocator state, Use After Free, UAF, dangling pointer, object lifetime, type confusion intro, heap reuse, double free, tcache poisoning, freelist corruption, arbitrary allocation, write primitive, out-of-bounds write, type confusion, object layout, vtable, fake object, heap overflow, heap feng shui, heap grooming, allocation pattern, free order, determinism, exploit reliability

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | heap internals와 malloc/free | heap internals, malloc, free, chunk metadata, arena, top chunk, heap layout | heap chunk layout 그림 |
| Day 02 | fastbin, tcache, unsorted bin | fastbin, tcache, unsorted bin, bin list, freelist, safe-linking, allocator state | glibc bin별 조건과 위험 표 |
| Day 03 | Use After Free | Use After Free, UAF, dangling pointer, object lifetime, type confusion intro, heap reuse | UAF 발생과 재사용 흐름도 |
| Day 04 | double free와 tcache poisoning | double free, tcache poisoning, freelist corruption, safe-linking, arbitrary allocation, write primitive | double free 제약과 우회 조건표 |
| Day 05 | out-of-bounds와 type confusion | out-of-bounds write, type confusion, object layout, vtable, fake object, heap overflow | heap object corruption 예제 분석 |
| Day 06 | heap feng shui와 exploit grooming | heap feng shui, heap grooming, allocation pattern, free order, determinism, exploit reliability | heap grooming 계획과 실패 원인 |
| Day 07 | 주간 복습과 heap primitive 정리 | heap internals, fastbin, tcache, UAF, double free, type confusion, heap feng shui | Week 21 heap exploitation concept map |

## 주간 산출물

- heap allocator 구조와 UAF/double-free 실습 노트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
