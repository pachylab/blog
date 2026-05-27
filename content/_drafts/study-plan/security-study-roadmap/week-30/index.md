---
title: "Week 30: mobile, cloud, container, identity forensics"
draft: true
---

# Week 30: mobile, cloud, container, identity forensics

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 identity/workload 중심 incident scope 문서을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e - mobile app sandbox, SQLite/plist, cloud/container scope, IR final report

- The Art of Memory Forensics: acquisition, processes, DLLs, handles, VAD, malfind 관련 장
- Volatility 3 docs: windows.pslist, pstree, dlllist, handles, vadinfo, malfind, netscan 플러그인
- Android Developers: app sandbox, data/file storage, SQLite; Apple docs: property list and app container 개요
- AWS CloudTrail docs, Microsoft Entra audit/sign-in logs docs, Kubernetes audit logging docs, container runtime logs docs
- SANS IR methodology: preparation, identification, containment, eradication, recovery, lessons learned와 report 구조
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- CS:APP 3e: 6.1 Storage Technologies, 6.2 Locality, 6.4 Cache Memories
- OSTEP: Paging: Faster Translations (TLBs), Paging: Smaller Tables
- Computer Organization and Design: pipelining, branch prediction, cache organization 개요
- Computer Networking: A Top-Down Approach: 1장 네트워크 개요, 2장 Application Layer, 3장 Transport Layer, 4장 Network Layer
- RFC 791 IP, RFC 792 ICMP, RFC 768 UDP, RFC 9293 TCP 중 header와 state machine 개요

## 핵심 키워드

mobile forensics, Android app sandbox, iOS app sandbox, app data directory, permissions, keychain intro, backup artifact, SQLite, plist, mobile artifact, browser cache, app database, timestamp format, deleted row, CloudTrail, IAM, access key, AssumeRole, API call, source IP, user agent, Entra, sign-in log, audit log, conditional access, MFA, service principal, OAuth consent, GCP audit log, Kubernetes audit log, service account, pod, namespace, RBAC, kubectl exec

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | Android/iOS app sandbox | mobile forensics, Android app sandbox, iOS app sandbox, app data directory, permissions, keychain intro, backup artifact | mobile app sandbox artifact 표 |
| Day 02 | SQLite와 plist artifact | SQLite, plist, mobile artifact, browser cache, app database, timestamp format, deleted row | SQLite/plist 분석 질문표 |
| Day 03 | AWS CloudTrail과 cloud identity | CloudTrail, IAM, access key, AssumeRole, API call, source IP, user agent | CloudTrail event 해석표 |
| Day 04 | Microsoft Entra와 sign-in/audit logs | Entra, sign-in log, audit log, conditional access, MFA, service principal, OAuth consent | identity incident timeline 초안 |
| Day 05 | GCP audit log와 Kubernetes audit | GCP audit log, Kubernetes audit log, service account, pod, namespace, RBAC, kubectl exec | Kubernetes audit 이벤트 매핑표 |
| Review | 주간 복습과 forensic evidence 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 30 주간 개념 지도와 다음 주 질문 5개 |

## Week 30 글쓰기 훈련 흐름

Week 30의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-30-review` worksheet 1개
- 대표 산출물 후보: mobile app sandbox artifact 표, SQLite/plist 분석 질문표, CloudTrail event 해석표
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
