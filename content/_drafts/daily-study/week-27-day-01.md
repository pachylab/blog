---
title: "Week 27 Day 01: evidence, chain of custody, imaging"
draft: true
---

# Week 27 Day 01: evidence, chain of custody, imaging

## 오늘의 목표

- evidence, chain of custody, forensic image를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- write blocker, hash verification, acquisition log가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 운영체제 - Stallings, 운영체제 - Silberschatz - evidence handling, forensic image, filesystem, timeline, scoping
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- Sleuth Kit/Autopsy docs: disk image ingest, timeline, file carving workflow

## 핵심 키워드

evidence, chain of custody, forensic image, write blocker, hash verification, acquisition log, disk image

## 반드시 정리할 개념

- evidence: 원본 증거와 분석 복제본을 구분하고 acquisition 시각, hash, 도구 버전, write-block 여부를 기록한다.
- chain of custody: 원본 증거와 분석 복제본을 구분하고 acquisition 시각, hash, 도구 버전, write-block 여부를 기록한다.
- forensic image: 원본 증거와 분석 복제본을 구분하고 acquisition 시각, hash, 도구 버전, write-block 여부를 기록한다.
- write blocker: 원본 증거와 분석 복제본을 구분하고 acquisition 시각, hash, 도구 버전, write-block 여부를 기록한다.
- hash verification: hash verification의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- acquisition log: acquisition log의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- disk image: disk image의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 테스트 디렉터리에서 파일 생성/수정/이동/삭제를 수행하고 stat, hash, timeline을 기록한다. 가능하면 작은 disk image에서 같은 artifact를 찾는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- forensic imaging checklist
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. evidence를 기록할 때 hash, 시간, 도구 버전, 분석자, 원본/복제본 구분 중 무엇이 빠지면 신뢰성이 약해지는가?
2. chain of custody를 기록할 때 hash, 시간, 도구 버전, 분석자, 원본/복제본 구분 중 무엇이 빠지면 신뢰성이 약해지는가?
3. forensic image를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. write blocker를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. hash verification를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. acquisition log를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "forensic imaging checklist"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
