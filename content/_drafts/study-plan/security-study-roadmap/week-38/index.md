---
title: "Week 38: integrated exploit project, N-day, secure patching"
draft: true
---

# Week 38: integrated exploit project, N-day, secure patching

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 취약점 분석, exploit, patch 영향 보고서와 target ownership 후보를 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

target ownership, target selection, threat model, attack surface, input parser, trust boundary, vulnerability hypothesis, crash discovery, fuzzing, sanitizer, crash triage, root cause, reproducer, minimized input, exploit primitive, out-of-bounds write, arbitrary read, arbitrary write, control-flow hijack, information leak, kernel race, TOCTOU, refcount bug, kernel UAF, KASLR, SMEP, SMAP, ROP, ret2libc, ASLR, NX, canary, PIE, RELRO, N-day exploit, exploit reliability, patch design, bounds check, integer validation, memory safety, regression test, negative test, secure coding

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | target ownership 후보와 threat model | target ownership, target selection, threat model, attack surface, input parser, trust boundary, vulnerability hypothesis | 대상과 공격면 정의서 |
| Day 02 | crash discovery와 root cause | crash discovery, fuzzing, sanitizer, crash triage, root cause, reproducer, minimized input | crash root cause 분석표 |
| Day 03 | primitive development | exploit primitive, out-of-bounds write, arbitrary read, arbitrary write, control-flow hijack, information leak, kernel race, TOCTOU, refcount bug, KASLR/SMEP/SMAP | primitive 확인 로그와 kernel bug class mapping |
| Day 04 | exploit chain와 mitigation bypass | ROP, ret2libc, ASLR, NX, canary, PIE, RELRO, N-day exploit, exploit reliability | exploit chain과 mitigation matrix |
| Day 05 | patch design와 regression test | patch design, bounds check, integer validation, memory safety, regression test, negative test, secure coding | 패치 설계와 테스트 케이스 |
| Review | 주간 복습과 exploit 사고 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 38 주간 개념 지도와 다음 주 질문 5개 |

## Week 38 글쓰기 훈련 흐름

Week 38의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-38-review` worksheet 1개
- 대표 산출물 후보: 대상과 공격면 정의서, crash root cause 분석표, primitive 확인 로그와 kernel bug class mapping
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
