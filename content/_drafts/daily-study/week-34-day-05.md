---
title: "Week 34 Day 05: graph, BFS, DFS, shortest path"
draft: true
---

# Week 34 Day 05: graph, BFS, DFS, shortest path

## 오늘의 목표

- graph, BFS, DFS를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- shortest path, node, edge가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Concrete Mathematics, Structure and Interpretation of Computer Programs - graph, CFG, call graph, recursion, symbolic thinking
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- The Linux Command Line 2판: 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System, 5장 Working with Commands, 6장 Redirection
- pwn.college Start Here: Using the Terminal, SSH, file navigation 관련 챌린지
- man pages: bash 또는 sh, pwd, cd, ls, file, stat, find, grep, xxd

## 핵심 키워드

graph, BFS, DFS, shortest path, node, edge, visited set, queue

## 반드시 정리할 개념

- graph: 입력, 출력, 복잡도, 실패 조건을 명확히 하고 보안 분석 문제에 어떻게 적용되는지 예를 남긴다.
- BFS: 입력, 출력, 복잡도, 실패 조건을 명확히 하고 보안 분석 문제에 어떻게 적용되는지 예를 남긴다.
- DFS: 입력, 출력, 복잡도, 실패 조건을 명확히 하고 보안 분석 문제에 어떻게 적용되는지 예를 남긴다.
- shortest path: shortest path의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- node: node의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- edge: edge의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- visited set: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- queue: queue의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 오늘 자료구조 또는 수학 개념을 Python으로 최소 구현하고 입력 크기 변화에 따른 시간/메모리 또는 탐지 결과 차이를 기록한다.
- pwd, ls -la, file, stat, find, grep, xxd, redirection, pipe를 사용해 같은 파일을 3가지 관점으로 확인하고 명령어/출력/해석을 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- call graph 또는 dependency graph 탐색 예제
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. graph를 보안 분석 문제에 적용하면 입력, 출력, 복잡도, 실패 조건은 각각 무엇인가?
2. BFS를 보안 분석 문제에 적용하면 입력, 출력, 복잡도, 실패 조건은 각각 무엇인가?
3. DFS를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. shortest path를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. node를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. edge를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "call graph 또는 dependency graph 탐색 예제"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
