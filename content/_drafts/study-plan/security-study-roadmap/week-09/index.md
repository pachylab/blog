---
title: "Week 09: network fundamentals와 protocol reading"
draft: true
---

# Week 09: network fundamentals와 protocol reading

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 계층별 packet 해석 노트와 기본 PCAP을 완성한다.

## 공부 자료
- 보유 서적: Cryptography & Network Security - DNS/HTTP/TLS, certificate, key exchange, network security terminology

- Computer Networking: A Top-Down Approach: 1장 네트워크 개요, 2장 Application Layer, 3장 Transport Layer, 4장 Network Layer
- RFC 791 IP, RFC 792 ICMP, RFC 768 UDP, RFC 9293 TCP 중 header와 state machine 개요
- Wireshark User's Guide: packet list/details/bytes pane, display filter 기본
- Linux man pages: ip, ss, tcpdump, dig, nc, curl
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata
- Malware Traffic Analysis 교육용 PCAP: DNS/HTTP/TLS 추적 실습

## 핵심 키워드

OSI model, TCP/IP stack, encapsulation, frame, packet, segment, application layer, Ethernet, MAC address, IP, IPv4 header, ARP, routing table, TTL, TCP, UDP, ICMP, three-way handshake, sequence number, acknowledgment, connection state, port, socket, session, connection, routing, NAT, proxy, DNS, HTTP, HTTPS, TLS, certificate, key exchange, SNI

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | OSI model과 TCP/IP stack | OSI model, TCP/IP stack, encapsulation, frame, packet, segment, application layer | OSI/TCP-IP 계층 매핑표 |
| Day 02 | Ethernet, IP, ARP | Ethernet, MAC address, IP, IPv4 header, ARP, routing table, TTL | ARP와 IP header 필드 해석표 |
| Day 03 | TCP, UDP, ICMP | TCP, UDP, ICMP, three-way handshake, sequence number, acknowledgment, connection state | TCP handshake와 UDP/ICMP 비교 PCAP 노트 |
| Day 04 | port, socket, session, routing, NAT | port, socket, session, connection, routing, NAT, proxy | 5-tuple과 NAT/proxy 경로 정리 |
| Day 05 | DNS, HTTP, HTTPS, TLS | DNS, HTTP, HTTPS, TLS, certificate, key exchange, SNI | DNS->TCP->TLS->HTTP 흐름도 |
| Review | 주간 복습과 network evidence 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 09 주간 개념 지도와 다음 주 질문 5개 |

## Week 09 글쓰기 훈련 흐름

Week 09의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-09-review` worksheet 1개
- 대표 산출물 후보: OSI/TCP-IP 계층 매핑표, ARP와 IP header 필드 해석표, TCP handshake와 UDP/ICMP 비교 PCAP 노트
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
