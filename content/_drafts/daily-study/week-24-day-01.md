---
title: "Week 24 Day 01: object manager와 handle"
draft: true
---

# Week 24 Day 01: object manager와 handle

## 오늘의 목표

- Windows Internals, object manager, object namespace를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- handle, access mask, kernel object가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Windows Internals 7/e Vol.1/Vol.2, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식, 운영체제 - Stallings, 운영체제 - Silberschatz - process/thread/object manager/registry/service/protection
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 2: I/O System, Storage Management, Registry, Services, WMI 관련 장
- Microsoft Learn: Registry hives, Event Log, Prefetch, Task Scheduler, Services, ETW 개요
- 13Cubed Windows Forensics: Registry, Prefetch, ShimCache, AmCache, SRUM, LNK/JumpList 강의 범위

## 핵심 키워드

Windows Internals, object manager, object namespace, handle, access mask, kernel object, reference count

## 반드시 정리할 개념

- Windows Internals: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- object manager: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- object namespace: object namespace의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- handle: handle의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- access mask: access mask의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- kernel object: kernel object의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- reference count: reference count의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- Windows VM 또는 공개 DFIR sample에서 Process Explorer, Procmon, Autoruns, Event Viewer/Sysmon, artifact parser 결과를 연결한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- object/handle 관찰 노트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. Windows Internals를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
2. object manager를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. object namespace를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. handle를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. access mask를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. kernel object를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "object/handle 관찰 노트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
