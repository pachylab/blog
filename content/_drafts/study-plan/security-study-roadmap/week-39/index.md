---
title: "Week 39: CVE/N-day reproduction and advisory-grade reporting"
draft: true
---

# Week 39: CVE/N-day reproduction and advisory-grade reporting

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 논문/CVE 재현 노트와 advisory-grade report 초안을 완성한다. 실제 CVE 등록은 완료 조건으로 삼지 않는다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: 실전 버그바운티, 메타스플로잇 - reproducible report, impact, responsible disclosure, validation lab

- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- 선택한 논문, CVE advisory, vendor patch note: threat model, root cause, affected version, patch diff 중심으로 읽기
- NVD/CWE/CAPEC: 취약점 분류, 약점 패턴, 영향 범위 확인
- FIRST CVSS v4.0 specification/calculator: attack vector, complexity, privileges, user interaction, impact 산정
- MITRE CVE Program/CNA rules: CVE request, affected product/version, public reference, duplicate check
- KISA/KVE 안내 자료: 국내 취약점 신고, 보안권고문, 조치 권고, 공개 범위 확인
- Vendor security advisory 예시: remediation, workaround, timeline, credit, disclosure policy 비교
- 재현 대상 프로젝트 README/build docs: version pinning, dependency, test input 확인
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- AFL++ docs: instrumentation, corpus, crashes, afl-tmin/afl-cmin workflow

## 핵심 키워드

research paper, CVE advisory, N-day, vulnerability class, CWE, CPE, affected version, reproduction plan, lab environment, version pinning, dependency, Docker, VM snapshot, dataset, reproducibility, proof of concept, minimal reproduction, control variable, expected result, observed result, failure analysis, variant analysis, root cause pattern, detection mapping, YARA, Sigma, network IOC, host artifact, CVSS v4.0, responsible disclosure, CNA, MITRE CVE, KISA KVE, vendor reporting, advisory timeline, redaction

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | CVE/N-day reading protocol | research paper, CVE advisory, N-day, vulnerability class, CWE, CPE, affected version, reproduction plan | 논문/CVE/N-day 읽기 템플릿 작성본 |
| Day 02 | environment reconstruction | lab environment, version pinning, dependency, Docker, VM snapshot, dataset, reproducibility | 재현 환경 구성 로그 |
| Day 03 | core idea reproduction | proof of concept, minimal reproduction, control variable, expected result, observed result, failure analysis | 핵심 아이디어 최소 재현 결과 |
| Day 04 | variant analysis와 detection mapping | variant analysis, root cause pattern, detection mapping, YARA, Sigma, network IOC, host artifact | variant/detection 후보 표 |
| Day 05 | CVSS v4.0, responsible disclosure, CVE/KVE reporting | CVSS v4.0, responsible disclosure, CNA, MITRE CVE, KISA KVE, vendor reporting, advisory timeline, redaction | CVSS v4.0 산정표와 CVE/KVE report checklist |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 39 주간 개념 지도와 다음 주 질문 5개 |

## Week 39 글쓰기 훈련 흐름

Week 39의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-39-review` worksheet 1개
- 대표 산출물 후보: 논문/CVE/N-day 읽기 템플릿 작성본, 재현 환경 구성 로그, 핵심 아이디어 최소 재현 결과
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
