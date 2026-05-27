---
title: "Week 17 Day 07: 주간 복습과 분석 우선순위"
draft: true
---

# Week 17 Day 07: 주간 복습과 분석 우선순위

## 오늘의 목표

- anti-debugging, anti-VM, obfuscation를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- control-flow flattening, packing, OEP가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
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
- CS:APP 3e: 7장 Linking 전체

## 핵심 키워드

anti-debugging, anti-VM, obfuscation, control-flow flattening, packing, OEP, import reconstruction

## 반드시 정리할 개념

- anti-debugging: breakpoint, watchpoint, trace, patch가 답하는 질문과 프로그램 상태를 바꾸는 정도를 구분한다.
- anti-VM: AST, IR, CFG, SSA, bytecode/VM/JIT를 컴파일러와 decompiler가 사용하는 중간 표현으로 구분한다.
- obfuscation: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- control-flow flattening: control-flow flattening의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- packing: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- OEP: OEP의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- import reconstruction: import reconstruction의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 작은 프로그램을 디버거에 올리고 breakpoint, watchpoint, register/memory view, single-step, patch를 각각 수행해 차이를 기록한다.
- pack/unpack 전후 strings, imports, section entropy, entry point를 비교하고 hash와 도구 버전을 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 17 anti-analysis 대응 체크리스트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. anti-debugging는 프로그램 상태를 바꾸는가, 관찰만 하는가? 그 차이가 분석 결론에 미치는 영향은 무엇인가?
2. anti-VM를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. obfuscation를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
4. control-flow flattening를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. packing를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
6. OEP를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "Week 17 anti-analysis 대응 체크리스트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
