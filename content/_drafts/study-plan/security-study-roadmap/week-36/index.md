---
title: "Week 36: advanced reversing: languages and runtimes"
draft: true
---

# Week 36: advanced reversing: languages and runtimes

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 언어/runtime별 reversing 관찰표와 automation script을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

C++, object layout, vtable, vptr, RTTI, name mangling, virtual dispatch, .NET, Java, bytecode, VM, JIT, metadata, managed runtime, Android, DEX, Dalvik, ART, smali, manifest, permission, Go, Rust, Swift, runtime, symbol, panic handler, ownership, memory safety, lifetime, garbage collection, borrow checker, reference counting, use after free prevention

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | C++ object layout, vtable, RTTI | C++, object layout, vtable, vptr, RTTI, name mangling, virtual dispatch | C++ class layout과 virtual call 분석 |
| Day 02 | .NET, Java, bytecode, VM, JIT | .NET, Java, bytecode, VM, JIT, metadata, managed runtime | .NET/Java metadata와 bytecode 비교표 |
| Day 03 | Android DEX와 Dalvik/ART | Android, DEX, Dalvik, ART, smali, manifest, permission | DEX 구조와 Android 앱 분석 포인트 |
| Day 04 | Go, Rust, Swift binary 특징 | Go, Rust, Swift, runtime, symbol, panic handler, ownership | Go/Rust/Swift reversing 특징 비교 |
| Day 05 | memory safety, ownership, garbage collection | memory safety, ownership, lifetime, garbage collection, borrow checker, reference counting, use after free prevention | 언어별 memory safety 모델 비교 |
| Review | 주간 복습과 reversing 관찰 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 36 주간 개념 지도와 다음 주 질문 5개 |

## Week 36 글쓰기 훈련 흐름

Week 36의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-36-review` worksheet 1개
- 대표 산출물 후보: C++ class layout과 virtual call 분석, .NET/Java metadata와 bytecode 비교표, DEX 구조와 Android 앱 분석 포인트
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
