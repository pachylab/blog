---
title: "Week 07 Day 06: Python scripting, pwntools, parser automation"
draft: true
---

# Week 07 Day 06: Python scripting, pwntools, parser automation

## 오늘의 목표

- Python scripting, pwntools, parser automation를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- binary parsing, struct module, subprocess가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Structure and Interpretation of Computer Programs, 셸 스크립트 프로그래밍 입문, 컴퓨터시스템 딥다이브 - abstraction, interpreter, runtime, automation
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures

## 핵심 키워드

Python scripting, pwntools, parser automation, binary parsing, struct module, subprocess, automation

## 반드시 정리할 개념

- Python scripting: Python scripting의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- pwntools: pwntools의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- parser automation: parser automation의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- binary parsing: 같은 값을 2진수, 10진수, 16진수로 변환하고 byte 단위로 끊어 읽는다. hex dump에서 offset, byte, ASCII view를 구분한다.
- struct module: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- subprocess: subprocess의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- automation: automation의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- C 예제를 작성해 pointer arithmetic, string terminator, struct padding, function pointer 호출을 GDB와 sanitizer로 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 반복 분석을 자동화하는 Python 스크립트 초안
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. Python scripting를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. pwntools를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. parser automation를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. binary parsing 값을 16진수로 바꿀 때 중간 계산을 어떻게 검산했고, byte 경계에서 어떤 실수를 할 수 있는가?
5. struct module의 메모리 배치를 그릴 수 있고 잘못 쓰면 어떤 memory safety 문제가 생기는가?
6. subprocess를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "반복 분석을 자동화하는 Python 스크립트 초안"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
