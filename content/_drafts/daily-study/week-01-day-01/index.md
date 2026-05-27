---
title: "Week 01 Day 01 산출물 예시"
draft: true
---

# Week 01 Day 01 산출물 예시

이 문서는 [[_drafts/daily-study/week-01-day-01|Week 01 Day 01: Linux CLI와 분석 노트 구조]]를 공부한 뒤 남길 수 있는 산출물의 예시다. 실제 공부할 때는 명령어 출력, 경로, 에러 메시지를 내 환경 기준으로 바꿔서 기록한다.

## 학습 요약

오늘은 shell에서 명령어가 해석되고 실행되는 흐름, absolute path와 relative path의 차이, command option과 stdout/stderr가 분석 로그의 재현성에 미치는 영향을 확인했다.

가장 중요한 결론은 "명령어만 적으면 부족하고, 실행 위치, 입력 파일, 옵션, 출력, 오류, 해석을 같이 남겨야 한다"는 점이다.

## 실습 환경

| 항목 | 값 |
|---|---|
| 날짜 | 실제 공부한 날짜 입력 |
| OS | macOS 또는 Linux VM 이름 입력 |
| shell | `zsh` 또는 `bash` |
| 작업 디렉터리 | `/Users/morae/blog-quartz` 같은 absolute path |
| 실습 파일 | `content/_drafts/daily-study/week-01-day-01.md` |
| 주의 | 악성 샘플 없이 일반 텍스트 파일만 사용 |

## CLI 명령어 15개와 출력 해석 표

| 번호 | 명령어 | 관찰한 출력 | 해석 | 보안 분석에서의 쓰임 |
|---|---|---|---|---|
| 1 | `pwd` | `/Users/morae/blog-quartz` | 현재 작업 디렉터리를 확인했다. relative path는 이 위치를 기준으로 해석된다. | 분석 로그에서 실행 기준 경로를 남겨 재현성을 확보한다. |
| 2 | `ls` | `content`, `quartz`, `package.json` 등 | 현재 디렉터리의 파일/폴더 이름만 보여준다. 숨김 파일과 권한 정보는 보이지 않는다. | 빠른 triage에는 유용하지만 세부 metadata 확인에는 부족하다. |
| 3 | `ls -la` | 권한, owner, size, timestamp, 숨김 파일 출력 | `-l`은 상세 정보, `-a`는 숨김 항목 포함 옵션이다. | 의심 파일의 권한, 크기, 변경 시간을 빠르게 확인한다. |
| 4 | `file content/_drafts/daily-study/week-01-day-01.md` | `UTF-8 Unicode text` 형태 | 파일 확장자와 실제 내용 유형이 일치하는지 확인했다. | 악성코드 triage에서 확장자 위장 여부를 확인하는 첫 단계가 된다. |
| 5 | `stat content/_drafts/daily-study/week-01-day-01.md` | size, access/change/modify time 등 | filesystem metadata를 확인했다. OS마다 출력 형식은 다를 수 있다. | 포렌식에서 timestamp와 metadata 해석의 출발점이 된다. |
| 6 | `head -5 content/_drafts/daily-study/week-01-day-01.md` | frontmatter와 제목 일부 | 파일 앞부분만 확인했다. 전체를 열지 않고 구조를 파악할 수 있다. | 큰 로그나 샘플 문자열을 부분 확인할 때 사용한다. |
| 7 | `tail -10 content/_drafts/daily-study/week-01-day-01.md` | 복습 질문 일부 | 파일 마지막 부분을 확인했다. | 로그 파일의 최신 이벤트를 확인할 때 자주 사용한다. |
| 8 | `grep -n "stdout" content/_drafts/daily-study/week-01-day-01.md` | 줄 번호와 매칭 라인 | `-n` 옵션으로 매칭 위치를 함께 기록했다. | IOC 문자열, API 이름, 에러 패턴을 찾고 근거 줄을 남긴다. |
| 9 | `find content/_drafts/daily-study -maxdepth 1 -name "week-01-day-*.md"` | Week 01 daily 파일 목록 | 조건에 맞는 파일을 검색했다. `maxdepth`로 범위를 제한했다. | 분석 범위를 좁혀 원치 않는 디렉터리까지 훑는 실수를 줄인다. |
| 10 | `xxd -l 64 content/_drafts/daily-study/week-01-day-01.md` | 앞 64바이트의 hex/ASCII view | 텍스트 파일도 byte sequence로 볼 수 있음을 확인했다. | binary triage에서 magic byte, 문자열, encoding 단서를 확인한다. |
| 11 | `wc -l content/_drafts/daily-study/week-01-day-01.md` | 줄 수 출력 | 문서 규모를 대략 확인했다. | 로그/덤프 크기 변화나 수집 누락 여부를 확인하는 보조 신호가 된다. |
| 12 | `type cd` | `cd is a shell builtin` | `cd`는 외부 실행 파일이 아니라 shell built-in이다. | built-in과 executable의 차이를 알아야 실행 흔적과 경로를 잘못 해석하지 않는다. |
| 13 | `type xxd` | `xxd is /usr/bin/xxd` 같은 경로 | `xxd`는 외부 executable로 실행된다. | 도구의 실제 경로와 버전을 남기면 분석 재현성이 좋아진다. |
| 14 | `grep -n "없는문자열" week-01-day-01.md > out.txt 2> err.txt` | `out.txt`는 비어 있고 `err.txt`는 상황에 따라 비어 있음 | 매칭이 없어도 오류가 아닐 수 있다. stdout/stderr를 분리해 확인했다. | 탐지 결과 없음과 실행 오류를 구분한다. |
| 15 | `grep -n "Linux" content/_drafts/daily-study/week-01-day-01.md \| head` | Linux가 포함된 첫 몇 줄 | pipe로 앞 명령의 stdout을 다음 명령의 stdin으로 넘겼다. | 대량 로그에서 후보를 줄이는 기본 분석 패턴이다. |

