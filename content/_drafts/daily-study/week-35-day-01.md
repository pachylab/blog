---
title: "Week 35 Day 01: string matching, regex, finite automaton"
draft: true
---

# Week 35 Day 01: string matching, regex, finite automaton

## 오늘의 목표

- string matching, regex, finite automaton를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- DFA, NFA, pattern matching가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

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

## 핵심 키워드

string matching, regex, finite automaton, DFA, NFA, pattern matching, YARA condition

## 반드시 정리할 개념

- string matching: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- regex: 입력, 출력, 복잡도, 실패 조건을 명확히 하고 보안 분석 문제에 어떻게 적용되는지 예를 남긴다.
- finite automaton: finite automaton의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- DFA: DFA의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- NFA: NFA의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- pattern matching: pattern matching의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- YARA condition: YARA는 file/content, Sigma는 log/event 중심이라는 차이를 정리하고 rule 목적, 조건, false positive 관리 방법을 적는다.

## 실습

- 오늘 자료구조 또는 수학 개념을 Python으로 최소 구현하고 입력 크기 변화에 따른 시간/메모리 또는 탐지 결과 차이를 기록한다.
- 오늘 artifact를 기준으로 YARA 또는 Sigma rule 초안을 만들고 benign sample 3개에 대한 false positive 가능성을 적는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- regex/automaton으로 탐지 조건 표현
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. string matching를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. regex를 보안 분석 문제에 적용하면 입력, 출력, 복잡도, 실패 조건은 각각 무엇인가?
3. finite automaton를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. DFA를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. NFA를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. pattern matching를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "regex/automaton으로 탐지 조건 표현"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
