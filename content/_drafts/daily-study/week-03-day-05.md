---
title: "Week 03 Day 05: user/kernel mode와 interrupt/exception/trap"
draft: true
---

# Week 03 Day 05: user/kernel mode와 interrupt/exception/trap

## 오늘의 목표

- user mode, kernel mode, privilege level를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- ring 0, ring 3, interrupt가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - C/assembly/debugging 연결부
- CS:APP 3e: 8.1 Exceptions, 8.2 Processes, 8.4 Process Control
- OSTEP: Limited Direct Execution, System Calls, Context Switches 관련 장
- Intel SDM Vol.3A: Protection, Interrupt and Exception Handling 개요
- Linux man pages: syscall, strace, ptrace, signal
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor
- Python docs: hashlib, hmac, secrets, base64, urllib.parse, cryptography tutorials

## 핵심 키워드

user mode, kernel mode, privilege level, ring 0, ring 3, interrupt, exception, trap, syscall transition

## 반드시 정리할 개념

- user mode: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- kernel mode: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- privilege level: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- ring 0: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- ring 3: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- interrupt: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- exception: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.
- trap: user/kernel 전환을 권한, 주소 공간 접근, handler 진입 관점으로 정리하고 syscall, interrupt, exception, trap을 원인별로 구분한다.

## 실습

- ps, top, pstree, lsof, strace, procfs로 하나의 프로세스를 관찰하고 thread, fd, memory map, syscall 흔적을 연결한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- syscall과 exception 흐름도
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. user mode를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. kernel mode가 보안 경계 또는 crash 분석에서 중요한 이유를 user/kernel 전환 흐름으로 설명할 수 있는가?
3. privilege level를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. ring 0를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. ring 3를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. interrupt가 보안 경계 또는 crash 분석에서 중요한 이유를 user/kernel 전환 흐름으로 설명할 수 있는가?
7. 오늘 산출물인 "syscall과 exception 흐름도"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
