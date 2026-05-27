---
title: "커리큘럼 검증 패킷"
draft: true
---

# 커리큘럼 검증 패킷

기준일: 2026-05-27

이 문서는 [[_drafts/study-plan/security-study-roadmap/index|40주 보안 학습 로드맵]]을 다른 AI 모델, 교수님, 현직자, 연구원에게 검증받기 위한 요약본이다. 기존의 `curriculum-benchmark`, `curriculum-adjustment`, `system-security-supplement`에 흩어져 있던 내용을 합쳐 중복을 줄이고, 남은 별도 문서의 역할을 분명히 한다.

## 문서 구조 정리

| 문서 | 역할 | 유지 이유 |
|---|---|---|
| [[_drafts/study-plan/security-study-roadmap/index|40주 보안 학습 로드맵]] | 전체 주차, 도메인 커버리지, 운영 방식 | 검토자가 가장 먼저 볼 본문 |
| [[_drafts/study-plan/security-study-roadmap/resource-catalog/index|공부 자료 카탈로그]] | 책, 강의, 문서, 실습 사이트와 사용 주차 | 자료 목록은 자주 바뀌므로 본문과 분리 |
| [[_drafts/study-plan/security-study-roadmap/crypto-math-foundation/index|암호학 수학 기초 로드맵]] | 암호학 전에 필요한 중등-고등 수학, 이산수학 gate | 수학 선행 점검은 학습 속도에 따라 별도 운영 필요 |
| [[_drafts/daily-study/index|daily-study]] | Week NN Day NN 단위의 매일 학습 문서 | 하루 문서만 보고 공부할 수 있는 실행 계획 |
| 이 문서 | 외부 검증용 기준표, 위험 평가, 질문 목록 | 중복 메모를 통합한 검토 패킷 |

삭제/흡수한 문서:

- `curriculum-adjustment`: 보강 이력과 산출물 기준은 이 문서의 "정리 결정"과 "산출물 평가 기준"으로 흡수한다.
- `system-security-supplement`: Windows/Linux system security 보강 내용은 본 로드맵 Week 24-25와 이 문서의 coverage matrix로 흡수한다.
- `curriculum-benchmark`: 기준 대조, 직무 요구, 후속 심화 내용은 이 문서로 통합한다.

## 목표 직무

핵심 목표는 다음 4개 직무군의 공통 기반을 만든 뒤, 후반부에 포트폴리오 산출물로 증명하는 것이다.

| 직무군 | 커리큘럼에서 보는 핵심 역량 |
|---|---|
| 리버스 엔지니어/악성코드 분석가 | PE/ELF/Mach-O, x86/x64/ARM assembly, IDA/Ghidra, debugger, static/dynamic triage, unpacking, config extraction, YARA/Sigma |
| 시스템 해킹/취약점 연구자 | C, ABI, stack/heap, exploit primitive, mitigation, fuzzing, symbolic execution, patch diffing, N-day reproduction, CVE/CVSS/reporting |
| 디지털 포렌식/IR 분석가 | evidence handling, filesystem, Windows artifacts, memory forensics, network forensics, timeline, cloud/container/identity scope, incident report |
| Linux kernel/system security 연구 지망 | process, scheduler, VFS, syscall, driver/IOCTL, capability, namespace, cgroup, seccomp, LSM, eBPF, hardening |

## 40주 적정성 판단

결론: 40주는 "넓은 기반 + 실습 산출물 + 포트폴리오 초안"을 만들기에는 적절하지만, 각 분야의 심화 전문가 과정을 모두 끝내기에는 짧다.

| 학습 가능 시간 | 판정 | 운영 방식 |
|---|---|---|
| 주 15시간 이상 | 40주 유지 가능 | daily-study를 그대로 수행하고, Week 37-40 산출물을 반드시 만든다. |
| 주 10-14시간 | 40주 가능하나 빡빡함 | 매주 핵심 실습 1개와 report만 남기고 stretch 실습은 backlog로 보낸다. |
| 주 6-9시간 | 52주 권장 | Week 11-18, 19-25, 26-33을 각각 1.3배로 늘린다. |
| 주 5시간 이하 | 범위 축소 권장 | 리버싱/악성코드/DFIR/시스템해킹 중 2개 축으로 줄이고 나머지는 개론으로 둔다. |

