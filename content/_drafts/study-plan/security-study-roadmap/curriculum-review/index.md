---
title: "커리큘럼 검증 패킷"
draft: true
---

# 커리큘럼 검증 패킷

기준일: 2026-05-28

이 문서는 [[_drafts/study-plan/security-study-roadmap/index|40주 보안 학습 로드맵]]을 다른 AI 모델, 교수님, 현직자, 연구원에게 검증받기 위한 요약본이다. 기존의 `curriculum-benchmark`, `curriculum-adjustment`, `system-security-supplement`에 흩어져 있던 내용을 합쳐 중복을 줄이고, 남은 별도 문서의 역할을 분명히 한다.

## 문서 구조 정리

| 문서 | 역할 | 유지 이유 |
|---|---|---|
| [[_drafts/study-plan/security-study-roadmap/index|40주 보안 학습 로드맵]] | 전체 주차, 도메인 커버리지, 운영 방식 | 검토자가 가장 먼저 볼 본문 |
| [[_drafts/study-plan/security-study-roadmap/resource-catalog/index|공부 자료 카탈로그]] | 책, 강의, 문서, 실습 사이트와 사용 주차 | 자료 목록은 자주 바뀌므로 본문과 분리 |
| [[_drafts/study-plan/security-study-roadmap/crypto-math-foundation/index|암호학 수학 기초 로드맵]] | 암호학 전에 필요한 중등-고등 수학, 이산수학 gate | 수학 선행 점검은 학습 속도에 따라 별도 운영 필요 |
| [[_drafts/study-plan/security-study-roadmap/research-loop/index|주간 연구 루프와 Target Ownership]] | Week 12 이후 advisory/CVE/paper reading, Week 23 이후 target ownership 준비 | 연구 루프를 Week 38-40에 몰지 않기 위해 분리 |
| [[_drafts/daily-study/writing-guide/index|Daily Study 작성 가이드]] | 매일 무엇을 써야 하는지, 글쓰기 훈련을 어떻게 할지 안내 | 글쓰기 취약점을 매일 작은 루틴으로 보완 |
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

## 채용/교육사업 검증 기준

이 커리큘럼은 40주 뒤 학습자를 월 10,000 USD 비용을 들여 junior security researcher로 고용한다고 가정하고 평가한다. 기준은 "많이 아는가"가 아니라 "작은 연구 과제를 재현 가능하게 끝내고, 근거와 한계를 설명할 수 있는가"이다.

| 기준 | 통과 조건 | 탈락 신호 |
|---|---|---|
| 재현 가능한 기록 | target/version, input/hash, exact command, stdout/stderr, exit status가 남아 있다. | 결과만 있고 환경, 입력, 실패 로그가 없다. |
| 연구 질문 축소 | 큰 주제를 하루 2-3시간 안에 끝나는 실험 질문으로 줄인다. | 자료를 계속 추가하지만 산출물이 없다. |
| 근거와 해석 분리 | Fact, Inference, Unknown, Next check가 분리되어 있다. | "될 것 같다", "아마"가 report의 결론이 된다. |
| 분야별 산출물 | pwn, RE, malware, DFIR, kernel/system마다 다른 체크 기준을 통과한다. | 모든 날짜가 같은 체크표와 같은 블로그 초안을 반복한다. |
| 공개 가능성 | public claim, private evidence, redaction boundary를 구분한다. | exploit detail, 샘플 정보, 내부 경로, 고객 정보를 공개 글에 섞는다. |
| 교육 재현성 | 다른 학습자가 같은 worksheet로 같은 수준의 산출물을 만들 수 있다. | 튜터의 구두 설명 없이는 무엇을 해야 하는지 알 수 없다. |

## 40주 적정성 판단

결론: 40주는 "넓은 기반 + 실습 산출물 + 포트폴리오 초안 + 연구 루프의 시작"을 만들기에는 적절하지만, 각 분야의 심화 전문가 과정을 모두 끝내기에는 짧다. 40주 목표는 Pwnie급 연구자의 완성이 아니라, 보안 연구자가 되기 위한 공통 언어와 재현 가능한 기록 습관을 만드는 것이다.

