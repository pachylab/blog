---
title: "Week 08 Day 02: inode, MFT, journal"
draft: true
---

# Week 08 Day 02: inode, MFT, journal

## 오늘의 목표

- inode, MFT, journal를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- USN journal, ext4 journal, APFS snapshot가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 디지털 포렌식과 사고 대응 2/e, 운영체제 - Stallings, 운영체제 - Silberschatz, Cryptography & Network Security - filesystem metadata, evidence handling, OS protection, authentication 기본 배경
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- Sleuth Kit/Autopsy docs: disk image ingest, timeline, file carving workflow

## 핵심 키워드

inode, MFT, journal, USN journal, ext4 journal, APFS snapshot, filesystem metadata

## 반드시 정리할 개념

- inode: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- MFT: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- journal: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- USN journal: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- ext4 journal: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- APFS snapshot: 분석 VM, snapshot, host-only network, sample hash, 실행 금지 원칙을 안전 절차로 정리하고 원본과 분석 복제본을 분리한다.
- filesystem metadata: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.

## 실습

- 테스트 디렉터리에서 파일 생성/수정/이동/삭제를 수행하고 stat, hash, timeline을 기록한다. 가능하면 작은 disk image에서 같은 artifact를 찾는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- inode/MFT/journal 역할 비교표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. inode artifact가 증명할 수 있는 행위와 증명할 수 없는 행위는 무엇인가?
2. MFT artifact가 증명할 수 있는 행위와 증명할 수 없는 행위는 무엇인가?
3. journal를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. USN journal를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. ext4 journal를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. APFS snapshot를 지키지 않으면 host 오염, 증거 훼손, 네트워크 유출 중 어떤 위험이 생기는가?
7. 오늘 산출물인 "inode/MFT/journal 역할 비교표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
