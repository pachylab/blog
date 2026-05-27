---
title: "Week 18: C2, beaconing, DGA, network malware"
draft: true
---

# Week 18: C2, beaconing, DGA, network malware

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 C2 traffic timeline과 network IOC report을 완성한다.

## 공부 자료
- 보유 서적: Cryptography & Network Security, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석 - C2, beaconing, DGA, TLS fingerprint, IOC

- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata
- Malware Traffic Analysis 교육용 PCAP: DNS/HTTP/TLS 추적 실습
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques

## 핵심 키워드

C2, command and control, payload staging, stager, implant, tasking, callback, beaconing, callback interval, jitter, sleep, periodicity, traffic timeline, outlier, DGA, domain generation algorithm, domain fronting, DNS entropy, NXDOMAIN, SNI, Host header, network IOC, JA3, JA4, TLS fingerprint, certificate, user-agent, URI pattern, exfiltration pattern, large upload, DNS tunneling intro, HTTP POST, session reconstruction, bytes in/out, malware config, C2 address, config extraction, YARA, Sigma, Zeek, Suricata, exfiltration

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | C2 architecture와 payload staging | C2, command and control, payload staging, stager, implant, tasking, callback | C2 구성 요소와 traffic 흐름도 |
| Day 02 | beaconing과 jitter 분석 | beaconing, callback interval, jitter, sleep, periodicity, traffic timeline, outlier | beacon 후보 시간 간격 분석표 |
| Day 03 | DGA와 domain fronting | DGA, domain generation algorithm, domain fronting, DNS entropy, NXDOMAIN, SNI, Host header | DGA/domain fronting 탐지 질문표 |
| Day 04 | network IOC와 TLS fingerprint | network IOC, JA3, JA4, TLS fingerprint, certificate, SNI, user-agent | TLS/HTTP metadata IOC 표 |
| Day 05 | exfiltration pattern과 session reconstruction | exfiltration pattern, large upload, DNS tunneling intro, HTTP POST, session reconstruction, bytes in/out | exfiltration 의심 흐름 분석 |
| Day 06 | C2 config와 network detection 연결 | malware config, C2 address, config extraction, YARA, Sigma, Zeek, Suricata | config-to-detection mapping |
| Day 07 | 주간 복습과 C2 report | C2, beaconing, DGA, domain fronting, JA3, exfiltration, network IOC | Week 18 C2 traffic report 1차본 |

## 주간 산출물

- C2 traffic timeline과 network IOC report
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
