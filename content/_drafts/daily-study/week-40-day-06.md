---
title: "Week 40 Day 06: 다음 12주 심화 계획"
draft: true
---

# Week 40 Day 06: 다음 12주 심화 계획

## 오늘의 목표

- next roadmap, specialization, malware analysis를 기준으로 지난 40주 산출물을 점검하고 강점, 공백, 보완 작업을 분리한다.
- pwn, DFIR, Windows internals를 실제 포트폴리오 정리, 공개/비공개 분류, 다음 12주 계획에 반영한다.
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

next roadmap, specialization, malware analysis, pwn, DFIR, Windows internals, Linux kernel

## 반드시 정리할 개념

- next roadmap: 다음 로드맵은 malware, pwn, DFIR, Windows internals, Linux kernel 중 우선순위를 정하고 주당 산출물과 검증 방법을 명확히 한다.
- specialization: 다음 로드맵은 malware, pwn, DFIR, Windows internals, Linux kernel 중 우선순위를 정하고 주당 산출물과 검증 방법을 명확히 한다.
- malware analysis: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.
- pwn: pwn의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- DFIR: DFIR의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- Windows internals: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- Linux kernel: Linux 관찰 지점을 procfs/sysfs/auditd/eBPF/systemd로 나누고 namespace/cgroup/capability/seccomp/LSM의 경계를 정리한다.

## 실습

- 40주 동안 만든 daily-study, 주차별 산출물, 보고서, 실습 로그를 도메인별로 분류하고 각 항목에 evidence, 공개 가능성, 보완 필요 여부를 표시한다.
- 대표 산출물 3개를 골라 README 또는 요약 문단을 작성한다. 문제, 접근, 사용 도구, 결과, 한계, 재현 방법을 포함한다.
- 공개 wiki 후보와 private note를 나누고 sample, exploit detail, 계정/경로/토큰, 민감 로그를 redaction 기준에 따라 제거한다.
- 다음 12주 학습 queue를 만들고 각 항목에 자료, 실습, 산출물, 검증 질문을 연결한다.
- 오늘 결정한 변경 사항과 보류 이유를 같은 문서에 남긴다.

## 오늘 남길 산출물

- 12주 후속 심화 로드맵
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. next roadmap에서 다음 12주 동안 깊게 팔 한 영역과 보류할 영역을 어떤 근거로 나눌 것인가?
2. specialization에서 다음 12주 동안 깊게 팔 한 영역과 보류할 영역을 어떤 근거로 나눌 것인가?
3. malware analysis 유형을 기능, persistence, C2, payload 관점에서 다른 유형과 구분할 수 있는가?
4. pwn를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. DFIR 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
6. Windows internals를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
7. 오늘 산출물인 "12주 후속 심화 로드맵"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
