---
title: "Week 01 Day 01: Linux CLI와 분석 노트 구조 결과물 Worksheet"
draft: true
---

# Week 01 Day 01: Linux CLI와 분석 노트 구조 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-01-day-01/study|Week 01 Day 01: Linux CLI와 분석 노트 구조]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 읽은 자료와 실행한 실습 근거로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | Linux CLI와 분석 노트 구조 |
| 공부 날짜 |  |
| 오늘 선택한 Primary 자료 |  |
| 실제 읽은 범위 |  |
| 이해 안 된 문장 1개 |  |
| OS / VM / shell |  |
| tool version |  |
| timezone |  |
| 작업 디렉터리 |  |
| 입력 파일, 코드, 로그, 노트 |  |
| 입력 hash 또는 식별자 |  |
| 공개 가능 여부 | [ ] public  [ ] private  [ ] redaction 필요 |

<!-- due-review:start -->
## 1-1. 오늘의 간격 반복 복습

오늘은 이전 복습 대상이 없다. 대신 오늘 공부가 끝난 뒤 아래 `다음 간격 반복 카드`를 만들어 다음 회차에서 꺼내 쓴다.
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: CLI 명령어 10개 이상과 출력 해석 표
- 오늘 한 문장 요약:
- 가장 중요한 관찰 1개:
- 아직 확신할 수 없는 점 1개:
- 다음에 확인할 질문 2개:
  1.
  2.

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 기초/시스템 개념 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| 기준 정의 |  |
| 작은 관찰 |  |
| 보안 분야 연결 |  |
| 헷갈린 용어 |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 자료 읽기 기록

| 자료 | 읽은 범위 | 얻은 내용 | 막힌 지점 |
|---|---|---|---|
| [The Linux Command Line 2판] 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System 중 필요한 10-15쪽 |  |  |  |
| [pwn.college Start Here](https://pwn.college/welcome/welcome): Using the Terminal, SSH, file navigation 관련 챌린지 1-2개 |  |  |  |
| [GNU Bash Manual - Redirections](https://www.gnu.org/s/bash/manual/html_node/Redirections.html): stdout/stderr redirection이 헷갈릴 때만 확인 |  |  |  |
| [GNU Coreutils Manual](https://www.gnu.org/software/coreutils/manual/coreutils.html): pwd, ls, stat, sha256sum 계열 참고 |  |  |  |
| [grep(1) Linux man page](https://man7.org/linux/man-pages/man1/grep.1.html): `grep -n`, stdin 처리 확인 |  |  |  |
| [Ubuntu xxd manpage](https://manpages.ubuntu.com/manpages/resolute/man1/xxd.1.html): hex dump 출력 형식 확인 |  |  |  |

## 4. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| Linux CLI |  |  |  |  |
| shell |  |  |  |  |
| absolute path |  |  |  |  |
| relative path |  |  |  |  |
| command option |  |  |  |  |
| stdout/stderr |  |  |  |  |
| exit status |  |  |  |  |

## 5. 실습 질문 기록

### 실행 전 질문

1. 지금 작업 디렉터리와 테스트 파일의 절대 경로는 무엇인가?
   - 내 답:
2. `file`, `stat`, `shasum`, `xxd`는 같은 파일에 대해 각각 어떤 정보를 보여주는가?
   - 내 답:
3. 성공한 명령과 실패한 명령의 stdout, stderr, exit status는 어떻게 달랐는가?
   - 내 답:
4. 오늘 로그만 보고 다른 사람이 같은 실습을 재현하려면 어떤 정보가 더 필요할까?
   - 내 답:
5. 내가 쓴 해석 중 실제 출력으로 확인된 사실과 아직 추정인 것은 무엇인가?
   - 내 답:

### 참고한 명령어 후보

```bash
pwd
date
printf "alpha\nbeta\n" > week01-cli-sample.txt
file week01-cli-sample.txt
stat week01-cli-sample.txt
shasum -a 256 week01-cli-sample.txt
grep -n "alpha" week01-cli-sample.txt
xxd -g 1 -l 64 week01-cli-sample.txt
ls does-not-exist
echo $?
```

### 실제 실행한 명령어 또는 손계산

```bash
# 여기에 실제 실행한 명령어를 순서대로 적는다.
```

| 명령어 / 계산 | stdout 또는 계산 결과 | stderr | exit status | 내가 해석한 의미 |
|---|---|---|---:|---|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

## 6. 개념 설명 미니 레슨 초안

오늘 글의 주제는 `Linux CLI와 분석 노트 구조`이다. 처음 보는 후배 연구원에게 5분 동안 설명한다는 기준으로 쓴다. 목표는 `CLI 명령어 10개 이상과 출력 해석 표`이 단순 요약이 아니라, 보안 문제를 이해하는 데 필요한 mental model이 되도록 만드는 것이다.

```text
정의: 오늘 주제를 한 문장으로 정의한다.
작은 예제: 숫자, 주소, 파일, 패킷 등 손으로 추적 가능한 예를 든다.
보안 연결: 이 개념이 exploit, reversing, malware, DFIR 중 어디에서 쓰이는지 적는다.
흔한 오해: 오늘 개념을 잘못 이해했을 때 생기는 오류 1개를 적는다.
다음 질문: 내일 실습에서 확인할 수 있는 검증 질문 1개를 남긴다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 01 Day 02 | `Linux CLI와 분석 노트 구조`의 주체, 객체, 권한, 관찰 가능한 telemetry를 각각 적는다. 핵심어: Linux CLI, shell, absolute path. |
| 3회차 후 | Week 01 Day 04 | `Linux CLI와 분석 노트 구조`의 권한 경계를 정상 동작과 오용/우회 시나리오로 나눠 다시 설명한다. |
| 7회차 후 | Week 02 Day 02 | `Linux CLI와 분석 노트 구조`의 boundary를 hardening 또는 detection rule 관점으로 바꾸고, 관찰 가능한 signal 1개를 적는다. |
<!-- retrieval-card:end -->


## 7. 산출물 체크 표

오늘의 산출물 `CLI 명령어 10개 이상과 출력 해석 표`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 개념 정의 | 핵심 개념을 외운 문장이 아니라 내 말로 정의했다. |
| [ ] | 작은 예제 | 손으로 추적 가능한 예제를 하나 만들고 결과를 설명했다. |
| [ ] | 보안 연결 | exploit/reversing/malware/DFIR 중 최소 1개 활용처를 연결했다. |
| [ ] | 오해 제거 | 혼동하기 쉬운 개념이나 잘못된 직관을 하나 반박했다. |
| [ ] | 후속 질문 | 다음 실습에서 검증할 질문을 하나 남겼다. |
