---
title: "Week 11 Day 01: program loader와 executable format"
draft: true
---

# Week 11 Day 01: program loader와 executable format

## 오늘의 목표

- program loader, executable format, loader를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- memory mapping, entry point, section가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 바이너리 분석, 리버싱 핵심 원리, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - ELF/PE, disassembly, symbol, linking
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table
- System V ABI: ELF header, sections, program headers, dynamic linking 개요
- Apple Mach-O Runtime Reference: Mach-O file structure, load commands 개요

## 핵심 키워드

program loader, executable format, loader, memory mapping, entry point, section, segment

## 반드시 정리할 개념

- program loader: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- executable format: header, section/segment, import/export, relocation, dynamic linking 구조를 OS별로 비교하고 loader 작업을 정리한다.
- loader: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- memory mapping: memory mapping의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- entry point: entry point의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- section: section의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- segment: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.

## 실습

- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- loader가 실행 전 수행하는 작업 목록
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. program loader 유형을 기능, persistence, C2, payload 관점에서 다른 유형과 구분할 수 있는가?
2. executable format를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. loader 유형을 기능, persistence, C2, payload 관점에서 다른 유형과 구분할 수 있는가?
4. memory mapping를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. entry point를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. section를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "loader가 실행 전 수행하는 작업 목록"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
