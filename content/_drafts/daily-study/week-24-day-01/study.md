---
title: "Week 24 Day 01: object manager와 handle"
draft: true
---

# Week 24 Day 01: object manager와 handle

## 오늘의 목표

오늘은 `object manager와 handle`을 넓게 훑는 날이 아니라, 작은 입력이나 예제 하나로 관찰하고 기록하는 날이다. 오늘 끝나면 `object/handle 관찰 노트`에 들어갈 최소 근거가 남아 있어야 한다.

오늘 하지 않을 것: Windows 내부 구조 전체를 외우려 하지 말고 오늘 구조체나 artifact 하나만 본다.

1. 오늘 주제인 `object manager와 handle`가 무엇을 다루는지 한 문장으로 적는다.
2. 핵심 키워드 `Windows Internals`, `object manager`, `object namespace`, `handle` 중 3개를 골라 "정의, 관찰 방법, 보안 분석에서의 쓰임" 형태로 정리한다.
3. Primary 자료는 1개만 고르고, 실제로 읽은 범위와 이해 안 된 문장 1개를 남긴다.
4. 실습을 실행한다. 도구가 없으면 설치부터 하지 말고, 필요한 입력/명령어/옵션/예상 출력을 먼저 설계한다.
5. 공부 후 결과물 worksheet `week-24-day-01/index.md`에 `object/handle 관찰 노트` 초안을 채운다.
6. 성공 기준: Windows object/process/memory/registry/log artifact 하나를 구조, 도구 출력, 보안 의미로 연결한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 시스템 보안/커널 경계

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | identity, permission, capability, policy, telemetry 중 하나만 고르고 권한 경계를 표시한다. |
| minimum | 주체, 객체, 권한, 관찰 가능한 로그/도구를 적는다. |
| standard | 정상 동작과 우회/오용 가능성을 비교한다. |
| stretch | hardening 또는 audit/eBPF/ETW 같은 telemetry 보강 아이디어를 쓴다. |
| 중단 후 복귀 | 새 자료를 열지 말고 object manager와 handle에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

## 최신 연구 연결

최근 시스템 보안 연구는 policy, sandbox boundary, kernel telemetry, container/identity state를 권한 모델과 관찰 가능성으로 연결한다.
<!-- learning-support:end -->

## 데일리 작성 가이드

- Warm-up: 이전 회차 문서의 복습 질문 2개에 5-10분만 답한다. Week 01 Day 01처럼 이전 회차 문서가 없으면 오늘 제목과 핵심 키워드를 훑고 "이미 아는 것 3개 / 헷갈리는 것 3개"를 적는다. 공부 중 새로 모르는 용어는 Warm-up이 아니라 Review의 Unknown에 적는다.
- Core reading: 공부 자료 중 primary 1개만 고르고 실제 읽은 범위와 핵심 문장 3개, 이해 안 된 문장 1개를 기록한다.
- Lab: tool version, timezone, input path/hash, exact command, stdout/stderr, exit status를 남긴다.
- Writing: subject, object, privilege boundary, telemetry, hardening을 기준으로 권한 경계를 설명한다.
- Review: 오늘 공부 중 끝까지 모르는 용어와 검증하지 못한 추정을 Unknown에 모으고, 다음 확인 방법을 적는다.

## 공부 자료

아래는 오늘의 후보 자료이다. 전부 읽지 않는다. 하루 2-3시간 기준으로 Primary 1개만 30-45분 읽고, Reference는 막힌 용어를 확인할 때만 5-10분 사용한다.

### Primary 후보
- Windows Internals 7/e Vol.1: processes, threads, jobs, memory, security model 중 오늘 주제
- Windows Internals 7/e Vol.2: kernel, driver, IO, registry, object manager 중 오늘 주제
- 시스인터널스 도구로 윈도우 문제 해결하기: Process Explorer, Procmon, Autoruns, TCPView 관련 절

### Reference
- Microsoft Learn: Windows security model, service control manager, registry, ETW, AMSI, Code Integrity
- WinDbg docs: symbols, module list, process/thread, !handle, !vad
- 윈도우 레지스트리 포렌식: registry hive와 persistence artifact 확인용

### 읽기 분량 기준
- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽을 목표로 한다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 실습 시간이 부족해지면 읽기를 멈추고, 읽은 범위와 모르는 문장을 worksheet에 남긴다.

## 자료 선택 규칙

오늘의 primary 추천: Windows Internals 7/e 또는 Sysinternals 자료에서 오늘 kernel/user artifact 하나만 고른다.
- 아래 공부 자료는 전부 읽으라는 목록이 아니다. 오늘은 primary 자료 1개만 선택한다.
- 책을 고르면 실제 목표 범위를 쪽수나 절 제목으로 적고, 30-45분이 지나면 멈춘다.
- Reference는 실습 중 막히거나 용어가 불명확할 때 5-10분만 확인한다.
- 남은 시간은 실습 로그와 결과물 worksheet 작성에 쓴다.
- 자료를 다 읽지 못해도 결과물 worksheet에 읽은 범위, 모르는 문장, 다음 확인 질문을 남기면 성공으로 본다.

## 핵심 키워드

Windows Internals, object manager, object namespace, handle, access mask, kernel object, reference count

## 반드시 정리할 개념

아래 표는 정답을 미리 외우기 위한 표가 아니다. 오늘 읽은 자료와 실습 출력으로 각 질문에 답하면서 결과물 worksheet에 내 말로 정리한다.

