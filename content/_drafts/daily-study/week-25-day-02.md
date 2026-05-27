---
title: "Week 25 Day 02: process/task scheduler와 procfs"
draft: true
---

# Week 25 Day 02: process/task scheduler와 procfs

## 오늘의 목표

- task_struct, scheduler, procfs를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- /proc/<pid>, process state, context switching가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리눅스 커널 심층 구조, BPF Performance Tools, 실전 리눅스 악성코드 분석, 운영체제 - Stallings, 운영체제 - Silberschatz - syscall, VFS, scheduler, memory management, tracing, Linux malware artifact
- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables
- CS:APP 3e: 8.2 Processes, 12장 Concurrent Programming 중 thread/process 개요
- Windows Internals Part 1: Processes, Threads, and Jobs; Services 개요
- Linux man pages: ps, top, kill, fork, execve, wait, pthreads, systemd.service
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- Linux Kernel Development: process management, system calls, virtual file system, modules, memory management 관련 장

## 핵심 키워드

task_struct, scheduler, procfs, /proc/<pid>, process state, context switching, load average

## 반드시 정리할 개념

- task_struct: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- scheduler: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- procfs: Linux 관찰 지점을 procfs/sysfs/auditd/eBPF/systemd로 나누고 namespace/cgroup/capability/seccomp/LSM의 경계를 정리한다.
- /proc/<pid>: /proc/<pid>의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- process state: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- context switching: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- load average: load average의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- C 예제를 작성해 pointer arithmetic, string terminator, struct padding, function pointer 호출을 GDB와 sanitizer로 확인한다.
- ps, top, pstree, lsof, strace, procfs로 하나의 프로세스를 관찰하고 thread, fd, memory map, syscall 흔적을 연결한다.
- Linux VM에서 /proc, /sys, systemctl, journalctl, capsh, unshare, seccomp-tools 가능한 범위를 확인하고 권한/격리 상태를 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- /proc 기반 process 관찰표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. task_struct의 메모리 배치를 그릴 수 있고 잘못 쓰면 어떤 memory safety 문제가 생기는가?
2. scheduler를 관찰하기 위해 어떤 OS 도구를 썼고 출력에서 PID/TID/state/resource를 어떻게 읽었는가?
3. procfs가 Linux 보안 경계, 관찰 지점, 우회 가능성 중 어디에 해당하는가?
4. /proc/<pid>를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. process state를 관찰하기 위해 어떤 OS 도구를 썼고 출력에서 PID/TID/state/resource를 어떻게 읽었는가?
6. context switching를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "/proc 기반 process 관찰표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
