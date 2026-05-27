---
title: "Week 30: mobile, cloud, container, identity forensics"
draft: true
---

# Week 30: mobile, cloud, container, identity forensics

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 identity/workload 중심 incident scope 문서을 완성한다.

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

mobile forensics, Android app sandbox, iOS app sandbox, app data directory, permissions, keychain intro, backup artifact, SQLite, plist, mobile artifact, browser cache, app database, timestamp format, deleted row, CloudTrail, IAM, access key, AssumeRole, API call, source IP, user agent, Entra, sign-in log, audit log, conditional access, MFA, service principal, OAuth consent, GCP audit log, Kubernetes audit log, service account, pod, namespace, RBAC, kubectl exec, container, container runtime logs, image, registry, volume mount, cgroup, incident response, triage, scoping, IOC extraction, containment, final report, lessons learned

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | Android/iOS app sandbox | mobile forensics, Android app sandbox, iOS app sandbox, app data directory, permissions, keychain intro, backup artifact | mobile app sandbox artifact 표 |
| Day 02 | SQLite와 plist artifact | SQLite, plist, mobile artifact, browser cache, app database, timestamp format, deleted row | SQLite/plist 분석 질문표 |
| Day 03 | AWS CloudTrail과 cloud identity | CloudTrail, IAM, access key, AssumeRole, API call, source IP, user agent | CloudTrail event 해석표 |
| Day 04 | Microsoft Entra와 sign-in/audit logs | Entra, sign-in log, audit log, conditional access, MFA, service principal, OAuth consent | identity incident timeline 초안 |
| Day 05 | GCP audit log와 Kubernetes audit | GCP audit log, Kubernetes audit log, service account, pod, namespace, RBAC, kubectl exec | Kubernetes audit 이벤트 매핑표 |
| Day 06 | container runtime logs와 workload scope | container, container runtime logs, image, registry, volume mount, namespace, cgroup | container compromise scoping checklist |
| Day 07 | incident response scoping과 final report | incident response, triage, scoping, IOC extraction, containment, final report, lessons learned | Week 30 incident scope report |

## 주간 산출물

- identity/workload 중심 incident scope 문서
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