40주를 유지하려면 매일 모든 자료를 깊게 읽는 방식은 맞지 않다. 매일은 "핵심 자료 1개 + 실습 1개 + 복습 질문"으로 제한하고, 보유 서적은 해당 주차의 모르는 개념을 메우는 기준서로 쓴다.

## 도메인 커버리지

| 도메인 | 반영 위치 | 판정 |
|---|---|---|
| 컴퓨터 구조 | Week 01-03, 05, 35 | bit/byte, 진수, signed/unsigned, two's complement, endian, register, ABI, cache/TLB까지 포함. 적절 |
| 운영체제 | Week 04-05, 08, 24-25 | process/thread, VM, filesystem, Windows Internals, Linux kernel이 모두 있음. 적절 |
| 네트워크 | Week 09-10, 18, 29 | TCP/IP, DNS/HTTP/TLS, PCAP, IDS, C2, network forensics 포함. 실무 IR 관점에서 적절 |
| C/컴파일러/언어 | Week 06-07, 11, 36 | C memory model, linker/loader, IR/CFG/SSA, runtime reversing 포함. 적절 |
| 수학/알고리즘 | Week 01-02, 31-35 | 중등-고등 수학 gate와 discrete math를 뒤늦지 않게 연결. 적절하나 학습자 수준에 따라 52주화 후보 |
| 암호학 | Week 31-33, 35 | encoding/hash/HMAC, symmetric/public-key, TLS, KDF, CSPRNG, malware crypto 포함. 깊이는 입문-응용 수준 |
| 리버싱 | Week 11-13, 17, 36-37 | IDA/Ghidra, debugging, AI-assisted analysis, obfuscation, runtime 분석 포함. 적절 |
| 악성코드 분석 | Week 14-18, 37 | taxonomy, safe lab, static/dynamic triage, detection, persistence, injection, anti-analysis, C2, report 포함. 적절 |
| 시스템 해킹 | Week 19-23, 38-39 | stack/heap/format string/integer/OOB/ROP/fuzzing/N-day/reporting 포함. 40주 안에서는 폭이 넓으므로 핵심 실습 선별 필요 |
| 디지털 포렌식 | Week 08, 26-30, 37, 40 | filesystem, Windows artifact, memory, network, cloud/container/mobile, IR report 포함. 적절 |
| 시스템 보안 | Week 05, 23-25, 30, 38 | Windows token/ACL/UAC/CI, Linux capability/seccomp/LSM/eBPF, container isolation 포함. 적절 |

## 외부 기준 대조

### CS/직무 프레임워크

| 기준 | 로드맵 반영 |
|---|---|
| ACM/IEEE/AAAI CS2023 | architecture, OS, networking, programming languages, algorithms, security가 모두 포함되어 있다. |
| NIST NICE Framework | task, knowledge, skill을 "개념, 실습, 산출물"로 분리한 구조와 잘 맞는다. |
| 상위권 CS core | systems, OS, architecture, algorithms, discrete math, programming/debugging/reporting 기반을 먼저 배치했다. |

### BoB/헌팅마스터/SANS 대조

| 기준 항목 | 반영 위치 | 판정 |
|---|---|---|
| BoB 취약점 분석: 리버스 엔지니어링, 취약점 이해, 네트워크, 운영체제 원리 | Week 03-13, 19-25 | 반영 |
| BoB 디지털 포렌식: 포렌식 기초, 침해사고 시스템 분석, 시스템 분석 절차, 사례 연구 | Week 08, 26-30, 37, 40 | 반영 |
| IDA/GDB, static/dynamic reversing | Week 12-13 | 반영 |
| AI-assisted binary analysis, IDA/Ghidra MCP | Week 12 Day 07, Week 36 | 반영. 단, hallucination 검증 루틴 필수 |
| Stack exploitation, NX/ASLR/Canary/PIE, ROP/ret2libc | Week 19, 22, 38 | 반영 |
| Heap exploitation, glibc malloc, UAF, double free, tcache | Week 21, 38 | 반영 |
| IoT firmware, binwalk, ARM/MIPS, QEMU | Week 11 Day 07, Week 36 | 맛보기 수준. 심화는 후속 12주 권장 |
| AFL++/libFuzzer, harness, coverage-guided fuzzing | Week 23, 38 | 반영 |
| N-day, patch diffing, PoC 안정화 | Week 23, 38-39 | 반영 |
| CVE/CVSS, KISA/KVE, responsible disclosure | Week 39-40 | 반영 |
| SANS FOR500식 Windows forensic artifact | Week 26-27, 30 | 반영 |
| SANS FOR508식 IR/threat hunting/timeline | Week 29-30, 37, 40 | 반영 |
| SANS FOR610식 malware analysis | Week 14-18, 37 | 반영 |

