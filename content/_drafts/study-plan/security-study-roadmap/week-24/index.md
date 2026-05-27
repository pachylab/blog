---
title: "Week 24: Windows internals와 system security"
draft: true
---

# Week 24: Windows internals와 system security

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 Windows object/process/memory/driver/system security 관찰 노트을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

Windows Internals, object manager, object namespace, handle, access mask, kernel object, reference count, Windows process, Windows thread, job object, access token, SID, privilege, integrity level, ACL, DACL, SACL, UAC, PEB, TEB, EPROCESS, ETHREAD, user-mode structure, kernel structure, process environment, Windows memory manager, virtual address space, VAD, section object, working set, page file, copy-on-write, registry, service, Service Control Manager, WMI, event log, autorun, persistence

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | object manager와 handle | Windows Internals, object manager, object namespace, handle, access mask, kernel object, reference count | object/handle 관찰 노트 |
| Day 02 | Windows security model: token, SID, ACL, UAC | Windows process, Windows thread, job object, access token, SID, privilege, integrity level, ACL, DACL, SACL, UAC | Process Explorer에서 본 token/integrity/ACL 표 |
| Day 03 | PEB, TEB, EPROCESS, ETHREAD | PEB, TEB, EPROCESS, ETHREAD, user-mode structure, kernel structure, process environment | user/kernel process structure 비교 |
| Day 04 | Windows memory manager | Windows memory manager, virtual address space, VAD, section object, working set, page file, copy-on-write | VAD와 memory section 개념 정리 |
| Day 05 | registry, service, WMI | registry, service, Service Control Manager, WMI, event log, autorun, persistence | registry/service/WMI artifact map |
| Review | 주간 복습과 system boundary 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 24 주간 개념 지도와 다음 주 질문 5개 |

## Week 24 글쓰기 훈련 흐름

Week 24의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-24-review` worksheet 1개
- 대표 산출물 후보: object/handle 관찰 노트, Process Explorer에서 본 token/integrity/ACL 표, user/kernel process structure 비교
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
