---
title: "Week 11: executable format, loader, firmware intro"
draft: true
---

# Week 11: executable format, loader, firmware intro

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 PE/ELF/Mach-O 구조 비교와 firmware 구조 분석 체크리스트를 완성한다.

## 공부 자료
- 보유 서적: 실전 바이너리 분석, 리버싱 핵심 원리, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - ELF/PE, disassembly, symbol, linking

- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요
- Python docs: struct, subprocess, pathlib; pwntools docs: tubes, ELF helper
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table
- System V ABI: ELF header, sections, program headers, dynamic linking 개요
- Apple Mach-O Runtime Reference: Mach-O file structure, load commands 개요
- Practical Binary Analysis: ELF structure, symbol tables, disassembly workflow 관련 장
- CS:APP 3e: 3.2 Program Encodings, 3.4 Accessing Information, 3.5 Arithmetic and Logical Operations
- OpenSecurityTraining2 Architecture 1001: x86-64 registers, instruction format, addressing mode, stack 파트
- Intel SDM Vol.1: Basic Execution Environment, Registers, Instruction Format
- ARM Learn the Architecture: AArch64 registers, instruction set basics, load/store addressing
- binwalk documentation/GitHub: firmware extraction, signature scan, filesystem extraction 옵션
- QEMU documentation: user-mode/system emulation, ARM/MIPS target 실행 개요
- FirmAE/Firmadyne 자료: IoT firmware root filesystem, init script, network service emulation 흐름

## 핵심 키워드

program loader, executable format, loader, memory mapping, entry point, section, segment, ELF, ELF header, section header, program header, GOT, PLT, dynamic symbol, PE, DOS header, NT header, section table, IAT, EAT, base relocation, Mach-O, load command, dyld, symbol, code signature, dynamic linking, static linking, relocation, import/export, lazy binding, shared library, readelf, objdump, otool, dumpbin, imports, exports, symbols, firmware, IoT firmware, binwalk, SquashFS, CramFS, BusyBox, init script, ARM, MIPS, QEMU, emulation, root filesystem

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | program loader와 executable format | program loader, executable format, loader, memory mapping, entry point, section, segment | loader가 실행 전 수행하는 작업 목록 |
| Day 02 | ELF 구조와 GOT/PLT | ELF, ELF header, section header, program header, GOT, PLT, dynamic symbol | ELF header/section/program header 해석표 |
| Day 03 | PE 구조와 IAT/EAT | PE, DOS header, NT header, section table, IAT, EAT, base relocation | PE 구조와 import/export 분석 노트 |
| Day 04 | Mach-O와 load command | Mach-O, load command, segment, section, dyld, symbol, code signature | Mach-O load command 해석표 |
| Day 05 | dynamic linking, static linking, relocation | dynamic linking, static linking, relocation, import/export, symbol, lazy binding, shared library | linking 방식별 artifact와 보안 영향 표 |
| Day 06 | readelf/otool/dumpbin 실습 | readelf, objdump, otool, dumpbin, imports, exports, relocation | 도구별 executable metadata 출력 비교 |
| Day 07 | firmware/IoT 맛보기: binwalk, ARM/MIPS, QEMU | firmware, IoT firmware, binwalk, SquashFS, BusyBox, ARM, MIPS, QEMU, root filesystem | firmware 구조와 emulation 체크리스트 |

## 주간 산출물

- PE/ELF/Mach-O 구조 비교와 firmware 구조 분석 체크리스트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
