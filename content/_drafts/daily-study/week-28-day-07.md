---
title: "Week 28 Day 07: 주간 복습과 memory report"
draft: true
---

# Week 28 Day 07: 주간 복습과 memory report

## 오늘의 목표

- memory dump, Volatility, process reconstruction를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- DLL list, handle, VAD가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Windows Internals 7/e Vol.1/Vol.2, 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 메모리 포렌식 - memory dump, process reconstruction, handle, VAD, malfind, injected code
- The Art of Memory Forensics: acquisition, processes, DLLs, handles, VAD, malfind 관련 장
- Volatility 3 docs: windows.pslist, pstree, dlllist, handles, vadinfo, malfind, netscan 플러그인
- Android Developers: app sandbox, data/file storage, SQLite; Apple docs: property list and app container 개요
- AWS CloudTrail docs, Microsoft Entra audit/sign-in logs docs, Kubernetes audit logging docs, container runtime logs docs
- SANS IR methodology: preparation, identification, containment, eradication, recovery, lessons learned와 report 구조
- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables
- CS:APP 3e: 8.2 Processes, 12장 Concurrent Programming 중 thread/process 개요
- Windows Internals Part 1: Processes, Threads, and Jobs; Services 개요
- Linux man pages: ps, top, kill, fork, execve, wait, pthreads, systemd.service

## 핵심 키워드

memory dump, Volatility, process reconstruction, DLL list, handle, VAD, malfind

## 반드시 정리할 개념

- memory dump: memory dump의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- Volatility: artifact별로 증명할 수 있는 행위, timestamp 의미, 한계, 교차 검증 대상을 정리한다.
- process reconstruction: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- DLL list: DLL list의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- handle: handle의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- VAD: artifact별로 증명할 수 있는 행위, timestamp 의미, 한계, 교차 검증 대상을 정리한다.
- malfind: artifact별로 증명할 수 있는 행위, timestamp 의미, 한계, 교차 검증 대상을 정리한다.

## 실습

- Windows VM 또는 공개 DFIR sample에서 Process Explorer, Procmon, Autoruns, Event Viewer/Sysmon, artifact parser 결과를 연결한다.
- ps, top, pstree, lsof, strace, procfs로 하나의 프로세스를 관찰하고 thread, fd, memory map, syscall 흔적을 연결한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 28 memory triage report
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. memory dump를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. Volatility artifact의 timestamp 의미와 한계를 설명하고 다른 artifact로 교차 검증할 수 있는가?
3. process reconstruction를 관찰하기 위해 어떤 OS 도구를 썼고 출력에서 PID/TID/state/resource를 어떻게 읽었는가?
4. DLL list를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. handle를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. VAD artifact의 timestamp 의미와 한계를 설명하고 다른 artifact로 교차 검증할 수 있는가?
7. 오늘 산출물인 "Week 28 memory triage report"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
