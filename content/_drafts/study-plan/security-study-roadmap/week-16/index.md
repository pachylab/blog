---
title: "Week 16: persistence, injection, config extraction"
draft: true
---

# Week 16: persistence, injection, config extraction

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 persistence/injection artifact matrix와 config extractor 초안을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: Learning Malware Analysis, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식 - persistence, registry artifact, config extraction, detection mapping

- Practical Malware Analysis: persistence, Windows API, DLL injection, process replacement 관련 장
- MITRE ATT&CK: T1547 Boot or Logon Autostart Execution, T1055 Process Injection, T1027 Obfuscated Files or Information
- Microsoft Learn: Registry Run and RunOnce keys, Task Scheduler, WMI permanent event subscription
- Sysinternals: Autoruns, Process Explorer, Procmon 사용 가이드
- OSTEP: Processes, Process API, Limited Direct Execution, Scheduling, Threads, Locks, Condition Variables
- CS:APP 3e: 8.2 Processes, 12장 Concurrent Programming 중 thread/process 개요
- Windows Internals Part 1: Processes, Threads, and Jobs; Services 개요
- Linux man pages: ps, top, kill, fork, execve, wait, pthreads, systemd.service
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor

## 핵심 키워드

persistence, Run key, Windows service, scheduled task, startup folder, Autoruns, registry, WMI, permanent event subscription, service control manager, event consumer, persistence detection, process injection, DLL injection, thread injection, CreateRemoteThread, VirtualAllocEx, WriteProcessMemory, LoadLibrary, process hollowing, APC injection, suspended process, section mapping, entry point, memory permission, API hashing, string encryption, dynamic import resolution, hash algorithm, deobfuscation, YARA weakness

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | Run key, service, scheduled task | persistence, Run key, Windows service, scheduled task, startup folder, Autoruns, registry | 지속성 기법별 artifact 표 |
| Day 02 | WMI와 startup artifact | WMI, permanent event subscription, startup folder, service control manager, event consumer, persistence detection | WMI persistence 구성 요소와 탐지 포인트 |
| Day 03 | DLL injection과 thread injection | process injection, DLL injection, thread injection, CreateRemoteThread, VirtualAllocEx, WriteProcessMemory, LoadLibrary | injection 단계와 API/event mapping |
| Day 04 | process hollowing과 APC injection | process hollowing, APC injection, suspended process, section mapping, entry point, memory permission | injection 기법 비교표 |
| Day 05 | API hashing과 string encryption | API hashing, string encryption, dynamic import resolution, hash algorithm, deobfuscation, YARA weakness | API hash/string decode 분석 절차 |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 16 주간 개념 지도와 다음 주 질문 5개 |

## Week 16 글쓰기 훈련 흐름

Week 16의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-16-review` worksheet 1개
- 대표 산출물 후보: 지속성 기법별 artifact 표, WMI persistence 구성 요소와 탐지 포인트, injection 단계와 API/event mapping
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
