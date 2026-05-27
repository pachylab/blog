---
title: "Week 17: anti-analysis, obfuscation, packing"
draft: true
---

# Week 17: anti-analysis, obfuscation, packing

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 anti-analysis 체크리스트와 unpacking 노트을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

anti-debugging, IsDebuggerPresent, timing check, ptrace, breakpoint detection, debug register, exception trick, anti-VM, anti-sandbox, anti-tampering, VM artifact, sleep delay, environment check, checksum, obfuscation, deobfuscation, string encryption, API hashing, dead code, junk instruction, constant folding, control-flow flattening, opaque predicate, dispatcher loop, state variable, CFG recovery, data flow, packing, unpacking, OEP, entry point, memory dump, section entropy, import reconstruction

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | anti-debugging | anti-debugging, IsDebuggerPresent, timing check, ptrace, breakpoint detection, debug register, exception trick | anti-debug signal과 우회/탐지 표 |
| Day 02 | anti-VM, anti-sandbox, anti-tampering | anti-VM, anti-sandbox, anti-tampering, VM artifact, sleep delay, environment check, checksum | 환경 검사 항목과 오탐 가능성 표 |
| Day 03 | obfuscation과 deobfuscation | obfuscation, deobfuscation, string encryption, API hashing, dead code, junk instruction, constant folding | 난독화 전후 evidence 비교 |
| Day 04 | control-flow flattening과 opaque predicate | control-flow flattening, opaque predicate, dispatcher loop, state variable, CFG recovery, data flow | flattened CFG를 복원하는 메모 |
| Day 05 | packing, OEP, dump | packing, unpacking, OEP, entry point, memory dump, section entropy, import reconstruction | packing 전후 section/import 비교표 |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 17 주간 개념 지도와 다음 주 질문 5개 |

## Week 17 글쓰기 훈련 흐름

Week 17의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-17-review` worksheet 1개
- 대표 산출물 후보: anti-debug signal과 우회/탐지 표, 환경 검사 항목과 오탐 가능성 표, 난독화 전후 evidence 비교
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
