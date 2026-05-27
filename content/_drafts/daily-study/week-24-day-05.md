---
title: "Week 24 Day 05: registry, service, WMI"
draft: true
---

# Week 24 Day 05: registry, service, WMI

## 오늘의 목표

- registry, service, Service Control Manager를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- WMI, event log, autorun가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Windows Internals 7/e Vol.1/Vol.2, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식, 운영체제 - Stallings, 운영체제 - Silberschatz - process/thread/object manager/registry/service/protection
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 2: I/O System, Storage Management, Registry, Services, WMI 관련 장
- Microsoft Learn: Registry hives, Event Log, Prefetch, Task Scheduler, Services, ETW 개요
- 13Cubed Windows Forensics: Registry, Prefetch, ShimCache, AmCache, SRUM, LNK/JumpList 강의 범위
- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables
- CS:APP 3e: 8.2 Processes, 12장 Concurrent Programming 중 thread/process 개요
- Windows Internals Part 1: Processes, Threads, and Jobs; Services 개요
- Linux man pages: ps, top, kill, fork, execve, wait, pthreads, systemd.service
- Practical Malware Analysis: persistence, Windows API, DLL injection, process replacement 관련 장

## 핵심 키워드

registry, service, Service Control Manager, WMI, event log, autorun, persistence

## 반드시 정리할 개념

- registry: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- service: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- Service Control Manager: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- WMI: 기법을 실행 시점, 권한, API 단계, host artifact, event log로 분해한다.
- event log: event log의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- autorun: autorun의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- persistence: 기법을 실행 시점, 권한, API 단계, host artifact, event log로 분해한다.

## 실습

- Windows VM 또는 공개 DFIR sample에서 Process Explorer, Procmon, Autoruns, Event Viewer/Sysmon, artifact parser 결과를 연결한다.
- benign simulator 또는 문서 예제로 persistence/injection 흐름을 API 단계와 artifact 단계로 나누어 표기한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- registry/service/WMI artifact map
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. registry를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
2. service를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. Service Control Manager를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. WMI 기법이 남기는 host artifact와 event log를 최소 2개 이상 연결할 수 있는가?
5. event log를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. autorun를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "registry/service/WMI artifact map"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
