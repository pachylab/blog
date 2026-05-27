---
title: "Week 17: anti-analysis, obfuscation, packing"
draft: true
---

# Week 17: anti-analysis, obfuscation, packing

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 anti-analysis 체크리스트와 unpacking 노트을 완성한다.

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
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper

## 핵심 키워드

anti-debugging, IsDebuggerPresent, timing check, ptrace, breakpoint detection, debug register, exception trick, anti-VM, anti-sandbox, anti-tampering, VM artifact, sleep delay, environment check, checksum, obfuscation, deobfuscation, string encryption, API hashing, dead code, junk instruction, constant folding, control-flow flattening, opaque predicate, dispatcher loop, state variable, CFG recovery, data flow, packing, unpacking, OEP, entry point, memory dump, section entropy, import reconstruction, custom packer, IAT, Scylla, loader stub, relocation, anti-dump

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | anti-debugging | anti-debugging, IsDebuggerPresent, timing check, ptrace, breakpoint detection, debug register, exception trick | anti-debug signal과 우회/탐지 표 |
| Day 02 | anti-VM, anti-sandbox, anti-tampering | anti-VM, anti-sandbox, anti-tampering, VM artifact, sleep delay, environment check, checksum | 환경 검사 항목과 오탐 가능성 표 |
| Day 03 | obfuscation과 deobfuscation | obfuscation, deobfuscation, string encryption, API hashing, dead code, junk instruction, constant folding | 난독화 전후 evidence 비교 |
| Day 04 | control-flow flattening과 opaque predicate | control-flow flattening, opaque predicate, dispatcher loop, state variable, CFG recovery, data flow | flattened CFG를 복원하는 메모 |
| Day 05 | packing, OEP, dump | packing, unpacking, OEP, entry point, memory dump, section entropy, import reconstruction | packing 전후 section/import 비교표 |
| Day 06 | custom packer와 import reconstruction | custom packer, import reconstruction, IAT, Scylla, loader stub, relocation, anti-dump | import reconstruction 절차와 실패 조건 |
| Day 07 | 주간 복습과 분석 우선순위 | anti-debugging, anti-VM, obfuscation, control-flow flattening, packing, OEP, import reconstruction | Week 17 anti-analysis 대응 체크리스트 |

## 주간 산출물

- anti-analysis 체크리스트와 unpacking 노트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