## 개념 정리

### Linux CLI

Linux CLI는 사용자가 텍스트 명령으로 파일, process, network, system state를 조작하거나 관찰하는 인터페이스다. 보안 분석에서는 GUI보다 입력과 출력이 명확하게 남기 쉬워 재현 가능한 분석 로그를 만들기 좋다.

관찰 방법은 명령어, 실행 경로, 입력 파일, 옵션, stdout/stderr, exit status를 함께 남기는 것이다. 명령어만 남기면 같은 명령이 다른 디렉터리에서 다른 파일을 대상으로 실행될 수 있다.

### Shell

Shell은 사용자가 입력한 명령어를 해석하고 built-in 처리, PATH 검색, redirection, pipe, variable expansion을 수행한 뒤 필요한 process를 실행한다. `cd`처럼 shell 내부에서 처리되는 명령과 `xxd`처럼 외부 executable로 실행되는 명령은 분석 흔적이 다를 수 있다.

보안 분석에서는 shell history나 command log를 볼 때 "사용자가 어떤 프로그램을 실행했는가"와 "shell이 어떻게 해석했는가"를 분리해야 한다. quote, wildcard, redirection을 잘못 이해하면 입력 파일이나 출력 파일을 틀리게 판단할 수 있다.

### Absolute Path와 Relative Path

Absolute path는 `/Users/morae/blog-quartz/content/...`처럼 루트부터 시작하는 고정 경로다. Relative path는 `content/_drafts/...`처럼 현재 작업 디렉터리를 기준으로 해석된다.

분석 로그에는 가능하면 absolute path와 `pwd` 출력을 함께 남긴다. 그러면 나중에 같은 명령을 다시 실행할 때, relative path가 다른 파일을 가리키는 문제를 줄일 수 있다.

### Stdout과 Stderr

