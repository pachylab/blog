---
title: "Week 16 Day 02: WMI와 startup artifact"
draft: true
---

# Week 16 Day 02: WMI와 startup artifact

## 오늘의 목표

- WMI, permanent event subscription, startup folder를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- service control manager, event consumer, persistence detection가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
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

WMI, permanent event subscription, startup folder, service control manager, event consumer, persistence detection

## 반드시 정리할 개념

- WMI: 기법을 실행 시점, 권한, API 단계, host artifact, event log로 분해한다.
- permanent event subscription: permanent event subscription의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- startup folder: startup folder의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- service control manager: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- event consumer: event consumer의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- persistence detection: YARA는 file/content, Sigma는 log/event 중심이라는 차이를 정리하고 rule 목적, 조건, false positive 관리 방법을 적는다.

## 실습

- benign simulator 또는 문서 예제로 persistence/injection 흐름을 API 단계와 artifact 단계로 나누어 표기한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- WMI persistence 구성 요소와 탐지 포인트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. WMI 기법이 남기는 host artifact와 event log를 최소 2개 이상 연결할 수 있는가?
2. permanent event subscription를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. startup folder를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. service control manager를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. event consumer를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. persistence detection를 보고서나 rule로 쓸 때 false positive를 줄이기 위한 조건은 무엇인가?
7. 오늘 산출물인 "WMI persistence 구성 요소와 탐지 포인트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
