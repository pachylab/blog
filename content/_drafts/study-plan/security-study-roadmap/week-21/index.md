---
title: "Week 21: heap internals와 heap exploitation"
draft: true
---

# Week 21: heap internals와 heap exploitation

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 heap allocator 구조와 UAF/double-free 실습 노트을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

heap internals, malloc, free, chunk metadata, arena, top chunk, heap layout, fastbin, tcache, unsorted bin, bin list, freelist, safe-linking, allocator state, Use After Free, UAF, dangling pointer, object lifetime, type confusion intro, heap reuse, double free, tcache poisoning, freelist corruption, arbitrary allocation, write primitive, out-of-bounds write, type confusion, object layout, vtable, fake object, heap overflow

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | heap internals와 malloc/free | heap internals, malloc, free, chunk metadata, arena, top chunk, heap layout | heap chunk layout 그림 |
| Day 02 | fastbin, tcache, unsorted bin | fastbin, tcache, unsorted bin, bin list, freelist, safe-linking, allocator state | glibc bin별 조건과 위험 표 |
| Day 03 | Use After Free | Use After Free, UAF, dangling pointer, object lifetime, type confusion intro, heap reuse | UAF 발생과 재사용 흐름도 |
| Day 04 | double free와 tcache poisoning | double free, tcache poisoning, freelist corruption, safe-linking, arbitrary allocation, write primitive | double free 제약과 우회 조건표 |
| Day 05 | out-of-bounds와 type confusion | out-of-bounds write, type confusion, object layout, vtable, fake object, heap overflow | heap object corruption 예제 분석 |
| Review | 주간 복습과 exploit 사고 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 21 주간 개념 지도와 다음 주 질문 5개 |

## Week 21 글쓰기 훈련 흐름

Week 21의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-21-review` worksheet 1개
- 대표 산출물 후보: heap chunk layout 그림, glibc bin별 조건과 위험 표, UAF 발생과 재사용 흐름도
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