## 부족하거나 보강할 후보

이 항목들은 "누락"이라기보다 외부 검토자에게 확인받을 가치가 있는 부분이다.

| 항목 | 현재 상태 | 권장 결정 |
|---|---|---|
| Cloud/SaaS IR | Week 30에서 CloudTrail, Entra, GCP, K8s audit를 다룸 | 40주 core에서는 scope 수준 유지. IR 직무 목표가 강하면 후속 12주에 FOR509식 cloud forensics 추가 |
| SIEM/KQL/Splunk | Sigma/Zeek/Suricata 중심, KQL/Splunk는 약함 | 기업 SOC/IR 목표라면 Week 30 또는 Week 40 산출물에 KQL/Splunk 변환 1개 추가 |
| Web/AppSec bug bounty | 실전 버그바운티는 Week 39-40 report 관점 | 사용자 목표가 RE/pwn/DFIR이므로 core 확장은 불필요. Web 목표가 생기면 별도 트랙 |
| Mobile forensics | Week 30에서 Android/iOS sandbox, SQLite, plist 입문 | 전문 포렌식 목표면 후속 심화 필요 |
| IoT/firmware exploitation | Week 11 맛보기와 Week 36 runtime 연결 | 헌팅마스터 A트랙을 강하게 목표로 하면 후속 심화에서 2-3주 배정 |
| Kernel exploit | Week 23/25에서 intro와 security boundary | 실전 kernel exploit 개발은 후속 12주로 분리하는 것이 맞음 |
| Secure coding/testing | Week 06, 20, 38에 흩어져 있음 | 취약점 연구 산출물의 patch/regression test 기준을 Week 38에서 강제 |
| 연구 논문 읽기 | Week 39 중심 | Week 12, 23, 38에도 paper/advisory reading protocol을 짧게 재사용 가능 |
| 법/윤리/공개 범위 | Week 14, 39, 40에 있음 | 매 프로젝트 산출물에 scope, permission, redaction 항목을 고정 |

## 과한 부분과 줄이는 기준

| 과부하 후보 | 이유 | 줄이는 방법 |
|---|---|---|
| Week 23 | fuzzing, symbolic execution, taint, patch diffing, kernel exploit intro가 한 주에 몰림 | 핵심은 AFL++/libFuzzer crash triage. symbolic/taint/kernel은 개념+미니 실습으로 제한 |
| Week 30 | mobile, cloud, container, identity forensics가 한 주에 몰림 | incident scoping 관점으로만 다루고 깊은 platform forensics는 후속 |
| Week 31-35 | 암호학, 수학, 알고리즘이 연속으로 무거움 | 암호학 수학 gate를 통과하지 못하면 Week 31-35를 7주로 늘림 |
| Week 36 | 여러 언어 runtime과 reversing이 넓음 | C++/.NET/Java 중 2개를 필수, Go/Rust/Swift는 관찰표 수준 |
| Week 38-40 | exploit project, CVE reporting, portfolio가 모두 있음 | 실제 CVE 등록이 아니라 "재현 가능한 advisory 초안"을 목표로 제한 |

## 산출물 평가 기준

| 산출물 | 완료 기준 |
|---|---|
| Tool note | 목적, 입력, 출력, workflow, 해석 기준, 한계, 실제 실습 로그 포함 |
| Analysis report | executive summary, scope, facts, inference, timeline, technical details, IOC/detection, confidence/caveat, remediation 포함 |
| Pwn writeup | root cause, exploit primitive, mitigation, reliability, patch/detection 관점 포함 |
| DFIR report | artifact 나열이 아니라 timeline, evidence confidence, scope, impact, decision point 포함 |
| Detection rule | data source, FP/FN, test event, tuning 기준, lifecycle 포함 |
| Research reproduction | version pinning, environment, expected/observed result, failure analysis, ethical boundary 포함 |

## 외부 검토자에게 보낼 질문

