---
title: "Week 07 Day 01: compiler, assembler, linker, loader"
draft: true
---

# Week 07 Day 01: compiler, assembler, linker, loader

## 오늘의 목표

- compiler, assembler, linker를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- loader, preprocessor, object file가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Structure and Interpretation of Computer Programs, 셸 스크립트 프로그래밍 입문, 컴퓨터시스템 딥다이브 - abstraction, interpreter, runtime, automation
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling

## 핵심 키워드

compiler, assembler, linker, loader, preprocessor, object file, runtime library

## 반드시 정리할 개념

- compiler: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- assembler: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- linker: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- loader: source에서 executable까지 생성되는 artifact와 symbol/relocation/debug information이 reversing에 주는 단서를 정리한다.
- preprocessor: preprocessor의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- object file: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- runtime library: runtime library의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 하나의 소스를 .i, .s, .o, executable 단계로 나누고 nm/readelf/objdump로 symbol과 relocation을 확인한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- source-to-execution 파이프라인 그림
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. compiler 영역에서 내가 설명할 수 있는 개념, 직접 해본 실습, 남길 수 있는 산출물을 각각 하나씩 말할 수 있는가?
2. assembler를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. linker 단계에서 생성되거나 소비되는 artifact는 무엇이고 reversing에서는 어디서 확인하는가?
4. loader 유형을 기능, persistence, C2, payload 관점에서 다른 유형과 구분할 수 있는가?
5. preprocessor를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. object file artifact가 증명할 수 있는 행위와 증명할 수 없는 행위는 무엇인가?
7. 오늘 산출물인 "source-to-execution 파이프라인 그림"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
