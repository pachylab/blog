---
title: "Week 16 Day 01: Run key, service, scheduled task"
draft: true
---

# Week 16 Day 01: Run key, service, scheduled task

## 오늘의 목표

- persistence, Run key, Windows service를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- scheduled task, startup folder, Autoruns가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Learning Malware Analysis, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식 - persistence, registry artifact, config extraction, detection mapping
- Practical Malware Analysis: persistence, Windows API, DLL injection, process replacement 관련 장
- MITRE ATT&CK: T1547 Boot or Logon Autostart Execution, T1055 Process Injection, T1027 Obfuscated Files or Information
- Microsoft Learn: Registry Run and RunOnce keys, Task Scheduler, WMI permanent event subscription
- Sysinternals: Autoruns, Process Explorer, Procmon 사용 가이드
- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables
- CS:APP 3e: 8.2 Processes, 12장 Concurrent Programming 중 thread/process 개요
- Windows Internals Part 1: Processes, Threads, and Jobs; Services 개요
- Linux man pages: ps, top, kill, fork, execve, wait, pthreads, systemd.service
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security

## 핵심 키워드

persistence, Run key, Windows service, scheduled task, startup folder, Autoruns, registry

## 반드시 정리할 개념

- persistence: 기법을 실행 시점, 권한, API 단계, host artifact, event log로 분해한다.
- Run key: 기법을 실행 시점, 권한, API 단계, host artifact, event log로 분해한다.
- Windows service: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- scheduled task: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- startup folder: startup folder의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- Autoruns: Autoruns의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- registry: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.

## 실습

- benign simulator 또는 문서 예제로 persistence/injection 흐름을 API 단계와 artifact 단계로 나누어 표기한다.
- Windows VM 또는 공개 DFIR sample에서 Process Explorer, Procmon, Autoruns, Event Viewer/Sysmon, artifact parser 결과를 연결한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 지속성 기법별 artifact 표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. persistence 기법이 남기는 host artifact와 event log를 최소 2개 이상 연결할 수 있는가?
2. Run key를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. Windows service를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
4. scheduled task를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. startup folder를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. Autoruns를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "지속성 기법별 artifact 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
