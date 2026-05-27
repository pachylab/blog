---
title: "Week 19 Day 04: ret2win 기초"
draft: true
---

# Week 19 Day 04: ret2win 기초

## 오늘의 목표

- ret2win, return address overwrite, calling convention를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- stack alignment, win function, payload layout가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, The Shellcoder's Handbook, 메타스플로잇 - stack overflow, shellcode, exploit validation
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- CS:APP 3e: 3.7 Procedures, 3.10 Combining Control and Data in Machine-Level Programs
- System V AMD64 ABI: Function Calling Sequence, register usage, stack alignment
- Microsoft Learn: x64 calling convention, stack allocation, prolog and epilog
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic

## 핵심 키워드

ret2win, return address overwrite, calling convention, stack alignment, win function, payload layout

## 반드시 정리할 개념

- ret2win: ret2win의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- return address overwrite: prologue가 saved RBP와 local variable 공간을 만들고 epilogue가 이를 되돌리는 순서를 instruction 단위로 정리한다. return address가 overwrite되면 control flow가 어떻게 바뀌는지 적는다.
- calling convention: 인자 전달, return value, caller/callee-saved register, stack alignment, prologue/epilogue를 하나의 함수 호출 그림으로 정리한다.
- stack alignment: multi-byte 값의 저장 순서, word size, alignment가 struct layout, ABI, 파일/패킷 파싱에 미치는 영향을 정리한다.
- win function: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- payload layout: payload layout의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 작은 C 프로그램 또는 Python 스크립트로 정수 값을 hex dump하고 signed/unsigned, endian, sizeof/alignof 결과를 표로 정리한다.
- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- ret2win payload 구조와 성공 조건
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. ret2win를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. return address overwrite가 stack frame 안에서 어디에 있으며 overflow가 발생하면 어떤 순서로 손상되는가?
3. calling convention를 기준으로 인자, 지역 변수, saved return address 위치를 설명할 수 있는가?
4. stack alignment를 모르면 구조체, 파일 포맷, 네트워크 패킷 중 어디에서 해석 오류가 생기는가?
5. win function 관점에서 입력 집합, 출력 집합, 매핑 규칙을 보안 로그 예시로 설명할 수 있는가?
6. payload layout를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "ret2win payload 구조와 성공 조건"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
