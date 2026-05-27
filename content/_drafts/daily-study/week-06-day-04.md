---
title: "Week 06 Day 04: function pointer, callback, vtable"
draft: true
---

# Week 06 Day 04: function pointer, callback, vtable

## 오늘의 목표

- function pointer, callback, indirect call를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- vtable, object layout, control-flow hijack가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, Kernighan C 언어 프로그래밍, 전문가를 위한 C, 모던 C, 컴퓨터시스템 딥다이브 - pointer, array, string, struct, integer UB, ABI 연결
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- 컴파일 옵션 -Wall -Wextra -fsanitize=address,undefined 사용

## 핵심 키워드

function pointer, callback, indirect call, vtable, object layout, control-flow hijack

## 반드시 정리할 개념

- function pointer: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- callback: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- indirect call: indirect call의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- vtable: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- object layout: object layout의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- control-flow hijack: control-flow hijack의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- C 예제를 작성해 pointer arithmetic, string terminator, struct padding, function pointer 호출을 GDB와 sanitizer로 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- indirect call 대상 저장 위치와 위험 정리
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. function pointer 관점에서 입력 집합, 출력 집합, 매핑 규칙을 보안 로그 예시로 설명할 수 있는가?
2. callback를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. indirect call를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. vtable의 메모리 배치를 그릴 수 있고 잘못 쓰면 어떤 memory safety 문제가 생기는가?
5. object layout를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. control-flow hijack를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "indirect call 대상 저장 위치와 위험 정리"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
