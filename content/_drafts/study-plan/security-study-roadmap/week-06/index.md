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

C pointer, pointer, array, array decay, string, null terminator, pointer arithmetic, struct, union, enum, struct padding, alignment, offsetof, object layout, integer type, signedness, integer overflow, integer underflow, undefined behavior, implicit conversion, function pointer, callback, indirect call, vtable, control-flow hijack, memory safety, ownership, lifetime, use after free intro, double free intro, garbage collection

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | C pointer, array, string | C pointer, pointer, array, array decay, string, null terminator, pointer arithmetic | pointer/array/string 메모리 그림 |
| Day 02 | struct, union, enum과 padding | struct, union, enum, struct padding, alignment, offsetof, object layout | struct layout과 padding 계산표 |
| Day 03 | integer type, signedness, UB 재확인 | integer type, signedness, integer overflow, integer underflow, undefined behavior, implicit conversion | C integer bug 패턴 5개 정리 |
| Day 04 | function pointer, callback, vtable | function pointer, callback, indirect call, vtable, object layout, control-flow hijack | indirect call 대상 저장 위치와 위험 정리 |
| Day 05 | memory safety와 ownership/lifetime | memory safety, ownership, lifetime, use after free intro, double free intro, garbage collection | memory bug를 lifetime 관점으로 분류한 표 |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 06 주간 개념 지도와 다음 주 질문 5개 |

## Week 06 글쓰기 훈련 흐름

Week 06의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-06-review` worksheet 1개
- 대표 산출물 후보: pointer/array/string 메모리 그림, struct layout과 padding 계산표, C integer bug 패턴 5개 정리
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
