---
title: "Week 01 Day 01: Linux CLI와 분석 노트 구조"
draft: true
---

# Week 01 Day 01: Linux CLI와 분석 노트 구조

## 오늘의 목표

오늘의 초점은 `Linux CLI와 분석 노트 구조` 전체를 넓게 훑는 것이 아니다. 오늘 끝나면 완성해야 할 산출물은 `CLI 명령어 10개 이상과 출력 해석 표`이다.

오늘 하지 않을 것: 오늘은 Obsidian/Quartz 꾸미기나 블로그 테마 설정을 하지 않는다. 명령어와 기록 방식만 익힌다.

1. shell이 명령어를 실행하고 결과를 stdout, stderr, exit status로 돌려준다는 구조를 이해한다.
2. 분석 대상 파일을 path, file type, metadata, hash, hex view로 확인하는 기본 순서를 연습한다.
3. 명령어를 “쳤다”가 아니라 나중에 다시 재현할 수 있는 분석 로그로 기록한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 기초/시스템 개념

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | 제목과 키워드 3개를 보고 이미 아는 것/모르는 것 1개씩만 적는다. |
| minimum | 정의 1개와 작은 관찰 1개를 남긴다. |
| standard | 명령어 출력, 그림, 손계산 중 하나를 근거로 붙인다. |
| stretch | 나중에 pwn, RE, DFIR 중 어디서 다시 쓰이는지 연결한다. |
| 중단 후 복귀 | 새 자료를 열지 말고 Linux CLI와 분석 노트 구조에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최신 보안 논문은 주소, 타입, 로그, 재현 환경 같은 기초를 전제로 한다. 오늘은 나중에 논문을 읽을 때 막힐 prerequisite을 줄이는 날이다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 복습 질문 2개에 5-10분만 답한다. 새로 모르는 용어는 Warm-up에 억지로 쓰지 말고 Review의 Unknown에 모은다.
- Core reading: Primary 후보 중 1개만 고르고 실제 읽은 범위를 쓴다. 이해 안 된 문장 1개를 그대로 옮겨 적고, 왜 막혔는지 적는다.
- Lab: 오늘 실습에서 생성하거나 사용한 파일, 명령어, 출력, tool version, timezone, exit status를 남긴다.
- Writing: 오늘 배운 개념을 정의, 작은 예제, 보안에서 쓰이는 이유, 흔한 오해 1개로 설명한다.
- Review: Fact, Inference, Unknown을 분리하고 다음 확인 질문을 남긴다.

## 공부 자료

