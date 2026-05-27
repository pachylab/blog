---
title: "Week 37: integrated malware analysis project"
draft: true
---

# Week 37: integrated malware analysis project

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 malware-style 교육용 샘플 분석 보고서을 완성한다.

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

project scope, safe lab, sample handling, VM snapshot, network isolation, analysis question, evidence plan, static triage, PE, ELF, strings, imports, sections, entropy, packer suspicion, dynamic analysis, process tree, file write, registry, service, scheduled task, Sysmon, config extraction, C2 address, beaconing, DNS, HTTP, TLS, network IOC, YARA, Sigma, Zeek, Suricata, false positive, test corpus, ATT&CK mapping, report structure, evidence, inference, assumption, limitation, IOC, TTP, malware analysis, static analysis, detection rule

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | project scope와 safe lab 재확인 | project scope, safe lab, sample handling, VM snapshot, network isolation, analysis question, evidence plan | 프로젝트 분석 계획서 |
| Day 02 | static triage와 executable 구조 | static triage, PE, ELF, strings, imports, sections, entropy | static triage report |
| Day 03 | dynamic behavior와 host artifact | dynamic analysis, process tree, file write, registry, service, scheduled task, Sysmon | host behavior evidence table |
| Day 04 | config extraction과 C2 timeline | config extraction, C2 address, beaconing, DNS, HTTP, TLS, network IOC | config와 network timeline 연결표 |
| Day 05 | detection rules와 false positive test | YARA, Sigma, Zeek, Suricata, false positive, test corpus, ATT&CK mapping | detection rule bundle 초안 |
| Day 06 | report writing: fact, inference, limit | report structure, evidence, inference, assumption, limitation, IOC, TTP | 분석 보고서 1차본 |
| Day 07 | 주간 복습과 peer-review checklist | malware analysis, static analysis, dynamic analysis, config extraction, detection rule, report structure | Week 37 최종 보고서와 검토 체크리스트 |

## 주간 산출물

- malware-style 교육용 샘플 분석 보고서
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