| 개념 | 오늘 확인할 질문 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| Windows Internals | `Windows Internals`가 Windows 내부 구조나 telemetry에서 어떻게 관찰되는가? | Sysinternals, WinDbg, event log, registry artifact 중 하나로 확인한다. | malware persistence, DFIR timeline, EDR telemetry, privilege boundary 해석에 필요하다. |
| object manager | `object manager`가 Windows 내부 구조나 telemetry에서 어떻게 관찰되는가? | Sysinternals, WinDbg, event log, registry artifact 중 하나로 확인한다. | malware persistence, DFIR timeline, EDR telemetry, privilege boundary 해석에 필요하다. |
| object namespace | `object namespace`가 Windows 내부 구조나 telemetry에서 어떻게 관찰되는가? | Sysinternals, WinDbg, event log, registry artifact 중 하나로 확인한다. | malware persistence, DFIR timeline, EDR telemetry, privilege boundary 해석에 필요하다. |
| handle | `handle`가 Windows 내부 구조나 telemetry에서 어떻게 관찰되는가? | Sysinternals, WinDbg, event log, registry artifact 중 하나로 확인한다. | malware persistence, DFIR timeline, EDR telemetry, privilege boundary 해석에 필요하다. |
| access mask | `access mask`가 Windows 내부 구조나 telemetry에서 어떻게 관찰되는가? | Sysinternals, WinDbg, event log, registry artifact 중 하나로 확인한다. | malware persistence, DFIR timeline, EDR telemetry, privilege boundary 해석에 필요하다. |
| kernel object | `kernel object`가 Windows 내부 구조나 telemetry에서 어떻게 관찰되는가? | Sysinternals, WinDbg, event log, registry artifact 중 하나로 확인한다. | malware persistence, DFIR timeline, EDR telemetry, privilege boundary 해석에 필요하다. |
| reference count | `reference count`가 Windows 내부 구조나 telemetry에서 어떻게 관찰되는가? | Sysinternals, WinDbg, event log, registry artifact 중 하나로 확인한다. | malware persistence, DFIR timeline, EDR telemetry, privilege boundary 해석에 필요하다. |

## 실습

오늘 실습은 크게 벌리지 않는다. 아래 항목 중 오늘 산출물에 필요한 최소 범위만 수행하고, 실패하면 실패 로그를 그대로 남긴다.

- Windows artifact 또는 문서 예시 하나를 골라 field와 의미를 정리한다.
- 가능하면 Sysinternals/WinDbg/Event Viewer 출력 1개를 근거로 남긴다.
- user-mode 관찰과 kernel/internal 개념을 구분한다.

## 질문형 실습 프롬프트

아래 명령어는 모두 실행하라는 뜻이 아니다. 오늘 산출물에 필요한 것만 고르고, 환경에 없는 도구는 설치부터 하지 말고 어떤 역할의 도구가 필요한지만 적는다.

### 테스트 해 볼 명령어 후보

```bash
date
<tool> --version 또는 <tool> -V
Get-Process | Select-Object -First 5
Get-Service | Select-Object -First 5
wevtutil qe System /c:5 /f:text
reg query <key>
```

### 스스로 답할 질문

1. `object manager와 handle`을 확인하기 위한 가장 작은 입력 파일, 샘플, 코드, 로그, 보고서 조각은 무엇인가?
2. 그 대상을 처음 확인할 때 어떤 명령어, 도구, 문서 항목을 먼저 봐야 할까?
3. 출력에 상세 정보, 줄 번호, hex view, filter, field, version 정보를 추가하려면 어떤 옵션이나 기록 항목이 필요할까?
4. user-mode 도구 출력만으로 확인 가능한 것과 kernel/internal 지식으로 추정한 것은 무엇인가?
5. 오늘 결과를 블로그 글로 바꿀 때 공개하면 안 되는 경로, 샘플, 토큰, exploit detail, 개인정보는 무엇인가?

## 오늘 남길 산출물

- 강의 산출물: `object/handle 관찰 노트`을 작성한다. 형태는 subject/object/boundary/telemetry가 있는 privilege-boundary note이다.
- 실습 증거: 오늘 사용한 명령, 로그, trace, screenshot, code diff 중 해당 주제에 맞는 근거를 최소 2개 남긴다.
- 글쓰기 산출물: subject, object, privilege boundary, telemetry, hardening을 기준으로 권한 경계를 설명한다.
- 공개 판단: 공개 가능한 주장과 비공개로 남겨야 할 세부사항을 각각 1개 이상 표시한다.

## 산출물 체크 표

| 체크 | 항목 | 기준 |
|---|---|---|
| [ ] | Subject/Object | 권한을 행사하는 주체와 보호 대상 객체를 구분했다. |
| [ ] | Boundary | user/kernel, integrity, namespace, capability 경계를 표시했다. |
| [ ] | Transition | syscall/API/driver/policy/token/hook 흐름을 설명했다. |
| [ ] | Telemetry | ETW/audit/eBPF/log/dump 등 관찰 가능한 신호를 적었다. |
| [ ] | Hardening | 방어 설정의 효과와 우회 가능성을 함께 평가했다. |

## 복습 질문

1. 오늘 주제 `object manager와 handle`를 한 문장으로 설명하면 무엇인가?
2. `Windows Internals`는 어떤 입력, 출력, field, instruction, artifact에서 확인했는가?
3. `object manager`와 `object namespace`를 혼동하면 어떤 분석 오류가 생길 수 있는가?
4. Windows object, handle, token, registry, event log를 구분하면 malware/DFIR 분석이 어떻게 선명해지는가?
5. 오늘 사용한 명령어, 옵션, 도구 version 중 재현성에 꼭 필요한 것은 무엇인가?
6. 오늘 결론에서 아직 Unknown으로 남겨야 하는 것은 무엇인가?
7. 오늘 산출물인 "object/handle 관찰 노트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
