---
title: "Week 15: detection engineering: YARA, Sigma, logs"
draft: true
---

# Week 15: detection engineering: YARA, Sigma, logs

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 YARA/Sigma rule 초안과 false positive 관리표을 완성한다.

## 공부 자료
- 보유 서적: Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석, 시스인터널스 도구로 윈도우 문제 해결하기 - YARA, Sigma, Linux/Windows detection, false positive 관리

- YARA documentation: rule syntax, strings, conditions, modules, performance considerations
- Sigma specification: logsource, detection, condition, fields, false positives
- Sysinternals Sysmon docs: Event ID 1, 3, 7, 11, 12-14, 22 중심
- MITRE ATT&CK: detection and data sources mapping
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 2: I/O System, Storage Management, Registry, Services, WMI 관련 장
- Microsoft Learn: Registry hives, Event Log, Prefetch, Task Scheduler, Services, ETW 개요
- 13Cubed Windows Forensics: Registry, Prefetch, ShimCache, AmCache, SRUM, LNK/JumpList 강의 범위
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata
- Malware Traffic Analysis 교육용 PCAP: DNS/HTTP/TLS 추적 실습
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques

## 핵심 키워드

YARA, rule syntax, strings, condition, modules, wide/ascii, performance, Sigma, logsource, detection rule, fields, false positive, backend conversion, Sysmon, Windows Event, Event ID 1, Event ID 3, Event ID 7, Event ID 11, Event ID 22, Zeek, Suricata, conn.log, dns.log, http.log, ssl.log, eve.json, alert, test corpus, precision, recall, allowlist risk, rule tuning, confidence, MITRE ATT&CK, data source, technique mapping, coverage gap, detection logic, alert triage, ATT&CK

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | YARA syntax와 file/content detection | YARA, rule syntax, strings, condition, modules, wide/ascii, performance | YARA rule 2개와 match 근거 |
| Day 02 | Sigma와 log detection | Sigma, logsource, detection rule, condition, fields, false positive, backend conversion | Sigma rule 1개와 logsource 설명 |
| Day 03 | Sysmon과 Windows Event | Sysmon, Windows Event, Event ID 1, Event ID 3, Event ID 7, Event ID 11, Event ID 22 | Sysmon event별 탐지 질문 표 |
| Day 04 | Zeek/Suricata network detection | Zeek, Suricata, conn.log, dns.log, http.log, ssl.log, eve.json | 네트워크 로그 기반 탐지 rule 초안 |
| Day 05 | false positive management | false positive, test corpus, precision, recall, allowlist risk, rule tuning, confidence | FP 원인과 tuning 기록표 |
| Day 06 | ATT&CK coverage mapping | MITRE ATT&CK, data source, technique mapping, coverage gap, detection logic, alert triage | ATT&CK technique별 탐지 커버리지 표 |
| Day 07 | 주간 복습과 detection backlog | YARA, Sigma, Sysmon, Zeek, Suricata, false positive, ATT&CK | Week 15 detection backlog와 우선순위 |

## 주간 산출물

- YARA/Sigma rule 초안과 false positive 관리표
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
