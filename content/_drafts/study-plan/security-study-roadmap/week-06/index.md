---
title: "Week 06: C, object layout, memory safety"
draft: true
---

# Week 06: C, object layout, memory safety

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 C memory layout 실습 모음과 memory safety 체크리스트을 완성한다.

## 공부 자료
- 보유 서적: 해킹: 공격의 예술, Kernighan C 언어 프로그래밍, 전문가를 위한 C, 모던 C, 컴퓨터시스템 딥다이브 - pointer, array, string, struct, integer UB, ABI 연결

- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- CLRS: 2장 알고리즘 기초, 6장 Heapsort, 10장 Elementary Data Structures, 11장 Hash Tables, 22장 Elementary Graph Algorithms
- MIT 6.042J Mathematics for Computer Science: sets, relations, functions, probability, graph theory 관련 강의
- Algorithms 4th: sorting, searching, graph, string processing 관련 장
- Z3Py guide: bit-vector, modular arithmetic, constraint solving 예제
- 컴파일 옵션 -Wall -Wextra -fsanitize=address,undefined 사용
- Serious Cryptography: hash, MAC, authenticated encryption, public-key crypto 관련 장
- Cryptopals Set 1: hex/Base64/XOR/repeating-key XOR, Set 2: block cipher modes and padding
- RFC 4648 Base64, RFC 2104 HMAC, FIPS 180-4 SHA, NIST SP 800-38A block cipher modes, RFC 8446 TLS 1.3
- OWASP Password Storage Cheat Sheet: salt, KDF, password hashing, work factor
- Python docs: hashlib, hmac, secrets, base64, urllib.parse, cryptography tutorials

## 핵심 키워드

C pointer, pointer, array, array decay, string, null terminator, pointer arithmetic, struct, union, enum, struct padding, alignment, offsetof, object layout, integer type, signedness, integer overflow, integer underflow, undefined behavior, implicit conversion, function pointer, callback, indirect call, vtable, control-flow hijack, memory safety, ownership, lifetime, use after free intro, double free intro, garbage collection, AddressSanitizer, UndefinedBehaviorSanitizer, out-of-bounds, heap-use-after-free, stack-use-after-return

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | C pointer, array, string | C pointer, pointer, array, array decay, string, null terminator, pointer arithmetic | pointer/array/string 메모리 그림 |
| Day 02 | struct, union, enum과 padding | struct, union, enum, struct padding, alignment, offsetof, object layout | struct layout과 padding 계산표 |
| Day 03 | integer type, signedness, UB 재확인 | integer type, signedness, integer overflow, integer underflow, undefined behavior, implicit conversion | C integer bug 패턴 5개 정리 |
| Day 04 | function pointer, callback, vtable | function pointer, callback, indirect call, vtable, object layout, control-flow hijack | indirect call 대상 저장 위치와 위험 정리 |
| Day 05 | memory safety와 ownership/lifetime | memory safety, ownership, lifetime, use after free intro, double free intro, garbage collection | memory bug를 lifetime 관점으로 분류한 표 |
| Day 06 | sanitizer 기반 C 버그 실습 | AddressSanitizer, UndefinedBehaviorSanitizer, out-of-bounds, heap-use-after-free, stack-use-after-return | sanitizer report 해석 로그 |
| Day 07 | 주간 복습과 pwn/reversing 연결 | pointer, struct, signedness, function pointer, memory safety, ownership | Week 06 C 취약점 seed 목록 |

## 주간 산출물

- C memory layout 실습 모음과 memory safety 체크리스트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
