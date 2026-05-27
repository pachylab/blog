---
title: "Week 19 Day 07: 주간 복습과 stack exploit report"
draft: true
---

# Week 19 Day 07: 주간 복습과 stack exploit report

## 오늘의 목표

- exploit primitive, stack overflow, offset를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- ret2win, NX, pwntools가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

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

## 핵심 키워드

exploit primitive, stack overflow, offset, ret2win, NX, pwntools, RIP control

## 반드시 정리할 개념

- exploit primitive: 핵심 primitive가 read, write, allocation control, control-flow hijack 중 무엇인지 확인 절차와 mitigation 영향을 적는다.
- stack overflow: 같은 bit pattern을 signed/unsigned로 다르게 해석하는 이유와 two complement, wraparound, undefined behavior를 취약점 관점으로 정리한다.
- offset: offset의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- ret2win: ret2win의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- NX: 각 mitigation이 막는 공격 primitive와 우회에 필요한 leak/write/control primitive를 연결한다.
- pwntools: pwntools의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- RIP control: RIP control의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- pwn.college 또는 ROP Emporium 문제를 하나 선택해 crash 재현, offset 계산, primitive 확인, mitigation 확인을 순서대로 기록한다.
- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 19 stack overflow writeup
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. exploit primitive에서 핵심 primitive는 read, write, allocation control, control-flow hijack 중 무엇이고 어떻게 확인했는가?
2. stack overflow 때문에 같은 bit pattern이 다른 값으로 해석되는 예와 취약점 조건을 설명할 수 있는가?
3. offset를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. ret2win를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. NX는 어떤 공격 단계를 막고 우회에는 어떤 leak 또는 write primitive가 필요한가?
6. pwntools를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "Week 19 stack overflow writeup"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
