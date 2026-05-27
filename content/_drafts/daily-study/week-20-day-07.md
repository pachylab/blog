---
title: "Week 20 Day 07: 주간 복습과 primitive 조합"
draft: true
---

# Week 20 Day 07: 주간 복습과 primitive 조합

## 오늘의 목표

- format string, arbitrary read, arbitrary write를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- GOT overwrite, integer overflow, signedness bug가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

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

## 핵심 키워드

format string, arbitrary read, arbitrary write, GOT overwrite, integer overflow, signedness bug, OOB

## 반드시 정리할 개념

- format string: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- arbitrary read: arbitrary read의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- arbitrary write: arbitrary write의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- GOT overwrite: header, section/segment, import/export, relocation, dynamic linking 구조를 OS별로 비교하고 loader 작업을 정리한다.
- integer overflow: 같은 bit pattern을 signed/unsigned로 다르게 해석하는 이유와 two complement, wraparound, undefined behavior를 취약점 관점으로 정리한다.
- signedness bug: signedness bug의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- OOB: OOB의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- pwn.college 또는 ROP Emporium 문제를 하나 선택해 crash 재현, offset 계산, primitive 확인, mitigation 확인을 순서대로 기록한다.
- 간단한 바이너리를 readelf/otool/dumpbin 등으로 열어 header, sections, imports, relocations, dynamic symbols를 표로 정리한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 20 primitive 조합 지도
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. format string에서 핵심 primitive는 read, write, allocation control, control-flow hijack 중 무엇이고 어떻게 확인했는가?
2. arbitrary read를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. arbitrary write를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. GOT overwrite 구조가 loader, dynamic linking, import resolution 중 어느 단계와 연결되는가?
5. integer overflow 때문에 같은 bit pattern이 다른 값으로 해석되는 예와 취약점 조건을 설명할 수 있는가?
6. signedness bug를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "Week 20 primitive 조합 지도"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
