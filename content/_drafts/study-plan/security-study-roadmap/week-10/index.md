---
title: "Week 10: network forensics, IDS, C2 traffic"
draft: true
---

# Week 10: network forensics, IDS, C2 traffic

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 PCAP timeline, network IOC, IDS rule 초안을 완성한다.

## 공부 자료
- 보유 서적: Cryptography & Network Security - TLS, VPN/proxy/firewall/IDS 개념과 packet analysis 배경

- Computer Networking: A Top-Down Approach: 1장 네트워크 개요, 2장 Application Layer, 3장 Transport Layer, 4장 Network Layer
- RFC 791 IP, RFC 792 ICMP, RFC 768 UDP, RFC 9293 TCP 중 header와 state machine 개요
- Wireshark User's Guide: packet list/details/bytes pane, display filter 기본
- Linux man pages: ip, ss, tcpdump, dig, nc, curl
- Malware Traffic Analysis의 교육용 PCAP 또는 직접 만든 benign traffic만 사용
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata
- Malware Traffic Analysis 교육용 PCAP: DNS/HTTP/TLS 추적 실습
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling

## 핵심 키워드

packet, frame, stream, PCAP, session reconstruction, tcp.stream, packet bytes, ARP, DHCP, routing table, firewall, NAT, default gateway, network segmentation, IDS, IPS, Zeek, Suricata, alert, eve.json, conn.log, network IOC, JA3, JA4, TLS fingerprint, SNI, certificate, user-agent, C2, beaconing, DGA, domain fronting, payload staging, callback interval, jitter

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | packet, frame, stream, PCAP 심화 | packet, frame, stream, PCAP, session reconstruction, tcp.stream, packet bytes | stream reconstruction 절차 노트 |
| Day 02 | ARP, DHCP, routing table, firewall | ARP, DHCP, routing table, firewall, NAT, default gateway, network segmentation | 네트워크 환경 artifact 정리표 |
| Day 03 | IDS/IPS와 Zeek/Suricata | IDS, IPS, Zeek, Suricata, alert, eve.json, conn.log | Zeek/Suricata 로그 필드 비교표 |
| Day 04 | network IOC, JA3/JA4, TLS fingerprint | network IOC, JA3, JA4, TLS fingerprint, SNI, certificate, user-agent | network IOC 유형과 한계 정리 |
| Day 05 | C2, beaconing, DGA, domain fronting | C2, beaconing, DGA, domain fronting, payload staging, callback interval, jitter | beaconing 시간 패턴 분석표 |
| Review | 주간 복습과 forensic evidence 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 10 주간 개념 지도와 다음 주 질문 5개 |

## Week 10 글쓰기 훈련 흐름

Week 10의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-10-review` worksheet 1개
- 대표 산출물 후보: stream reconstruction 절차 노트, 네트워크 환경 artifact 정리표, Zeek/Suricata 로그 필드 비교표
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
