---
title: "Week 01: 학습 환경, Linux CLI, 수 표현의 첫 기준"
draft: true
---

# Week 01: 학습 환경, Linux CLI, 수 표현의 첫 기준

## 주간 목표

- CS 기초, 보안 분석, 도구 실습, 산출물을 매일 연결한다.
- 매일 문서 하나만 보고도 읽을 자료, 정리할 개념, 실습, 복습 질문을 확인할 수 있게 기록한다.
- 주말까지 분석 랩 체크리스트, Linux CLI 명령 로그, bit/byte 변환 노트을 완성한다.

## 공부 자료
- 보유 서적: 셸 스크립트 프로그래밍 입문 - shell, pipeline, redirection, command log 자동화

- The Linux Command Line 2판: 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System, 5장 Working with Commands, 6장 Redirection
- pwn.college Start Here: Using the Terminal, SSH, file navigation 관련 챌린지
- man pages: bash 또는 sh, pwd, cd, ls, file, stat, find, grep, xxd
- Pro Git: 1.3 What is Git?, 2.2 Recording Changes, 2.3 Viewing the Commit History
- Markdown Guide: Basic Syntax 중 heading, list, code block, table, link
- Quartz docs: Authoring Content, frontmatter, Folder and Tag plugins
- 확장 로드맵: 사용 원칙과 1주차 도구 축을 개인 랩 운영 원칙으로 재작성
- CS:APP 3e: 2.1 Information Storage, 2.2 Integer Representations, 2.3 Integer Arithmetic
- 해커의 기쁨(Hacker's Delight): 1장 Introduction, 2장 Basics 중 bit 연산과 정수 표현
- C reference: stdint.h, limits.h, integer conversion, signed overflow의 undefined behavior
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling

## 핵심 키워드

Linux CLI, shell, absolute path, relative path, command option, stdout/stderr, Git, Markdown, Quartz note, bit/byte, binary, decimal, hexadecimal, nibble, base conversion, hex dump, ASCII view, safe lab, VM isolation, snapshot, host-only network, sample handling, evidence, chain of custody, boolean algebra, truth table, set, relation, function, bit vector, logical operator, C program, compiler, memory address, stack, heap, global data, pointer intro, reproducibility, command log, artifact, xxd, file, stat, hash, analysis note, concept seed

## 일별 계획

| Day | 주제 | 핵심 키워드 | 산출물 |
|---|---|---|---|
| Day 01 | Linux CLI와 분석 노트 구조 | Linux CLI, shell, absolute path, relative path, command option, stdout/stderr, Git | CLI 명령어 15개와 출력 해석 표 |
| Day 02 | bit/byte와 진수 변환 | bit/byte, binary, decimal, hexadecimal, nibble, base conversion, hex dump | 2진수/10진수/16진수 변환표와 hex dump 해석 예시 |
| Day 03 | 분석 VM 분리와 샘플 취급 원칙 | safe lab, VM isolation, snapshot, host-only network, sample handling, evidence, chain of custody | 개인 분석 랩 안전 체크리스트 |
| Day 04 | boolean, set, relation, function 기초 | boolean algebra, truth table, set, relation, function, bit vector, logical operator | 보안 조건식을 boolean expression으로 바꾼 예시 5개 |
| Day 05 | C 프로그램과 메모리 영역 맛보기 | C program, compiler, memory address, stack, heap, global data, pointer intro | 간단한 C 프로그램의 주소 출력과 영역별 해석 |
| Day 06 | CLI, hex dump, 노트 재현성 실습 | reproducibility, command log, artifact, xxd, file, stat, hash | 동일 파일을 CLI/hex/hash/metadata로 분석한 실습 로그 |
| Day 07 | 주간 복습과 다음 질문 설계 | concept seed, Linux CLI, bit/byte, safe lab, boolean algebra, stack, heap | Week 01 개념 지도와 다음 주 질문 7개 |

## 주간 산출물

- 분석 랩 체크리스트, Linux CLI 명령 로그, bit/byte 변환 노트
- daily-study 문서 7개
- 개념 노트 또는 실습 로그 3개 이상
- 다음 주로 넘길 질문 5개
