---
title: "Week 26: Windows DFIR artifacts"
draft: true
---

# Week 26: Windows DFIR artifacts

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 Windows artifact timeline과 실행 흔적 분석 보고서을 완성한다.

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
- The Linux Command Line 2판: 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System, 5장 Working with Commands, 6장 Redirection
- pwn.college Start Here: Using the Terminal, SSH, file navigation 관련 챌린지
- man pages: bash 또는 sh, pwd, cd, ls, file, stat, find, grep, xxd
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- CS:APP 3e: 6.1 Storage Technologies, 6.2 Locality, 6.4 Cache Memories

## 핵심 키워드

registry hives, SYSTEM hive, SOFTWARE hive, NTUSER.DAT, Windows Event Log, Event ID, timestamp, Prefetch, ShimCache, AmCache, program execution, file path, last run time, execution evidence, SRUM, network usage, application usage, ESE database, energy usage, timeline, user activity, LNK, JumpList, Recycle Bin, shell item, file access, deleted file, browser history, cookies, browser cache, download history, SQLite, session restore, web artifact, timeline analysis, MACB, timezone, event correlation, artifact reliability, anti-forensics, registry, event log

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | registry hives와 event log | registry hives, SYSTEM hive, SOFTWARE hive, NTUSER.DAT, Windows Event Log, Event ID, timestamp | registry/event log evidence map |
| Day 02 | Prefetch, ShimCache, AmCache | Prefetch, ShimCache, AmCache, program execution, file path, last run time, execution evidence | 실행 흔적 artifact 비교표 |
| Day 03 | SRUM과 network/application usage | SRUM, network usage, application usage, ESE database, energy usage, timeline, user activity | SRUM으로 볼 수 있는 질문 목록 |
| Day 04 | LNK, JumpList, Recycle Bin | LNK, JumpList, Recycle Bin, shell item, file access, deleted file, user activity | 사용자 행위 artifact 정리 |
| Day 05 | browser history, cookies, cache | browser history, cookies, browser cache, download history, SQLite, session restore, web artifact | browser artifact timeline |
| Day 06 | Windows timeline 통합 | timeline analysis, MACB, timezone, event correlation, artifact reliability, anti-forensics | Windows 실행/파일/웹 artifact 통합 timeline |
| Day 07 | 주간 복습과 incident scoping | registry, event log, Prefetch, AmCache, SRUM, JumpList, browser history | Week 26 Windows DFIR mini report |

## 주간 산출물

- Windows artifact timeline과 실행 흔적 분석 보고서
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
