---
title: "Week 01 Day 07: 주간 복습과 다음 질문 설계"
draft: true
---

# Week 01 Day 07: 주간 복습과 다음 질문 설계

## 오늘의 목표

- concept seed, Linux CLI, bit/byte를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- safe lab, boolean algebra, stack가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 셸 스크립트 프로그래밍 입문 - shell, pipeline, redirection, command log 자동화
- Pro Git: 1.3 What is Git?, 2.2 Recording Changes, 2.3 Viewing the Commit History
- Markdown Guide: Basic Syntax 중 heading, list, code block, table, link
- Quartz docs: Authoring Content, frontmatter, Folder and Tag plugins
- The Linux Command Line 2판: 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System, 5장 Working with Commands, 6장 Redirection
- pwn.college Start Here: Using the Terminal, SSH, file navigation 관련 챌린지
- man pages: bash 또는 sh, pwd, cd, ls, file, stat, find, grep, xxd
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior

## 핵심 키워드

concept seed, Linux CLI, bit/byte, safe lab, boolean algebra, stack, heap

## 반드시 정리할 개념

- concept seed: concept seed의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- Linux CLI: 명령어가 shell에서 해석되고 process로 실행되는 흐름을 정리한다. absolute/relative path, stdin/stdout/stderr가 분석 로그에 왜 중요한지 함께 적는다.
- bit/byte: 같은 값을 2진수, 10진수, 16진수로 변환하고 byte 단위로 끊어 읽는다. hex dump에서 offset, byte, ASCII view를 구분한다.
- safe lab: 분석 VM, snapshot, host-only network, sample hash, 실행 금지 원칙을 안전 절차로 정리하고 원본과 분석 복제본을 분리한다.
- boolean algebra: 조건식을 truth table로 전개하고 set/relation/function 관점에서 입력과 출력을 구분한다. 탐지 조건을 단순화할 때 어떤 정보가 보존되는지 적는다.
- stack: virtual address가 page table을 거쳐 physical memory로 변환되는 흐름과 stack/heap/mmap/shared memory의 생성 주체, 권한, lifetime을 비교한다.
- heap: virtual address가 page table을 거쳐 physical memory로 변환되는 흐름과 stack/heap/mmap/shared memory의 생성 주체, 권한, lifetime을 비교한다.

## 실습

- pwd, ls -la, file, stat, find, grep, xxd, redirection, pipe를 사용해 같은 파일을 3가지 관점으로 확인하고 명령어/출력/해석을 기록한다.
- 작은 C 프로그램 또는 Python 스크립트로 정수 값을 hex dump하고 signed/unsigned, endian, sizeof/alignof 결과를 표로 정리한다.
- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- 동일 프로그램을 여러 번 실행해 proc maps, pmap, readelf, checksec 결과를 비교하고 주소/권한 변화를 표시한다.
- pwn.college 또는 ROP Emporium 문제를 하나 선택해 crash 재현, offset 계산, primitive 확인, mitigation 확인을 순서대로 기록한다.

## 오늘 남길 산출물

- Week 01 개념 지도와 다음 주 질문 7개
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. concept seed를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. Linux CLI에서 명령어가 built-in인지 외부 executable인지 확인하려면 어떤 명령을 쓰고, 분석 로그에는 무엇을 남겨야 하는가?
3. bit/byte를 hex dump에서 직접 가리킨다면 offset, byte 값, 사람이 읽는 해석을 어떻게 분리할 수 있는가?
4. safe lab를 지키지 않으면 host 오염, 증거 훼손, 네트워크 유출 중 어떤 위험이 생기는가?
5. boolean algebra로 탐지 조건을 전개하면 false positive와 false negative를 어떻게 더 명확히 볼 수 있는가?
6. stack가 proc maps 또는 디버거 memory view에서 어떻게 드러나는가?
7. 오늘 산출물인 "Week 01 개념 지도와 다음 주 질문 7개"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
