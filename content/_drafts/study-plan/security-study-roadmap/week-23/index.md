---
title: "Week 23: fuzzing, symbolic execution, patch diffing, kernel exploit 입문"
draft: true
---

# Week 23: fuzzing, symbolic execution, patch diffing, kernel exploit 입문

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 fuzzing/crash triage report와 symbolic constraint 예제을 완성한다.

## 공부 자료
- 보유 서적: 실전 바이너리 분석, The Shellcoder's Handbook - fuzz target 분석, crash triage, exploitability 판단

- AFL++ docs: instrumentation, corpus, crashes, afl-tmin/afl-cmin workflow
- LLVM libFuzzer documentation: in-process fuzzing, harness function, corpus, coverage, crash artifact
- LLVM Sanitizers docs: AddressSanitizer, UndefinedBehaviorSanitizer, coverage instrumentation
- angr docs: symbolic execution, state, solver, constraints, CFGFast 개요
- Z3Py guide: bit-vectors, constraints, solver model 읽기
- BinDiff 또는 Diaphora docs: patch diffing and function matching 개요
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- The Linux Command Line 2판: 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System, 5장 Working with Commands, 6장 Redirection
- CS:APP 3e: 7장 Linking 전체

## 핵심 키워드

coverage-guided fuzzing, fuzzing, fuzzing harness, seed corpus, coverage, mutation, AFL++, libFuzzer, in-process harness, persistent mode, corpus minimization, input minimization, sanitizer, AddressSanitizer, UndefinedBehaviorSanitizer, crash triage, stack trace, reproducer, minimized input, symbolic execution, SMT, constraint, Z3, bit vector, path explosion, solver model, taint analysis, source, sink, data flow, sanitization, control dependency, false positive, patch diffing, variant analysis, BinDiff, Diaphora, function matching, changed basic block, root cause, kernel exploitation, LPE, sandbox escape intro, kernel memory, driver bug, IOCTL, privilege escalation

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | AFL++/libFuzzer harness와 corpus | coverage-guided fuzzing, fuzzing harness, seed corpus, coverage, mutation, AFL++, libFuzzer, input minimization | toy parser fuzzing harness와 corpus 설계 |
| Day 02 | sanitizer와 crash triage | sanitizer, AddressSanitizer, UndefinedBehaviorSanitizer, crash triage, stack trace, reproducer, minimized input | sanitizer crash report 해석 |
| Day 03 | symbolic execution과 SMT | symbolic execution, SMT, constraint, Z3, bit vector, path explosion, solver model | 간단한 branch 조건을 Z3로 푼 노트 |
| Day 04 | taint analysis와 source/sink | taint analysis, source, sink, data flow, sanitization, control dependency, false positive | source/sink 모델링 표 |
| Day 05 | patch diffing과 variant analysis | patch diffing, variant analysis, BinDiff, Diaphora, function matching, changed basic block, root cause | patch 전후 변경 함수 분석표 |
| Day 06 | kernel exploitation, LPE, sandbox escape intro | kernel exploitation, LPE, sandbox escape intro, kernel memory, driver bug, IOCTL, privilege escalation | kernel exploit 공격면과 안전 실습 원칙 |
| Day 07 | 주간 복습과 취약점 연구 흐름 | fuzzing, sanitizer, symbolic execution, taint analysis, patch diffing, kernel exploitation, LPE | Week 23 vuln research workflow |

## 주간 산출물

- coverage-guided fuzzing/crash triage report와 symbolic constraint 예제
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
