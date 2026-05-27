---
title: "Week 36 Day 01: C++ object layout, vtable, RTTI"
draft: true
---

# Week 36 Day 01: C++ object layout, vtable, RTTI

## 오늘의 목표

- C++, object layout, vtable를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- vptr, RTTI, name mangling가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

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

## 핵심 키워드

C++, object layout, vtable, vptr, RTTI, name mangling, virtual dispatch

## 반드시 정리할 개념

- C++: 언어/runtime별 object layout, metadata, memory management, symbol convention이 reversing 해석에 미치는 영향을 정리한다.
- object layout: object layout의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- vtable: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- vptr: vptr의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- RTTI: RTTI의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- name mangling: name mangling의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- virtual dispatch: virtual dispatch의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- C++ class layout과 virtual call 분석
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. C++를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. object layout를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. vtable의 메모리 배치를 그릴 수 있고 잘못 쓰면 어떤 memory safety 문제가 생기는가?
4. vptr를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. RTTI를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. name mangling를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "C++ class layout과 virtual call 분석"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
