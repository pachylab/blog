---
title: "Week 02: 정수 표현, endian, CPU 실행 모델"
draft: true
---

# Week 02: 정수 표현, endian, CPU 실행 모델

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 정수 표현 실습 코드, endian/alignment 표, instruction 해석 노트을 완성한다.

## 공부 자료
- 보유 서적: Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - bit/byte, 정수 표현, memory hierarchy, machine-level view

- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- Compiler Explorer 또는 로컬 gcc/clang: 동일 C 코드를 -O0/-O2에서 비교
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing

## 핵심 키워드

integer type, signed, unsigned, stdint.h, limits.h, integer promotion, type conversion, two complement, overflow, underflow, signed overflow, undefined behavior, wraparound, integer bug, endianness, little-endian, big-endian, word size, alignment, struct padding, memory layout, CPU, ISA, instruction, opcode, operand, addressing mode, fetch/decode/execute, cache, TLB, pipeline, branch prediction, locality, cache miss, side-channel intro, bit vector, register, objdump, GDB, signedness bug, integer overflow

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | signed/unsigned와 integer type | integer type, signed, unsigned, stdint.h, limits.h, integer promotion, type conversion | C integer type 크기와 범위 표 |
| Day 02 | two complement와 overflow | two complement, overflow, underflow, signed overflow, undefined behavior, wraparound, integer bug | overflow/underflow 예제와 취약점 연결 메모 |
| Day 03 | endianness, word size, alignment | endianness, little-endian, big-endian, word size, alignment, struct padding, memory layout | endianness와 struct padding hex dump 비교 |
| Day 04 | CPU, ISA, instruction 구조 | CPU, ISA, instruction, opcode, operand, addressing mode, fetch/decode/execute | disassembly 10줄을 opcode/operand/addressing으로 분해한 표 |
| Day 05 | cache, TLB, pipeline, branch prediction | cache, TLB, pipeline, branch prediction, locality, cache miss, side-channel intro | 배열 접근 패턴 시간 비교와 해석 |
| Day 06 | 정수와 instruction 통합 실습 | bit vector, integer type, endianness, instruction, register, objdump, GDB | C 코드, assembly, 실행 결과를 연결한 분석 노트 |
| Day 07 | 주간 복습과 취약점 연결 | signedness bug, integer overflow, alignment, addressing mode, cache, TLB | Week 02 개념별 보안 영향 정리표 |

## 주간 산출물

- 정수 표현 실습 코드, endian/alignment 표, instruction 해석 노트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
