---
title: "Week 01 Day 03: 분석 VM 분리와 샘플 취급 원칙"
draft: true
---

# Week 01 Day 03: 분석 VM 분리와 샘플 취급 원칙

## 오늘의 목표

오늘의 초점은 `분석 VM 분리와 샘플 취급 원칙` 전체를 넓게 훑는 것이 아니다. 오늘 끝나면 완성해야 할 산출물은 `개인 분석 랩 안전 체크리스트`이다.

오늘 하지 않을 것: 오늘은 실제 악성코드를 다운로드하거나 실행하지 않는다. 실습 파일은 반드시 무해한 dummy file로 만든다.

1. 분석 VM을 host, 개인 계정, 실제 네트워크와 분리해야 하는 이유를 설명한다.
2. snapshot, network mode, shared folder, clipboard, sample hash를 체크리스트로 정리한다.
3. 실제 악성 샘플이 아니라 dummy file로 샘플 취급 기록 양식을 연습한다.

<!-- learning-support:start -->
## 실행기능 부담을 줄이는 학습 설계

오늘 주제군: 기초/시스템 개념

| 단계 | 오늘의 행동 |
|---|---|
| 시작 5분 | 제목과 키워드 3개를 보고 이미 아는 것/모르는 것 1개씩만 적는다. |
| minimum | 정의 1개와 작은 관찰 1개를 남긴다. |
| standard | 명령어 출력, 그림, 손계산 중 하나를 근거로 붙인다. |
| stretch | 나중에 pwn, RE, DFIR 중 어디서 다시 쓰이는지 연결한다. |
| 중단 후 복귀 | 새 자료를 열지 말고 분석 VM 분리와 샘플 취급 원칙에서 남길 수 있는 가장 작은 근거 1개만 worksheet에 적는다. |

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
- [REMnux Documentation](https://docs.remnux.org/): malware analysis toolkit과 격리된 분석 환경 개요
- [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final): forensic process와 evidence handling 개요
- [CISA - Handling Destructive Malware](https://www.cisa.gov/news-events/news/handling-destructive-malware): containment와 isolation 관점 확인

### Reference
- Malware Unicorn RE101: lab setup and safety sections
- VirtualBox/VMware 문서: NAT, bridged, host-only, shared folder, snapshot 의미 확인
- 보유 서적 Learning Malware Analysis 또는 Practical Malware Analysis: lab safety 관련 절

### 읽기 분량 기준

- 책: 처음 보는 밀도 높은 내용은 6-10쪽, 익숙한 내용은 10-15쪽만 읽는다.
- 강의/문서: 20-30분 분량 또는 공식 문서 1-2개 subsection만 본다.
- 자료를 다 읽지 못해도 읽은 범위, 막힌 문장, 다음 질문을 worksheet에 남기면 성공으로 본다.

## 핵심 키워드

safe lab, VM isolation, snapshot, host-only network, sample handling, evidence, chain of custody

## 반드시 정리할 개념

| 개념 | 오늘 정리할 내용 | 관찰/실습 방법 | 보안 분석 연결 |
|---|---|---|---|
| VM isolation | 분석 대상이 host와 실제 네트워크에 영향을 주지 못하게 경계를 두는 것이다. | network mode, shared folder, clipboard, drag-and-drop 설정을 확인한다. | 동적 분석 중 감염 확산, credential 유출, 실수로 인한 실행을 줄인다. |
| snapshot | 실습 전 상태로 되돌리기 위한 VM 상태 저장 지점이다. | snapshot 이름, 생성 시각, base image 상태를 기록한다. | 오염된 분석 환경을 재사용하지 않게 한다. |
| sample handling | 샘플을 식별, 보관, 이동, 실행하는 절차다. | 파일명, hash, 보관 위치, 암호화 여부, 공개 가능 여부를 기록한다. | 분석 결과가 어떤 파일에 대한 것인지 증명한다. |
| chain of custody | 증거가 누구에게서 누구에게 이동했고 어떻게 보관됐는지 남기는 기록이다. | dummy file로 acquisition time, hash, handler, action을 표로 작성한다. | DFIR 보고서에서 증거 신뢰성을 설명하는 기준이 된다. |

## 실습

- 실제 샘플 대신 `dummy-sample.txt`를 만들고 hash, size, path, 생성 시각을 기록한다.
- 내 분석 환경에서 VM network mode, shared folder, clipboard, snapshot 상태를 확인하고 안전/주의/위험으로 분류한다.
- 샘플을 열기 전, 실행 전, 외부로 내보내기 전 체크해야 할 항목을 10개 이상 만든다.

## 질문형 실습 프롬프트

아래 질문은 답을 외우기 위한 것이 아니라, 오늘 실습 로그를 채우기 위한 질문이다. 질문마다 실제 출력이나 손계산 근거를 하나 이상 붙인다.

1. 내 분석 환경에서 host와 VM 사이에 파일이 이동할 수 있는 경로는 무엇인가?
2. NAT, bridged, host-only, disconnected 중 malware analysis 초보 실습에 더 안전한 선택은 무엇이며 이유는 무엇인가?
3. snapshot을 언제 찍고 언제 되돌려야 하는가?
4. dummy file을 “샘플”처럼 취급한다면 어떤 식별 정보를 남겨야 하는가?
5. 오늘 체크리스트 중 빠지면 가장 위험한 항목 3개는 무엇인가?

### 테스트 해 볼 명령어 후보

```bash
printf "dummy sample only\n" > dummy-sample.txt
file dummy-sample.txt
stat dummy-sample.txt
shasum -a 256 dummy-sample.txt
date -u
ifconfig || ip addr
VBoxManage list vms
```

## 글쓰기 훈련

### 규칙과 이유 쓰기

오늘은 체크리스트 항목을 그냥 나열하지 말고, 각 규칙 뒤에 이유를 붙이는 연습을 한다. “해야 한다”보다 “왜 해야 하는가”를 중심으로 쓴다.

- 내 분석 랩에서 가장 중요한 안전 원칙은 ___ 이다.
- 이 원칙이 필요한 이유는 ___ 때문이다.
- 예를 들어 ___ 설정이 켜져 있으면 ___ 위험이 생긴다.
- 그래서 나는 실습 전 ___ 를 확인한다.
- 아직 확인하지 못한 설정은 ___ 이며, 다음에 ___ 로 검증하겠다.

## 오늘 남길 산출물

- 강의 산출물: `개인 분석 랩 안전 체크리스트`을 작성한다. 형태는 개념 설명, 작은 예제, 보안 연결이 모두 있는 mini lesson이다.
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

1. 분석 VM에서 shared folder와 clipboard가 위험할 수 있는 이유는 무엇인가?
2. snapshot은 백업과 같은가? 다르다면 무엇이 다른가?
3. sample hash를 기록해야 하는 이유는 무엇인가?
4. chain of custody는 malware analysis와 DFIR 중 어디에 더 직접적으로 필요한가?
5. 오늘 내 환경에서 가장 먼저 고쳐야 할 안전 설정은 무엇인가?
