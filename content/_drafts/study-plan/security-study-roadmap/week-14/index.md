---
title: "Week 14: malware taxonomy와 안전한 triage"
draft: true
---

# Week 14: malware taxonomy와 안전한 triage

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 교육용 샘플 triage report와 IOC/TTP 표을 완성한다.

## 공부 자료
- 보유 서적: Learning Malware Analysis, 실전 리눅스 악성코드 분석, 시스인터널스 도구로 윈도우 문제 해결하기 - triage, sandbox, Linux/Windows malware 관찰

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
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms

## 핵심 키워드

malware taxonomy, loader, dropper, downloader, RAT, ransomware, botnet, safe lab, sample handling, VM isolation, snapshot, network isolation, hashing, evidence log, static triage, hash, strings, imports, sections, entropy, packer suspicion, dynamic triage, Procmon, Process Explorer, Autoruns, FakeDNS, INetSim, network capture, IOC, TTP, MITRE ATT&CK, data source, technique, procedure, confidence, report structure, executive summary, technical findings, evidence, assumption, limitation, appendix

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | malware taxonomy 개요 | malware taxonomy, loader, dropper, downloader, RAT, ransomware, botnet | malware 유형별 기능/흔적 비교표 |
| Day 02 | safe lab와 sample handling | safe lab, sample handling, VM isolation, snapshot, network isolation, hashing, evidence log | 악성코드 분석 전 안전 절차 체크리스트 |
| Day 03 | static triage: hash, strings, imports | static triage, hash, strings, imports, sections, entropy, packer suspicion | static triage 표 |
| Day 04 | dynamic triage: process, file, registry, network | dynamic triage, Procmon, Process Explorer, Autoruns, FakeDNS, INetSim, network capture | 동적 관찰 항목별 evidence 표 |
| Day 05 | IOC, TTP, ATT&CK-style thinking | IOC, TTP, MITRE ATT&CK, data source, technique, procedure, confidence | IOC와 TTP 분리표 |
| Day 06 | report structure와 근거 분리 | report structure, executive summary, technical findings, evidence, assumption, limitation, appendix | malware triage report 목차 초안 |
| Day 07 | 주간 복습과 안전 원칙 재점검 | malware taxonomy, safe lab, static triage, dynamic triage, IOC, TTP, report structure | Week 14 triage report 1차본 |

## 주간 산출물

- 교육용 샘플 triage report와 IOC/TTP 표
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