| 학습 가능 시간 | 판정 | 운영 방식 |
|---|---|---|
| 주 15시간 이상 | 40주 유지 가능 | daily-study를 그대로 수행하고, Week 37-40 산출물을 반드시 만든다. |
| 주 10-14시간 | 40주 가능하나 빡빡함 | 매주 핵심 실습 1개와 report만 남기고 stretch 실습은 backlog로 보낸다. |
| 주 6-9시간 | 52주 권장 | Week 11-18, 19-25, 26-33을 각각 1.3배로 늘린다. |
| 주 5시간 이하 | 범위 축소 권장 | 리버싱/악성코드/DFIR/시스템해킹 중 2개 축으로 줄이고 나머지는 개론으로 둔다. |

40주를 유지하려면 매일 모든 자료를 깊게 읽는 방식은 맞지 않다. 매일은 "핵심 자료 1개 + 실습 1개 + 산출물 1개 + 짧은 글쓰기 1개"로 제한하고, 보유 서적은 해당 주차의 모르는 개념을 메우는 기준서로 쓴다.

## 성인 ADHD 학습자 기준 평가

이 평가는 학습 설계 관점이며 의료적 진단이나 치료 조언이 아니다. 최신 성인 ADHD 연구와 CBT/실행기능 중재 문헌을 기준으로 보면, 이 커리큘럼의 위험은 지식 범위보다 "시작 지연, 시간 추정 실패, 과도한 자료 선택, 산출물 미완성"이다. 따라서 자료를 더 많이 넣는 것보다 하루 실행 단위를 더 작게 만드는 것이 우선이다.

| 위험 | 반영한 조정 | 완료 판정 |
|---|---|---|
| 시작 전 압도감 | Warm-up을 10-15분, 첫 행동을 5분 이하로 제한 | 제목, 키워드, 이전 회차 질문 2개만 해도 시작 성공 |
| 자료 선택 과부하 | Primary 1개, Reference 1-2개만 허용 | 읽은 범위와 모르는 문장 1개 기록 |
| 작업기억 부담 | worksheet에 fact/inference/unknown/next check를 분리 | 머릿속 결론 대신 표에 남김 |
| 긴 집중 유지 어려움 | Core reading 30-45분, Lab 60-90분, Output 30-40분으로 분할 | 타이머가 끝나면 다음 단계로 이동 |
| 완벽주의와 중단 | minimum/standard/stretch 기준 도입 | minimum 산출물이 있으면 루틴 유지로 인정 |
| 복습 누락 | 1회차/3회차/7회차 retrieval card를 worksheet에 추가 | 답을 보기 전에 먼저 회상 |

성인 ADHD 학습자에게 가장 적절한 공부 형식은 "긴 강의 시청 + 긴 요약"이 아니라 "짧은 회상 -> 한정된 읽기 -> 작은 실습 -> 근거 있는 산출물 -> 다음 질문"의 반복이다. 특히 보안 학습은 개념 이해만으로 끝나지 않으므로, 매일 명령어/로그/샘플/보고서 조각 중 하나를 남기는 방식이 적합하다.

## 최신 보안 연구 반영 평가

2025년 주요 보안 학회와 디지털 포렌식 연구 흐름을 기준으로 보면, 현재 커리큘럼은 시스템 해킹, 리버싱, 악성코드 분석, DFIR의 큰 뼈대는 갖추고 있다. 부족한 부분은 주차 추가보다 "매일 어떤 증거를 남겨야 하는가"에 있다. 그래서 daily guide와 worksheet에 도메인별 산출물 질문을 추가한다.

| 분야 | 최근 많이 쓰이는 기법 | 필요한 기초 | 현재 반영 | 보강 판단 |
|---|---|---|---|---|
| 시스템 해킹 | coverage-guided/directed fuzzing, sanitizer triage, patch diffing, variant hypothesis, exploit reliability, kernel bug class mapping | C, ABI, memory layout, compiler/linker, OS mitigation, kernel/user boundary, 자료구조 | Week 06-07, 19-25, 38-39 | Week 23/38 worksheet에 reproducer, root cause, primitive, mitigation, variant 가설을 강제 |
| 리버싱 | type recovery, xref/function boundary 검증, dynamic trace, AI 보조 가설 검증 | assembly, executable format, calling convention, CFG, OS API | Week 11-13, 36-37 | AI 추정은 근거 없는 결론으로 쓰지 않고 disassembly/debugger로 검증 |
| 악성코드 분석 | static/dynamic triage, anti-analysis, unpacking, config extraction, ATT&CK/detection mapping | OS internals, process/file/registry/network artifact, RE, 네트워크 | Week 14-18, 37 | sample safety, behavior evidence, IOC/TTP, detection false positive를 worksheet에 분리 |
| DFIR | memory forensics, artifact provenance, timeline, cloud/container/identity telemetry, similarity/hash lookup | filesystem, OS artifact, network log, timestamp/timezone, evidence handling | Week 08, 26-30, 37 | actor/action/source/confidence/telemetry gap을 매일 기록 |
| 시스템 보안 | identity/capability boundary, sandboxing, eBPF/audit/ETW telemetry, kernel/user boundary | OS, kernel, access control, driver/IOCTL, container model | Week 24-25, 30, 38 | 권한 경계와 관찰 가능한 telemetry를 같은 표에 묶어 기록 |

