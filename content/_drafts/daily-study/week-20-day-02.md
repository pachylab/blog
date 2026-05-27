---
title: "Week 20 Day 02: arbitrary read/write와 GOT overwrite"
draft: true
---

# Week 20 Day 02: arbitrary read/write와 GOT overwrite

## 오늘의 목표

- arbitrary read, arbitrary write, GOT overwrite를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- PLT, lazy binding, RELRO가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, 전문가를 위한 C, 모던 C, The Shellcoder's Handbook - signedness, overflow, format string, exploit primitive
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table
- System V ABI: ELF header, sections, program headers, dynamic linking 개요
- Apple Mach-O Runtime Reference: Mach-O file structure, load commands 개요

## 핵심 키워드

arbitrary read, arbitrary write, GOT overwrite, PLT, lazy binding, RELRO, target selection

## 반드시 정리할 개념

- arbitrary read: arbitrary read의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- arbitrary write: arbitrary write의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- GOT overwrite: header, section/segment, import/export, relocation, dynamic linking 구조를 OS별로 비교하고 loader 작업을 정리한다.
- PLT: header, section/segment, import/export, relocation, dynamic linking 구조를 OS별로 비교하고 loader 작업을 정리한다.
- lazy binding: lazy binding의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- RELRO: 각 mitigation이 막는 공격 primitive와 우회에 필요한 leak/write/control primitive를 연결한다.
- target selection: target selection의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 간단한 바이너리를 readelf/otool/dumpbin 등으로 열어 header, sections, imports, relocations, dynamic symbols를 표로 정리한다.
- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- GOT overwrite 성공/실패 조건표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. arbitrary read를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. arbitrary write를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. GOT overwrite 구조가 loader, dynamic linking, import resolution 중 어느 단계와 연결되는가?
4. PLT 구조가 loader, dynamic linking, import resolution 중 어느 단계와 연결되는가?
5. lazy binding를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. RELRO는 어떤 공격 단계를 막고 우회에는 어떤 leak 또는 write primitive가 필요한가?
7. 오늘 산출물인 "GOT overwrite 성공/실패 조건표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
