---
title: "Week 27: disk and filesystem forensics"
draft: true
---

# Week 27: disk and filesystem forensics

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 disk image 분석 절차와 삭제 파일/timeline 보고서을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 운영체제 - Stallings, 운영체제 - Silberschatz - evidence handling, forensic image, filesystem, timeline, scoping

- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- Sleuth Kit/Autopsy docs: disk image ingest, timeline, file carving workflow

## 핵심 키워드

evidence, chain of custody, forensic image, write blocker, hash verification, acquisition log, disk image, partition, MBR, GPT, filesystem, volume, mount point, sector, deleted recovery, file carving, unallocated space, file signature, fragmentation, metadata loss, timestamp, timezone, MACB, clock skew, timeline analysis, time normalization, artifact semantics, NTFS, MFT, USN journal, $LogFile, $Bitmap, file reference number, resident attribute

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | evidence, chain of custody, imaging | evidence, chain of custody, forensic image, write blocker, hash verification, acquisition log, disk image | forensic imaging checklist |
| Day 02 | partition과 filesystem 식별 | partition, MBR, GPT, filesystem, volume, mount point, sector | disk image 구조 파악 로그 |
| Day 03 | deleted recovery와 file carving | deleted recovery, file carving, unallocated space, file signature, fragmentation, metadata loss | 삭제 파일 복구 가능성 판단표 |
| Day 04 | timestamp, timezone, MACB | timestamp, timezone, MACB, clock skew, timeline analysis, time normalization, artifact semantics | 시간 정규화와 MACB 해석표 |
| Day 05 | NTFS MFT, USN, $LogFile | NTFS, MFT, USN journal, $LogFile, $Bitmap, file reference number, resident attribute | NTFS artifact별 질문표 |
| Review | 주간 복습과 forensic evidence 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 27 주간 개념 지도와 다음 주 질문 5개 |

## Week 27 글쓰기 훈련 흐름

Week 27의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-27-review` worksheet 1개
- 대표 산출물 후보: forensic imaging checklist, disk image 구조 파악 로그, 삭제 파일 복구 가능성 판단표
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
