---
title: "Week 12 Day 07: AI-assisted binary analysis와 triage report"
draft: true
---

# Week 12 Day 07: AI-assisted binary analysis와 triage report

## 오늘의 목표

- LLM 기반 decompiler output 해석을 사용할 때 입력, 출력, 근거 주소, 검증 결과를 분리해 기록한다.
- IDA/Ghidra MCP로 함수 목록, xref, decompiler output을 가져오는 흐름과 hallucination 방지 체크를 정리한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리버싱 핵심 원리, 실전 바이너리 분석 - debugger, breakpoint, watchpoint, xref, function boundary
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 5장 IDA Pro
- Hex-Rays/IDA documentation: IDA View, graph view, xrefs, functions, names, comments, debugger 개요
- Ghidra Student Guide: CodeBrowser, Listing, Decompiler, Symbol Tree, References, Function Graph
- IDA/Ghidra MCP 사용 문서 또는 로컬 MCP 노트: 함수 목록, xref, decompiler output 조회, rename/comment 자동화
- LLM-assisted reversing 체크리스트: decompiler output 요약, 근거 주소, cross-check, hallucination 기록
- OpenSecurityTraining2 Intro x86/x64: disassembly 읽기와 control flow 추적 파트
- Malware Unicorn reversing workshops: strings, xrefs, functions, API flow 실습
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- CS:APP 3e: 7장 Linking 전체

## 핵심 키워드

LLM-assisted decompilation, IDA MCP, Ghidra MCP, prompt log, decompiler output, xref, function boundary, CFG, call graph, hallucination check, vulnerability pattern

## 반드시 정리할 개념

- LLM-assisted decompilation: 모델의 요약을 결론으로 쓰지 않고, 주소, basic block, xref, runtime evidence로 검증하는 절차를 적는다.
- IDA MCP: 함수 목록, 현재 함수 decompile, xref 조회, rename/comment 작업 중 자동화할 수 있는 부분과 사람이 검토할 부분을 구분한다.
- Ghidra MCP: decompiler output, symbol, call graph 정보를 가져올 때 프로젝트 상태와 도구 버전을 기록한다.
- prompt log: 모델에 제공한 코드 범위, 질문, 답변, 검증 결과, 폐기한 추정을 남긴다.
- hallucination check: 존재하지 않는 API, 가짜 control flow, 잘못된 type 추론을 발견하는 검증 질문을 만든다.
- vulnerability pattern: strcpy/memcpy length, integer conversion, unchecked index, allocation size처럼 의심 패턴을 evidence 중심으로 분류한다.
- triage report: 사실, 추정, 미확인 질문, 다음 실습을 분리해 1쪽으로 정리한다.

## 실습

- 직접 컴파일한 benign binary에서 함수 2개를 골라 IDA/Ghidra decompiler output을 모델에 설명시키고, 답변의 모든 주장에 주소 또는 xref 근거를 붙인다.
- MCP 또는 수동 복사 방식으로 가져온 함수 목록, call graph, 의심 함수 후보를 표로 만들고 hallucination으로 폐기한 항목도 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- AI 보조 분석 검증표와 Week 12 static triage report
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. LLM 답변 중 주소나 xref로 검증하지 못한 주장은 무엇이며 보고서에서 어떻게 표시했는가?
2. IDA/Ghidra MCP가 자동으로 가져온 정보와 사람이 직접 판단한 정보는 어떻게 구분했는가?
3. decompiler output의 type 추론이 틀렸을 때 어떤 assembly 근거로 수정했는가?
4. vulnerability pattern 후보를 실제 취약점이라고 말하기 전에 필요한 추가 evidence는 무엇인가?
5. hallucination check를 통과하지 못해 폐기한 분석 가설은 무엇인가?
6. prompt log를 남기면 나중에 분석 품질 검토에 어떤 도움이 되는가?
7. 오늘 산출물인 "AI 보조 분석 검증표와 Week 12 static triage report"가 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
