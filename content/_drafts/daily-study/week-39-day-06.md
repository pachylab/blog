---
title: "Week 39 Day 06: advisory와 portfolio article"
draft: true
---

# Week 39 Day 06: advisory와 portfolio article

## 오늘의 목표

- vendor advisory, public writeup, portfolio article의 독자와 공개 범위를 구분한다.
- evidence, diagram, code snippet, remediation, appendix를 claim support 관점에서 배치한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 버그바운티, 메타스플로잇 - reproducible report, impact, responsible disclosure, validation lab
- 선택한 논문, CVE advisory, vendor patch note: threat model, root cause, affected version, patch diff 중심으로 읽기
- MITRE CVE Program/CNA rules: CVE request, affected product/version, public reference, duplicate check
- KISA/KVE 안내 자료: 국내 취약점 신고, 보안권고문, 조치 권고, 공개 범위 확인
- Vendor security advisory 예시: remediation, workaround, timeline, credit, disclosure policy 비교

## 핵심 키워드

technical writing, advisory, public writeup, evidence, diagram, code snippet, appendix, reader context, claim support, remediation, workaround, disclosure timeline

## 반드시 정리할 개념

- technical writing: 독자가 vendor engineer, 보안팀, 공개 블로그 독자인지에 따라 필요한 detail과 redaction 수준이 달라지는 이유를 정리한다.
- advisory: affected product/version, summary, impact, remediation, workaround, credit, timeline이 들어가는 구조를 만든다.
- evidence: 원본 증거와 분석 복제본을 구분하고 acquisition 시각, hash, 도구 버전, write-block 여부를 기록한다.
- diagram: root cause, exploit path, patch effect 중 글로 설명하면 흐려지는 관계를 단순화한다.
- code snippet: weaponized exploit이 아니라 취약 조건, patch 위치, 검증 로직을 보여주는 최소 snippet만 공개한다.
- remediation: patch, configuration workaround, detection, hardening을 구분해 실제 조치 가능성을 높인다.
- reader context: prerequisite 지식, 환경, 버전, 제한 사항을 앞부분에 명시한다.
- claim support: 모든 주장에 command output, screenshot, diff hunk, source line, packet/log evidence 중 하나를 연결한다.

## 실습

- Day 05의 CVSS/CVE/KVE checklist를 바탕으로 vendor advisory 1쪽과 공개 포트폴리오 글 목차를 각각 작성한다.
- 공개 글에서 제거할 PoC detail, 내부 경로, 민감한 sample data, exploit reliability 정보를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- advisory/포트폴리오 글 초안
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. vendor advisory와 public writeup의 독자, 목적, 공개 가능한 detail은 어떻게 다른가?
2. evidence를 기록할 때 hash, 시간, 도구 버전, 분석자, 원본/복제본 구분 중 무엇이 빠지면 신뢰성이 약해지는가?
3. diagram으로 표현해야 할 root cause 또는 exploit path는 무엇인가?
4. code snippet이 취약 조건을 설명하면서도 weaponized PoC가 되지 않게 하려면 무엇을 제거해야 하는가?
5. remediation과 workaround를 구분하지 않으면 수신자가 어떤 잘못된 조치를 할 수 있는가?
6. 모든 claim에 support evidence가 붙어 있는지 확인했는가?
7. 오늘 산출물인 "advisory/포트폴리오 글 초안"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
