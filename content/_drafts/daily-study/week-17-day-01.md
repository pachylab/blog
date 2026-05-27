---
title: "Week 17 Day 01: anti-debugging"
draft: true
---

# Week 17 Day 01: anti-debugging

## 오늘의 목표

- anti-debugging, IsDebuggerPresent, timing check를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- ptrace, breakpoint detection, debug register가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리버싱 핵심 원리, Learning Malware Analysis, 실전 리눅스 악성코드 분석 - packing, anti-debugging, anti-VM, unpacking workflow
- GDB manual: breakpoints, watchpoints, examining memory/registers, disassemble, backtrace
- x64dbg documentation: breakpoints, memory map, modules, patching workflow
- Microsoft Learn: WinDbg getting started, symbols, commands, user-mode debugging
- Frida docs: JavaScript API, Interceptor.attach, Stalker 개요
- Practical Malware Analysis: anti-debugging, packers, unpacking, shellcode analysis 관련 장
- Malware Unicorn: unpacking, anti-analysis, deobfuscation workshops
- Ghidra docs: patch instruction, define bytes/code, function recovery, references
- x64dbg docs: Scylla/IAT reconstruction workflow와 OEP 찾기 개요
- YARA documentation: rule syntax, strings, conditions, modules, performance considerations

## 핵심 키워드

anti-debugging, IsDebuggerPresent, timing check, ptrace, breakpoint detection, debug register, exception trick

## 반드시 정리할 개념

- anti-debugging: breakpoint, watchpoint, trace, patch가 답하는 질문과 프로그램 상태를 바꾸는 정도를 구분한다.
- IsDebuggerPresent: IsDebuggerPresent의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- timing check: timing check의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- ptrace: ptrace의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- breakpoint detection: breakpoint, watchpoint, trace, patch가 답하는 질문과 프로그램 상태를 바꾸는 정도를 구분한다.
- debug register: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.
- exception trick: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.

## 실습

- 작은 프로그램을 디버거에 올리고 breakpoint, watchpoint, register/memory view, single-step, patch를 각각 수행해 차이를 기록한다.
- pack/unpack 전후 strings, imports, section entropy, entry point를 비교하고 hash와 도구 버전을 기록한다.
- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- anti-debug signal과 우회/탐지 표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. anti-debugging는 프로그램 상태를 바꾸는가, 관찰만 하는가? 그 차이가 분석 결론에 미치는 영향은 무엇인가?
2. IsDebuggerPresent를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. timing check를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. ptrace를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. breakpoint detection는 프로그램 상태를 바꾸는가, 관찰만 하는가? 그 차이가 분석 결론에 미치는 영향은 무엇인가?
6. debug register를 disassembly 한 줄에서 어떻게 식별했고 control flow 이해에 어떤 도움을 줬는가?
7. 오늘 산출물인 "anti-debug signal과 우회/탐지 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
