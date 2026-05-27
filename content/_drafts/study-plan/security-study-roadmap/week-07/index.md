---
title: "Week 07: compiler, linker, loader, intermediate representation"
draft: true
---

# Week 07: compiler, linker, loader, intermediate representation

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 빌드 파이프라인 artifact와 symbol/relocation 분석 노트을 완성한다.

## 공부 자료
- 보유 서적: Structure and Interpretation of Computer Programs, 셸 스크립트 프로그래밍 입문, 컴퓨터시스템 딥다이브 - abstraction, interpreter, runtime, automation

- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures

## 핵심 키워드

compiler, assembler, linker, loader, preprocessor, object file, runtime library, symbol, symbol table, relocation, debug information, PDB, DWARF, line table, AST, IR, CFG, data flow, SSA, basic block, control-flow graph, optimization, inlining, dead code elimination, constant folding, loop optimization, decompiler output, bytecode, VM, JIT, interpreter loop, garbage collection, managed runtime, Python scripting, pwntools, parser automation, binary parsing, struct module, subprocess, automation

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | compiler, assembler, linker, loader | compiler, assembler, linker, loader, preprocessor, object file, runtime library | source-to-execution 파이프라인 그림 |
| Day 02 | symbol, relocation, debug information | symbol, symbol table, relocation, debug information, PDB, DWARF, line table | nm/readelf/objdump로 본 symbol과 relocation 표 |
| Day 03 | AST, IR, CFG, data flow, SSA | AST, IR, CFG, data flow, SSA, basic block, control-flow graph | 간단한 함수의 CFG와 data-flow 노트 |
| Day 04 | optimization과 decompiler 차이 | optimization, inlining, dead code elimination, constant folding, loop optimization, decompiler output | -O0/-O2 비교와 decompiler 차이 메모 |
| Day 05 | bytecode, VM, JIT, interpreter loop | bytecode, VM, JIT, interpreter loop, runtime library, garbage collection, managed runtime | native code와 bytecode 실행 모델 비교표 |
| Day 06 | Python scripting, pwntools, parser automation | Python scripting, pwntools, parser automation, binary parsing, struct module, subprocess, automation | 반복 분석을 자동화하는 Python 스크립트 초안 |
| Day 07 | 주간 복습과 자동 분석 연결 | compiler, linker, symbol, relocation, CFG, bytecode, Python scripting | Week 07 빌드/분석 자동화 체크리스트 |

## 주간 산출물

- 빌드 파이프라인 artifact와 symbol/relocation 분석 노트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
