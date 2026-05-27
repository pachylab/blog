---
title: "Week 39: CVE/N-day reproduction and reporting workflow"
draft: true
---

# Week 39: CVE/N-day reproduction and reporting workflow

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 논문/CVE 재현 노트와 CVSS/CVE/KVE reporting 초안을 완성한다.

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

research paper, CVE advisory, N-day, vulnerability class, CWE, CPE, affected version, threat model, assumption, evaluation metric, reproduction plan, lab environment, version pinning, dependency, Docker, VM snapshot, dataset, reproducibility, proof of concept, minimal reproduction, control variable, expected result, observed result, failure analysis, variant analysis, root cause pattern, detection mapping, YARA, Sigma, network IOC, host artifact, limitation, ethics, responsible disclosure, CVSS, attack vector, impact, CNA, MITRE CVE, KISA KVE, vendor reporting, advisory timeline, dual-use risk, safe sharing, redaction, scope control, technical writing, evidence, diagram, code snippet, appendix, reader context, claim support, CVE

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | CVE/N-day reading protocol | research paper, CVE advisory, N-day, vulnerability class, CWE, CPE, affected version, reproduction plan | 논문/CVE/N-day 읽기 템플릿 작성본 |
| Day 02 | environment reconstruction | lab environment, version pinning, dependency, Docker, VM snapshot, dataset, reproducibility | 재현 환경 구성 로그 |
| Day 03 | core idea reproduction | proof of concept, minimal reproduction, control variable, expected result, observed result, failure analysis | 핵심 아이디어 최소 재현 결과 |
| Day 04 | variant analysis와 detection mapping | variant analysis, root cause pattern, detection mapping, YARA, Sigma, network IOC, host artifact | variant/detection 후보 표 |
| Day 05 | CVSS, responsible disclosure, CVE/KVE reporting | CVSS, responsible disclosure, CNA, MITRE CVE, KISA KVE, vendor reporting, advisory timeline, redaction | CVSS 산정표와 CVE/KVE report checklist |
| Day 06 | advisory와 portfolio article | technical writing, evidence, diagram, code snippet, appendix, reader context, claim support, remediation | advisory/포트폴리오 글 초안 |
| Day 07 | 주간 복습과 연구 축적 | research paper, CVE, reproducibility, variant analysis, detection mapping, ethics, technical writing | Week 39 research reproduction report |

## 주간 산출물

- 논문/CVE 재현 노트와 CVSS/CVE/KVE reporting 초안
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
