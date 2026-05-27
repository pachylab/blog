---
title: "Week 01 Day 04: boolean, set, relation, function 기초"
draft: true
---

# Week 01 Day 04: boolean, set, relation, function 기초

## 오늘의 목표

- boolean algebra, truth table, set를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- relation, function, bit vector가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 셸 스크립트 프로그래밍 입문 - shell, pipeline, redirection, command log 자동화
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- 확장 로드맵: 사용 원칙과 1주차 도구 축을 개인 랩 운영 원칙으로 재작성

## 핵심 키워드

boolean algebra, truth table, set, relation, function, bit vector, logical operator

## 반드시 정리할 개념

- boolean algebra: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- truth table: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- set: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- relation: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- function: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- bit vector: 같은 값을 2진수, 10진수, 16진수로 변환하고 byte 단위로 끊어 읽는다. hex dump에서 offset, byte, ASCII view를 구분한다.
- logical operator: logical operator의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 작은 C 프로그램 또는 Python 스크립트로 정수 값을 hex dump하고 signed/unsigned, endian, sizeof/alignof 결과를 표로 정리한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 보안 조건식을 boolean expression으로 바꾼 예시 5개
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. boolean algebra로 탐지 조건을 전개하면 false positive와 false negative를 어떻게 더 명확히 볼 수 있는가?
2. truth table로 탐지 조건을 전개하면 false positive와 false negative를 어떻게 더 명확히 볼 수 있는가?
3. set 관점에서 입력 집합, 출력 집합, 매핑 규칙을 보안 로그 예시로 설명할 수 있는가?
4. relation 관점에서 입력 집합, 출력 집합, 매핑 규칙을 보안 로그 예시로 설명할 수 있는가?
5. function 관점에서 입력 집합, 출력 집합, 매핑 규칙을 보안 로그 예시로 설명할 수 있는가?
6. bit vector를 hex dump에서 직접 가리킨다면 offset, byte 값, 사람이 읽는 해석을 어떻게 분리할 수 있는가?
7. 오늘 산출물인 "보안 조건식을 boolean expression으로 바꾼 예시 5개"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
