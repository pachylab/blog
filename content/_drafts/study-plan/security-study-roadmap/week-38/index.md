---
title: "Week 38: integrated exploit project, N-day, secure patching"
draft: true
---

# Week 38: integrated exploit project, N-day, secure patching

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 취약점 분석, exploit, patch 영향 보고서을 완성한다.

## 공부 자료
- 보유 서적: 실전 바이너리 분석, The Shellcoder's Handbook, 메타스플로잇 - N-day reproduction, patch diffing, PoC reliability

- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- AFL++ docs: instrumentation, corpus, crashes, afl-tmin/afl-cmin workflow
- LLVM Sanitizers docs: AddressSanitizer, UndefinedBehaviorSanitizer, coverage instrumentation
- angr docs: symbolic execution, state, solver, constraints, CFGFast 개요
- Z3Py guide: bit-vectors, constraints, solver model 읽기
- BinDiff 또는 Diaphora docs: patch diffing and function matching 개요
- 공개 N-day advisory/vendor patch note: affected version, root cause, proof of concept, patch impact, exploit reliability 확인
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime

## 핵심 키워드

target selection, threat model, attack surface, input parser, trust boundary, vulnerability hypothesis, crash discovery, fuzzing, sanitizer, crash triage, root cause, reproducer, minimized input, exploit primitive, out-of-bounds write, arbitrary read, arbitrary write, control-flow hijack, information leak, ROP, ret2libc, ASLR, NX, canary, PIE, RELRO, seccomp, N-day exploit, proof of concept, exploit reliability, environment porting, patch design, bounds check, integer validation, memory safety, regression test, negative test, secure coding, patch diffing, variant analysis, changed basic block, root cause pattern, code audit, similar bug

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | target selection과 threat model | target selection, threat model, attack surface, input parser, trust boundary, vulnerability hypothesis | 대상과 공격면 정의서 |
| Day 02 | crash discovery와 root cause | crash discovery, fuzzing, sanitizer, crash triage, root cause, reproducer, minimized input | crash root cause 분석표 |
| Day 03 | primitive development | exploit primitive, out-of-bounds write, arbitrary read, arbitrary write, control-flow hijack, information leak | primitive 확인 로그 |
| Day 04 | exploit chain와 mitigation bypass | ROP, ret2libc, ASLR, NX, canary, PIE, RELRO, N-day exploit, exploit reliability | exploit chain과 mitigation matrix |
| Day 05 | patch design와 regression test | patch design, bounds check, integer validation, memory safety, regression test, negative test, secure coding | 패치 설계와 테스트 케이스 |
| Day 06 | patch diffing와 variant search | patch diffing, variant analysis, changed basic block, root cause pattern, code audit, similar bug | variant search 결과표 |
| Day 07 | 주간 복습과 exploit report | threat model, crash triage, exploit primitive, ROP, patch design, patch diffing, variant analysis | Week 38 exploit and patch report |

## 주간 산출물

- 취약점 분석, exploit, patch 영향 보고서
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
