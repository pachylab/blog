---
title: "Week 04 Day 06: 프로세스 관찰 도구 실습"
draft: true
---

# Week 04 Day 06: 프로세스 관찰 도구 실습

## 오늘의 목표

- ps, top, pstree를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- lsof, strace, procfs가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브, 운영체제 - Stallings, 운영체제 - Silberschatz - process/thread, scheduler, IPC, context switching, OS execution model
- Linux Kernel Development: process management, system calls, virtual file system, modules, memory management 관련 장
- Linux kernel documentation: filesystems/proc, driver-api, bpf, admin-guide/LSM, userspace-api/seccomp_filter
- man pages: proc, capabilities, namespaces, cgroups, seccomp, auditctl, bpf, systemd.service
- kernel docs 또는 LWN: eBPF verifier, LSM hooks, namespace/cgroup 개요
- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables
- CS:APP 3e: 8.2 Processes, 12장 Concurrent Programming 중 thread/process 개요
- Windows Internals Part 1: Processes, Threads, and Jobs; Services 개요
- Linux man pages: ps, top, kill, fork, execve, wait, pthreads, systemd.service

## 핵심 키워드

ps, top, pstree, lsof, strace, procfs, Process Explorer, Procmon

## 반드시 정리할 개념

- ps: ps의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- top: top의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- pstree: pstree의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- lsof: lsof의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- strace: strace의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- procfs: Linux 관찰 지점을 procfs/sysfs/auditd/eBPF/systemd로 나누고 namespace/cgroup/capability/seccomp/LSM의 경계를 정리한다.
- Process Explorer: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- Procmon: Procmon의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- Linux VM에서 /proc, /sys, systemctl, journalctl, capsh, unshare, seccomp-tools 가능한 범위를 확인하고 권한/격리 상태를 기록한다.
- ps, top, pstree, lsof, strace, procfs로 하나의 프로세스를 관찰하고 thread, fd, memory map, syscall 흔적을 연결한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 하나의 프로세스를 여러 도구로 관찰한 표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. ps를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. top를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. pstree를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. lsof를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. strace를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. procfs가 Linux 보안 경계, 관찰 지점, 우회 가능성 중 어디에 해당하는가?
7. 오늘 산출물인 "하나의 프로세스를 여러 도구로 관찰한 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
