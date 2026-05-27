---
title: "Week 24 Day 06: driver, module, syscall table, IOCTL"
draft: true
---

# Week 24 Day 06: driver, module, syscall table, IOCTL

## 오늘의 목표

- driver, kernel module, syscall table를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- IOCTL, IRP, device object가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Windows Internals 7/e Vol.1/Vol.2, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식, 운영체제 - Stallings, 운영체제 - Silberschatz - process/thread/object manager/registry/service/protection
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 2: I/O System, Storage Management, Registry, Services, WMI 관련 장
- Microsoft Learn: Registry hives, Event Log, Prefetch, Task Scheduler, Services, ETW 개요
- 13Cubed Windows Forensics: Registry, Prefetch, ShimCache, AmCache, SRUM, LNK/JumpList 강의 범위
- CS:APP 3e: 8.1 Exceptions, 8.2 Processes, 8.4 Process Control
- OSTEP: Limited Direct Execution, System Calls, Context Switches 관련 장
- Intel SDM Vol.3A: Protection, Interrupt and Exception Handling 개요
- Linux man pages: syscall, strace, ptrace, signal

## 핵심 키워드

driver, kernel module, syscall table, IOCTL, IRP, device object, driver dispatch

## 반드시 정리할 개념

- driver: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- kernel module: kernel module의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- syscall table: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- IOCTL: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- IRP: IRP의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- device object: device object의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- driver dispatch: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.

## 실습

- ps, top, pstree, lsof, strace, procfs로 하나의 프로세스를 관찰하고 thread, fd, memory map, syscall 흔적을 연결한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- driver/IOCTL 공격면 개요
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. driver를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
2. kernel module를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. syscall table가 보안 경계 또는 crash 분석에서 중요한 이유를 user/kernel 전환 흐름으로 설명할 수 있는가?
4. IOCTL를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
5. IRP를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. device object를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "driver/IOCTL 공격면 개요"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
