---
title: "Week 27: disk and filesystem forensics"
draft: true
---

# Week 27: disk and filesystem forensics

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 disk image 분석 절차와 삭제 파일/timeline 보고서을 완성한다.

## 공부 자료
- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 운영체제 - Stallings, 운영체제 - Silberschatz - evidence handling, forensic image, filesystem, timeline, scoping

- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- Sleuth Kit/Autopsy docs: disk image ingest, timeline, file carving workflow

## 핵심 키워드

evidence, chain of custody, forensic image, write blocker, hash verification, acquisition log, disk image, partition, MBR, GPT, filesystem, volume, mount point, sector, cluster, deleted recovery, file carving, unallocated space, file signature, fragmentation, metadata loss, timestamp, timezone, MACB, clock skew, timeline analysis, time normalization, artifact semantics, NTFS, MFT, USN journal, $LogFile, $Bitmap, file reference number, resident attribute, ext4, ext4 journal, inode, APFS, snapshot, clone, filesystem metadata, timeline

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | evidence, chain of custody, imaging | evidence, chain of custody, forensic image, write blocker, hash verification, acquisition log, disk image | forensic imaging checklist |
| Day 02 | partition과 filesystem 식별 | partition, MBR, GPT, filesystem, volume, mount point, sector | disk image 구조 파악 로그 |
| Day 03 | deleted recovery와 file carving | deleted recovery, file carving, unallocated space, file signature, fragmentation, metadata loss | 삭제 파일 복구 가능성 판단표 |
| Day 04 | timestamp, timezone, MACB | timestamp, timezone, MACB, clock skew, timeline analysis, time normalization, artifact semantics | 시간 정규화와 MACB 해석표 |
| Day 05 | NTFS MFT, USN, $LogFile | NTFS, MFT, USN journal, $LogFile, $Bitmap, file reference number, resident attribute | NTFS artifact별 질문표 |
| Day 06 | ext4 journal과 APFS snapshot | ext4, ext4 journal, inode, APFS, snapshot, clone, filesystem metadata | Linux/macOS filesystem artifact 비교 |
| Day 07 | 주간 복습과 forensic report | disk image, partition, file carving, timestamp, MFT, ext4 journal, timeline | Week 27 disk forensics report 1차본 |

## 주간 산출물

- disk image 분석 절차와 삭제 파일/timeline 보고서
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
