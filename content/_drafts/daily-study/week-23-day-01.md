---
title: "Week 23 Day 01: AFL++/libFuzzer harness와 corpus"
draft: true
---

# Week 23 Day 01: AFL++/libFuzzer harness와 corpus

## 오늘의 목표

- coverage-guided fuzzing, harness, seed corpus를 AFL++와 libFuzzer 관점에서 비교한다.
- coverage, mutation, corpus minimization, sanitizer report가 crash triage에 어떤 evidence를 주는지 정리한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 바이너리 분석, The Shellcoder's Handbook - fuzz target 분석, crash triage, exploitability 판단
- AFL++ docs: instrumentation, corpus, crashes, afl-tmin/afl-cmin workflow
- LLVM libFuzzer documentation: in-process fuzzing, harness function, corpus, coverage, crash artifact
- LLVM Sanitizers docs: AddressSanitizer, UndefinedBehaviorSanitizer, coverage instrumentation
- angr docs: symbolic execution, state, solver, constraints, CFGFast 개요
- Z3Py guide: bit-vectors, constraints, solver model 읽기
- BinDiff 또는 Diaphora docs: patch diffing and function matching 개요

## 핵심 키워드

coverage-guided fuzzing, fuzzing harness, seed corpus, coverage, mutation, AFL++, libFuzzer, in-process harness, persistent mode, corpus minimization, input minimization

## 반드시 정리할 개념

- coverage-guided fuzzing: input mutation이 새 coverage를 만들 때 corpus에 보존되는 원리와 crash 발견 후 필요한 증거를 정리한다.
- fuzzing harness: target 함수의 입력 경계, state 초기화, timeout, deterministic behavior를 harness 설계 기준으로 적는다.
- AFL++: forkserver, instrumentation, queue, crashes, hangs, afl-cmin/afl-tmin의 역할을 정리한다.
- libFuzzer: in-process harness, `LLVMFuzzerTestOneInput`, coverage feedback, sanitizer 연동 방식을 정리한다.
- seed corpus: 좋은 seed가 parser state와 branch coverage에 주는 영향을 예시로 설명한다.
- corpus minimization: crash 재현성과 coverage 보존을 기준으로 최소화 결과를 평가한다.
- input minimization: crash root cause를 유지하면서 입력을 줄이는 이유와 줄이면 안 되는 field를 적는다.

## 실습

- 같은 toy parser를 대상으로 AFL++용 stdin/file harness와 libFuzzer용 in-process harness를 각각 설계하고 차이를 표로 정리한다.
- crash input이 나오면 sanitizer stack trace, minimized input, coverage 변화, 재현 명령을 한 세트로 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- toy parser fuzzing harness와 corpus 설계
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. AFL++와 libFuzzer 중 오늘 target에 더 맞는 방식은 무엇이며 이유는 무엇인가?
2. harness가 target state를 매 입력마다 초기화하지 않으면 crash triage에 어떤 문제가 생기는가?
3. seed corpus가 coverage와 crash 발견 속도에 미친 영향을 어떻게 측정할 수 있는가?
4. coverage 증가와 취약점 발견은 같은 의미인가? 다르다면 어떤 차이가 있는가?
5. corpus minimization과 input minimization을 구분해 설명할 수 있는가?
6. sanitizer stack trace를 root cause로 착각하지 않기 위해 어떤 source-level 검증이 필요한가?
7. 오늘 산출물인 "toy parser fuzzing harness와 corpus 설계"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
