---
title: "주간 연구 루프와 Target Ownership"
draft: true
---

# 주간 연구 루프와 Target Ownership

이 문서는 40주 로드맵을 "자료 학습"에서 "보안 연구 습관"으로 끌어올리기 위한 운영 규칙이다. 핵심은 Week 38-40에 처음 연구를 시작하지 않고, Week 12부터 아주 작은 advisory/CVE/paper reading을 반복하는 것이다.

## 연구 루프 시작 시점

| 시점 | 루프 | 산출물 |
|---|---|---|
| Week 12부터 | 매주 advisory, CVE, paper, vendor patch note 중 1개를 30분 읽는다. | 5줄 research note |
| Week 18부터 | malware/RE 보고서에 비슷한 family, technique, detection idea 1개를 비교한다. | family/technique 비교 3줄 |
| Week 23부터 | fuzzing, crash triage, patch diffing 결과를 variant hypothesis로 남긴다. | variant hypothesis 1개 |
| Week 30부터 | DFIR case report에 탐지 가능한 telemetry와 없는 telemetry를 구분한다. | telemetry gap 표 |
| Week 38-40 | 지금까지 쌓은 note 중 1-2개를 advisory-grade report로 다듬는다. | portfolio-grade report |

## 5줄 Research Note 형식

매주 길게 쓰지 않는다. 아래 5줄이면 충분하다.

| 줄 | 작성 항목 | 질문 |
|---|---|---|
| 1 | 대상과 버전 | 어떤 제품/라이브러리/버전의 이야기인가? |
| 2 | root cause | 버그의 직접 원인은 무엇인가? 아직 모르면 가설이라고 표시한다. |
| 3 | primitive/impact | crash, info leak, arbitrary write, RCE, LPE 중 무엇과 연결되는가? |
| 4 | patch/diff | 패치가 입력 검증, bounds check, lifetime, 권한 검사를 어떻게 바꿨는가? |
| 5 | detection/variant idea | 비슷한 버그를 어디서 더 찾거나 어떻게 탐지할 수 있는가? |

## Paper/Advisory 읽기 체크리스트

최신 논문을 읽을 때도 논문 요약을 길게 쓰지 않는다. 매주 30분 안에 아래 네 칸만 채운다.

| 항목 | 작성 기준 |
|---|---|
| technique | 논문이 실제로 쓰는 방법을 하나만 고른다. 예: firmware fuzzing, binary type recovery, malware characterization, memory artifact carving |
| prerequisite | 이 방법을 이해하려면 오늘 커리큘럼의 어떤 기초가 필요한지 적는다. 예: ABI, CFG, timestamp, kernel object |
| evidence | 저자가 효과를 주장할 때 사용한 증거를 적는다. 예: coverage 증가, crash 수, precision/recall, case study |
| curriculum action | 현재 주차에 추가할 행동을 1개만 쓴다. 예: "Week 23 worksheet에 minimized input 필드 유지" |

도메인별로 읽는 관점은 다르다.

| 도메인 | 30분 안에 보는 질문 |
|---|---|
| 시스템 해킹/퍼징 | target, harness, corpus, oracle, crash triage, patch/variant 중 무엇이 핵심인가? |
| 리버싱 | decompiler가 복원한 추정과 disassembly/dynamic trace로 확인한 사실을 구분했는가? |
| 악성코드 | family attribution보다 behavior evidence, config, C2, detection data source가 분리되어 있는가? |
| DFIR | artifact provenance, timestamp 기준, acquisition 한계, confidence가 명시되어 있는가? |
| 시스템 보안 | 권한 경계, identity/capability, policy, observable telemetry가 연결되어 있는가? |

## Target Ownership 후보

40주 안에서 한 대상을 완전히 소유하려고 하면 부담이 크다. 대신 Week 23 이후부터 아래 후보 중 하나를 관찰 target으로 고르고, 41주 이후 주력 연구축 후보로 평가한다.

| 후보 | 장점 | 40주 안의 목표 |
|---|---|---|
| file parser, image parser, archive parser | fuzzing, crash triage, patch diffing 입문에 좋다. | toy target과 작은 OSS target 1개를 비교한다. |
| network daemon, protocol parser | pwn, RE, network forensics가 연결된다. | protocol input, state, logging 지점을 정리한다. |
| open-source security tool | 코드 접근과 responsible disclosure 연습이 가능하다. | issue/advisory reading과 patch diff를 누적한다. |
| Linux kernel subsystem | 장기적으로 깊은 연구와 연결된다. | Week 25 이후 subsystem map과 syscall/IOCTL 경계만 정리한다. |
| firmware or embedded parser | RE, emulation, pwn, IoT가 연결된다. | 40주 core에서는 후속 후보로만 남기고, Week 36 runtime 분석 또는 후속 12주에서 다룬다. |

## Advisory-grade Report 기준

Week 38-40의 목표는 실제 CVE 등록이 아니라 공개 가능한 수준의 재현 보고서 초안이다. CVE 등록은 vendor, CNA, 공개 일정, 중복 여부의 영향을 받으므로 40주 완료 조건으로 두지 않는다.

Advisory-grade report에는 최소한 아래 항목이 있어야 한다.

- affected product/version
- environment and version pinning
- root cause hypothesis and evidence
- expected result and observed result
- reproduction steps
- impact and limitation
- patch or mitigation idea
- CVSS v4.0 vector 연습
- disclosure boundary and redaction note
- variant/detection hypothesis

## 읽기 출처 우선순위

- 1순위: USENIX Security, NDSS, IEEE S&P, ACM CCS, DFRWS, RAID, ACSAC, DIMVA의 accepted paper/proceedings.
- 2순위: vendor advisory, CNA/CVE record, patch note, maintainer commit, official documentation.
- 3순위: 블로그와 writeup. 단, 논문/패치/공식 문서로 다시 확인한다.

최신 연구를 커리큘럼에 반영할 때는 "새 주제를 계속 추가"하지 않는다. 먼저 현재 주차의 산출물 필드가 충분한지 본다. 예를 들어 firmware fuzzing 논문을 읽었다면 Week 23에 firmware 한 주를 추가하기보다, 현재 fuzzing worksheet에 `emulation state`, `interrupt/event source`, `coverage oracle` 같은 확인 질문이 필요한지 판단한다.
