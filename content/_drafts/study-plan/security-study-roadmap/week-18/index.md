---
title: "Week 18: C2, beaconing, DGA, network malware"
draft: true
---

# Week 18: C2, beaconing, DGA, network malware

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 C2 traffic timeline과 network IOC report을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

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

C2, command and control, payload staging, stager, implant, tasking, callback, beaconing, callback interval, jitter, sleep, periodicity, traffic timeline, outlier, DGA, domain generation algorithm, domain fronting, DNS entropy, NXDOMAIN, SNI, Host header, network IOC, JA3, JA4, TLS fingerprint, certificate, user-agent, exfiltration pattern, large upload, DNS tunneling intro, HTTP POST, session reconstruction, bytes in/out

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | C2 architecture와 payload staging | C2, command and control, payload staging, stager, implant, tasking, callback | C2 구성 요소와 traffic 흐름도 |
| Day 02 | beaconing과 jitter 분석 | beaconing, callback interval, jitter, sleep, periodicity, traffic timeline, outlier | beacon 후보 시간 간격 분석표 |
| Day 03 | DGA와 domain fronting | DGA, domain generation algorithm, domain fronting, DNS entropy, NXDOMAIN, SNI, Host header | DGA/domain fronting 탐지 질문표 |
| Day 04 | network IOC와 TLS fingerprint | network IOC, JA3, JA4, TLS fingerprint, certificate, SNI, user-agent | TLS/HTTP metadata IOC 표 |
| Day 05 | exfiltration pattern과 session reconstruction | exfiltration pattern, large upload, DNS tunneling intro, HTTP POST, session reconstruction, bytes in/out | exfiltration 의심 흐름 분석 |
| Review | 주간 복습과 malware 분석 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 18 주간 개념 지도와 다음 주 질문 5개 |

## Week 18 글쓰기 훈련 흐름

Week 18의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-18-review` worksheet 1개
- 대표 산출물 후보: C2 구성 요소와 traffic 흐름도, beacon 후보 시간 간격 분석표, DGA/domain fronting 탐지 질문표
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
