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

file, directory, metadata, timestamp, MACB, timezone, file permission, inode, MFT, journal, USN journal, ext4 journal, APFS snapshot, filesystem metadata, NTFS, ext4, APFS, FAT, exFAT, ADS, case sensitivity, metadata structure, symbolic link, hard link, alternate data stream, link count, path confusion, file metadata, evidence, chain of custody, forensic image, write blocker, hash verification, acquisition log, disk image, partition, file carving, deleted recovery, timeline analysis, Sleuth Kit, timeline

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | file, directory, metadata, timestamp | file, directory, metadata, timestamp, MACB, timezone, file permission | timestamp 의미와 timezone 주의점 정리 |
| Day 02 | inode, MFT, journal | inode, MFT, journal, USN journal, ext4 journal, APFS snapshot, filesystem metadata | inode/MFT/journal 역할 비교표 |
| Day 03 | NTFS, ext4, APFS, FAT/exFAT | NTFS, ext4, APFS, FAT, exFAT, ADS, case sensitivity | 파일시스템별 분석 포인트 표 |
| Day 04 | symbolic link, hard link, ADS | symbolic link, hard link, alternate data stream, ADS, link count, path confusion, file metadata | link/ADS가 분석을 헷갈리게 하는 사례 정리 |
| Day 05 | evidence, forensic image, write blocker | evidence, chain of custody, forensic image, write blocker, hash verification, acquisition log | 증거 수집 로그 템플릿 |
| Day 06 | file carving, deleted recovery, timeline | disk image, partition, file carving, deleted recovery, timeline analysis, MACB, Sleuth Kit | 삭제 파일 복구와 timeline 실습 계획 |
| Day 07 | 주간 복습과 DFIR 연결 | metadata, timestamp, MFT, journal, forensic image, file carving, timeline | Week 08 파일시스템 포렌식 질문 목록 |

## 주간 산출물

- 파일시스템 artifact 비교표와 timeline 초안
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
