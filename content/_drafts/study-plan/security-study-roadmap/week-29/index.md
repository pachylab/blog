---
title: "Week 29: network forensics and session reconstruction"
draft: true
---

# Week 29: network forensics and session reconstruction

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 PCAP 기반 침해 흐름 timeline과 탐지 제안을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

PCAP, protocol inventory, conversation, endpoint, bytes in/out, packet count, time range, DNS, HTTP, TLS, session reconstruction, SNI, Host header, URI, Zeek, conn.log, dns.log, http.log, ssl.log, files.log, uid correlation, Suricata, eve.json, alert, signature id, flow id, rule metadata, false positive, exfiltration pattern, lateral movement intro, SMB, RDP, large transfer, beaconing, data staging

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | PCAP triage와 protocol inventory | PCAP, protocol inventory, conversation, endpoint, bytes in/out, packet count, time range | PCAP 요약과 주요 endpoint 표 |
| Day 02 | DNS/HTTP/TLS session reconstruction | DNS, HTTP, TLS, session reconstruction, SNI, Host header, URI | DNS->HTTP/TLS session 연결표 |
| Day 03 | Zeek log timeline | Zeek, conn.log, dns.log, http.log, ssl.log, files.log, uid correlation | Zeek UID 기반 timeline |
| Day 04 | Suricata alert triage | Suricata, eve.json, alert, signature id, flow id, rule metadata, false positive | alert 근거와 FP 판단표 |
| Day 05 | exfiltration과 lateral movement 패턴 | exfiltration pattern, lateral movement intro, SMB, RDP, large transfer, beaconing, data staging | 네트워크 행위별 의심 근거표 |
| Review | 주간 복습과 forensic evidence 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 29 주간 개념 지도와 다음 주 질문 5개 |

## Week 29 글쓰기 훈련 흐름

Week 29의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-29-review` worksheet 1개
- 대표 산출물 후보: PCAP 요약과 주요 endpoint 표, DNS->HTTP/TLS session 연결표, Zeek UID 기반 timeline
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
