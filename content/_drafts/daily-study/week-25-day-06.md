---
title: "Week 25 Day 06: AppArmor, SELinux, LSM, auditd"
draft: true
---

# Week 25 Day 06: AppArmor, SELinux, LSM, auditd

## 오늘의 목표

- AppArmor, SELinux, LSM를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- auditd, audit rule, policy가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리눅스 커널 심층 구조, BPF Performance Tools, 실전 리눅스 악성코드 분석, 운영체제 - Stallings, 운영체제 - Silberschatz - syscall, VFS, scheduler, memory management, tracing, Linux malware artifact
- Linux Kernel Development: process management, system calls, virtual file system, modules, memory management 관련 장
- Linux kernel documentation: filesystems/proc, driver-api, bpf, admin-guide/LSM, userspace-api/seccomp_filter
- man pages: proc, capabilities, namespaces, cgroups, seccomp, auditctl, bpf, systemd.service
- kernel docs 또는 LWN: eBPF verifier, LSM hooks, namespace/cgroup 개요
- AppArmor docs: profile mode, complain/enforce mode, aa-status, audit log 해석
- SELinux docs: type enforcement, context, AVC denial, audit2allow, permissive/enforcing mode
- auditd docs: auditctl rule syntax, ausearch/aureport, syscall/file watch rule

## 핵심 키워드

AppArmor, SELinux, LSM, auditd, audit rule, policy, denial log, MAC, privilege boundary

## 반드시 정리할 개념

- AppArmor: path 기반 profile, complain/enforce mode, profile attachment, denial log를 기준으로 정리한다.
- SELinux: label/type 기반 access control, subject/object context, AVC denial, permissive/enforcing mode를 기준으로 정리한다.
- LSM: kernel hook 지점에서 MAC 정책이 access decision에 개입하는 구조와 AppArmor/SELinux/BPF LSM의 차이를 정리한다.
- auditd: syscall, file watch, user login, privilege change를 audit rule로 기록하는 흐름과 로그 필드 의미를 정리한다.
- audit rule: watch rule과 syscall rule의 차이, key 설정, event correlation 방법을 적는다.
- policy: 보안 정책을 완화하거나 우회하는 대신 least privilege 원칙으로 조정하는 절차를 정리한다.
- denial log: 실제 차단 근거인지, policy misconfiguration인지, 공격 시도인지 판단하기 위해 필요한 주변 evidence를 적는다.

## 실습

- `aa-status`, `sestatus`, `auditctl -l`, `ausearch` 또는 해당 문서 예시를 기준으로 현재 MAC/audit 상태를 확인하는 절차를 정리한다.
- 파일 접근, 권한 상승 시도, 네트워크 도구 실행 중 하나를 audit rule로 기록한다고 가정하고 rule, 예상 로그, 해석 기준을 작성한다.
- AppArmor와 SELinux denial log 예시를 비교해 차단된 subject, object, action, policy를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- LSM/audit 로그 읽기 체크리스트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. AppArmor의 path 기반 정책과 SELinux의 label/type 기반 정책은 어떤 상황에서 해석이 달라지는가?
2. LSM hook은 user mode 도구 출력만으로 보이지 않는 어떤 access decision을 만들 수 있는가?
3. auditd watch rule과 syscall rule은 각각 어떤 사건을 잡는 데 적합한가?
4. denial log를 공격 evidence로 판단하기 전에 어떤 정상 운영/정책 변경 가능성을 배제해야 하는가?
5. permissive/complain mode와 enforcing mode는 탐지, 차단, 운영 안정성 측면에서 어떻게 다른가?
6. least privilege 관점에서 policy를 완화할 때 기록해야 할 근거는 무엇인가?
7. 오늘 산출물인 "LSM/audit 로그 읽기 체크리스트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
