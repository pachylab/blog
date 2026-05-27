---
title: "Week 24 Day 07: ETW, AMSI, Sysmon, Code Integrity"
draft: true
---

# Week 24 Day 07: ETW, AMSI, Sysmon, Code Integrity

## 오늘의 목표

- ETW, AMSI, Sysmon를 Windows telemetry source와 detection source로 구분해 설명한다.
- Code Integrity, WDAC, AppLocker, LSASS protection, Credential Guard가 system hardening과 post-exploitation 제약에 어떻게 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Windows Internals 7/e Vol.1/Vol.2, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식, 운영체제 - Stallings, 운영체제 - Silberschatz - process/thread/object manager/registry/service/protection
- YARA documentation: rule syntax, strings, conditions, modules, performance considerations
- Sigma specification: logsource, detection, condition, fields, false positives
- Sysinternals Sysmon docs: Event ID 1, 3, 7, 11, 12-14, 22 중심
- MITRE ATT&CK: detection and data sources mapping
- Microsoft Learn: Event Tracing for Windows, Antimalware Scan Interface, Windows Security auditing
- Microsoft Learn: Windows Defender Application Control, AppLocker, Code Integrity, Local Security Authority protection, Credential Guard

## 핵심 키워드

ETW, AMSI, Sysmon, event provider, consumer, telemetry, log source, Code Integrity, WDAC, AppLocker, LSASS protection, Credential Guard

## 반드시 정리할 개념

- ETW: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- AMSI: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- Sysmon: YARA는 file/content, Sigma는 log/event 중심이라는 차이를 정리하고 rule 목적, 조건, false positive 관리 방법을 적는다.
- event provider: event provider의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- Code Integrity: 실행 가능한 코드가 신뢰 정책을 통과해야 하는 이유와 driver/user-mode code loading 분석에서 볼 artifact를 정리한다.
- WDAC/AppLocker: allow/deny policy, publisher/path/hash rule, audit/enforce mode, 우회 가능성을 비교한다.
- LSASS protection/Credential Guard: credential dumping을 어렵게 만드는 경계와 이벤트/메모리 분석에서 확인할 지점을 정리한다.
- telemetry/log source: 같은 행위를 ETW, Sysmon, Security Event Log, EDR telemetry가 각각 어떤 필드와 한계로 기록하는지 비교한다.

## 실습

- Sysmon Event ID 1/3/7/11/22와 Security Event Log에서 process creation, network connection, image load, file creation, DNS query 후보를 정리한다.
- WDAC/AppLocker/Code Integrity 문서 기준으로 audit mode와 enforce mode의 차이를 표로 정리한다.
- LSASS 보호 기능이 켜졌을 때 credential dumping 시도가 어떤 telemetry나 failure pattern을 남길 수 있는지 조사한다.
- 오늘 artifact를 기준으로 Sigma rule 초안을 만들고 benign event 3개에 대한 false positive 가능성을 적는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Windows telemetry와 hardening source 비교표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. ETW provider와 consumer를 구분하지 못하면 telemetry 해석에서 어떤 오류가 생기는가?
2. AMSI는 어떤 입력을 검사하고, PowerShell/script 분석에서 어떤 한계를 갖는가?
3. Sysmon event와 Windows Security Event Log는 같은 행위를 어떤 필드 차이로 기록하는가?
4. WDAC/AppLocker의 audit mode와 enforce mode는 운영/탐지 관점에서 어떻게 다른가?
5. Code Integrity 정책은 driver loading, unsigned binary, LOLBin 사용 분석에서 어떤 의미가 있는가?
6. LSASS protection과 Credential Guard는 credential theft 기법의 성공 조건을 어떻게 바꾸는가?
7. 오늘 산출물인 "Windows telemetry와 hardening source 비교표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
