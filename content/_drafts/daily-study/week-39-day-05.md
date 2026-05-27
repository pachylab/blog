---
title: "Week 39 Day 05: CVSS, responsible disclosure, CVE/KVE reporting"
draft: true
---

# Week 39 Day 05: CVSS, responsible disclosure, CVE/KVE reporting

## 오늘의 목표

- CVSS 산정, responsible disclosure, CVE/KVE reporting의 입력 자료와 판단 기준을 정리한다.
- dual-use risk, redaction, vendor reporting timeline이 공개 보고서와 비공개 증거 보관에 어떻게 연결되는지 적는다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 버그바운티, 메타스플로잇 - reproducible report, impact, responsible disclosure, validation lab
- 선택한 논문, CVE advisory, vendor patch note: threat model, root cause, affected version, patch diff 중심으로 읽기
- NVD/CWE/CAPEC: 취약점 분류, 약점 패턴, 영향 범위 확인
- 재현 대상 프로젝트 README/build docs: version pinning, dependency, test input 확인
- FIRST CVSS v4.0 specification/calculator: attack vector, complexity, privileges, user interaction, impact 산정
- MITRE CVE Program/CNA rules: CVE request, affected product/version, public reference, duplicate check
- KISA/KVE 안내 자료: 국내 취약점 신고, 보안권고문, 조치 권고, 공개 범위 확인
- Vendor security advisory 예시: remediation, workaround, timeline, credit, disclosure policy 비교

## 핵심 키워드

CVSS, attack vector, attack complexity, privileges required, user interaction, impact, responsible disclosure, CNA, MITRE CVE, KISA KVE, vendor reporting, advisory timeline, dual-use risk, safe sharing, redaction, scope control

## 반드시 정리할 개념

- CVSS: base metrics를 임의로 고르지 않고 attack vector, complexity, privileges, user interaction, impact 근거를 evidence와 연결한다.
- responsible disclosure: 최초 제보, 접수 확인, 검증, 패치, 공개까지의 timeline과 허가 범위를 분리한다.
- CNA/MITRE CVE: CVE 요청에 필요한 affected product/version, vulnerability type, impact, public reference, duplicate check 항목을 정리한다.
- KISA KVE: 국내 신고/보안권고 흐름에서 필요한 연락, 증거, 조치 권고, 공개 범위를 정리한다.
- vendor reporting: 재현 단계, 환경, PoC, impact, remediation suggestion, reporter contact를 포함한 report skeleton을 만든다.
- redaction: exploit detail, weaponized PoC, 내부 경로, 개인 계정 정보처럼 공개 위험이 있는 항목은 공개/비공개 기준을 만든다.
- scope control: 허가된 범위, 테스트 대상, 금지 행위, 데이터 처리 원칙을 보고서 앞부분에 명시한다.

## 실습

- 앞서 고른 CVE 또는 toy 취약점을 대상으로 CVSS 초안을 산정하고, CVE/KVE report checklist를 채워 본다.
- 공개 가능한 advisory 요약과 비공개 vendor report에 들어갈 정보를 분리한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- CVSS 산정표와 CVE/KVE report checklist
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. CVSS base metric마다 어떤 evidence를 근거로 점수를 골랐는가?
2. CVE 요청과 KVE 신고에 공통으로 필요한 정보와 다른 정보는 무엇인가?
3. vendor report에 PoC를 포함할 때 weaponization을 줄이기 위한 redaction 기준은 무엇인가?
4. responsible disclosure timeline에서 공개 전에 반드시 확인해야 할 vendor 응답과 패치 상태는 무엇인가?
5. scope control을 어긴 실험이 보고서 신뢰도와 법적 위험에 어떤 영향을 주는가?
6. 공개 advisory와 비공개 vendor report의 기술 상세 수준은 어떻게 달라야 하는가?
7. 오늘 산출물인 "CVSS 산정표와 CVE/KVE report checklist"가 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
