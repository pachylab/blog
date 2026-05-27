---
title: "Week 16 Day 07: 주간 복습과 host detection 연결"
draft: true
---

# Week 16 Day 07: 주간 복습과 host detection 연결

## 오늘의 목표

- persistence, WMI, process injection를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- DLL injection, API hashing, config extraction가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

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
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장

## 핵심 키워드

persistence, WMI, process injection, DLL injection, API hashing, config extraction, Sysmon

## 반드시 정리할 개념

- persistence: 기법을 실행 시점, 권한, API 단계, host artifact, event log로 분해한다.
- WMI: 기법을 실행 시점, 권한, API 단계, host artifact, event log로 분해한다.
- process injection: process/thread/task를 주소 공간 공유 여부와 scheduler 단위로 구분한다. context switch 때 저장/복원되는 상태를 정리한다.
- DLL injection: 기법을 실행 시점, 권한, API 단계, host artifact, event log로 분해한다.
- API hashing: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- config extraction: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- Sysmon: YARA는 file/content, Sigma는 log/event 중심이라는 차이를 정리하고 rule 목적, 조건, false positive 관리 방법을 적는다.

## 실습

- benign simulator 또는 문서 예제로 persistence/injection 흐름을 API 단계와 artifact 단계로 나누어 표기한다.
- ps, top, pstree, lsof, strace, procfs로 하나의 프로세스를 관찰하고 thread, fd, memory map, syscall 흔적을 연결한다.
- Python으로 encoding/hash/encryption 예제를 실행하고 입력, key/nonce/salt, 출력, 복호화 가능 여부를 표로 비교한다.
- 오늘 artifact를 기준으로 YARA 또는 Sigma rule 초안을 만들고 benign sample 3개에 대한 false positive 가능성을 적는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 16 host detection rule 후보
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. persistence 기법이 남기는 host artifact와 event log를 최소 2개 이상 연결할 수 있는가?
2. WMI 기법이 남기는 host artifact와 event log를 최소 2개 이상 연결할 수 있는가?
3. process injection를 관찰하기 위해 어떤 OS 도구를 썼고 출력에서 PID/TID/state/resource를 어떻게 읽었는가?
4. DLL injection 기법이 남기는 host artifact와 event log를 최소 2개 이상 연결할 수 있는가?
5. API hashing를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
6. config extraction를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
7. 오늘 산출물인 "Week 16 host detection rule 후보"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