### 교수님/연구자에게

1. CS 기초 배치가 보안 실습 전에 충분한가?
2. 수학/알고리즘이 암호학과 취약점 분석에 필요한 만큼 들어가 있는가?
3. Week 23, 31-35, 38-40의 난이도 상승이 학습자에게 과도하지 않은가?
4. 연구 재현과 보고서 작성 기준이 학부/대학원 준비 관점에서 충분한가?
5. 후속 12주로 뺀 kernel exploit, IoT firmware, cloud forensics의 분리가 타당한가?

### 현직자/IR/DFIR 분석가에게

1. Week 26-30의 artifact 범위가 실제 incident triage에 충분한가?
2. Windows artifact와 memory/network/cloud scope의 순서가 실무 흐름과 맞는가?
3. 보고서 산출물의 scope, confidence, caveat, remediation 기준이 실무 리뷰에 충분한가?
4. SIEM/KQL/Splunk, Velociraptor, EDR telemetry를 40주 core에 더 넣어야 하는가?

### 악성코드 분석가/리버서에게

1. Week 11-18의 PE/ELF, debugger, unpacking, C2, detection 순서가 자연스러운가?
2. AI-assisted analysis를 Week 12 Day 07에 넣은 것이 너무 빠르거나 늦지 않은가?
3. Linux malware와 Windows malware의 비율이 적절한가?
4. Week 37의 통합 프로젝트 산출물 기준이 junior analyst 포트폴리오로 충분한가?

### 취약점 연구자/시스템 해커에게

1. Week 19-23의 stack -> format/integer/OOB -> heap -> ROP -> fuzzing 순서가 적절한가?
2. kernel exploit을 core에서 intro로만 둔 결정이 타당한가?
3. N-day reproduction과 CVE reporting을 Week 38-40에 배치한 것이 현실적인가?
4. patch diffing, variant analysis, PoC reliability 기준이 충분한가?

### 다른 AI 모델에게

1. 커버리지 매트릭스 기준으로 빠진 핵심 개념이 있는가?
2. 중복되거나 너무 세분화된 주차가 있는가?
3. 40주 안에서 학습 부하가 지나치게 높은 구간은 어디인가?
4. 목표 직무별로 반드시 줄이거나 늘릴 주제가 있는가?
5. daily-study 문서가 독립 학습 단위로 충분히 구체적인가?

## 최종 판단

현재 40주 커리큘럼은 "입문자에서 junior 수준의 리버싱/악성코드/DFIR/시스템해킹 공통 기반을 만드는 장기 로드맵"으로는 적절하다. 다만 분야별 전문 심화까지 40주 안에 끝내는 계획은 아니다. 40주 뒤에는 아래 중 하나로 갈라야 한다.

| 방향 | 후속 추천 |
|---|---|
| 취약점 연구/시스템 해킹 | Linux kernel, syzkaller, driver/IOCTL, browser/container sandbox, advanced fuzzing |
| 악성코드/리버싱 | Windows internals 심화, unpacking, language runtime, malware automation, detection engineering |
| DFIR/IR | enterprise triage, Velociraptor, cloud/SaaS logs, SIEM/KQL/Splunk, threat hunting case study |
| 연구/대학원 | 논문 읽기, symbolic execution, program analysis, formal methods, measurement/reporting |

따라서 40주는 유지하되, 매주 "필수 산출물"과 "stretch 실습"을 분리해서 운영하는 것이 가장 현실적이다.

## 참고 링크

- [NIST NICE Framework](https://www.nist.gov/nice/framework)
- [ACM/IEEE/AAAI CS2023](https://csed.acm.org/)
- [BoB 공식 트랙 안내](https://www.kitribob.kr/learn/curriculum)
- [SANS FOR500 Windows Forensic Analysis](https://www.sans.org/cyber-security-courses/windows-forensic-analysis)
- [SANS FOR508 Advanced Incident Response, Threat Hunting, and Digital Forensics](https://www.sans.org/cyber-security-courses/advanced-incident-response-threat-hunting-training)
- [SANS FOR610 Reverse-Engineering Malware](https://www.sans.org/cyber-security-courses/reverse-engineering-malware-malware-analysis-tools-techniques)
- [pwn.college](https://pwn.college/)
- [OpenSecurityTraining2](https://p.ost2.fyi/)
