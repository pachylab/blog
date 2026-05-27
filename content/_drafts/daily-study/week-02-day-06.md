---
title: "Week 02 Day 06: 정수와 instruction 통합 실습"
draft: true
---

# Week 02 Day 06: 정수와 instruction 통합 실습

## 오늘의 목표

- bit vector, integer type, endianness를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- instruction, register, objdump가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - bit/byte, 정수 표현, memory hierarchy, machine-level view
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing
- GDB manual: breakpoints, watchpoints, examining memory/registers, disassemble, backtrace
- x64dbg documentation: breakpoints, memory map, modules, patching workflow

## 핵심 키워드

bit vector, integer type, endianness, instruction, register, objdump, GDB

## 반드시 정리할 개념

- bit vector: 같은 값을 2진수, 10진수, 16진수로 변환하고 byte 단위로 끊어 읽는다. hex dump에서 offset, byte, ASCII view를 구분한다.
- integer type: integer type의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- endianness: multi-byte 값의 저장 순서, word size, alignment가 struct layout, ABI, 파일/패킷 파싱에 미치는 영향을 정리한다.
- instruction: CPU가 instruction을 fetch/decode/execute하는 관점에서 ISA, opcode, operand, addressing mode를 구분하고 disassembly 한 줄을 분해한다.
- register: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.
- objdump: objdump의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- GDB: GDB의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 작은 C 프로그램 또는 Python 스크립트로 정수 값을 hex dump하고 signed/unsigned, endian, sizeof/alignof 결과를 표로 정리한다.
- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- C 코드, assembly, 실행 결과를 연결한 분석 노트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. bit vector를 hex dump에서 직접 가리킨다면 offset, byte 값, 사람이 읽는 해석을 어떻게 분리할 수 있는가?
2. integer type를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. endianness를 모르면 구조체, 파일 포맷, 네트워크 패킷 중 어디에서 해석 오류가 생기는가?
4. instruction를 disassembly 한 줄에서 어떻게 식별했고 control flow 이해에 어떤 도움을 줬는가?
5. register를 disassembly 한 줄에서 어떻게 식별했고 control flow 이해에 어떤 도움을 줬는가?
6. objdump를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "C 코드, assembly, 실행 결과를 연결한 분석 노트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
