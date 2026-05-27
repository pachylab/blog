---
title: "Week 25 Day 07: eBPF, systemd hardening, kernel lockdown"
draft: true
---

# Week 25 Day 07: eBPF, systemd hardening, kernel lockdown

## 오늘의 목표

- eBPF, BPF verifier, tracepoint/kprobe를 Linux observability와 detection 관점으로 설명한다.
- systemd sandboxing, kernel lockdown, module signing, IMA/EVM이 system hardening과 rootkit 방어에 어떻게 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리눅스 커널 심층 구조, BPF Performance Tools, 실전 리눅스 악성코드 분석, 운영체제 - Stallings, 운영체제 - Silberschatz - syscall, VFS, scheduler, memory management, tracing, Linux malware artifact
- Linux Kernel Development: process management, system calls, virtual file system, modules, memory management 관련 장
- Linux kernel documentation: filesystems/proc, driver-api, bpf, admin-guide/LSM, userspace-api/seccomp_filter
- man pages: proc, capabilities, namespaces, cgroups, seccomp, auditctl, bpf, systemd.service
- kernel docs 또는 LWN: eBPF verifier, LSM hooks, namespace/cgroup 개요
- Linux man pages: systemd.exec, systemd-analyze security, journalctl, auditctl, bpf
- Linux kernel documentation: lockdown, module signing, IMA/EVM, BPF verifier, BPF LSM
- systemd docs: DynamicUser, NoNewPrivileges, PrivateTmp, ProtectSystem, ProtectHome, RestrictAddressFamilies, SystemCallFilter

## 핵심 키워드

eBPF, BPF verifier, tracepoint, kprobe, systemd, systemd sandboxing, journalctl, observability, kernel lockdown, module signing, IMA/EVM

## 반드시 정리할 개념

- eBPF: Linux 관찰 지점을 procfs/sysfs/auditd/eBPF/systemd로 나누고 namespace/cgroup/capability/seccomp/LSM의 경계를 정리한다.
- BPF verifier: BPF verifier의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- tracepoint: tracepoint의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- kprobe: kprobe의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- systemd sandboxing: NoNewPrivileges, PrivateTmp, ProtectSystem, ProtectHome, RestrictAddressFamilies, SystemCallFilter 같은 service hardening 옵션을 정리한다.
- kernel lockdown/module signing: unsigned kernel modification, kexec, /dev/mem, module loading 같은 공격면을 줄이는 방식을 정리한다.
- IMA/EVM: file integrity measurement와 appraisal이 persistence, tampering, incident response에서 어떤 evidence를 줄 수 있는지 정리한다.
- observability: eBPF/auditd/journalctl이 같은 행위를 서로 다른 depth와 overhead로 기록한다는 차이를 정리한다.

## 실습

- `systemd-analyze security` 또는 문서 예시 기준으로 service hardening 옵션을 읽고 위험 항목을 5개 이상 정리한다.
- eBPF tracepoint/kprobe, auditd, journalctl이 process execution과 network connection을 어떻게 다르게 관찰하는지 비교한다.
- kernel lockdown, module signing, IMA/EVM이 rootkit, unsigned module, persistence 분석에 주는 영향을 정리한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Linux 관찰 도구와 hardening 연결표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. eBPF는 관찰 도구이면서 공격면이 될 수 있다. BPF verifier가 줄이는 위험과 남는 위험은 무엇인가?
2. tracepoint와 kprobe는 안정성, 커버리지, kernel version 의존성 측면에서 어떻게 다른가?
3. systemd sandboxing 옵션 중 NoNewPrivileges, ProtectSystem, SystemCallFilter는 각각 어떤 공격 단계를 어렵게 만드는가?
4. kernel lockdown과 module signing은 rootkit, unsigned driver/module, live patching 분석에 어떤 제약을 만든다?
5. IMA/EVM은 파일 변조와 persistence 분석에서 어떤 evidence를 제공할 수 있는가?
6. journalctl, auditd, eBPF 결과가 충돌할 때 어떤 순서로 검증할 것인가?
7. 오늘 산출물인 "Linux 관찰 도구와 hardening 연결표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
