---
title: "Week 37 Day 04: config extraction과 C2 timeline"
draft: true
---

# Week 37 Day 04: config extraction과 C2 timeline

## 오늘의 목표

- config extraction, C2 address, beaconing를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- DNS, HTTP, TLS가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Learning Malware Analysis, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석, 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 메모리 포렌식 - malware report, memory/process evidence, detection rule, incident narrative
- Practical Malware Analysis: persistence, Windows API, DLL injection, process replacement 관련 장
- MITRE ATT&CK: T1547 Boot or Logon Autostart Execution, T1055 Process Injection, T1027 Obfuscated Files or Information
- Microsoft Learn: Registry Run and RunOnce keys, Task Scheduler, WMI permanent event subscription
- Sysinternals: Autoruns, Process Explorer, Procmon 사용 가이드
- RFC 1034/1035 DNS, RFC 9110 HTTP Semantics, RFC 8446 TLS 1.3
- Wireshark User's Guide: dns, http, tls, tcp.stream display filter
- Zeek docs: conn.log, dns.log, http.log, ssl.log 필드 의미
- Suricata docs: rule syntax, eve.json, alert metadata
- Malware Traffic Analysis 교육용 PCAP: DNS/HTTP/TLS 추적 실습

## 핵심 키워드

config extraction, C2 address, beaconing, DNS, HTTP, TLS, network IOC

## 반드시 정리할 개념

- config extraction: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- C2 address: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- beaconing: network IOC를 domain/IP뿐 아니라 timing, TLS fingerprint, URI pattern, byte volume으로 확장한다.
- DNS: 계층별 단위(frame/packet/segment/stream)를 구분하고 PCAP에서 필터, stream, metadata를 어떻게 읽을지 정리한다.
- HTTP: 계층별 단위(frame/packet/segment/stream)를 구분하고 PCAP에서 필터, stream, metadata를 어떻게 읽을지 정리한다.
- TLS: 계층별 단위(frame/packet/segment/stream)를 구분하고 PCAP에서 필터, stream, metadata를 어떻게 읽을지 정리한다.
- network IOC: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.

## 실습

- benign simulator 또는 문서 예제로 persistence/injection 흐름을 API 단계와 artifact 단계로 나누어 표기한다.
- curl, dig, ping, nc를 실행하며 tcpdump 또는 Wireshark로 PCAP을 캡처하고 DNS, TCP handshake, HTTP/TLS metadata를 확인한다.
- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- config와 network timeline 연결표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. config extraction를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
2. C2 address를 단일 IOC가 아니라 시간 패턴, TLS metadata, byte volume으로 판단하려면 어떤 증거가 필요한가?
3. beaconing를 단일 IOC가 아니라 시간 패턴, TLS metadata, byte volume으로 판단하려면 어떤 증거가 필요한가?
4. DNS를 PCAP에서 필터링하려면 어떤 필드를 보고 정상/비정상 판단 근거는 무엇인가?
5. HTTP를 PCAP에서 필터링하려면 어떤 필드를 보고 정상/비정상 판단 근거는 무엇인가?
6. TLS를 PCAP에서 필터링하려면 어떤 필드를 보고 정상/비정상 판단 근거는 무엇인가?
7. 오늘 산출물인 "config와 network timeline 연결표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
