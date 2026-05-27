---
title: "Week 18 Day 07: 주간 복습과 C2 report"
draft: true
---

# Week 18 Day 07: 주간 복습과 C2 report

## 오늘의 목표

- C2, beaconing, DGA를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- domain fronting, JA3, exfiltration가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Cryptography & Network Security, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석 - C2, beaconing, DGA, TLS fingerprint, IOC
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

C2, beaconing, DGA, domain fronting, JA3, exfiltration, network IOC

## 반드시 정리할 개념

- C2: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- beaconing: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- DGA: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- domain fronting: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- JA3: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- exfiltration: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- network IOC: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.

## 실습

- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 18 C2 traffic report 1차본
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. C2를 단일 IOC가 아니라 시간 패턴, TLS metadata, byte volume으로 판단하려면 어떤 증거가 필요한가?
2. beaconing를 단일 IOC가 아니라 시간 패턴, TLS metadata, byte volume으로 판단하려면 어떤 증거가 필요한가?
3. DGA를 단일 IOC가 아니라 시간 패턴, TLS metadata, byte volume으로 판단하려면 어떤 증거가 필요한가?
4. domain fronting를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. JA3를 단일 IOC가 아니라 시간 패턴, TLS metadata, byte volume으로 판단하려면 어떤 증거가 필요한가?
6. exfiltration를 단일 IOC가 아니라 시간 패턴, TLS metadata, byte volume으로 판단하려면 어떤 증거가 필요한가?
7. 오늘 산출물인 "Week 18 C2 traffic report 1차본"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
