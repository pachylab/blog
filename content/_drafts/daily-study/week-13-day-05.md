---
title: "Week 13 Day 05: patching과 behavioral change"
draft: true
---

# Week 13 Day 05: patching과 behavioral change

## 오늘의 목표

- patching, NOP, conditional jump를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- checksum risk, code cave, binary diff가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리버싱 핵심 원리, 해킹: 공격의 예술 - Windows API tracing, PE, dynamic analysis
- GDB manual: breakpoints, watchpoints, examining memory/registers, disassemble, backtrace
- x64dbg documentation: breakpoints, memory map, modules, patching workflow
- Microsoft Learn: WinDbg getting started, symbols, commands, user-mode debugging
- Frida docs: JavaScript API, Interceptor.attach, Stalker 개요
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior

## 핵심 키워드

patching, NOP, conditional jump, checksum risk, code cave, binary diff, behavior change

## 반드시 정리할 개념

- patching: breakpoint, watchpoint, trace, patch가 답하는 질문과 프로그램 상태를 바꾸는 정도를 구분한다.
- NOP: NOP의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- conditional jump: conditional jump의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- checksum risk: checksum risk의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- code cave: code cave의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- binary diff: 같은 값을 2진수, 10진수, 16진수로 변환하고 byte 단위로 끊어 읽는다. hex dump에서 offset, byte, ASCII view를 구분한다.
- behavior change: behavior change의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 작은 프로그램을 디버거에 올리고 breakpoint, watchpoint, register/memory view, single-step, patch를 각각 수행해 차이를 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- patch 전후 기능 변화와 위험 분석
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. patching는 프로그램 상태를 바꾸는가, 관찰만 하는가? 그 차이가 분석 결론에 미치는 영향은 무엇인가?
2. NOP를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. conditional jump를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. checksum risk를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. code cave를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. binary diff 값을 16진수로 바꿀 때 중간 계산을 어떻게 검산했고, byte 경계에서 어떤 실수를 할 수 있는가?
7. 오늘 산출물인 "patch 전후 기능 변화와 위험 분석"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
