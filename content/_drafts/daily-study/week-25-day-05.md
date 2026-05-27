---
title: "Week 25 Day 05: capabilities, namespace, cgroup, seccomp"
draft: true
---

# Week 25 Day 05: capabilities, namespace, cgroup, seccomp

## 오늘의 목표

- capabilities, namespace, cgroup를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- seccomp, container isolation, privilege boundary가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리눅스 커널 심층 구조, BPF Performance Tools, 실전 리눅스 악성코드 분석, 운영체제 - Stallings, 운영체제 - Silberschatz - syscall, VFS, scheduler, memory management, tracing, Linux malware artifact
- Linux Kernel Development: process management, system calls, virtual file system, modules, memory management 관련 장
- Linux kernel documentation: filesystems/proc, driver-api, bpf, admin-guide/LSM, userspace-api/seccomp_filter
- man pages: proc, capabilities, namespaces, cgroups, seccomp, auditctl, bpf, systemd.service
- kernel docs 또는 LWN: eBPF verifier, LSM hooks, namespace/cgroup 개요
- Linux man pages: capabilities, namespaces, cgroups, seccomp, prctl, unshare, clone, systemd.exec
- Docker docs: rootless mode, default capabilities, seccomp security profiles, AppArmor/SELinux integration
- Kubernetes docs: Security Context, Pod Security Standards, seccomp, AppArmor, SELinux options

## 핵심 키워드

DAC, MAC, capabilities, namespace, cgroup, seccomp, seccomp profile, rootless container, container isolation, privilege boundary, sandbox

## 반드시 정리할 개념

- DAC/MAC: Unix permission/owner/group 기반 DAC와 AppArmor/SELinux 같은 MAC이 어떤 순서와 관점으로 access decision에 관여하는지 정리한다.
- capabilities: root 권한을 잘게 나눈 단위로 보고 CAP_SYS_ADMIN, CAP_NET_ADMIN, CAP_SYS_PTRACE처럼 위험도가 큰 capability를 따로 표시한다.
- namespace: mount, pid, net, user, ipc, uts namespace가 격리하는 자원을 각각 정리하고 host escape 분석에서 확인할 지점을 적는다.
- cgroup: resource limit과 accounting이 container isolation, DoS 방어, incident scoping에 주는 의미를 정리한다.
- seccomp/seccomp profile: syscall allowlist/denylist가 exploit chain, sandbox escape, container hardening에 미치는 영향을 정리한다.
- rootless container: user namespace와 capability 제한이 root-in-container의 의미를 어떻게 바꾸는지 정리한다.
- privilege boundary/sandbox: process, container, kernel 사이의 경계를 우회하려면 어떤 misconfiguration이나 kernel bug가 필요한지 적는다.

## 실습

- Linux VM에서 `capsh --print`, `/proc/self/status`, `unshare`, `lsns`, `systemd-analyze security` 가능한 범위를 확인하고 현재 권한/namespace 상태를 기록한다.
- Docker 또는 container 문서 예시 기준으로 default capability, seccomp profile, privileged container, rootless mode의 차이를 표로 정리한다.
- seccomp가 막은 syscall이 로그나 오류에서 어떻게 보일 수 있는지 조사하고, exploit chain이 어떤 syscall에 의존하는지 연결한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- container 격리 요소별 보안 역할 표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. DAC와 MAC은 Linux 접근 제어에서 각각 어떤 질문에 답하는가?
2. CAP_SYS_ADMIN, CAP_NET_ADMIN, CAP_SYS_PTRACE는 왜 high-risk capability로 분류해야 하는가?
3. mount/pid/net/user namespace 중 container escape 분석에서 먼저 확인할 항목은 무엇인가?
4. seccomp profile이 exploit chain에서 open/read/write, execve, mmap, ptrace 사용 가능성을 어떻게 바꾸는가?
5. privileged container와 rootless container는 host 침해 위험을 어떻게 다르게 만든다?
6. cgroup은 resource limit, process scoping, incident response에서 어떤 evidence를 제공할 수 있는가?
7. 오늘 산출물인 "container 격리 요소별 보안 역할 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
