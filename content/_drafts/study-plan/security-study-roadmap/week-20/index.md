---
title: "Week 20: format string, integer bug, arbitrary read/write"
draft: true
---

# Week 20: format string, integer bug, arbitrary read/write

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 format string/integer/OOB 취약점 분석 노트을 완성한다.

## 공부 자료
- 보유 서적: 해킹: 공격의 예술, 전문가를 위한 C, 모던 C, The Shellcoder's Handbook - signedness, overflow, format string, exploit primitive

- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table
- System V ABI: ELF header, sections, program headers, dynamic linking 개요
- Apple Mach-O Runtime Reference: Mach-O file structure, load commands 개요
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic

## 핵심 키워드

format string bug, printf, stack leak, %p, %s, %n, variadic function, arbitrary read, arbitrary write, GOT overwrite, PLT, lazy binding, RELRO, target selection, integer overflow, integer underflow, size calculation, allocation size, wraparound, bounds check bypass, signedness bug, signed/unsigned conversion, negative length, implicit cast, comparison bug, C integer promotion, out-of-bounds read, out-of-bounds write, array index, bounds check, memory disclosure, corruption, exploit reliability, ASLR, PIE, stack canary, information leak, retry strategy, format string, OOB

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | format string bug 구조 | format string bug, printf, stack leak, %p, %s, %n, variadic function | format string 읽기/쓰기 primitive 정리 |
| Day 02 | arbitrary read/write와 GOT overwrite | arbitrary read, arbitrary write, GOT overwrite, PLT, lazy binding, RELRO, target selection | GOT overwrite 성공/실패 조건표 |
| Day 03 | integer overflow/underflow | integer overflow, integer underflow, size calculation, allocation size, wraparound, bounds check bypass | integer bug에서 OOB로 이어지는 흐름도 |
| Day 04 | signedness bug | signedness bug, signed/unsigned conversion, negative length, implicit cast, comparison bug, C integer promotion | signedness bug 예제와 방어 코드 |
| Day 05 | out-of-bounds read/write | out-of-bounds read, out-of-bounds write, array index, bounds check, memory disclosure, corruption | OOB read/write primitive 차이표 |
| Day 06 | exploit reliability와 mitigation 확인 | exploit reliability, ASLR, PIE, RELRO, stack canary, information leak, retry strategy | exploit 성공률과 mitigation 영향 기록 |
| Day 07 | 주간 복습과 primitive 조합 | format string, arbitrary read, arbitrary write, GOT overwrite, integer overflow, signedness bug, OOB | Week 20 primitive 조합 지도 |

## 주간 산출물

- format string/integer/OOB 취약점 분석 노트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
