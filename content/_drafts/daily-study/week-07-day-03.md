---
title: "Week 07 Day 03: AST, IR, CFG, data flow, SSA"
draft: true
---

# Week 07 Day 03: AST, IR, CFG, data flow, SSA

## 오늘의 목표

- AST, IR, CFG를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- data flow, SSA, basic block가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Structure and Interpretation of Computer Programs, 셸 스크립트 프로그래밍 입문, 컴퓨터시스템 딥다이브 - abstraction, interpreter, runtime, automation
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제

## 핵심 키워드

AST, IR, CFG, data flow, SSA, basic block, control-flow graph

## 반드시 정리할 개념

- AST: AST, IR, CFG, SSA, bytecode/VM/JIT를 컴파일러와 decompiler가 사용하는 중간 표현으로 구분한다.
- IR: AST, IR, CFG, SSA, bytecode/VM/JIT를 컴파일러와 decompiler가 사용하는 중간 표현으로 구분한다.
- CFG: AST, IR, CFG, SSA, bytecode/VM/JIT를 컴파일러와 decompiler가 사용하는 중간 표현으로 구분한다.
- data flow: AST, IR, CFG, SSA, bytecode/VM/JIT를 컴파일러와 decompiler가 사용하는 중간 표현으로 구분한다.
- SSA: AST, IR, CFG, SSA, bytecode/VM/JIT를 컴파일러와 decompiler가 사용하는 중간 표현으로 구분한다.
- basic block: basic block의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- control-flow graph: 입력, 출력, 복잡도, 실패 조건을 명확히 하고 보안 분석 문제에 어떻게 적용되는지 예를 남긴다.

## 실습

- 오늘 자료구조 또는 수학 개념을 Python으로 최소 구현하고 입력 크기 변화에 따른 시간/메모리 또는 탐지 결과 차이를 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 간단한 함수의 CFG와 data-flow 노트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. AST를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. IR를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. CFG 결과를 도구가 만든 값 그대로 믿지 않기 위해 어떤 교차 검증을 했는가?
4. data flow를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. SSA를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. basic block를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "간단한 함수의 CFG와 data-flow 노트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
