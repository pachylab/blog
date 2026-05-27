---
title: "Week 35: math foundations for security analysis"
draft: true
---

# Week 35: math foundations for security analysis

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 수학 개념과 보안 적용 문제 풀이 노트을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: Concrete Mathematics, Cryptography & Network Security - probability, entropy, information theory, crypto security intuition

- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- YARA documentation: rule syntax, strings, conditions, modules, performance considerations
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding

## 핵심 키워드

string matching, regex, finite automaton, DFA, NFA, pattern matching, YARA condition, boolean algebra, set, relation, function, predicate, truth table, logic simplification, modular arithmetic, bit vector, two complement, wraparound, XOR, rotate, constraint, SMT, Z3, solver model, path condition, symbolic execution, satisfiability, probability, statistics, entropy, information theory, base rate, false positive, anomaly detection

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | string matching, regex, finite automaton | string matching, regex, finite automaton, DFA, NFA, pattern matching, YARA condition | regex/automaton으로 탐지 조건 표현 |
| Day 02 | boolean algebra, set, relation, function | boolean algebra, set, relation, function, predicate, truth table, logic simplification | 탐지 조건식을 boolean algebra로 단순화 |
| Day 03 | modular arithmetic와 bit vector | modular arithmetic, bit vector, two complement, wraparound, XOR, rotate, constraint | bit-vector 연산과 integer bug 연결 |
| Day 04 | constraint와 SMT | constraint, SMT, Z3, solver model, path condition, symbolic execution, satisfiability | 간단한 crackme 조건을 Z3로 모델링 |
| Day 05 | probability, statistics, entropy | probability, statistics, entropy, information theory, base rate, false positive, anomaly detection | entropy와 FP를 이용한 탐지 판단 예시 |
| Review | 주간 복습과 개념 적용 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 35 주간 개념 지도와 다음 주 질문 5개 |

## Week 35 글쓰기 훈련 흐름

Week 35의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-35-review` worksheet 1개
- 대표 산출물 후보: regex/automaton으로 탐지 조건 표현, 탐지 조건식을 boolean algebra로 단순화, bit-vector 연산과 integer bug 연결
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
