---
title: "Week 20: format string, integer bug, arbitrary read/write"
draft: true
---

# Week 20: format string, integer bug, arbitrary read/write

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 format string/integer/OOB 취약점 분석 노트을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

format string bug, printf, stack leak, %p, %s, %n, variadic function, arbitrary read, arbitrary write, GOT overwrite, PLT, lazy binding, RELRO, target selection, integer overflow, integer underflow, size calculation, allocation size, wraparound, bounds check bypass, signedness bug, signed/unsigned conversion, negative length, implicit cast, comparison bug, C integer promotion, out-of-bounds read, out-of-bounds write, array index, bounds check, memory disclosure, corruption

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | format string bug 구조 | format string bug, printf, stack leak, %p, %s, %n, variadic function | format string 읽기/쓰기 primitive 정리 |
| Day 02 | arbitrary read/write와 GOT overwrite | arbitrary read, arbitrary write, GOT overwrite, PLT, lazy binding, RELRO, target selection | GOT overwrite 성공/실패 조건표 |
| Day 03 | integer overflow/underflow | integer overflow, integer underflow, size calculation, allocation size, wraparound, bounds check bypass | integer bug에서 OOB로 이어지는 흐름도 |
| Day 04 | signedness bug | signedness bug, signed/unsigned conversion, negative length, implicit cast, comparison bug, C integer promotion | signedness bug 예제와 방어 코드 |
| Day 05 | out-of-bounds read/write | out-of-bounds read, out-of-bounds write, array index, bounds check, memory disclosure, corruption | OOB read/write primitive 차이표 |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 20 주간 개념 지도와 다음 주 질문 5개 |

## Week 20 글쓰기 훈련 흐름

Week 20의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-20-review` worksheet 1개
- 대표 산출물 후보: format string 읽기/쓰기 primitive 정리, GOT overwrite 성공/실패 조건표, integer bug에서 OOB로 이어지는 흐름도
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
