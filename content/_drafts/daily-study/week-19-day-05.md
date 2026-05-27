---
title: "Week 19 Day 05: shellcode와 NX 관계 맛보기"
draft: true
---

# Week 19 Day 05: shellcode와 NX 관계 맛보기

## 오늘의 목표

- shellcode intro, NX, executable stack를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- syscall, bad character, payload encoding가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, The Shellcoder's Handbook, 메타스플로잇 - stack overflow, shellcode, exploit validation
- OSTEP: Address Spaces, Memory API, Paging Introduction, Page Tables, TLBs, Swapping
- CS:APP 3e: 9.1 Physical and Virtual Addressing, 9.4 VM as a Tool for Memory Management, 9.7 Memory Mapping
- Linux man pages: mmap, mprotect, proc_pid_maps, pmap, readelf, checksec
- Windows Internals Part 1: Memory Management 개요와 virtual address space 파트
- CS:APP 3e: 7장 Linking, executable object files, shared libraries, relocation
- Microsoft Learn: PE format, import table, export table, base relocation table
- System V ABI: ELF header, sections, program headers, dynamic linking 개요
- Apple Mach-O Runtime Reference: Mach-O file structure, load commands 개요
- Practical Binary Analysis: ELF structure, symbol tables, disassembly workflow 관련 장

## 핵심 키워드

shellcode intro, NX, executable stack, syscall, bad character, payload encoding

## 반드시 정리할 개념

- shellcode intro: shellcode intro의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- NX: 각 mitigation이 막는 공격 primitive와 우회에 필요한 leak/write/control primitive를 연결한다.
- executable stack: virtual address가 page table을 거쳐 physical memory로 변환되는 흐름과 stack/heap/mmap/shared memory의 생성 주체, 권한, lifetime을 비교한다.
- syscall: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- bad character: bad character의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- payload encoding: reversible 여부, key 필요 여부, integrity 제공 여부, nonce/salt/randomness 요구사항을 비교한다.

## 실습

- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- ps, top, pstree, lsof, strace, procfs로 하나의 프로세스를 관찰하고 thread, fd, memory map, syscall 흔적을 연결한다.
- Python으로 encoding/hash/encryption 예제를 실행하고 입력, key/nonce/salt, 출력, 복호화 가능 여부를 표로 비교한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- NX on/off 전략 비교 노트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. shellcode intro를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. NX는 어떤 공격 단계를 막고 우회에는 어떤 leak 또는 write primitive가 필요한가?
3. executable stack가 proc maps 또는 디버거 memory view에서 어떻게 드러나는가?
4. syscall가 보안 경계 또는 crash 분석에서 중요한 이유를 user/kernel 전환 흐름으로 설명할 수 있는가?
5. bad character를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. payload encoding는 reversible 여부, key 필요 여부, integrity 제공 여부 중 어떤 속성을 가지는가?
7. 오늘 산출물인 "NX on/off 전략 비교 노트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
