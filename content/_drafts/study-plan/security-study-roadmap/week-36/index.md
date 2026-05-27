---
title: "Week 36: advanced reversing: languages and runtimes"
draft: true
---

# Week 36: advanced reversing: languages and runtimes

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 언어/runtime별 reversing 관찰표와 automation script을 완성한다.

## 공부 자료
- 보유 서적: Structure and Interpretation of Computer Programs, 리버싱 핵심 원리 - interpreter, VM loop, bytecode, decompiler reasoning

- Practical Reverse Engineering: C++ reversing, virtual dispatch, RTTI, Windows internals 관련 장
- .NET docs: assemblies, metadata, IL, CLR 개요; Java Virtual Machine Spec: class file and bytecode 개요
- Android docs: DEX format and app fundamentals; Go/Rust/Swift 공식 docs: runtime, symbol, calling convention 개요
- Ghidra docs: data types, class/type recovery, decompiler output 정리
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- The Art of Memory Forensics: acquisition, processes, DLLs, handles, VAD, malfind 관련 장

## 핵심 키워드

C++, object layout, vtable, vptr, RTTI, name mangling, virtual dispatch, .NET, Java, bytecode, VM, JIT, metadata, managed runtime, garbage collection, Android, DEX, Dalvik, ART, smali, manifest, permission, app sandbox, Go, Rust, Swift, runtime, symbol, panic handler, ownership, lifetime, memory safety, borrow checker, reference counting, use after free prevention, Python scripting, parser automation, batch analysis, Ghidra script, symbol extraction, string extraction, report generation

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | C++ object layout, vtable, RTTI | C++, object layout, vtable, vptr, RTTI, name mangling, virtual dispatch | C++ class layout과 virtual call 분석 |
| Day 02 | .NET, Java, bytecode, VM, JIT | .NET, Java, bytecode, VM, JIT, metadata, managed runtime | .NET/Java metadata와 bytecode 비교표 |
| Day 03 | Android DEX와 Dalvik/ART | Android, DEX, Dalvik, ART, smali, manifest, permission | DEX 구조와 Android 앱 분석 포인트 |
| Day 04 | Go, Rust, Swift binary 특징 | Go, Rust, Swift, runtime, symbol, panic handler, ownership | Go/Rust/Swift reversing 특징 비교 |
| Day 05 | memory safety, ownership, garbage collection | memory safety, ownership, lifetime, garbage collection, borrow checker, reference counting, use after free prevention | 언어별 memory safety 모델 비교 |
| Day 06 | parser automation과 batch reversing | Python scripting, parser automation, batch analysis, Ghidra script, symbol extraction, string extraction, report generation | 반복 reversing 자동화 스크립트 |
| Day 07 | 주간 복습과 runtime fingerprint | C++, .NET, Java, DEX, Go, Rust, Python scripting | Week 36 runtime fingerprint checklist |

## 주간 산출물

- 언어/runtime별 reversing 관찰표와 automation script
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
