---
title: "Week 01: 학습 환경, Linux CLI, 수 표현의 첫 기준"
draft: true
---

# Week 01: 학습 환경, Linux CLI, 수 표현의 첫 기준

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 분석 랩 체크리스트, Linux CLI 명령 로그, bit/byte 변환 노트를 완성한다.

## 공부 자료 운영 기준

Week 01의 자료는 전부 읽는 목록이 아니다. 하루 2-3시간 기준으로 daily-study 문서의 Primary 자료 1개만 30-45분 읽고, Reference는 막힌 용어와 실습 옵션을 확인할 때만 사용한다.

| 구분 | 자료 | 쓰는 날 | 사용 방식 |
|---|---|---:|---|
| Primary | The Linux Command Line 2판: 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System, 5장 Working with Commands, 6장 Redirection | Day 01, Review | shell, path, redirection, command lookup을 실습 로그와 연결한다. |
| Primary | [pwn.college Start Here](https://pwn.college/welcome/welcome): terminal, SSH, file navigation 관련 챌린지 | Day 01 | 터미널 조작을 실제 challenge 환경에서 확인한다. |
| Reference | [GNU Bash Manual - Redirections](https://www.gnu.org/s/bash/manual/html_node/Redirections.html), [GNU Coreutils Manual](https://www.gnu.org/software/coreutils/manual/coreutils.html), [grep man page](https://man7.org/linux/man-pages/man1/grep.1.html), [xxd man page](https://manpages.ubuntu.com/manpages/resolute/man1/xxd.1.html) | Day 01, Review | 명령어 옵션, stdout/stderr, exit status, hex dump 옵션을 확인한다. |
| Primary | CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations 중 필요한 부분 | Day 02 | bit/byte, endian, 정수 표현의 기준을 잡는다. |
| Primary | [OpenStax Intro CS - Machine-Level Information Representation](https://openstax.org/books/introduction-computer-science/pages/5-3-machine-level-information-representation), [Princeton IntroCS - Representing Information](https://introcs.cs.princeton.edu/java/61data/) | Day 02 | 진수 변환과 byte 표현을 보조 자료로 확인한다. |
| Reference | 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현 | Day 02, Day 04 | bit operation과 bit vector 감각을 보강한다. |
| Primary | [REMnux docs](https://docs.remnux.org/), [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final), [CISA Handling Destructive Malware](https://www.cisa.gov/news-events/news/handling-destructive-malware) | Day 03 | 분석 VM 분리, 샘플 취급, 증거 기록 원칙을 체크리스트로 만든다. |
| Primary | [Discrete Mathematics: An Open Introduction](https://open.umn.edu/opentextbooks/textbooks/discrete-mathematics-an-open-introduction), [OpenStax Algebra and Trigonometry 2e - Functions and Function Notation](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-1-functions-and-function-notation) | Day 04 | boolean, set, relation, function을 보안 조건식 예시로 바꾼다. |
| Primary | K&R C, 전문가를 위한 C, 모던 C 중 1권의 pointer, object, storage duration 관련 절 | Day 05 | C 코드의 stack/heap/global/static 주소 관찰 실습에 사용한다. |
| Reference | [cppreference C storage-class specifiers](https://en.cppreference.com/w/c/language/storage_class_specifiers.html), [cppreference C object lifetime](https://en.cppreference.com/w/c/language/lifetime.html) | Day 05 | storage duration과 object lifetime 용어를 확인한다. |

## 핵심 키워드

Linux CLI, shell, absolute path, relative path, command option, stdout/stderr, exit status, command log, bit/byte, binary, decimal, hexadecimal, nibble, base conversion, hex dump, safe lab, VM isolation, snapshot, host-only network, sample handling, evidence, chain of custody, boolean algebra, truth table, set, relation, function, bit vector, logical operator, C program, compiler, memory address, stack, heap, global data, pointer intro

## 일별 계획

| 회차 | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | Linux CLI와 분석 노트 구조 | Linux CLI, shell, absolute path, relative path, command option, stdout/stderr, exit status, command log | CLI 명령어 10개 이상과 출력 해석 표 |
| Day 02 | bit/byte와 진수 변환 | bit/byte, binary, decimal, hexadecimal, nibble, base conversion, hex dump | 2진수/10진수/16진수 변환표와 hex dump 해석 예시 |
| Day 03 | 분석 VM 분리와 샘플 취급 원칙 | safe lab, VM isolation, snapshot, host-only network, sample handling, evidence, chain of custody | 개인 분석 랩 안전 체크리스트 |
| Day 04 | boolean, set, relation, function 기초 | boolean algebra, truth table, set, relation, function, bit vector, logical operator | 보안 조건식을 boolean expression으로 바꾼 예시 5개 |
| Day 05 | C 프로그램과 메모리 영역 맛보기 | C program, compiler, memory address, stack, heap, global data, pointer intro | 간단한 C 프로그램의 주소 출력과 영역별 해석 |
| Review | 주간 복습과 산출물 정리 | retrieval practice, concept map, best artifact, fact/inference/unknown, backlog pruning, next question | Week 01 주간 개념 지도와 다음 주 질문 5개 |

## Week 01 글쓰기 훈련 흐름

Week 01의 글쓰기는 Day 01-05에서 작은 산출물을 만들고, Review에서 하나를 골라 고치는 방식으로 운영한다.

| 회차 | 쓰기 훈련 | 목적 |
|---|---|---|
| Day 01 | 관찰 로그 쓰기 | 오늘 산출물의 사실, 출력, 해석을 분리한다. |
| Day 02 | 비교해서 설명하기 | 비슷한 개념의 차이를 표나 작은 예제로 설명한다. |
| Day 03 | 근거와 조건 쓰기 | 어떤 관찰이 어떤 결론을 지지하는지 조건을 붙여 적는다. |
| Day 04 | 한계와 반례 쓰기 | 단정하지 말고 깨지는 조건이나 예외를 같이 남긴다. |
| Day 05 | 보안 분석 연결 쓰기 | 이번 주 개념이 실제 분석, 탐지, exploit, forensic 판단에 쓰이는 지점을 쓴다. |
| Review | 주간 회고와 자기 편집 | best artifact 1개를 골라 근거, 한계, 다음 질문을 정리한다. |


## 주간 산출물

- Day 01-05 worksheet 5개와 `week-01-review` worksheet 1개
- 대표 산출물 후보: CLI 명령어 10개 이상과 출력 해석 표, 2진수/10진수/16진수 변환표와 hex dump 해석 예시, 개인 분석 랩 안전 체크리스트
- 주간 개념 지도 또는 실습 로그 3개 이상
- 다음 주로 넘길 검증 가능한 질문 5개
