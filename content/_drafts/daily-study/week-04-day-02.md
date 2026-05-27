---
title: "Week 04 Day 02: scheduler와 context switching"
draft: true
---

# Week 04 Day 02: scheduler와 context switching

## 오늘의 목표

- scheduler, context switching, run queue를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- time slice, thread state, CPU context가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브, 운영체제 - Stallings, 운영체제 - Silberschatz - process/thread, scheduler, IPC, context switching, OS execution model
- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables
- CS:APP 3e: 8.2 Processes, 12장 Concurrent Programming 중 thread/process 개요
- Windows Internals Part 1: Processes, Threads, and Jobs; Services 개요
- Linux man pages: ps, top, kill, fork, execve, wait, pthreads, systemd.service
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations

## 핵심 키워드

scheduler, context switching, run queue, time slice, thread state, CPU context, register save/restore

## 반드시 정리할 개념

- scheduler: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- context switching: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- run queue: run queue의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- time slice: time slice의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- thread state: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- CPU context: CPU가 instruction을 fetch/decode/execute하는 관점에서 ISA, opcode, operand, addressing mode를 구분하고 disassembly 한 줄을 분해한다.
- register save/restore: register를 값 저장, 흐름 제어, 상태 flag, stack 추적 역할로 분류한다. RIP/RSP/RBP 또는 PC/SP/FP가 디버깅 기준점이 되는 이유를 적는다.

## 실습

- ps, top, pstree, lsof, strace, procfs로 하나의 프로세스를 관찰하고 thread, fd, memory map, syscall 흔적을 연결한다.
- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- context switch 때 저장되는 상태 목록
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. scheduler를 관찰하기 위해 어떤 OS 도구를 썼고 출력에서 PID/TID/state/resource를 어떻게 읽었는가?
2. context switching를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. run queue를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. time slice를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. thread state를 관찰하기 위해 어떤 OS 도구를 썼고 출력에서 PID/TID/state/resource를 어떻게 읽었는가?
6. CPU context를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "context switch 때 저장되는 상태 목록"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
