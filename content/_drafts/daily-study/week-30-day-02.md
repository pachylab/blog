---
title: "Week 30 Day 02: SQLite와 plist artifact"
draft: true
---

# Week 30 Day 02: SQLite와 plist artifact

## 오늘의 목표

- SQLite, plist, mobile artifact를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- browser cache, app database, timestamp format가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e - mobile app sandbox, SQLite/plist, cloud/container scope, IR final report
- The Art of Memory Forensics: acquisition, processes, DLLs, handles, VAD, malfind 관련 장
- Volatility 3 docs: windows.pslist, pstree, dlllist, handles, vadinfo, malfind, netscan 플러그인
- Android Developers: app sandbox, data/file storage, SQLite; Apple docs: property list and app container 개요
- AWS CloudTrail docs, Microsoft Entra audit/sign-in logs docs, Kubernetes audit logging docs, container runtime logs docs
- SANS IR methodology: preparation, identification, containment, eradication, recovery, lessons learned와 report 구조
- CS:APP 3e: 6.1 Storage Technologies, 6.2 Locality, 6.4 Cache Memories
- OSTEP: Paging: Faster Translations (TLBs), Paging: Smaller Tables
- Computer Organization and Design: pipelining, branch prediction, cache organization 개요
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장

## 핵심 키워드

SQLite, plist, mobile artifact, browser cache, app database, timestamp format, deleted row

## 반드시 정리할 개념

- SQLite: SQLite의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- plist: plist의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- mobile artifact: mobile artifact의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- browser cache: cache locality, TLB hit/miss, pipeline stall, branch prediction이 성능과 side-channel 분석에 왜 중요한지 예로 설명한다.
- app database: app database의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- timestamp format: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- deleted row: deleted row의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 테스트 디렉터리에서 파일 생성/수정/이동/삭제를 수행하고 stat, hash, timeline을 기록한다. 가능하면 작은 disk image에서 같은 artifact를 찾는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- SQLite/plist 분석 질문표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. SQLite를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. plist를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. mobile artifact를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. browser cache를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. app database를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. timestamp format artifact가 증명할 수 있는 행위와 증명할 수 없는 행위는 무엇인가?
7. 오늘 산출물인 "SQLite/plist 분석 질문표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
