---
title: "Week 02 Day 05: cache, TLB, pipeline, branch prediction"
draft: true
---

# Week 02 Day 05: cache, TLB, pipeline, branch prediction

## 오늘의 목표

- cache, TLB, pipeline를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- branch prediction, locality, cache miss가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Computer Systems: A Programmer's Perspective, 컴퓨터시스템 딥다이브 - bit/byte, 정수 표현, memory hierarchy, machine-level view
- CS:APP 3e: 6.1 Storage Technologies, 6.2 Locality, 6.4 Cache Memories
- OSTEP: Paging: Faster Translations (TLBs), Paging: Smaller Tables
- Computer Organization and Design: pipelining, branch prediction, cache organization 개요
- Compiler Explorer 또는 로컬 gcc/clang: 동일 C 코드를 -O0/-O2에서 비교

## 핵심 키워드

cache, TLB, pipeline, branch prediction, locality, cache miss, side-channel intro

## 반드시 정리할 개념

- cache: cache locality, TLB hit/miss, pipeline stall, branch prediction이 성능과 side-channel 분석에 왜 중요한지 예로 설명한다.
- TLB: cache locality, TLB hit/miss, pipeline stall, branch prediction이 성능과 side-channel 분석에 왜 중요한지 예로 설명한다.
- pipeline: cache locality, TLB hit/miss, pipeline stall, branch prediction이 성능과 side-channel 분석에 왜 중요한지 예로 설명한다.
- branch prediction: cache locality, TLB hit/miss, pipeline stall, branch prediction이 성능과 side-channel 분석에 왜 중요한지 예로 설명한다.
- locality: locality의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- cache miss: cache locality, TLB hit/miss, pipeline stall, branch prediction이 성능과 side-channel 분석에 왜 중요한지 예로 설명한다.
- side-channel intro: side-channel intro의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 배열 접근 패턴 시간 비교와 해석
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. cache를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. TLB를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. pipeline를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. branch prediction를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. locality를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. cache miss를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "배열 접근 패턴 시간 비교와 해석"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
