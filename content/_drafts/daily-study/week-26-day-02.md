---
title: "Week 26 Day 02: Prefetch, ShimCache, AmCache"
draft: true
---

# Week 26 Day 02: Prefetch, ShimCache, AmCache

## 오늘의 목표

- Prefetch, ShimCache, AmCache를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- program execution, file path, last run time가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, Windows Internals 7/e Vol.1/Vol.2, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식 - IR triage, Windows artifact, registry forensics, Sysinternals workflow
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 2: I/O System, Storage Management, Registry, Services, WMI 관련 장
- Microsoft Learn: Registry hives, Event Log, Prefetch, Task Scheduler, Services, ETW 개요
- 13Cubed Windows Forensics: Registry, Prefetch, ShimCache, AmCache, SRUM, LNK/JumpList 강의 범위
- The Linux Command Line 2판: 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System, 5장 Working with Commands, 6장 Redirection
- pwn.college Start Here: Using the Terminal, SSH, file navigation 관련 챌린지
- man pages: bash 또는 sh, pwd, cd, ls, file, stat, find, grep, xxd
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find

## 핵심 키워드

Prefetch, ShimCache, AmCache, program execution, file path, last run time, execution evidence

## 반드시 정리할 개념

- Prefetch: artifact별로 증명할 수 있는 행위, timestamp 의미, 한계, 교차 검증 대상을 정리한다.
- ShimCache: artifact별로 증명할 수 있는 행위, timestamp 의미, 한계, 교차 검증 대상을 정리한다.
- AmCache: artifact별로 증명할 수 있는 행위, timestamp 의미, 한계, 교차 검증 대상을 정리한다.
- program execution: program execution의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- file path: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- last run time: last run time의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- execution evidence: 원본 증거와 분석 복제본을 구분하고 acquisition 시각, hash, 도구 버전, write-block 여부를 기록한다.

## 실습

- Windows VM 또는 공개 DFIR sample에서 Process Explorer, Procmon, Autoruns, Event Viewer/Sysmon, artifact parser 결과를 연결한다.
- pwd, ls -la, file, stat, find, grep, xxd, redirection, pipe를 사용해 같은 파일을 3가지 관점으로 확인하고 명령어/출력/해석을 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 실행 흔적 artifact 비교표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. Prefetch artifact의 timestamp 의미와 한계를 설명하고 다른 artifact로 교차 검증할 수 있는가?
2. ShimCache를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. AmCache artifact의 timestamp 의미와 한계를 설명하고 다른 artifact로 교차 검증할 수 있는가?
4. program execution를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. file path artifact가 증명할 수 있는 행위와 증명할 수 없는 행위는 무엇인가?
6. last run time를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "실행 흔적 artifact 비교표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
