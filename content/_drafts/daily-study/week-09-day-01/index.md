---
title: "Week 09 Day 01: OSI model과 TCP/IP stack 결과물 Worksheet"
draft: true
---

# Week 09 Day 01: OSI model과 TCP/IP stack 결과물 Worksheet

학습 가이드: [[_drafts/daily-study/week-09-day-01/study|Week 09 Day 01: OSI model과 TCP/IP stack]]

이 문서는 공부 후 직접 채우는 결과물 초안이다. 정답을 미리 채우지 말고, 오늘 실행한 명령어와 관찰한 출력으로 채운다.

## 1. 기본 정보

| 항목 | 내용 |
|---|---|
| 주제 | OSI model과 TCP/IP stack |
| 공부 날짜 |  |
| 오늘 선택한 primary 자료 |  |
| 실제 읽은 범위 |  |
| OS / VM / shell |  |
| tool version |  |
| timezone |  |
| 작업 디렉터리 |  |
| 입력 파일, 샘플, 코드, 로그 |  |
| 입력 hash 또는 식별자 |  |
| 공개 가능 여부 | [ ] public  [ ] private  [ ] redaction 필요 |

<!-- due-review:start -->
## 1-1. 오늘의 간격 반복 복습

새 내용을 시작하기 전에 아래 복습을 먼저 한다. 답을 보기 전에 3분만 회상하고, 틀린 부분은 길게 보충하지 말고 오늘 worksheet의 Unknown 또는 Next check에 한 줄로 남긴다.

| 복습 간격 | 복습 대상 | 오늘 할 일 | 완료 기준 |
|---|---|---|---|
| 1회차 전 | [[_drafts/daily-study/week-08-review/index|Week 08 Review: 주간 복습과 산출물 정리]] | 이번 주 best artifact의 핵심 주장, 근거, 한계를 한 줄씩 적는다. 핵심어: file, directory, metadata. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 3회차 전 | [[_drafts/daily-study/week-08-day-04/index|Week 08 Day 04: symbolic link, hard link, ADS]] | `symbolic link, hard link, ADS`의 reproducer나 입력 예제가 root cause를 설명하는지 다시 본다. 부족하면 debugger, sanitizer, patch 근거 중 필요한 것 1개를 적는다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
| 7회차 전 | [[_drafts/daily-study/week-07-review/index|Week 07 Review: 주간 복습과 산출물 정리]] | 이번 주 복습 결과가 다음 주 학습에 실제로 이어졌는지 확인하고, 이어지지 않았다면 질문을 더 작게 바꾼다. | 노트 보기 전 3분 답변 후, 막힌 항목 1개만 Unknown/Next check에 남긴다. |
<!-- due-review:end -->

## 2. 오늘의 산출물 초안

- 산출물 주제: OSI/TCP-IP 계층 매핑표
- 한 문장 요약: <!-- 작성 -->
- 가장 중요한 관찰 1개: <!-- 작성 -->
- 아직 확신할 수 없는 점 1개: <!-- 작성 -->
- 다음에 확인할 질문 2개:
  1. <!-- 작성 -->
  2. <!-- 작성 -->

<!-- learning-execution:start -->
## 2-1. 학습 실행 체크

오늘은 네트워크/탐지 흐름에 맞춰 아래 항목만 먼저 채운다. 시간이 부족하면 첫 두 줄만 채우고 남은 칸은 다음 확인 질문으로 보낸다.

| 항목 | 오늘 기록 |
|---|---|
| 데이터 출처 |  |
| 식별자/5-tuple |  |
| 관찰 field |  |
| 탐지/오탐 가능성 |  |
| 다시 시작할 때 첫 행동 |  |
<!-- learning-execution:end -->

## 3. 핵심 개념 정리

| 키워드 | 내 정의 | 관찰 방법 | 보안 분석에서 쓰임 | 헷갈린 점 |
|---|---|---|---|---|
| OSI model |  |  |  |  |
| TCP/IP stack |  |  |  |  |
| encapsulation |  |  |  |  |
| frame |  |  |  |  |
| packet |  |  |  |  |
| segment |  |  |  |  |

