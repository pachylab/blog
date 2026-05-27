---
title: "Week 39 Day 02: environment reconstruction"
draft: true
---

# Week 39 Day 02: environment reconstruction

## 오늘의 목표

- lab environment, version pinning, dependency를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- Docker, VM snapshot, dataset가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 버그바운티, 메타스플로잇 - reproducible report, impact, responsible disclosure, validation lab
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- 선택한 논문, CVE advisory, vendor patch note: threat model, root cause, affected version, patch diff 중심으로 읽기
- NVD/CWE/CAPEC: 취약점 분류, 약점 패턴, 영향 범위 확인
- 재현 대상 프로젝트 README/build docs: version pinning, dependency, test input 확인

## 핵심 키워드

lab environment, version pinning, dependency, Docker, VM snapshot, dataset, reproducibility

## 반드시 정리할 개념

- lab environment: lab environment의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- version pinning: version pinning의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- dependency: dependency의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- Docker: Docker의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- VM snapshot: 분석 VM, snapshot, host-only network, sample hash, 실행 금지 원칙을 안전 절차로 정리하고 원본과 분석 복제본을 분리한다.
- dataset: dataset의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- reproducibility: reproducibility의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 재현 환경 구성 로그
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. lab environment를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. version pinning를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. dependency를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. Docker를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. VM snapshot를 지키지 않으면 host 오염, 증거 훼손, 네트워크 유출 중 어떤 위험이 생기는가?
6. dataset를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "재현 환경 구성 로그"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
