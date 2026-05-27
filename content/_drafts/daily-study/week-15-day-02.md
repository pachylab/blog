---
title: "Week 15 Day 02: Sigma와 log detection"
draft: true
---

# Week 15 Day 02: Sigma와 log detection

## 오늘의 목표

- Sigma, logsource, detection rule를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- condition, fields, false positive가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석, 시스인터널스 도구로 윈도우 문제 해결하기 - YARA, Sigma, Linux/Windows detection, false positive 관리
- YARA documentation: rule syntax, strings, conditions, modules, performance considerations
- Sigma specification: logsource, detection, condition, fields, false positives
- Sysinternals Sysmon docs: Event ID 1, 3, 7, 11, 12-14, 22 중심
- MITRE ATT&CK: detection and data sources mapping

## 핵심 키워드

Sigma, logsource, detection rule, condition, fields, false positive, backend conversion

## 반드시 정리할 개념

- Sigma: YARA는 file/content, Sigma는 log/event 중심이라는 차이를 정리하고 rule 목적, 조건, false positive 관리 방법을 적는다.
- logsource: logsource의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- detection rule: YARA는 file/content, Sigma는 log/event 중심이라는 차이를 정리하고 rule 목적, 조건, false positive 관리 방법을 적는다.
- condition: condition의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- fields: fields의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- false positive: YARA는 file/content, Sigma는 log/event 중심이라는 차이를 정리하고 rule 목적, 조건, false positive 관리 방법을 적는다.
- backend conversion: backend conversion의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 오늘 artifact를 기준으로 YARA 또는 Sigma rule 초안을 만들고 benign sample 3개에 대한 false positive 가능성을 적는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Sigma rule 1개와 logsource 설명
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. Sigma를 보고서나 rule로 쓸 때 false positive를 줄이기 위한 조건은 무엇인가?
2. logsource를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. detection rule를 보고서나 rule로 쓸 때 false positive를 줄이기 위한 조건은 무엇인가?
4. condition를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. fields를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. false positive를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "Sigma rule 1개와 logsource 설명"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
