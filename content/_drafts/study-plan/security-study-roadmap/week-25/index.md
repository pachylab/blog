---
title: "Week 25: Linux kernel, system security, observability"
draft: true
---

# Week 25: Linux kernel, system security, observability

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 Linux kernel 관찰 지점과 시스템 보안 모델 정리을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: 리눅스 커널 심층 구조, BPF Performance Tools, 실전 리눅스 악성코드 분석, 운영체제 - Stallings, 운영체제 - Silberschatz - syscall, VFS, scheduler, memory management, tracing, Linux malware artifact

- Linux Kernel Development: process management, system calls, virtual file system, modules, memory management 관련 장
- Linux kernel documentation: filesystems/proc, driver-api, bpf, admin-guide/LSM, userspace-api/seccomp_filter
- man pages: proc, capabilities, namespaces, cgroups, seccomp, auditctl, bpf, systemd.service
- kernel docs 또는 LWN: eBPF verifier, LSM hooks, namespace/cgroup 개요
- CS:APP 3e: 8.1 Exceptions, 8.2 Processes, 8.4 Process Control
- OSTEP: Limited Direct Execution, System Calls, Context Switches 관련 장
- Linux man pages: syscall, strace, ptrace, signal
- Linux man pages: systemd.exec, systemd-analyze security, capabilities, namespaces, cgroups, seccomp, auditctl, aa-status, sestatus
- Docker docs: rootless mode, default capabilities, seccomp security profiles, AppArmor/SELinux integration
- Linux kernel documentation: lockdown, module signing, IMA/EVM, audit, BPF LSM 개요

## 핵심 키워드

Linux Kernel, kernel, kernel module, syscall table, system call, kernel space, user space, task_struct, scheduler, procfs, /proc/<pid>, process state, context switching, load average, VFS, inode, file operations, dentry, mount namespace, filesystem driver, permission check, driver, IOCTL, device file, major/minor number, udev, capability requirement, DAC, MAC, capabilities, namespace, cgroup, seccomp, seccomp profile, LSM, audit, eBPF telemetry, rootless container, container isolation

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | kernel, module, syscall table | Linux Kernel, kernel, kernel module, syscall table, system call, kernel space, user space | Linux syscall과 kernel module 개념도 |
| Day 02 | process/task scheduler와 procfs | task_struct, scheduler, procfs, /proc/<pid>, process state, context switching, load average | /proc 기반 process 관찰표 |
| Day 03 | VFS, inode, file operations | VFS, inode, file operations, dentry, mount namespace, filesystem driver, permission check | VFS 경로 해석 흐름도 |
| Day 04 | driver, module, IOCTL | driver, kernel module, IOCTL, device file, major/minor number, udev, capability requirement | device file과 IOCTL 공격면 정리 |
| Day 05 | capabilities, namespace, cgroup, seccomp | DAC, MAC, capabilities, namespace, cgroup, seccomp, seccomp profile, LSM, audit, eBPF telemetry, rootless container, container isolation | container 격리 요소별 보안 역할 표 |
| Review | 주간 복습과 system boundary 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 25 주간 개념 지도와 다음 주 질문 5개 |

## Week 25 글쓰기 훈련 흐름

Week 25의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-25-review` worksheet 1개
- 대표 산출물 후보: Linux syscall과 kernel module 개념도, /proc 기반 process 관찰표, VFS 경로 해석 흐름도
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
