---
title: "Week 40 Day 01: 40주 개념 coverage audit"
draft: true
---

# Week 40 Day 01: 40주 개념 coverage audit

## 오늘의 목표

- coverage audit, computer architecture, operating system를 기준으로 지난 40주 산출물을 점검하고 강점, 공백, 보완 작업을 분리한다.
- network, compiler, cryptography를 실제 포트폴리오 정리, 공개/비공개 분류, 다음 12주 계획에 반영한다.
- 공개 가능한 주장과 비공개로 남겨야 하는 근거를 구분하고 redaction 필요 항목을 표시한다.
- 마지막에 유지 루틴과 다음 검증 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 실전 버그바운티, 셸 스크립트 프로그래밍 입문 - portfolio report, IR report polish, automation script, disclosure package
- 40주 동안 작성한 daily-study 문서 전체: 도메인별 강점, 공백, 반복되는 실수 표시
- content/_drafts/study-plan/security-study-roadmap/index.md: 도메인 커버리지와 주차별 산출물 재검토
- content/_drafts/templates/analysis-report.md: 대표 분석 보고서 polished version 작성 기준
- content/_drafts/templates/tool-note.md: 공개 가능한 도구 노트와 사용법 정리 기준
- Git history 또는 변경 파일 목록: 실제로 만든 산출물, 수정 이력, 남은 TODO 확인
- NIST NICE 또는 MITRE ATT&CK 매핑: 직무별 역량과 산출물 연결 기준으로만 사용

## 핵심 키워드

coverage audit, computer architecture, operating system, network, compiler, cryptography, reversing, DFIR

## 반드시 정리할 개념

- coverage audit: coverage audit의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- computer architecture: computer architecture의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- operating system: operating system의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- network: network의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- compiler: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- cryptography: cryptography의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- reversing: reversing의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- DFIR: DFIR의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 40주 동안 만든 daily-study, 주차별 산출물, 보고서, 실습 로그를 도메인별로 분류하고 각 항목에 evidence, 공개 가능성, 보완 필요 여부를 표시한다.
- 대표 산출물 3개를 골라 README 또는 요약 문단을 작성한다. 문제, 접근, 사용 도구, 결과, 한계, 재현 방법을 포함한다.
- 공개 wiki 후보와 private note를 나누고 sample, exploit detail, 계정/경로/토큰, 민감 로그를 redaction 기준에 따라 제거한다.
- 다음 12주 학습 queue를 만들고 각 항목에 자료, 실습, 산출물, 검증 질문을 연결한다.
- 오늘 결정한 변경 사항과 보류 이유를 같은 문서에 남긴다.

## 오늘 남길 산출물

- 도메인별 강점/공백 audit 표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. coverage audit 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
2. computer architecture 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
3. operating system 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
4. network 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
5. compiler 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
6. cryptography 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
7. 오늘 산출물인 "도메인별 강점/공백 audit 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
