---
title: "Week 23 Day 06: kernel exploitation, LPE, sandbox escape intro"
draft: true
---

# Week 23 Day 06: kernel exploitation, LPE, sandbox escape intro

## 오늘의 목표

- kernel exploitation, LPE, sandbox escape intro를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- kernel memory, driver bug, IOCTL가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 바이너리 분석, The Shellcoder's Handbook - fuzz target 분석, crash triage, exploitability 판단
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 2: I/O System, Storage Management, Registry, Services, WMI 관련 장
- Microsoft Learn: Registry hives, Event Log, Prefetch, Task Scheduler, Services, ETW 개요
- 13Cubed Windows Forensics: Registry, Prefetch, ShimCache, AmCache, SRUM, LNK/JumpList 강의 범위

## 핵심 키워드

kernel exploitation, LPE, sandbox escape intro, kernel memory, driver bug, IOCTL, privilege escalation

## 반드시 정리할 개념

- kernel exploitation: kernel exploitation의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- LPE: LPE의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- sandbox escape intro: sandbox escape intro의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- kernel memory: kernel memory의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- driver bug: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- IOCTL: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- privilege escalation: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.

## 실습

- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- kernel exploit 공격면과 안전 실습 원칙
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. kernel exploitation를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. LPE를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. sandbox escape intro를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. kernel memory를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. driver bug를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
6. IOCTL를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
7. 오늘 산출물인 "kernel exploit 공격면과 안전 실습 원칙"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
