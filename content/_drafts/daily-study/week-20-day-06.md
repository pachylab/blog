---
title: "Week 20 Day 06: exploit reliability와 mitigation 확인"
draft: true
---

# Week 20 Day 06: exploit reliability와 mitigation 확인

## 오늘의 목표

- exploit reliability, ASLR, PIE를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- RELRO, stack canary, information leak가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, 전문가를 위한 C, 모던 C, The Shellcoder's Handbook - signedness, overflow, format string, exploit primitive
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트

## 핵심 키워드

exploit reliability, ASLR, PIE, RELRO, stack canary, information leak, retry strategy

## 반드시 정리할 개념

- exploit reliability: 핵심 primitive가 read, write, allocation control, control-flow hijack 중 무엇인지 확인 절차와 mitigation 영향을 적는다.
- ASLR: 각 mitigation이 막는 공격 primitive와 우회에 필요한 leak/write/control primitive를 연결한다.
- PIE: 각 mitigation이 막는 공격 primitive와 우회에 필요한 leak/write/control primitive를 연결한다.
- RELRO: 각 mitigation이 막는 공격 primitive와 우회에 필요한 leak/write/control primitive를 연결한다.
- stack canary: virtual address가 page table을 거쳐 physical memory로 변환되는 흐름과 stack/heap/mmap/shared memory의 생성 주체, 권한, lifetime을 비교한다.
- information leak: information leak의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- retry strategy: retry strategy의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- pwn.college 또는 ROP Emporium 문제를 하나 선택해 crash 재현, offset 계산, primitive 확인, mitigation 확인을 순서대로 기록한다.
- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- exploit 성공률과 mitigation 영향 기록
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. exploit reliability에서 핵심 primitive는 read, write, allocation control, control-flow hijack 중 무엇이고 어떻게 확인했는가?
2. ASLR는 어떤 공격 단계를 막고 우회에는 어떤 leak 또는 write primitive가 필요한가?
3. PIE는 어떤 공격 단계를 막고 우회에는 어떤 leak 또는 write primitive가 필요한가?
4. RELRO는 어떤 공격 단계를 막고 우회에는 어떤 leak 또는 write primitive가 필요한가?
5. stack canary가 proc maps 또는 디버거 memory view에서 어떻게 드러나는가?
6. information leak를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "exploit 성공률과 mitigation 영향 기록"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
