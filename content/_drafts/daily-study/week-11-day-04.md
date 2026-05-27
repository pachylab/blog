---
title: "Week 11 Day 04: Mach-O와 load command"
draft: true
---

# Week 11 Day 04: Mach-O와 load command

## 오늘의 목표

- Mach-O, load command, segment를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- section, dyld, symbol가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 바이너리 분석, 리버싱 핵심 원리, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - ELF/PE, disassembly, symbol, linking
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table
- System V ABI: ELF header, sections, program headers, dynamic linking 개요
- Apple Mach-O Runtime Reference: Mach-O file structure, load commands 개요
- Practical Binary Analysis: ELF structure, symbol tables, disassembly workflow 관련 장
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing

## 핵심 키워드

Mach-O, load command, segment, section, dyld, symbol, code signature

## 반드시 정리할 개념

- Mach-O: header, section/segment, import/export, relocation, dynamic linking 구조를 OS별로 비교하고 loader 작업을 정리한다.
- load command: load command의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- segment: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.
- section: section의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- dyld: dyld의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- symbol: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- code signature: code signature의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 간단한 바이너리를 readelf/otool/dumpbin 등으로 열어 header, sections, imports, relocations, dynamic symbols를 표로 정리한다.
- 하나의 소스를 .i, .s, .o, executable 단계로 나누고 nm/readelf/objdump로 symbol과 relocation을 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Mach-O load command 해석표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. Mach-O 구조가 loader, dynamic linking, import resolution 중 어느 단계와 연결되는가?
2. load command를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. segment를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. section를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. dyld를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. symbol 단계에서 생성되거나 소비되는 artifact는 무엇이고 reversing에서는 어디서 확인하는가?
7. 오늘 산출물인 "Mach-O load command 해석표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
