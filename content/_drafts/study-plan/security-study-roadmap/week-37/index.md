---
title: "Week 37: integrated malware analysis project"
draft: true
---

# Week 37: integrated malware analysis project

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 malware-style 교육용 샘플 분석 보고서을 완성한다.
- 주간 연구 루프: advisory/CVE/paper/vendor patch note 중 1개를 30분 읽고 root cause, affected version, patch, primitive, detection idea를 5줄로 남긴다.

## 공부 자료
- 보유 서적: Learning Malware Analysis, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석, 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 메모리 포렌식 - malware report, memory/process evidence, detection rule, incident narrative

- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 5장 IDA Pro
- Ghidra Student Guide: CodeBrowser, Listing, Decompiler, Symbol Tree, References, Function Graph
- OpenSecurityTraining2 Intro x86/x64: disassembly 읽기와 control flow 추적 파트
- Malware Unicorn reversing workshops: strings, xrefs, functions, API flow 실습
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation

## 핵심 키워드

project scope, safe lab, sample handling, VM snapshot, network isolation, analysis question, evidence plan, static triage, PE, ELF, strings, imports, sections, entropy, dynamic analysis, process tree, file write, registry, service, scheduled task, Sysmon, config extraction, C2 address, beaconing, DNS, HTTP, TLS, network IOC, YARA, Sigma, Zeek, Suricata, false positive, test corpus, ATT&CK mapping

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | project scope와 safe lab 재확인 | project scope, safe lab, sample handling, VM snapshot, network isolation, analysis question, evidence plan | 프로젝트 분석 계획서 |
| Day 02 | static triage와 executable 구조 | static triage, PE, ELF, strings, imports, sections, entropy | static triage report |
| Day 03 | dynamic behavior와 host artifact | dynamic analysis, process tree, file write, registry, service, scheduled task, Sysmon | host behavior evidence table |
| Day 04 | config extraction과 C2 timeline | config extraction, C2 address, beaconing, DNS, HTTP, TLS, network IOC | config와 network timeline 연결표 |
| Day 05 | detection rules와 false positive test | YARA, Sigma, Zeek, Suricata, false positive, test corpus, ATT&CK mapping | detection rule bundle 초안 |
| Review | 주간 복습과 malware 분석 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 37 주간 개념 지도와 다음 주 질문 5개 |

## Week 37 글쓰기 훈련 흐름

Week 37의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-37-review` worksheet 1개
- 대표 산출물 후보: 프로젝트 분석 계획서, static triage report, host behavior evidence table
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
