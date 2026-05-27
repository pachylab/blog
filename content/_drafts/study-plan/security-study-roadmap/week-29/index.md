---
title: "Week 29: network forensics and session reconstruction"
draft: true
---

# Week 29: network forensics and session reconstruction

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 PCAP 기반 침해 흐름 timeline과 탐지 제안을 완성한다.

## 공부 자료
- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, Cryptography & Network Security - PCAP timeline, DNS/HTTP/TLS, certificate, exfiltration pattern

- Computer Networking: A Top-Down Approach: 1장 네트워크 개요, 2장 Application Layer, 3장 Transport Layer, 4장 Network Layer
- RFC 791 IP, RFC 792 ICMP, RFC 768 UDP, RFC 9293 TCP 중 header와 state machine 개요
- Wireshark User's Guide: packet list/details/bytes pane, display filter 기본
- Linux man pages: ip, ss, tcpdump, dig, nc, curl
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata
- Malware Traffic Analysis 교육용 PCAP: DNS/HTTP/TLS 추적 실습
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables

## 핵심 키워드

PCAP, protocol inventory, conversation, endpoint, bytes in/out, packet count, time range, DNS, HTTP, TLS, session reconstruction, SNI, Host header, URI, certificate, Zeek, conn.log, dns.log, http.log, ssl.log, files.log, uid correlation, Suricata, eve.json, alert, signature id, flow id, rule metadata, false positive, exfiltration pattern, lateral movement intro, SMB, RDP, large transfer, beaconing, data staging, network forensics, host artifact, timeline correlation, process-to-connection, DNS cache, firewall log, exfiltration, host correlation, timeline

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | PCAP triage와 protocol inventory | PCAP, protocol inventory, conversation, endpoint, bytes in/out, packet count, time range | PCAP 요약과 주요 endpoint 표 |
| Day 02 | DNS/HTTP/TLS session reconstruction | DNS, HTTP, TLS, session reconstruction, SNI, Host header, URI | DNS->HTTP/TLS session 연결표 |
| Day 03 | Zeek log timeline | Zeek, conn.log, dns.log, http.log, ssl.log, files.log, uid correlation | Zeek UID 기반 timeline |
| Day 04 | Suricata alert triage | Suricata, eve.json, alert, signature id, flow id, rule metadata, false positive | alert 근거와 FP 판단표 |
| Day 05 | exfiltration과 lateral movement 패턴 | exfiltration pattern, lateral movement intro, SMB, RDP, large transfer, beaconing, data staging | 네트워크 행위별 의심 근거표 |
| Day 06 | host-network correlation | network forensics, host artifact, timeline correlation, process-to-connection, DNS cache, firewall log | host와 network evidence 연결표 |
| Day 07 | 주간 복습과 network report | PCAP, session reconstruction, Zeek, Suricata, exfiltration, host correlation, timeline | Week 29 network forensics report |

## 주간 산출물

- PCAP 기반 침해 흐름 timeline과 탐지 제안
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
