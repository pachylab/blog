---
title: "Week 06 Day 02: struct, union, enum과 padding"
draft: true
---

# Week 06 Day 02: struct, union, enum과 padding

## 오늘의 목표

- struct, union, enum를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- struct padding, alignment, offsetof가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 해킹: 공격의 예술, Kernighan C 언어 프로그래밍, 전문가를 위한 C, 모던 C, 컴퓨터시스템 딥다이브 - pointer, array, string, struct, integer UB, ABI 연결
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor
- Python docs: hashlib, hmac, secrets, base64, urllib.parse, cryptography tutorials

## 핵심 키워드

struct, union, enum, struct padding, alignment, offsetof, object layout

## 반드시 정리할 개념

- struct: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- union: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- enum: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- struct padding: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- alignment: multi-byte 값의 저장 순서, word size, alignment가 struct layout, ABI, 파일/패킷 파싱에 미치는 영향을 정리한다.
- offsetof: offsetof의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- object layout: object layout의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- C 예제를 작성해 pointer arithmetic, string terminator, struct padding, function pointer 호출을 GDB와 sanitizer로 확인한다.
- 작은 C 프로그램 또는 Python 스크립트로 정수 값을 hex dump하고 signed/unsigned, endian, sizeof/alignof 결과를 표로 정리한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- struct layout과 padding 계산표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. struct의 메모리 배치를 그릴 수 있고 잘못 쓰면 어떤 memory safety 문제가 생기는가?
2. union를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. enum를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. struct padding의 메모리 배치를 그릴 수 있고 잘못 쓰면 어떤 memory safety 문제가 생기는가?
5. alignment를 모르면 구조체, 파일 포맷, 네트워크 패킷 중 어디에서 해석 오류가 생기는가?
6. offsetof를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "struct layout과 padding 계산표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
