---
title: "Week 35 Day 07: 주간 복습과 수학 적용 정리"
draft: true
---

# Week 35 Day 07: 주간 복습과 수학 적용 정리

## 오늘의 목표

- finite automaton, boolean algebra, modular arithmetic를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- SMT, probability, entropy가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Concrete Mathematics, Cryptography & Network Security - probability, entropy, information theory, crypto security intuition
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- AFL++ docs: instrumentation, corpus, crashes, afl-tmin/afl-cmin workflow
- LLVM Sanitizers docs: AddressSanitizer, UndefinedBehaviorSanitizer, coverage instrumentation
- angr docs: symbolic execution, state, solver, constraints, CFGFast 개요
- Z3Py guide: bit-vectors, constraints, solver model 읽기
- BinDiff 또는 Diaphora docs: patch diffing and function matching 개요

## 핵심 키워드

finite automaton, boolean algebra, modular arithmetic, SMT, probability, entropy, graph theory

## 반드시 정리할 개념

- finite automaton: finite automaton의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- boolean algebra: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- modular arithmetic: 입력, 출력, 복잡도, 실패 조건을 명확히 하고 보안 분석 문제에 어떻게 적용되는지 예를 남긴다.
- SMT: input corpus, coverage, sanitizer report, constraint, source/sink, patch 차이를 재현 가능한 입력과 함께 기록한다.
- probability: probability의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- entropy: 입력, 출력, 복잡도, 실패 조건을 명확히 하고 보안 분석 문제에 어떻게 적용되는지 예를 남긴다.
- graph theory: 입력, 출력, 복잡도, 실패 조건을 명확히 하고 보안 분석 문제에 어떻게 적용되는지 예를 남긴다.

## 실습

- 작은 parser나 toy binary에 sanitizer/fuzzer를 붙이고 crash input을 최소화한다. 가능하면 Z3/angr로 같은 조건을 표현한다.
- 오늘 자료구조 또는 수학 개념을 Python으로 최소 구현하고 입력 크기 변화에 따른 시간/메모리 또는 탐지 결과 차이를 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 35 math-for-security cheat sheet
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. finite automaton를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. boolean algebra로 탐지 조건을 전개하면 false positive와 false negative를 어떻게 더 명확히 볼 수 있는가?
3. modular arithmetic를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. SMT가 찾아낸 조건을 재현 가능한 입력과 최소한의 설명으로 남길 수 있는가?
5. probability를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. entropy를 보안 분석 문제에 적용하면 입력, 출력, 복잡도, 실패 조건은 각각 무엇인가?
7. 오늘 산출물인 "Week 35 math-for-security cheat sheet"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
