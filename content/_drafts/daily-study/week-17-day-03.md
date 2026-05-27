---
title: "Week 17 Day 03: obfuscation과 deobfuscation"
draft: true
---

# Week 17 Day 03: obfuscation과 deobfuscation

## 오늘의 목표

- obfuscation, deobfuscation, string encryption를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- API hashing, dead code, junk instruction가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리버싱 핵심 원리, Learning Malware Analysis, 실전 리눅스 악성코드 분석 - packing, anti-debugging, anti-VM, unpacking workflow
- Practical Malware Analysis: anti-debugging, packers, unpacking, shellcode analysis 관련 장
- Malware Unicorn: unpacking, anti-analysis, deobfuscation workshops
- Ghidra docs: patch instruction, define bytes/code, function recovery, references
- x64dbg docs: Scylla/IAT reconstruction workflow와 OEP 찾기 개요
- The C Programming Language: 5장 Pointers and Arrays, 6장 Structures
- Modern C: objects, pointers, arrays, structs, integer types, undefined behavior 관련 장
- CS:APP 3e: 3.8 Array Allocation and Access, 3.9 Heterogeneous Data Structures, 3.10 buffer overflow 관련 부분
- cppreference 또는 Microsoft Learn: function pointer, struct padding, object lifetime
- Practical Malware Analysis: persistence, Windows API, DLL injection, process replacement 관련 장

## 핵심 키워드

obfuscation, deobfuscation, string encryption, API hashing, dead code, junk instruction, constant folding

## 반드시 정리할 개념

- obfuscation: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- deobfuscation: deobfuscation의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- string encryption: 메모리 배치, lifetime, indirect call target을 그림으로 정리하고 memory safety 문제가 되는 조건을 적는다.
- API hashing: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- dead code: dead code의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- junk instruction: CPU가 instruction을 fetch/decode/execute하는 관점에서 ISA, opcode, operand, addressing mode를 구분하고 disassembly 한 줄을 분해한다.
- constant folding: constant folding의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- pack/unpack 전후 strings, imports, section entropy, entry point를 비교하고 hash와 도구 버전을 기록한다.
- benign simulator 또는 문서 예제로 persistence/injection 흐름을 API 단계와 artifact 단계로 나누어 표기한다.
- Python으로 encoding/hash/encryption 예제를 실행하고 입력, key/nonce/salt, 출력, 복호화 가능 여부를 표로 비교한다.
- gcc -S, objdump -d, GDB로 간단한 함수를 컴파일/디버깅해 instruction, register, stack frame 변화를 표시한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 난독화 전후 evidence 비교
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. obfuscation를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
2. deobfuscation를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. string encryption는 reversible 여부, key 필요 여부, integrity 제공 여부 중 어떤 속성을 가지는가?
4. API hashing를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
5. dead code를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. junk instruction를 disassembly 한 줄에서 어떻게 식별했고 control flow 이해에 어떤 도움을 줬는가?
7. 오늘 산출물인 "난독화 전후 evidence 비교"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
