---
title: "Week 26 Day 01: registry hives와 event log"
draft: true
---

# Week 26 Day 01: registry hives와 event log

## 오늘의 목표

- registry hives, SYSTEM hive, SOFTWARE hive를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- NTUSER.DAT, Windows Event Log, Event ID가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, Windows Internals 7/e Vol.1/Vol.2, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식 - IR triage, Windows artifact, registry forensics, Sysinternals workflow
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 2: I/O System, Storage Management, Registry, Services, WMI 관련 장
- Microsoft Learn: Registry hives, Event Log, Prefetch, Task Scheduler, Services, ETW 개요
- 13Cubed Windows Forensics: Registry, Prefetch, ShimCache, AmCache, SRUM, LNK/JumpList 강의 범위
- YARA documentation: rule syntax, strings, conditions, modules, performance considerations
- Sigma specification: logsource, detection, condition, fields, false positives
- Sysinternals Sysmon docs: Event ID 1, 3, 7, 11, 12-14, 22 중심
- MITRE ATT&CK: detection and data sources mapping
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장

## 핵심 키워드

registry hives, SYSTEM hive, SOFTWARE hive, NTUSER.DAT, Windows Event Log, Event ID, timestamp

## 반드시 정리할 개념

- registry hives: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- SYSTEM hive: SYSTEM hive의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- SOFTWARE hive: SOFTWARE hive의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- NTUSER.DAT: NTUSER.DAT의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- Windows Event Log: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- Event ID: Event ID의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- timestamp: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.

## 실습

- Windows VM 또는 공개 DFIR sample에서 Process Explorer, Procmon, Autoruns, Event Viewer/Sysmon, artifact parser 결과를 연결한다.
- 테스트 디렉터리에서 파일 생성/수정/이동/삭제를 수행하고 stat, hash, timeline을 기록한다. 가능하면 작은 disk image에서 같은 artifact를 찾는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- registry/event log evidence map
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. registry hives를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
2. SYSTEM hive를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. SOFTWARE hive를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. NTUSER.DAT를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. Windows Event Log를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
6. Event ID를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "registry/event log evidence map"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
