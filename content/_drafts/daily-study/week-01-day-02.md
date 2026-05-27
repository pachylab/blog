---
title: "Week 01 Day 02: bit/byte와 진수 변환"
draft: true
---

# Week 01 Day 02: bit/byte와 진수 변환

## 오늘의 목표

- bit/byte, binary, decimal를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- hexadecimal, nibble, base conversion가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 셸 스크립트 프로그래밍 입문 - shell, pipeline, redirection, command log 자동화
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- 확장 로드맵: 사용 원칙과 1주차 도구 축을 개인 랩 운영 원칙으로 재작성

## 핵심 키워드

bit/byte, binary, decimal, hexadecimal, nibble, base conversion, hex dump, ASCII view

## 반드시 정리할 개념

- bit/byte: 같은 값을 2진수, 10진수, 16진수로 변환하고 byte 단위로 끊어 읽는다. hex dump에서 offset, byte, ASCII view를 구분한다.
- binary: 같은 값을 2진수, 10진수, 16진수로 변환하고 byte 단위로 끊어 읽는다. hex dump에서 offset, byte, ASCII view를 구분한다.
- decimal: 진수 변환 절차를 손으로 계산하고, nibble 2개가 1 byte가 되는 관계와 ASCII view가 printable byte만 보여준다는 한계를 정리한다.
- hexadecimal: hexadecimal의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- nibble: 진수 변환 절차를 손으로 계산하고, nibble 2개가 1 byte가 되는 관계와 ASCII view가 printable byte만 보여준다는 한계를 정리한다.
- base conversion: 진수 변환 절차를 손으로 계산하고, nibble 2개가 1 byte가 되는 관계와 ASCII view가 printable byte만 보여준다는 한계를 정리한다.
- hex dump: 같은 값을 2진수, 10진수, 16진수로 변환하고 byte 단위로 끊어 읽는다. hex dump에서 offset, byte, ASCII view를 구분한다.
- ASCII view: 진수 변환 절차를 손으로 계산하고, nibble 2개가 1 byte가 되는 관계와 ASCII view가 printable byte만 보여준다는 한계를 정리한다.

## 실습

- 작은 C 프로그램 또는 Python 스크립트로 정수 값을 hex dump하고 signed/unsigned, endian, sizeof/alignof 결과를 표로 정리한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 2진수/10진수/16진수 변환표와 hex dump 해석 예시
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. bit/byte를 hex dump에서 직접 가리킨다면 offset, byte 값, 사람이 읽는 해석을 어떻게 분리할 수 있는가?
2. binary 값을 16진수로 바꿀 때 중간 계산을 어떻게 검산했고, byte 경계에서 어떤 실수를 할 수 있는가?
3. decimal 값을 16진수로 바꿀 때 중간 계산을 어떻게 검산했고, byte 경계에서 어떤 실수를 할 수 있는가?
4. hexadecimal를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. nibble가 hex dump 해석에서 어떤 역할을 하며, printable 문자만 보고 판단하면 어떤 byte를 놓칠 수 있는가?
6. base conversion가 hex dump 해석에서 어떤 역할을 하며, printable 문자만 보고 판단하면 어떤 byte를 놓칠 수 있는가?
7. 오늘 산출물인 "2진수/10진수/16진수 변환표와 hex dump 해석 예시"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
