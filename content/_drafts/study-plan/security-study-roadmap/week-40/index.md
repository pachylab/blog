---
title: "Week 40: portfolio, capstone, next roadmap"
draft: true
---

# Week 40: portfolio, capstone, next roadmap

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 최종 포트폴리오, 12주 후속 로드맵, 공개 advisory / private evidence 분리표를 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 실전 버그바운티, 셸 스크립트 프로그래밍 입문 - portfolio report, IR report polish, automation script, disclosure package

- 40주 동안 작성한 daily-study 문서 전체: 도메인별 강점, 공백, 반복되는 실수 표시
- content/_drafts/study-plan/security-study-roadmap/index.md: 도메인 커버리지와 주차별 산출물 재검토
- content/_drafts/templates/analysis-report.md: 대표 분석 보고서 polished version 작성 기준
- content/_drafts/templates/tool-note.md: 공개 가능한 도구 노트와 사용법 정리 기준
- Git history 또는 변경 파일 목록: 실제로 만든 산출물, 수정 이력, 남은 TODO 확인
- NIST NICE 또는 MITRE ATT&CK 매핑: 직무별 역량과 산출물 연결 기준으로만 사용

## 핵심 키워드

coverage audit, computer architecture, operating system, network, compiler, cryptography, reversing, portfolio, artifact selection, report, writeup, tool note, code quality, reproducibility, final report, executive summary, technical appendix, evidence table, limitation, recommendation, timeline, automation, Python scripting, parser automation, workflow checklist, script documentation, test data, usage guide, public advisory, private evidence, redaction, sensitive data, exploit detail, responsible disclosure, IOC sharing

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | 40주 개념 coverage audit | coverage audit, computer architecture, operating system, network, compiler, cryptography, reversing | 도메인별 강점/공백 audit 표 |
| Day 02 | best artifacts 선정과 정리 | portfolio, artifact selection, report, writeup, tool note, code quality, reproducibility | 공개 후보 산출물 10개 목록 |
| Day 03 | analysis report polish | final report, executive summary, technical appendix, evidence table, limitation, recommendation, timeline | 대표 분석 보고서 polished version |
| Day 04 | tooling automation 정리 | automation, Python scripting, parser automation, workflow checklist, script documentation, test data, usage guide | 분석 자동화 스크립트 README |
| Day 05 | advisory 공개 경계와 evidence redaction | public advisory, private evidence, redaction, sensitive data, exploit detail, responsible disclosure, IOC sharing | 공개 advisory / private evidence 분리표 |
| Review | 최종 회고와 유지 루틴 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 40 주간 개념 지도와 다음 주 질문 5개 |

## Week 40 글쓰기 훈련 흐름

Week 40의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-40-review` worksheet 1개
- 대표 산출물 후보: 도메인별 강점/공백 audit 표, 공개 후보 산출물 10개 목록, 대표 분석 보고서 polished version, 공개 advisory / private evidence 분리표
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