## 4. 질문형 실습 기록

### 실행 전 질문

1. `OSI model과 TCP/IP stack`을 확인하기 위한 최소 입력은 무엇인가?
   - 내 답: <!-- 작성 -->
2. 어떤 명령어 또는 도구를 먼저 써야 하는가?
   - 내 답: <!-- 작성 -->
3. 어떤 옵션을 추가해야 출력이 더 검증 가능해지는가?
   - 내 답: <!-- 작성 -->

### 참고한 명령어 후보

```bash
pwd
date
<tool> --version 또는 <tool> -V
tcpdump -nn -r <capture.pcap> | head
tshark -r <capture.pcap> -Y "<filter>" -T fields -e frame.time -e ip.src -e ip.dst
zeek -r <capture.pcap>
jq . <eve.json> | head
```

### 실제 실행한 명령어

```bash
# 여기에 실제 실행한 명령어를 순서대로 적는다.

```

| 명령어 | stdout 요약 | stderr | exit status | 내가 해석한 의미 |
|---|---|---|---:|---|
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

## 5. 사실 / 해석 / 미확인

| 구분 | 작성 내용 |
|---|---|
| Fact |  |
| Fact |  |
| Inference |  |
| Unknown |  |
| Next check |  |

## 6. 프로토콜/트래픽 분석 리포트 초안

오늘 글은 `OSI model과 TCP/IP stack` 주제를 하나의 통신 흐름으로 복원한다. `OSI/TCP-IP 계층 매핑표`에는 필드 이름 나열보다 endpoint 역할, session state, 탐지 조건을 중심으로 쓴다.

```text
관찰 대상: pcap, 로그, curl 출력 등 오늘 사용한 데이터 출처를 적는다.
Endpoint 역할: client/server 또는 attacker/victim 역할을 구분한다.
핵심 필드: 분석에 필요한 protocol field 3개와 의미를 적는다.
상태 흐름: 요청, 응답, 실패, 재시도 중 어떤 전이가 있었는지 적는다.
탐지 조건: 정상 트래픽과 구분할 조건 1개와 오탐 가능성 1개를 적는다.
```

<!-- retrieval-card:start -->
## 6-1. 다음 간격 반복 카드

오늘은 아래 항목을 다음 복습 때 볼 질문으로 남긴다. 실제 답변은 지정된 회차의 `오늘의 간격 반복 복습`에서 노트 없이 작성한다.

| 복습 간격 | 다시 볼 회차 | 카드 질문 |
|---|---|---|
| 1회차 후 | Week 09 Day 02 | `OSI model과 TCP/IP stack`에서 확인한 static evidence 1개와 behavior evidence 1개를 분리해 적는다. 핵심어: OSI model, TCP/IP stack, encapsulation. |
| 3회차 후 | Week 09 Day 04 | `OSI model과 TCP/IP stack`의 behavior hypothesis가 IOC, TTP, detection idea 중 어디로 이어지는지 확인하고 false positive 가능성 1개를 적는다. |
| 7회차 후 | Week 10 Day 02 | `OSI model과 TCP/IP stack` 분석을 report용 5문장으로 압축한다: evidence, behavior, detection, limitation, redaction. |
<!-- retrieval-card:end -->

## 7. 산출물 체크 표

오늘의 산출물 `OSI/TCP-IP 계층 매핑표`은 아래 기준을 통과해야 한다. 체크표는 제출용 채점표가 아니라, 연구원으로서 다음 회차에 넘길 수 있는지 판단하는 기준이다.

| 체크 | 기준 | 통과 조건 |
|---|---|---|
| [ ] | 데이터 출처 | pcap/log/command output의 출처와 수집 조건을 적었다. |
| [ ] | Endpoint 역할 | client/server, attacker/victim 등 역할을 구분했다. |
| [ ] | 필드 해석 | 핵심 protocol field와 값의 의미를 설명했다. |
| [ ] | 흐름 복원 | 요청/응답/오류/재시도 흐름을 시간순으로 재구성했다. |
| [ ] | 탐지 조건 | 탐지 조건과 오탐 가능성을 함께 적었다. |
