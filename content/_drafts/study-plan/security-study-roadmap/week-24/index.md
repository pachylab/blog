---
title: "Week 24: Windows internals와 system security"
draft: true
---

# Week 24: Windows internals와 system security

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 Windows object/process/memory/driver/system security 관찰 노트을 완성한다.

## 공부 자료
- 보유 서적: Windows Internals 7/e Vol.1/Vol.2, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식, 운영체제 - Stallings, 운영체제 - Silberschatz - process/thread/object manager/registry/service/protection

- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 2: I/O System, Storage Management, Registry, Services, WMI 관련 장
- Microsoft Learn: Access Control Model, Access Tokens, Security Identifiers, Access Control Lists, User Account Control
- Microsoft Learn: Windows Defender Application Control, AppLocker, Code Integrity, Protected Process Light, Credential Guard 개요
- Sysinternals docs: Process Explorer, Process Monitor, Autoruns, Sysmon을 이용한 security boundary와 telemetry 관찰
- Microsoft Learn: ETW, AMSI, Windows Event Log, Security auditing, Task Scheduler, Services 개요
- 13Cubed Windows Forensics: Registry, Event Log, Prefetch, ShimCache, AmCache, SRUM, LNK/JumpList 강의 범위

## 핵심 키워드

Windows Internals, object manager, object namespace, handle, access mask, kernel object, reference count, Windows process, Windows thread, job object, access token, SID, privilege, integrity level, ACL, DACL, SACL, UAC, AppContainer, PEB, TEB, EPROCESS, ETHREAD, user-mode structure, kernel structure, process environment, Windows memory manager, virtual address space, VAD, section object, working set, page file, copy-on-write, registry, service, Service Control Manager, WMI, event log, autorun, persistence, driver, kernel module, syscall table, IOCTL, IRP, device object, driver dispatch, ETW, AMSI, Sysmon, event provider, consumer, telemetry, log source, Code Integrity, WDAC, AppLocker, LSASS protection, Credential Guard

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | object manager와 handle | Windows Internals, object manager, object namespace, handle, access mask, kernel object, reference count | object/handle 관찰 노트 |
| Day 02 | Windows security model: token, SID, ACL, UAC | Windows process, Windows thread, job object, access token, SID, privilege, integrity level, ACL, DACL, SACL, UAC | Process Explorer에서 본 token/integrity/ACL 표 |
| Day 03 | PEB, TEB, EPROCESS, ETHREAD | PEB, TEB, EPROCESS, ETHREAD, user-mode structure, kernel structure, process environment | user/kernel process structure 비교 |
| Day 04 | Windows memory manager | Windows memory manager, virtual address space, VAD, section object, working set, page file, copy-on-write | VAD와 memory section 개념 정리 |
| Day 05 | registry, service, WMI | registry, service, Service Control Manager, WMI, event log, autorun, persistence | registry/service/WMI artifact map |
| Day 06 | driver, module, syscall table, IOCTL | driver, kernel module, syscall table, IOCTL, IRP, device object, driver dispatch | driver/IOCTL 공격면 개요 |
| Day 07 | ETW, AMSI, Sysmon, Code Integrity | ETW, AMSI, Sysmon, event provider, consumer, telemetry, Code Integrity, WDAC, AppLocker, LSASS protection, Credential Guard | Windows telemetry와 hardening source 비교표 |

## 주간 산출물

- Windows object/process/memory/driver/system security 관찰 노트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
