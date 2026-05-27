---
title: "Week 08: filesystem, metadata, evidence handling"
draft: true
---

# Week 08: filesystem, metadata, evidence handling

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 파일시스템 artifact 비교표와 timeline 초안을 완성한다.

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

file, directory, metadata, timestamp, MACB, timezone, file permission, inode, MFT, journal, USN journal, ext4 journal, APFS snapshot, filesystem metadata, NTFS, ext4, APFS, FAT, exFAT, ADS, case sensitivity, symbolic link, hard link, alternate data stream, link count, path confusion, file metadata, evidence, chain of custody, forensic image, write blocker, hash verification, acquisition log

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | file, directory, metadata, timestamp | file, directory, metadata, timestamp, MACB, timezone, file permission | timestamp 의미와 timezone 주의점 정리 |
| Day 02 | inode, MFT, journal | inode, MFT, journal, USN journal, ext4 journal, APFS snapshot, filesystem metadata | inode/MFT/journal 역할 비교표 |
| Day 03 | NTFS, ext4, APFS, FAT/exFAT | NTFS, ext4, APFS, FAT, exFAT, ADS, case sensitivity | 파일시스템별 분석 포인트 표 |
| Day 04 | symbolic link, hard link, ADS | symbolic link, hard link, alternate data stream, ADS, link count, path confusion, file metadata | link/ADS가 분석을 헷갈리게 하는 사례 정리 |
| Day 05 | evidence, forensic image, write blocker | evidence, chain of custody, forensic image, write blocker, hash verification, acquisition log | 증거 수집 로그 템플릿 |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 08 주간 개념 지도와 다음 주 질문 5개 |

## Week 08 글쓰기 훈련 흐름

Week 08의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-08-review` worksheet 1개
- 대표 산출물 후보: timestamp 의미와 timezone 주의점 정리, inode/MFT/journal 역할 비교표, 파일시스템별 분석 포인트 표
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
