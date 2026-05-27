---
title: "Week 09 Day 05: DNS, HTTP, HTTPS, TLS"
draft: true
---

# Week 09 Day 05: DNS, HTTP, HTTPS, TLS

## 오늘의 목표

- DNS, HTTP, HTTPS를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- TLS, certificate, key exchange가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Cryptography & Network Security - DNS/HTTP/TLS, certificate, key exchange, network security terminology
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata
- Malware Traffic Analysis 교육용 PCAP: DNS/HTTP/TLS 추적 실습
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor

## 핵심 키워드

DNS, HTTP, HTTPS, TLS, certificate, key exchange, SNI

## 반드시 정리할 개념

- DNS: 계층별 단위(frame/packet/segment/stream)를 구분하고 PCAP에서 필터, stream, metadata를 어떻게 읽을지 정리한다.
- HTTP: 계층별 단위(frame/packet/segment/stream)를 구분하고 PCAP에서 필터, stream, metadata를 어떻게 읽을지 정리한다.
- HTTPS: HTTPS의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- TLS: 계층별 단위(frame/packet/segment/stream)를 구분하고 PCAP에서 필터, stream, metadata를 어떻게 읽을지 정리한다.
- certificate: certificate의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- key exchange: key exchange의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- SNI: SNI의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- curl, dig, ping, nc를 실행하며 tcpdump 또는 Wireshark로 PCAP을 캡처하고 DNS, TCP handshake, HTTP/TLS metadata를 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- DNS->TCP->TLS->HTTP 흐름도
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. DNS를 PCAP에서 필터링하려면 어떤 필드를 보고 정상/비정상 판단 근거는 무엇인가?
2. HTTP를 PCAP에서 필터링하려면 어떤 필드를 보고 정상/비정상 판단 근거는 무엇인가?
3. HTTPS를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. TLS를 PCAP에서 필터링하려면 어떤 필드를 보고 정상/비정상 판단 근거는 무엇인가?
5. certificate를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. key exchange를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "DNS->TCP->TLS->HTTP 흐름도"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
