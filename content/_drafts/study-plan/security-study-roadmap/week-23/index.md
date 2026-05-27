---
title: "Week 23: fuzzing and crash triage, symbolic/patch analysis"
draft: true
---

# Week 23: fuzzing and crash triage, symbolic/patch analysis

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 coverage-guided fuzzing/crash triage report, minimized input, variant hypothesis를 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

coverage-guided fuzzing, fuzzing harness, seed corpus, coverage, mutation, AFL++, libFuzzer, input minimization, sanitizer, AddressSanitizer, UndefinedBehaviorSanitizer, crash triage, stack trace, reproducer, minimized input, symbolic execution, SMT, constraint, Z3, bit vector, path explosion, solver model, taint analysis, source, sink, data flow, sanitization, control dependency, false positive, patch diffing, variant analysis, BinDiff, Diaphora, function matching, changed basic block, root cause

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | AFL++/libFuzzer harness와 corpus | coverage-guided fuzzing, fuzzing harness, seed corpus, coverage, mutation, AFL++, libFuzzer, input minimization | toy parser fuzzing harness와 corpus 설계 |
| Day 02 | sanitizer와 crash triage | sanitizer, AddressSanitizer, UndefinedBehaviorSanitizer, crash triage, stack trace, reproducer, minimized input | sanitizer crash report 해석 |
| Day 03 | symbolic execution과 SMT 미니 예제 | symbolic execution, SMT, constraint, Z3, bit vector, path explosion, solver model | 간단한 branch 조건을 Z3로 푼 노트 |
| Day 04 | taint analysis와 source/sink 개념 지도 | taint analysis, source, sink, data flow, sanitization, control dependency, false positive | source/sink 개념 지도 |
| Day 05 | patch diffing과 variant hypothesis 맛보기 | patch diffing, variant analysis, BinDiff, Diaphora, function matching, changed basic block, root cause | patch 전후 변경 함수 1개 분석표 |
| Review | 주간 복습과 exploit 사고 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 23 주간 개념 지도와 다음 주 질문 5개 |

## Week 23 글쓰기 훈련 흐름

Week 23의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-23-review` worksheet 1개
- 대표 산출물 후보: toy parser fuzzing harness와 corpus 설계, sanitizer crash report 해석, 간단한 branch 조건을 Z3로 푼 노트
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
