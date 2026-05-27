---
title: "Week 04: process, thread, scheduler, IPC"
draft: true
---

# Week 04: process, thread, scheduler, IPC

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 프로세스 관찰 리포트와 context switch/IPC 정리을 완성한다.

## 공부 자료
- 보유 서적: Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브, 운영체제 - Stallings, 운영체제 - Silberschatz - process/thread, scheduler, IPC, context switching, OS execution model

- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables
- CS:APP 3e: 8.2 Processes, 12장 Concurrent Programming 중 thread/process 개요
- Windows Internals Part 1: Processes, Threads, and Jobs; Services 개요
- Linux man pages: ps, top, kill, fork, execve, wait, pthreads, systemd.service
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- Sleuth Kit/Autopsy docs: disk image ingest, timeline, file carving workflow
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations

## 핵심 키워드

process, thread, task, address space, PID, TID, handle, file descriptor, scheduler, context switching, run queue, time slice, thread state, CPU context, register save/restore, fork, execve, wait, environment variable, argv, process tree, parent/child process, IPC, pipe, socketpair, shared memory, mutex, semaphore, race condition, deadlock, service, daemon, systemd, Windows service, job object, scheduled task, persistence intro, ps, top, pstree, lsof, strace, procfs, Process Explorer, Procmon, forensic artifact

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | process, thread, task의 차이 | process, thread, task, address space, PID, TID, handle | process/thread/task 비교표 |
| Day 02 | scheduler와 context switching | scheduler, context switching, run queue, time slice, thread state, CPU context, register save/restore | context switch 때 저장되는 상태 목록 |
| Day 03 | process 생성과 exec 흐름 | fork, execve, wait, environment variable, argv, process tree, parent/child process | fork/exec 실습 로그와 process tree |
| Day 04 | IPC와 synchronization | IPC, pipe, socketpair, shared memory, mutex, semaphore, race condition | IPC 방식별 artifact와 위험 비교표 |
| Day 05 | service, daemon, job, startup 실행 단위 | service, daemon, systemd, Windows service, job object, scheduled task, persistence intro | Linux daemon과 Windows service 실행 구조 비교 |
| Day 06 | 프로세스 관찰 도구 실습 | ps, top, pstree, lsof, strace, procfs, Process Explorer | 하나의 프로세스를 여러 도구로 관찰한 표 |
| Day 07 | 주간 복습과 malware/forensics 연결 | process, thread, scheduler, IPC, service, daemon, forensic artifact | process artifact가 악성코드/포렌식에 주는 단서 정리 |

## 주간 산출물

- 프로세스 관찰 리포트와 context switch/IPC 정리
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
