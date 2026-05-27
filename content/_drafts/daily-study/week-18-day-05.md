---
title: "Week 18 Day 05: exfiltration pattern과 session reconstruction"
draft: true
---

# Week 18 Day 05: exfiltration pattern과 session reconstruction

## 오늘의 목표

- exfiltration pattern, large upload, DNS tunneling intro를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- HTTP POST, session reconstruction, bytes in/out가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Cryptography & Network Security, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석 - C2, beaconing, DGA, TLS fingerprint, IOC
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata
- Malware Traffic Analysis 교육용 PCAP: DNS/HTTP/TLS 추적 실습
- Computer Networking: A Top-Down Approach: 1장 네트워크 개요, 2장 Application Layer, 3장 Transport Layer, 4장 Network Layer
- RFC 791 IP, RFC 792 ICMP, RFC 768 UDP, RFC 9293 TCP 중 header와 state machine 개요
- Wireshark User's Guide: packet list/details/bytes pane, display filter 기본
- Linux man pages: ip, ss, tcpdump, dig, nc, curl

## 핵심 키워드

exfiltration pattern, large upload, DNS tunneling intro, HTTP POST, session reconstruction, bytes in/out

## 반드시 정리할 개념

- exfiltration pattern: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- large upload: large upload의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- DNS tunneling intro: 계층별 단위(frame/packet/segment/stream)를 구분하고 PCAP에서 필터, stream, metadata를 어떻게 읽을지 정리한다.
- HTTP POST: 계층별 단위(frame/packet/segment/stream)를 구분하고 PCAP에서 필터, stream, metadata를 어떻게 읽을지 정리한다.
- session reconstruction: session reconstruction의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- bytes in/out: bytes in/out의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- curl, dig, ping, nc를 실행하며 tcpdump 또는 Wireshark로 PCAP을 캡처하고 DNS, TCP handshake, HTTP/TLS metadata를 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- exfiltration 의심 흐름 분석
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. exfiltration pattern를 단일 IOC가 아니라 시간 패턴, TLS metadata, byte volume으로 판단하려면 어떤 증거가 필요한가?
2. large upload를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. DNS tunneling intro를 PCAP에서 필터링하려면 어떤 필드를 보고 정상/비정상 판단 근거는 무엇인가?
4. HTTP POST를 PCAP에서 필터링하려면 어떤 필드를 보고 정상/비정상 판단 근거는 무엇인가?
5. session reconstruction를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. bytes in/out를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "exfiltration 의심 흐름 분석"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
