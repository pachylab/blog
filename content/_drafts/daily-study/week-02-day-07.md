---
title: "Week 02 Day 07: 주간 복습과 취약점 연결"
draft: true
---

# Week 02 Day 07: 주간 복습과 취약점 연결

## 오늘의 목표

- signedness bug, integer overflow, alignment를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- addressing mode, cache, TLB가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - bit/byte, 정수 표현, memory hierarchy, machine-level view
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations

## 핵심 키워드

signedness bug, integer overflow, alignment, addressing mode, cache, TLB

## 반드시 정리할 개념

- signedness bug: signedness bug의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- integer overflow: 같은 bit pattern을 signed/unsigned로 다르게 해석하는 이유와 two complement, wraparound, undefined behavior를 취약점 관점으로 정리한다.
- alignment: multi-byte 값의 저장 순서, word size, alignment가 struct layout, ABI, 파일/패킷 파싱에 미치는 영향을 정리한다.
- addressing mode: CPU가 instruction을 fetch/decode/execute하는 관점에서 ISA, opcode, operand, addressing mode를 구분하고 disassembly 한 줄을 분해한다.
- cache: cache locality, TLB hit/miss, pipeline stall, branch prediction이 성능과 side-channel 분석에 왜 중요한지 예로 설명한다.
- TLB: cache locality, TLB hit/miss, pipeline stall, branch prediction이 성능과 side-channel 분석에 왜 중요한지 예로 설명한다.

## 실습

- 작은 C 프로그램 또는 Python 스크립트로 정수 값을 hex dump하고 signed/unsigned, endian, sizeof/alignof 결과를 표로 정리한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 02 개념별 보안 영향 정리표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. signedness bug를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. integer overflow 때문에 같은 bit pattern이 다른 값으로 해석되는 예와 취약점 조건을 설명할 수 있는가?
3. alignment를 모르면 구조체, 파일 포맷, 네트워크 패킷 중 어디에서 해석 오류가 생기는가?
4. addressing mode를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. cache를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. TLB를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "Week 02 개념별 보안 영향 정리표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
