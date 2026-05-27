---
title: "Week 11: executable format and loader"
draft: true
---

# Week 11: executable format and loader

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 PE/ELF/Mach-O 구조 비교와 loader/linking 분석 체크리스트를 완성한다.

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
- Practical Binary Analysis: ELF structure, symbol tables, disassembly workflow 관련 장
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing

## 핵심 키워드

program loader, executable format, loader, memory mapping, entry point, section, segment, ELF, ELF header, section header, program header, GOT, PLT, dynamic symbol, PE, DOS header, NT header, section table, IAT, EAT, base relocation, Mach-O, load command, dyld, symbol, code signature, dynamic linking, static linking, relocation, import/export, lazy binding, shared library

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | program loader와 executable format | program loader, executable format, loader, memory mapping, entry point, section, segment | loader가 실행 전 수행하는 작업 목록 |
| Day 02 | ELF 구조와 GOT/PLT | ELF, ELF header, section header, program header, GOT, PLT, dynamic symbol | ELF header/section/program header 해석표 |
| Day 03 | PE 구조와 IAT/EAT | PE, DOS header, NT header, section table, IAT, EAT, base relocation | PE 구조와 import/export 분석 노트 |
| Day 04 | Mach-O와 load command | Mach-O, load command, segment, section, dyld, symbol, code signature | Mach-O load command 해석표 |
| Day 05 | dynamic linking, static linking, relocation | dynamic linking, static linking, relocation, import/export, symbol, lazy binding, shared library | linking 방식별 artifact와 보안 영향 표 |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 11 주간 개념 지도와 다음 주 질문 5개 |

## Week 11 글쓰기 훈련 흐름

Week 11의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-11-review` worksheet 1개
- 대표 산출물 후보: loader가 실행 전 수행하는 작업 목록, ELF header/section/program header 해석표, PE 구조와 import/export 분석 노트
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
