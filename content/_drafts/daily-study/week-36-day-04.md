---
title: "Week 36 Day 04: Go, Rust, Swift binary 특징"
draft: true
---

# Week 36 Day 04: Go, Rust, Swift binary 특징

## 오늘의 목표

- Go, Rust, Swift를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- runtime, symbol, panic handler가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Structure and Interpretation of Computer Programs, 리버싱 핵심 원리 - interpreter, VM loop, bytecode, decompiler reasoning
- Practical Reverse Engineering: C++ reversing, virtual dispatch, RTTI, Windows internals 관련 장
- .NET docs: assemblies, metadata, IL, CLR 개요; Java Virtual Machine Spec: class file and bytecode 개요
- Android docs: DEX format and app fundamentals; Go/Rust/Swift 공식 docs: runtime, symbol, calling convention 개요
- Ghidra docs: data types, class/type recovery, decompiler output 정리
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper

## 핵심 키워드

Go, Rust, Swift, runtime, symbol, panic handler, ownership, lifetime

## 반드시 정리할 개념

- Go: 언어/runtime별 object layout, metadata, memory management, symbol convention이 reversing 해석에 미치는 영향을 정리한다.
- Rust: 언어/runtime별 object layout, metadata, memory management, symbol convention이 reversing 해석에 미치는 영향을 정리한다.
- Swift: 언어/runtime별 object layout, metadata, memory management, symbol convention이 reversing 해석에 미치는 영향을 정리한다.
- runtime: runtime의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- symbol: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- panic handler: panic handler의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- ownership: ownership의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- lifetime: lifetime의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 하나의 소스를 .i, .s, .o, executable 단계로 나누고 nm/readelf/objdump로 symbol과 relocation을 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Go/Rust/Swift reversing 특징 비교
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. Go를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. Rust를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. Swift를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. runtime를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. symbol 단계에서 생성되거나 소비되는 artifact는 무엇이고 reversing에서는 어디서 확인하는가?
6. panic handler를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "Go/Rust/Swift reversing 특징 비교"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
