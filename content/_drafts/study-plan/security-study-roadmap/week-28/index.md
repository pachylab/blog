---
title: "Week 28: memory forensics"
draft: true
---

# Week 28: memory forensics

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 Volatility 기반 memory triage report을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: Windows Internals 7/e Vol.1/Vol.2, 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 메모리 포렌식 - memory dump, process reconstruction, handle, VAD, malfind, injected code

- The Art of Memory Forensics: acquisition, processes, DLLs, handles, VAD, malfind 관련 장
- Volatility 3 docs: windows.pslist, pstree, dlllist, handles, vadinfo, malfind, netscan 플러그인
- Android Developers: app sandbox, data/file storage, SQLite; Apple docs: property list and app container 개요
- AWS CloudTrail docs, Microsoft Entra audit/sign-in logs docs, Kubernetes audit logging docs, container runtime logs docs
- SANS IR methodology: preparation, identification, containment, eradication, recovery, lessons learned와 report 구조
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables
- CS:APP 3e: 8.2 Processes, 12장 Concurrent Programming 중 thread/process 개요
- Windows Internals Part 1: Processes, Threads, and Jobs; Services 개요
- Linux man pages: ps, top, kill, fork, execve, wait, pthreads, systemd.service
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security

## 핵심 키워드

memory dump, memory acquisition, Volatility, symbol table, profile, kernel address space, acquisition integrity, process reconstruction, pslist, pstree, psscan, hidden process, EPROCESS, process timeline, DLL list, dlllist, handle, object manager, module list, loaded library, handle leak, VAD, vadinfo, malfind, memory permission, injected code, private memory, PAGE_EXECUTE_READWRITE, netscan, socket, connection, local address, remote address, PID correlation, C2 connection

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | memory acquisition와 profile/symbol | memory dump, memory acquisition, Volatility, symbol table, profile, kernel address space, acquisition integrity | memory acquisition와 도구 입력 체크리스트 |
| Day 02 | process reconstruction | process reconstruction, pslist, pstree, psscan, hidden process, EPROCESS, process timeline | process list와 의심 기준 표 |
| Day 03 | DLL list, handle, object | DLL list, dlllist, handle, object manager, module list, loaded library, handle leak | 프로세스별 module/handle 분석표 |
| Day 04 | VAD와 malfind | VAD, vadinfo, malfind, memory permission, injected code, private memory, PAGE_EXECUTE_READWRITE | 의심 VAD와 injected code 판단표 |
| Day 05 | network socket과 process correlation | netscan, socket, connection, local address, remote address, PID correlation, C2 connection | memory 내 network connection timeline |
| Review | 주간 복습과 forensic evidence 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 28 주간 개념 지도와 다음 주 질문 5개 |

## Week 28 글쓰기 훈련 흐름

Week 28의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-28-review` worksheet 1개
- 대표 산출물 후보: memory acquisition와 도구 입력 체크리스트, process list와 의심 기준 표, 프로세스별 module/handle 분석표
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