외부 검토자에게 질문할 핵심은 "주제가 빠졌는가"보다 "Week 23, 30, 38-40의 daily 산출물이 2-3시간 안에 끝나는가"이다. 해당 주차는 stretch를 줄이고 minimum 산출물 품질을 우선해야 한다.

참고 기준은 [NIST NICE Framework](https://www.nist.gov/nice/framework), [FIRST CVSS v4.0](https://www.first.org/cvss/v4-0/specification-document), [CVE CNA Rules](https://www.cve.org/resourcessupport/allresources/cnarules), [MITRE ATT&CK](https://www.mitre.org/focus-areas/cybersecurity/mitre-attack), 성인 ADHD/실행기능 관련 2024-2025 systematic review와 meta-analysis, 2025년 보안 학회/논문에서 반복되는 fuzzing, anti-analysis, malware behavior extraction, cloud/container forensics 흐름이다.

## 보강 반영 결정

| 평가 항목 | 반영 방식 |
|---|---|
| 연구 루프가 후반에 몰림 | Week 12부터 매주 advisory/CVE/paper 1개를 30분 읽고 5줄 research note를 남긴다. |
| Pwnie/CVE 목표에는 target ownership 필요 | Week 23 이후 parser, daemon, OSS security tool, Linux subsystem 중 장기 관찰 target 후보를 고른다. firmware/IoT는 후속 심화 후보로 둔다. |
| CVE workflow는 발견보다 기록 | Week 39의 목표를 실제 CVE 등록이 아니라 advisory-grade reproduction/report 초안으로 조정한다. |
| Week 23 과부하 | AFL++/libFuzzer, sanitizer, minimization, crash triage를 필수로 두고 symbolic/taint/patch는 미니 실습 또는 개념으로 제한한다. |
| 글쓰기 취약점 | daily-study에 Warm-up, Core reading, Lab, Output, Review와 짧은 글쓰기 루틴을 추가한다. |
| Day 01 예시 보완 | exit status, tool version, timezone, input hash, exact command block을 daily 실습 로그 기본 필드로 올린다. |

## 도메인 커버리지

| 도메인 | 반영 위치 | 판정 |
|---|---|---|
| 컴퓨터 구조 | Week 01-03, 05, 35 | bit/byte, 진수, signed/unsigned, two's complement, endian, register, ABI, cache/TLB까지 포함. 적절 |
| 운영체제 | Week 04-05, 08, 24-25 | process/thread, VM, filesystem, Windows Internals, Linux kernel이 모두 있음. 적절 |
| 네트워크 | Week 09-10, 18, 29 | TCP/IP, DNS/HTTP/TLS, PCAP, IDS, C2, network forensics 포함. 실무 IR 관점에서 적절 |
| C/컴파일러/언어 | Week 06-07, 11, 36 | C memory model, linker/loader, IR/CFG/SSA, runtime reversing 포함. 적절 |
| 수학/알고리즘 | Week 01-02, 31-35 | 중등-고등 수학 gate와 discrete math를 뒤늦지 않게 연결. 적절하나 학습자 수준에 따라 52주화 후보 |
| 암호학 | Week 31-33, 35 | encoding/hash/HMAC, symmetric/public-key, TLS, KDF, CSPRNG, malware crypto 포함. 깊이는 입문-응용 수준 |
| 리버싱 | Week 11-13, 17, 36-37 | IDA/Ghidra, debugging, decompiler 검증, AI 보조 가설 검증, obfuscation, runtime 분석 포함. 적절 |
| 악성코드 분석 | Week 14-18, 37 | taxonomy, safe lab, static/dynamic triage, detection, persistence, injection, anti-analysis, C2, report 포함. 적절 |
| 시스템 해킹 | Week 19-25, 38-39 | stack/heap/format string/integer/OOB/ROP/fuzzing/N-day/reporting과 kernel bug class mapping 포함. 40주 안에서는 폭이 넓으므로 핵심 실습 선별 필요 |
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
| AI-assisted binary analysis, IDA/Ghidra MCP | Week 12 Review의 backlog, Week 36 | 40주 core에서는 검증 루틴만 유지하고, 본격 도입은 Week 36 이후로 미룸 |
| Stack exploitation, NX/ASLR/Canary/PIE, ROP/ret2libc | Week 19, 22, 38 | 반영 |
| Heap exploitation, glibc malloc, UAF, double free, tcache | Week 21, 38 | 반영 |
| IoT firmware, binwalk, ARM/MIPS, QEMU | Week 36 runtime 연결 또는 후속 12주 | 40주 core에서는 후속 후보로 남기고, 심화는 후속 12주 권장 |
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
| IoT/firmware exploitation | Week 36 runtime 연결 또는 후속 12주 | 헌팅마스터 A트랙을 강하게 목표로 하면 후속 심화에서 2-3주 배정 |
| Kernel exploit | Week 24-25에서 Windows/Linux kernel boundary, Week 38 Day 03에서 race/TOCTOU/refcount/UAF와 KASLR/SMEP/SMAP mapping | 실전 kernel exploit 개발은 후속 12주로 분리하되, core에는 필수 개념과 advisory 기반 bug class mapping을 포함 |
| Secure coding/testing | Week 06, 20, 38에 흩어져 있음 | 취약점 연구 산출물의 patch/regression test 기준을 Week 38에서 강제 |
| 연구 논문/advisory 읽기 | Week 12부터 주간 루프로 반복 | Week 39에서 처음 시작하지 않고 매주 5줄 research note로 누적 |
| 법/윤리/공개 범위 | Week 14, 39, 40에 있음 | 매 프로젝트 산출물에 scope, permission, redaction 항목을 고정 |

## 과한 부분과 줄이는 기준

| 과부하 후보 | 이유 | 줄이는 방법 |
|---|---|---|
| Week 23 | fuzzing, symbolic execution, taint, patch diffing, kernel exploit intro가 한 주에 몰림 | 핵심은 AFL++/libFuzzer crash triage. symbolic/taint/kernel은 개념+미니 실습으로 제한 |
| Week 30 | mobile, cloud, container, identity forensics가 한 주에 몰림 | incident scoping 관점으로만 다루고 깊은 platform forensics는 후속 |
| Week 31-35 | 암호학, 수학, 알고리즘이 연속으로 무거움 | 암호학 수학 gate를 통과하지 못하면 Week 31-35를 7주로 늘림 |
| Week 36 | 여러 언어 runtime과 reversing이 넓음 | C++/.NET/Java 중 2개를 필수, Go/Rust/Swift는 관찰표 수준 |
| Week 38-40 | exploit project, CVE reporting, portfolio가 모두 있음 | 실제 CVE 등록이 아니라 "advisory-grade reproduction/report 초안"을 목표로 제한 |

## 산출물 평가 기준

| 산출물 | 완료 기준 |
|---|---|
| Tool note | 목적, 입력, 출력, workflow, 해석 기준, 한계, 실제 실습 로그 포함 |
| Analysis report | executive summary, scope, facts, inference, timeline, technical details, IOC/detection, confidence/caveat, remediation 포함 |
| Pwn writeup | root cause, exploit primitive, mitigation, reliability, patch/detection 관점 포함 |
| DFIR report | artifact 나열이 아니라 timeline, evidence confidence, scope, impact, decision point 포함 |
| Detection rule | data source, FP/FN, test event, tuning 기준, lifecycle 포함 |
| Research reproduction | version pinning, environment, expected/observed result, failure analysis, ethical boundary 포함 |
| Daily writing | 핵심 주장 1개, 근거 2개, 한계 1개, 다음 질문 2개를 5-8문장으로 작성 |

## 40주 후 기대 산출물

개수는 목표치일 뿐이고, 품질 기준이 더 중요하다. 각 산출물은 최소한 version pinning, environment, command log, observed result, inference, limitation, next hypothesis를 포함해야 한다.

| 산출물 | 권장 최소 개수 |
|---|---:|
| public 가능한 개념 글 | 8-12개 |
| private lab note | 30개 이상 |
| pwn writeup | 5개 이상 |
| reversing/malware report | 3개 이상 |
| DFIR timeline/report | 2개 이상 |
| fuzzing crash triage report | 2개 이상 |
| N-day/CVE reproduction note | 3개 이상 |
| detection rule + test log | 3개 이상 |
| final portfolio-grade report | 2-3개 |

## 외부 검토자에게 보낼 질문

### 교수님/연구자에게

1. CS 기초 배치가 보안 실습 전에 충분한가?
2. 수학/알고리즘이 암호학과 취약점 분석에 필요한 만큼 들어가 있는가?
3. Week 23, 31-35, 38-40의 난이도 상승이 학습자에게 과도하지 않은가?
4. 연구 재현과 보고서 작성 기준이 학부/대학원 준비 관점에서 충분한가?
5. 실전 kernel exploit 개발, IoT firmware, cloud forensics 심화를 후속 12주로 분리한 것이 타당한가?

### 현직자/IR/DFIR 분석가에게

1. Week 26-30의 artifact 범위가 실제 incident triage에 충분한가?
2. Windows artifact와 memory/network/cloud scope의 순서가 실무 흐름과 맞는가?
3. 보고서 산출물의 scope, confidence, caveat, remediation 기준이 실무 리뷰에 충분한가?
4. SIEM/KQL/Splunk, Velociraptor, EDR telemetry를 40주 core에 더 넣어야 하는가?

### 악성코드 분석가/리버서에게

1. Week 11-18의 PE/ELF, debugger, unpacking, C2, detection 순서가 자연스러운가?
2. AI-assisted analysis를 Week 12 Review backlog로 미루고 Week 36 이후에 본격화한 것이 너무 빠르거나 늦지 않은가?
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

따라서 40주는 유지하되, 매주 "필수 산출물"과 "stretch 실습"을 분리해서 운영하는 것이 가장 현실적이다. 최종 기준은 "나는 pwn, RE, malware, DFIR, crypto의 공통 언어를 알고 있고, 실습 로그와 보고서를 재현 가능하게 남길 수 있으며, N-day를 읽고 재현하고 patch/root cause/variant hypothesis를 설명할 수 있다. 이제 하나의 target class를 장기적으로 파고들 준비가 됐다"로 둔다.

## 참고 링크

- [NIST NICE Framework](https://www.nist.gov/nice/framework)
- [ACM/IEEE/AAAI CS2023](https://csed.acm.org/)
- [BoB 공식 트랙 안내](https://www.kitribob.kr/learn/curriculum)
- [SANS FOR500 Windows Forensic Analysis](https://www.sans.org/cyber-security-courses/windows-forensic-analysis)
- [SANS FOR508 Advanced Incident Response, Threat Hunting, and Digital Forensics](https://www.sans.org/cyber-security-courses/advanced-incident-response-threat-hunting-training)
- [SANS FOR610 Reverse-Engineering Malware](https://www.sans.org/cyber-security-courses/reverse-engineering-malware-malware-analysis-tools-techniques)
- [pwn.college](https://pwn.college/)
- [OpenSecurityTraining2](https://p.ost2.fyi/)
- [USENIX Security 2025 accepted papers](https://www.usenix.org/conference/usenixsecurity25/cycle1-accepted-papers)
- [NDSS Symposium 2025 accepted papers](https://www.ndss-symposium.org/ndss2025/accepted-papers/)
- [NDSS BAR 2025](https://www.ndss-symposium.org/ndss2025/co-located-events/bar/)
- [DFRWS USA 2025 program](https://dfrws.org/usa-2025-program-preliminary/)
- [성인 ADHD CBT 메타분석](https://www.sciencedirect.com/science/article/pii/S0165032725025492)
- [성인 ADHD 치료 비교 체계적 문헌고찰](https://pubmed.ncbi.nlm.nih.gov/39701638/)
- [UDL과 조직 교육 문헌고찰](https://www.tandfonline.com/doi/full/10.1080/13678868.2024.2397603)
