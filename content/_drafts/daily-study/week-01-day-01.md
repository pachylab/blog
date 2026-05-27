---
title: "Week 01 Day 01: Linux CLI와 분석 노트 구조"
draft: true
---

# Week 01 Day 01: Linux CLI와 분석 노트 구조

## 오늘의 목표

- Linux CLI, shell, absolute path를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- relative path, command option, stdout/stderr가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 셸 스크립트 프로그래밍 입문 - shell, pipeline, redirection, command log 자동화
- The Linux Command Line 2판: 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System, 5장 Working with Commands, 6장 Redirection
- pwn.college Start Here: Using the Terminal, SSH, file navigation 관련 챌린지
- man pages: bash 또는 sh, pwd, cd, ls, file, stat, find, grep, xxd
- Pro Git: 1.3 What is Git?, 2.2 Recording Changes, 2.3 Viewing the Commit History
- Markdown Guide: Basic Syntax 중 heading, list, code block, table, link
- Quartz docs: Authoring Content, frontmatter, Folder and Tag plugins
- 확장 로드맵: 사용 원칙과 1주차 도구 축을 개인 랩 운영 원칙으로 재작성

## 핵심 키워드

Linux CLI, shell, absolute path, relative path, command option, stdout/stderr, Git, Markdown, Quartz note

## 반드시 정리할 개념

- Linux CLI: 명령어가 shell에서 해석되고 process로 실행되는 흐름을 정리한다. absolute/relative path, stdin/stdout/stderr가 분석 로그에 왜 중요한지 함께 적는다.
- shell: 명령어가 shell에서 해석되고 process로 실행되는 흐름을 정리한다. absolute/relative path, stdin/stdout/stderr가 분석 로그에 왜 중요한지 함께 적는다.
- absolute path: absolute path는 루트부터 시작하는 고정 위치, relative path는 현재 작업 디렉터리를 기준으로 해석되는 위치다. 분석 로그에서 실행 위치와 path 기준이 바뀌면 재현성이 어떻게 깨지는지 예시로 정리한다.
- relative path: absolute path는 루트부터 시작하는 고정 위치, relative path는 현재 작업 디렉터리를 기준으로 해석되는 위치다. 분석 로그에서 실행 위치와 path 기준이 바뀌면 재현성이 어떻게 깨지는지 예시로 정리한다.
- command option: 명령어 option이 입력 해석을 어떻게 바꾸는지, stdout과 stderr를 분리하지 않으면 분석 로그에서 어떤 오류가 생기는지 정리한다.
- stdout/stderr: 명령어 option이 입력 해석을 어떻게 바꾸는지, stdout과 stderr를 분리하지 않으면 분석 로그에서 어떤 오류가 생기는지 정리한다.
- Git: 학습 노트를 versioned evidence로 남기는 방법을 정리한다. 변경 이유, 명령어, 출력, 해석, 다음 질문을 Markdown 구조로 분리한다.
- Markdown: 학습 노트를 versioned evidence로 남기는 방법을 정리한다. 변경 이유, 명령어, 출력, 해석, 다음 질문을 Markdown 구조로 분리한다.

## 실습

- pwd, ls -la, file, stat, find, grep, xxd, redirection, pipe를 사용해 같은 파일을 3가지 관점으로 확인하고 명령어/출력/해석을 기록한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- CLI 명령어 15개와 출력 해석 표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. Linux CLI에서 명령어가 built-in인지 외부 executable인지 확인하려면 어떤 명령을 쓰고, 분석 로그에는 무엇을 남겨야 하는가?
2. shell에서 명령어가 built-in인지 외부 executable인지 확인하려면 어떤 명령을 쓰고, 분석 로그에는 무엇을 남겨야 하는가?
3. absolute path 기준이 바뀌면 같은 명령이 다른 파일을 가리킬 수 있다. 이를 재현 가능하게 막는 기록 방법은 무엇인가?
4. relative path 기준이 바뀌면 같은 명령이 다른 파일을 가리킬 수 있다. 이를 재현 가능하게 막는 기록 방법은 무엇인가?
5. command option 하나가 출력 형식이나 재귀 범위를 바꾸는 예를 들고, 분석 결론에 어떤 영향을 줄 수 있는가?
6. stdout/stderr를 분리 저장하지 않으면 성공 출력과 오류 메시지를 어떻게 혼동할 수 있는가?
7. 오늘 산출물인 "CLI 명령어 15개와 출력 해석 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
