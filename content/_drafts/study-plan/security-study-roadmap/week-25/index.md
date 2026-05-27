---
title: "Week 25: Linux kernel, system security, observability"
draft: true
---

# Week 25: Linux kernel, system security, observability

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 Linux kernel 관찰 지점과 시스템 보안 모델 정리을 완성한다.

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

Linux Kernel, kernel, kernel module, syscall table, system call, kernel space, user space, task_struct, scheduler, procfs, /proc/<pid>, process state, context switching, load average, VFS, inode, file operations, dentry, mount namespace, filesystem driver, permission check, driver, IOCTL, device file, major/minor number, udev, capability requirement, DAC, MAC, capabilities, namespace, cgroup, seccomp, seccomp profile, rootless container, container isolation, privilege boundary, sandbox, AppArmor, SELinux, LSM, auditd, audit rule, policy, denial log, eBPF, BPF verifier, tracepoint, kprobe, systemd, systemd sandboxing, journalctl, observability, kernel lockdown, module signing, IMA/EVM

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | kernel, module, syscall table | Linux Kernel, kernel, kernel module, syscall table, system call, kernel space, user space | Linux syscall과 kernel module 개념도 |
| Day 02 | process/task scheduler와 procfs | task_struct, scheduler, procfs, /proc/<pid>, process state, context switching, load average | /proc 기반 process 관찰표 |
| Day 03 | VFS, inode, file operations | VFS, inode, file operations, dentry, mount namespace, filesystem driver, permission check | VFS 경로 해석 흐름도 |
| Day 04 | driver, module, IOCTL | driver, kernel module, IOCTL, device file, major/minor number, udev, capability requirement | device file과 IOCTL 공격면 정리 |
| Day 05 | capabilities, namespace, cgroup, seccomp | DAC, MAC, capabilities, namespace, cgroup, seccomp, seccomp profile, rootless container, container isolation | container 격리 요소별 보안 역할 표 |
| Day 06 | AppArmor, SELinux, LSM, auditd | AppArmor, SELinux, LSM, auditd, audit rule, policy, denial log, MAC, privilege boundary | LSM/audit 로그 읽기 체크리스트 |
| Day 07 | eBPF, systemd hardening, kernel lockdown | eBPF, BPF verifier, tracepoint, kprobe, systemd, systemd sandboxing, journalctl, kernel lockdown, module signing, IMA/EVM | Linux 관찰 도구와 hardening 연결표 |

## 주간 산출물

- Linux kernel 관찰 지점과 시스템 보안 모델 정리
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
