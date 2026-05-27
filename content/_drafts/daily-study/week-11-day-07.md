---
title: "Week 11 Day 07: firmware/IoT 맛보기: binwalk, ARM/MIPS, QEMU"
draft: true
---

# Week 11 Day 07: firmware/IoT 맛보기: binwalk, ARM/MIPS, QEMU

## 오늘의 목표

- firmware image와 일반 executable의 차이를 loader, filesystem, architecture 관점에서 설명한다.
- binwalk, root filesystem, BusyBox, init script, ARM/MIPS, QEMU가 IoT 취약점 분석에서 어떤 순서로 쓰이는지 정리한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 바이너리 분석, 리버싱 핵심 원리, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - ELF/PE, disassembly, symbol, linking
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table
- System V ABI: ELF header, sections, program headers, dynamic linking 개요
- Apple Mach-O Runtime Reference: Mach-O file structure, load commands 개요
- Practical Binary Analysis: ELF structure, symbol tables, disassembly workflow 관련 장
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- binwalk documentation/GitHub: firmware extraction, signature scan, filesystem extraction 옵션
- QEMU documentation: user-mode/system emulation, ARM/MIPS target 실행 개요
- FirmAE/Firmadyne 자료: IoT firmware root filesystem, init script, network service emulation 흐름

## 핵심 키워드

firmware, IoT firmware, binwalk, SquashFS, CramFS, BusyBox, init script, ARM, MIPS, QEMU, emulation, root filesystem, service entrypoint

## 반드시 정리할 개념

- firmware: 단일 실행 파일이 아니라 kernel, root filesystem, 설정 파일, init script, web service가 함께 들어있는 분석 대상이라는 점을 정리한다.
- binwalk: signature scan, entropy, filesystem extraction 결과를 신뢰할 때의 한계와 false positive 가능성을 적는다.
- root filesystem: `/etc`, `/bin`, `/sbin`, web root, startup script에서 공격면을 찾는 절차를 적는다.
- BusyBox: embedded Linux에서 여러 명령이 하나의 binary로 제공되는 구조와 분석 시 명령어 이름 추정 방법을 정리한다.
- ARM/MIPS: endian, word size, calling convention, branch delay slot 여부처럼 reversing에 영향을 주는 차이를 표로 만든다.
- QEMU: user-mode와 system emulation의 차이, 네트워크 서비스 재현 시 필요한 라이브러리/환경 변수/포트 조건을 정리한다.
- service entrypoint: init script와 web/cgi binary를 연결해 취약점 분석 대상을 고르는 기준을 적는다.

## 실습

- 공개 교육용 firmware image 또는 샘플 root filesystem을 binwalk로 확인하고, filesystem type, architecture, init script, network service 후보를 표로 정리한다.
- 추출한 ELF binary 하나를 `file`, `readelf`, `strings`, `qemu-*-static` 관점에서 분석하되 실행은 격리된 환경에서만 계획한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- firmware 구조와 emulation 체크리스트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. firmware image에서 실행 파일, 설정 파일, startup script를 구분하는 기준은 무엇인가?
2. binwalk 추출 결과를 그대로 믿지 않기 위해 어떤 교차 검증을 해야 하는가?
3. ARM/MIPS architecture 차이가 함수 호출, argument 전달, branch 해석에 어떤 영향을 주는가?
4. QEMU user-mode emulation과 system emulation 중 오늘 분석 대상에 더 맞는 방식은 무엇인가?
5. root filesystem에서 web service 또는 CGI 취약점 후보를 찾는 순서는 무엇인가?
6. firmware 분석에서 실제 장비 없이 재현할 수 없는 조건은 무엇이며 보고서에 어떻게 적을 것인가?
7. 오늘 산출물인 "firmware 구조와 emulation 체크리스트"가 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