Stdout은 정상 출력 스트림이고 stderr는 오류나 진단 메시지를 위한 스트림이다. 둘을 분리하지 않으면 "탐지 결과가 없다"와 "명령이 실패했다"를 혼동할 수 있다.

예를 들어 `grep`이 아무 것도 찾지 못한 상황과 파일 경로가 틀려서 실패한 상황은 분석 결론이 완전히 다르다. 그래서 중요한 실습에서는 `> out.txt 2> err.txt`처럼 결과와 오류를 분리 저장한다.

## 사실과 해석 분리 예시

### 사실

- `pwd` 출력은 `/Users/morae/blog-quartz`였다.
- `type cd` 출력은 `cd is a shell builtin`이었다.
- `file content/_drafts/daily-study/week-01-day-01.md` 출력은 텍스트 파일로 인식됐다.
- `xxd -l 64 ...` 출력에서 Markdown frontmatter가 ASCII 영역에 보였다.

### 해석

- 오늘 실습 파일은 binary가 아니라 UTF-8 텍스트 문서로 판단된다.
- `cd`는 외부 파일 실행 흔적만으로는 설명하기 어려운 shell built-in이다.
- CLI 실습 로그는 명령어만 남기면 부족하고 `pwd`, 입력 파일, 옵션, stdout/stderr를 함께 남겨야 재현 가능하다.

### 아직 확신할 수 없는 것

- `stat` timestamp의 의미는 OS와 filesystem에 따라 달라질 수 있으므로 포렌식 결론으로 바로 쓰면 안 된다.
- `file` 명령의 결과는 heuristic이므로 악성코드 분석에서 최종 파일 유형 판정으로 쓰기에는 부족하다.

## 실패 로그 예시

| 항목 | 내용 |
|---|---|
| 실패한 명령어 | `grep -n "Linux" week-01-day-01.md` |
| 에러 메시지 | `grep: week-01-day-01.md: No such file or directory` |
| 사실 | 현재 작업 디렉터리에 `week-01-day-01.md`가 없었다. |
| 추정 원인 | 파일은 `content/_drafts/daily-study/week-01-day-01.md`에 있는데 relative path를 잘못 사용했다. |
| 다음 확인 | `pwd`와 `ls content/_drafts/daily-study/week-01-day-01.md`를 먼저 확인한다. |
| 수정 명령어 | `grep -n "Linux" content/_drafts/daily-study/week-01-day-01.md` |

## 오늘 남긴 산출물 체크

- [x] CLI 명령어 15개와 출력 해석 표를 작성했다.
- [x] Linux CLI, shell, absolute/relative path, stdout/stderr 개념을 정리했다.
- [x] 명령어 출력과 해석을 분리해서 적었다.
- [x] 실패한 명령어 예시와 원인 추정을 남겼다.
- [x] 내일 이어서 확인할 질문 2개를 만들었다.

## 내일 이어서 확인할 질문

1. `xxd` 출력에서 한 줄의 offset, hex byte, ASCII 영역은 각각 무엇을 의미하는가?
2. 같은 byte sequence를 2진수, 10진수, 16진수로 바꿔 읽을 때 보안 분석에서 어떤 실수가 생길 수 있는가?

## ChatGPT에게 다시 물어볼 내용

아래처럼 물어보면 피드백을 받기 좋다.

```text
나는 Week 01 Day 01: Linux CLI와 분석 노트 구조를 공부했다.
아래는 오늘 만든 CLI 명령어 표와 개념 정리다.

1. 사실과 해석이 섞인 부분이 있는지 봐줘.
2. stdout/stderr, absolute/relative path 설명 중 틀린 부분을 지적해줘.
3. 보안 분석 관점에서 빠진 기록 항목이 있으면 추가해줘.
4. 내일 bit/byte와 진수 변환을 공부하기 전에 복습할 질문 5개를 만들어줘.

[내 산출물 붙여넣기]
```