아래 자료는 전부 읽는 목록이 아니다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽는다. Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- [The Linux Command Line 2판] 1장 What Is the Shell?, 2장 Navigation, 3장 Exploring the System 중 필요한 10-15쪽
- [pwn.college Start Here](https://pwn.college/welcome/welcome): Using the Terminal, SSH, file navigation 관련 챌린지 1-2개
- [GNU Bash Manual - Redirections](https://www.gnu.org/s/bash/manual/html_node/Redirections.html): stdout/stderr redirection이 헷갈릴 때만 확인

### Reference
- [GNU Coreutils Manual](https://www.gnu.org/software/coreutils/manual/coreutils.html): pwd, ls, stat, sha256sum 계열 참고
- [grep(1) Linux man page](https://man7.org/linux/man-pages/man1/grep.1.html): `grep -n`, stdin 처리 확인
- [Ubuntu xxd manpage](https://manpages.ubuntu.com/manpages/resolute/man1/xxd.1.html): hex dump 출력 형식 확인

### 읽기 분량 기준

- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽만 읽는다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 자료를 다 읽지 못해도 읽은 범위, 막힌 문장, 다음 질문을 worksheet에 남기면 성공으로 본다.

## 핵심 키워드

Linux CLI, shell, absolute path, relative path, command option, stdout/stderr, exit status, command log, analysis note

## 반드시 정리할 개념

| 개념 | 오늘 정리할 내용 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| shell | 명령어를 해석하고 실행하는 프로그램이다. 내 shell이 bash, zsh, sh 중 무엇인지 확인한다. | `echo $SHELL`, `ps -p $$`, redirection 결과를 기록한다. | 분석 자동화 스크립트가 어떤 shell 문법에 의존하는지 구분한다. |
| absolute path / relative path | 절대 경로는 어디서 실행해도 같은 대상을 가리키고, 상대 경로는 현재 작업 디렉터리에 의존한다. | `pwd`, `realpath` 또는 `python3 -c`로 같은 파일 경로를 비교한다. | 보고서에 상대 경로만 남기면 다른 환경에서 재현이 깨질 수 있다. |
| stdout / stderr | 정상 출력과 오류 출력은 다른 stream이다. | 성공하는 명령과 실패하는 명령을 각각 실행해 stdout/stderr를 분리해 본다. | 도구가 “결과 없음”을 낸 것인지 “명령이 실패”한 것인지 구분한다. |
| exit status | 명령 성공/실패를 숫자로 알려주는 값이다. 보통 0은 성공, 0이 아니면 실패다. | 명령 직후 `echo $?`로 확인한다. | 자동 분석 파이프라인에서 실패를 놓치지 않게 한다. |
| command log | 나중에 같은 결과를 다시 얻기 위한 명령어, 입력, 환경 기록이다. | exact command, 작업 디렉터리, tool version, 입력 hash를 함께 적는다. | DFIR, malware triage, exploit reproduction의 최소 근거가 된다. |

## 실습

- 무해한 테스트 파일 `week01-cli-sample.txt`를 하나 만들고 절대 경로, 파일 종류, 크기, hash를 확인한다.
- `pwd`, `ls`, `file`, `stat`, `grep`, `xxd`, `shasum` 중 5개 이상을 실행하고 stdout/stderr/exit status를 표로 남긴다.
- 일부러 존재하지 않는 파일에 `ls` 또는 `stat`을 실행해 stderr와 exit status가 어떻게 달라지는지 기록한다.

## 질문형 실습 프롬프트

아래 질문은 답을 외우기 위한 것이 아니라, 오늘 실습 로그를 채우기 위한 질문이다. 질문마다 실제 출력이나 손계산 근거를 하나 이상 붙인다.

1. 지금 작업 디렉터리와 테스트 파일의 절대 경로는 무엇인가?
2. `file`, `stat`, `shasum`, `xxd`는 같은 파일에 대해 각각 어떤 정보를 보여주는가?
3. 성공한 명령과 실패한 명령의 stdout, stderr, exit status는 어떻게 달랐는가?
4. 오늘 로그만 보고 다른 사람이 같은 실습을 재현하려면 어떤 정보가 더 필요할까?
5. 내가 쓴 해석 중 실제 출력으로 확인된 사실과 아직 추정인 것은 무엇인가?

### 테스트 해 볼 명령어 후보

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

## 글쓰기 훈련

### 관찰 로그 쓰기

오늘은 좋은 글을 쓰려 하지 말고 관찰을 정확히 분리하는 연습을 한다. 5-7문장으로 “무엇을 실행했고, 무엇이 출력됐고, 내가 무엇을 추정했는지”를 구분해서 쓴다.

- 오늘 나는 ___ 파일을 대상으로 ___ 명령어들을 실행했다.
- 가장 먼저 확인한 사실은 ___ 이다.
- 오류를 일부러 만든 명령에서는 ___ 가 stdout/stderr/exit status에 나타났다.
- 이 결과로부터 ___ 라고 해석할 수 있다.
- 다만 ___ 는 아직 확인하지 못했으므로 추정으로 남긴다.
- 다음에는 ___ 를 확인하겠다.

## 오늘 남길 산출물

- 강의 산출물: `CLI 명령어 10개 이상과 출력 해석 표`을 작성한다. 형태는 개념 설명, 작은 예제, 보안 연결이 모두 있는 mini lesson이다.
- 실습 증거: 오늘 사용한 명령, 로그, trace, screenshot, code diff 중 해당 주제에 맞는 근거를 최소 2개 남긴다.
- 글쓰기 산출물: 오늘 배운 개념을 정의, 작은 예제, 보안에서 쓰이는 이유, 흔한 오해 1개로 설명한다.
- 공개 판단: 공개 가능한 주장과 비공개로 남겨야 할 세부사항을 각각 1개 이상 표시한다.

## 산출물 체크 표

| 체크 | 항목 | 기준 |
|---|---|---|
| [ ] | 개념 정의 | 핵심 개념을 외운 문장이 아니라 내 말로 정의했다. |
| [ ] | 작은 예제 | 손으로 추적 가능한 예제를 하나 만들고 결과를 설명했다. |
| [ ] | 보안 연결 | exploit/reversing/malware/DFIR 중 최소 1개 활용처를 연결했다. |
| [ ] | 오해 제거 | 혼동하기 쉬운 개념이나 잘못된 직관을 하나 반박했다. |
| [ ] | 후속 질문 | 다음 실습에서 검증할 질문을 하나 남겼다. |

## 복습 질문

1. shell이 명령어를 실행한 뒤 돌려주는 세 가지 결과는 무엇인가?
2. 절대 경로와 상대 경로를 혼동하면 분석 로그 재현성에 어떤 문제가 생기는가?
3. stdout과 stderr를 분리해서 기록해야 하는 이유는 무엇인가?
4. `file`, `stat`, `xxd`, `shasum` 중 파일의 “정체”를 가장 잘 보여주는 도구는 무엇이고, 각각의 한계는 무엇인가?
5. 오늘 기록에서 Fact, Inference, Unknown을 각각 하나씩 고르면 무엇인가?
