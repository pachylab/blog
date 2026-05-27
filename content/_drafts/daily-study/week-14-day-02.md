---
title: "Week 14 Day 02: safe lab와 sample handling"
draft: true
---

# Week 14 Day 02: safe lab와 sample handling

## 오늘의 목표

- safe lab, sample handling, VM isolation를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- snapshot, network isolation, hashing가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

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

## 핵심 키워드

safe lab, sample handling, VM isolation, snapshot, network isolation, hashing, evidence log

## 반드시 정리할 개념

- safe lab: 분석 VM, snapshot, host-only network, sample hash, 실행 금지 원칙을 안전 절차로 정리하고 원본과 분석 복제본을 분리한다.
- sample handling: 분석 VM, snapshot, host-only network, sample hash, 실행 금지 원칙을 안전 절차로 정리하고 원본과 분석 복제본을 분리한다.
- VM isolation: 분석 VM, snapshot, host-only network, sample hash, 실행 금지 원칙을 안전 절차로 정리하고 원본과 분석 복제본을 분리한다.
- snapshot: 분석 VM, snapshot, host-only network, sample hash, 실행 금지 원칙을 안전 절차로 정리하고 원본과 분석 복제본을 분리한다.
- network isolation: network isolation의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- hashing: reversible 여부, key 필요 여부, integrity 제공 여부, nonce/salt/randomness 요구사항을 비교한다.
- evidence log: 원본 증거와 분석 복제본을 구분하고 acquisition 시각, hash, 도구 버전, write-block 여부를 기록한다.

## 실습

- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- Python으로 encoding/hash/encryption 예제를 실행하고 입력, key/nonce/salt, 출력, 복호화 가능 여부를 표로 비교한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 악성코드 분석 전 안전 절차 체크리스트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. safe lab를 지키지 않으면 host 오염, 증거 훼손, 네트워크 유출 중 어떤 위험이 생기는가?
2. sample handling를 지키지 않으면 host 오염, 증거 훼손, 네트워크 유출 중 어떤 위험이 생기는가?
3. VM isolation를 지키지 않으면 host 오염, 증거 훼손, 네트워크 유출 중 어떤 위험이 생기는가?
4. snapshot를 지키지 않으면 host 오염, 증거 훼손, 네트워크 유출 중 어떤 위험이 생기는가?
5. network isolation 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
6. hashing는 reversible 여부, key 필요 여부, integrity 제공 여부 중 어떤 속성을 가지는가?
7. 오늘 산출물인 "악성코드 분석 전 안전 절차 체크리스트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
