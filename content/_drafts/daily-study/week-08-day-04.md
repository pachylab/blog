---
title: "Week 08 Day 04: symbolic link, hard link, ADS"
draft: true
---

# Week 08 Day 04: symbolic link, hard link, ADS

## 오늘의 목표

- symbolic link, hard link, alternate data stream를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- ADS, link count, path confusion가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 디지털 포렌식과 사고 대응 2/e, 운영체제 - Stallings, 운영체제 - Silberschatz, Cryptography & Network Security - filesystem metadata, evidence handling, OS protection, authentication 기본 배경
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- Sleuth Kit/Autopsy docs: disk image ingest, timeline, file carving workflow
- The Linux Command Line 2판: 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System, 5장 Working with Commands, 6장 Redirection
- pwn.college Start Here: Using the Terminal, SSH, file navigation 관련 챌린지
- man pages: bash 또는 sh, pwd, cd, ls, file, stat, find, grep, xxd

## 핵심 키워드

symbolic link, hard link, alternate data stream, ADS, link count, path confusion, file metadata

## 반드시 정리할 개념

- symbolic link: input corpus, coverage, sanitizer report, constraint, source/sink, patch 차이를 재현 가능한 입력과 함께 기록한다.
- hard link: hard link의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- alternate data stream: alternate data stream의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- ADS: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- link count: link count의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- path confusion: path confusion의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- file metadata: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.

## 실습

- 작은 parser나 toy binary에 sanitizer/fuzzer를 붙이고 crash input을 최소화한다. 가능하면 Z3/angr로 같은 조건을 표현한다.
- pwd, ls -la, file, stat, find, grep, xxd, redirection, pipe를 사용해 같은 파일을 3가지 관점으로 확인하고 명령어/출력/해석을 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- link/ADS가 분석을 헷갈리게 하는 사례 정리
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. symbolic link가 찾아낸 조건을 재현 가능한 입력과 최소한의 설명으로 남길 수 있는가?
2. hard link를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. alternate data stream를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. ADS를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. link count를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. path confusion를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "link/ADS가 분석을 헷갈리게 하는 사례 정리"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
