---
title: "직무 기준 보안 커리큘럼 벤치마크"
draft: true
---

# 직무 기준 보안 커리큘럼 벤치마크

기준일: 2026-05-26

이 문서는 [[_drafts/study-plan/security-study-roadmap/index|40주 보안 학습 로드맵]]을 직무 요구 기준으로 보정하기 위한 기준표입니다. 목표 직무는 디지털 포렌식 조사관, 악성코드 분석가, 리버스 엔지니어, 시스템 해킹/취약점 연구자, Linux kernel/system security 연구자입니다.

상위 50개 IT 기업을 개별 기업명으로 전부 나열하지 않고, 실제 공고가 반복되는 팀 유형으로 정규화합니다. OS/플랫폼, 클라우드/SaaS, 보안 벤더, 반도체/임베디드, IR/컨설팅 조직은 표현만 다를 뿐 요구하는 기반 역량이 크게 겹칩니다.

## 기준 자료

### 상위권 CS 커리큘럼 공통분모

대표 상위권 10개 미국 CS 프로그램은 MIT, Stanford, Carnegie Mellon, UC Berkeley, UIUC, Cornell, Princeton, Georgia Tech, University of Washington, UT Austin을 기준으로 봅니다. 순위 자체보다 공통 core가 중요합니다.

- 수학/이론: discrete math, probability, algorithms, complexity
- 프로그래밍: Python 또는 Java 입문 후 C/C++/systems programming
- 자료구조/알고리즘: asymptotic analysis, graph, dynamic programming, randomized/probabilistic reasoning
- 컴퓨터 구조: ISA, memory hierarchy, cache, virtual memory, assembly
- 운영체제/시스템: process, thread, synchronization, filesystem, VM, networking
- 소프트웨어 엔지니어링: testing, debugging, large codebase reading, version control
- 보안 선택과목: system security, applied cryptography, network security, software security, privacy
- 연구/캡스톤: open-ended project, paper reading, report and presentation

로드맵에는 이 공통분모를 다음 순서로 반영합니다. CS core를 먼저 잡고, pwn/RE/DFIR/malware는 그 위에 얹습니다. 이것이 실제 상위권 커리큘럼과도 가장 잘 맞습니다.

### 공공/표준 프레임워크

- NIST NICE Workforce Framework와 DoD Cyber Workforce Framework는 직무를 task, knowledge, skill, ability로 쪼갭니다. 로드맵에서는 이 구조를 그대로 사용해 각 주차의 "개념", "실습", "산출물"을 분리합니다.
- Cyber Defense Forensics Analyst, Incident Responder, Malware/Reverse Engineering 계열은 공통적으로 evidence handling, host/network artifacts, memory, scripting, malware behavior, report writing을 요구합니다.
- Vulnerability Research, Exploit Development, System Security 계열은 C/C++, assembly, OS internals, memory corruption, fuzzing, crash triage, mitigations, kernel/user boundary를 요구합니다.
- IEEE/ACM CS2023의 security, architecture, operating systems, networking, programming languages, software development 영역은 보안 직무의 전공 기반으로 봅니다.

### 산업/교육기관 기준

- SANS FOR500/FOR508은 Windows artifacts, timeline, memory, threat hunting, incident response 절차를 기준점으로 삼습니다. 직접 수강 필수라는 뜻이 아니라 syllabus를 DFIR 역량 체크리스트로 씁니다.
- SANS FOR610은 malware triage, static/dynamic analysis, unpacking, behavioral analysis, report writing을 기준점으로 둡니다.
- SANS SEC660/SEC760은 exploit writing, mitigation bypass, advanced vulnerability research의 깊이 기준으로만 참고합니다.
- Microsoft, Google/Mandiant, Palo Alto Networks Unit 42, Amazon, Apple, CrowdStrike, Cisco Talos 계열 공고는 모두 "도구 사용"보다 "플랫폼 내부구조와 자동화 능력"을 더 강하게 봅니다.

## 상위 IT 기업군 요구 스킬 정규화

| 기업군 | 대표 조직 | 실제 요구 스킬 | 로드맵 반영 |
|---|---|---|---|
| OS/플랫폼 | Microsoft, Apple, Google, Meta | C/C++, Rust/Python, OS internals, kernel/user boundary, crash dump, WinDbg/lldb/gdb, secure coding, fuzzing | 6-12주차, 24-25주차, 후속 41-46주 |
| 클라우드/SaaS | Amazon, Microsoft, Google, Salesforce, ServiceNow | Linux, networking, identity, logging, SIEM/KQL/Splunk, detection engineering, incident response, automation | 1-2주차, 30-34주차, 후속 47/49주 |
| 보안 벤더 | Palo Alto Networks, CrowdStrike, Fortinet, Cisco, Cloudflare | malware RE, YARA/Sigma, telemetry, EDR artifact, threat hunting, memory forensics, report writing | 26-34주차, 37-40주차 |
| 반도체/임베디드 | NVIDIA, Intel, Qualcomm, AMD | architecture, firmware, driver, DMA/IOMMU, kernel debugging, low-level C, exploit mitigations | 6-12주차, 24주차, 후속 41-46주 |
| IR/컨설팅 | Mandiant, Unit 42, Microsoft DART, CrowdStrike Services | evidence handling, timeline, endpoint triage, cloud logs, stakeholder report, malware-to-incident linkage | 31-34주차, 37-40주차, 후속 47/51주 |

## 직무별 필수 역량

### 디지털 포렌식 조사관

필수 순서:

1. Evidence handling, chain of custody, imaging, hashing
2. Filesystem: NTFS, ext4, APFS, timestamps, deleted recovery, carving
3. Windows artifact: Event Log, Registry, Amcache, Shimcache, SRUM, Prefetch, LNK, Jump List
4. Memory forensics: process tree, DLL, handle, VAD, injected code, malfind
5. Network/browser/cloud artifact: DNS/HTTP/TLS, proxy/VPN logs, browser history, SaaS audit logs
6. Timeline and report: Plaso/log2timeline, Timesketch, report writing, uncertainty 표현

주요 자료:

- 책: `File System Forensic Analysis`, `The Art of Memory Forensics`, `사이버 사고 대응 실무`
- 무료/실습: Volatility docs, Autopsy/Sleuth Kit, Velociraptor docs, pcap practice
- 결제 활용: HTB Academy DFIR/incident response 계열, Dreamhack forensic 문제

### 악성코드 분석가

필수 순서:

1. PE/ELF/Mach-O, linking/loading, imports/exports, sections
2. x86-64/ARM assembly, calling convention, stack/heap, debugger workflow
3. Static triage: hash, strings, imports, resources, section entropy, packer hints
4. Dynamic behavior: process/file/registry/network, sandbox isolation, Procmon/Wireshark
5. Unpacking/anti-analysis: OEP, import reconstruction, anti-debug, VM checks
6. Automation/detection: YARA, Sigma, capa, config extractor, IOC quality control
7. Report: behavior summary, capability, persistence, C2, detection opportunity

주요 자료:

- 책: `Practical Malware Analysis`, `실전 악성코드와 멀웨어 분석`, `멀웨어 분석과 리버스 엔지니어링`, `Windows Internals`
- 무료/실습: OST2 Architecture, Ghidra docs, capa/YARA docs
- 결제 활용: HTB Academy malware/reversing 계열, Dreamhack reverse engineering 문제

### 시스템 해킹/취약점 연구자

필수 순서:

1. C, memory layout, undefined behavior, compiler options, sanitizers
2. Assembly, ABI, syscall, ELF, dynamic linking, libc
3. Vulnerability class: OOB, stack overflow, integer, format string, UAF, double free, race
4. Exploit primitives: leak, arbitrary read/write, RIP control, ROP, ret2libc, heap grooming
5. Mitigation: ASLR, NX, canary, PIE, RELRO, CFI, seccomp, sandboxing
6. Fuzzing/crash triage: AFL++, libFuzzer, sanitizers, testcase minimization, root cause
7. Responsible output: minimal PoC, root cause report, patch impact, detection artifact

주요 자료:

- 무료/실습: pwn.college Computing 101, Program Security, System Security, OST2 Vulns1001, OST2 x86-64
- 결제 활용: Dreamhack system hacking, HTB pwn/challenge labs
- 책: `Computer Systems: A Programmer's Perspective`, `Practical Binary Analysis`, `Introduction to Algorithms`, `Modern C`

### Linux kernel/system security

필수 순서:

1. Linux userspace ABI, syscall, VFS, process, memory management
2. Kernel build/debug: qemu, kgdb, crash dump, ftrace, perf, eBPF/bpftrace
3. Driver/module basics: device file, ioctl, copy_from_user/copy_to_user, locking
4. Kernel vulnerability class: UAF, race, refcount, integer, heap/slab, info leak
5. Mitigation: KASLR, SMEP/SMAP, KPTI, hardened usercopy, seccomp, LSM, namespaces/cgroups
6. Fuzzing: syzkaller workflow, reproducer, bisect, patch review
7. Observability: BPF-based tracing, performance/security signal extraction

주요 자료:

- 책: `리눅스 커널 내부구조`, `Linux Device Drivers`, `BPF Performance Tools`, `Linux Kernel Programming`
- 무료/실습: Linux kernel docs, syzkaller docs, pwn.college System Security, OST2 Architecture 2001
- 결제 활용: HTB Linux privilege escalation/challenge labs는 kernel-only가 아니라 post-exploitation artifact 관찰용으로 사용

## 40주 로드맵 반영 순서

| 주차 | 역할 |
|---|---|
| 1-5 | Linux, shell, C, pointer, stack/heap. 모든 직무의 바닥입니다. |
| 6-12 | architecture, assembly, ABI, syscall, ELF/PE. pwn/RE/malware가 공유하는 언어를 만듭니다. |
| 13-15 | reversing workflow와 vulnerability taxonomy. 분석 도구 사용법이 아니라 코드-바이너리 대응 능력을 만듭니다. |
| 16-23 | pwn.college 중심의 exploit primitive. Dreamhack/HTB는 반복 숙련용으로 붙입니다. |
| 24-25 | OS internals와 Windows internals. 이후 malware/DFIR의 artifact 해석 기반입니다. |
| 26-30 | malware static/dynamic/unpacking/C2/detection. SANS FOR610 syllabus를 역량 체크리스트로 씁니다. |
| 31-34 | disk, Windows artifact, memory, network/browser/mobile forensics. FOR500/FOR508식 timeline과 report를 목표로 합니다. |
| 35-36 | crypto/TLS와 malware crypto misuse. 암호학은 수학보다 실무 오용 패턴을 먼저 연결합니다. |
| 37-40 | malware-to-forensics, pwn-to-reversing, paper-to-lab, portfolio. 기업 공고에서 요구하는 "증명 가능한 산출물"을 만듭니다. |

## 후속 12주 심화 순서

40주 뒤에는 아래 순서로 확장합니다. 기존 로드맵을 흔들지 않고 Linux kernel hacking과 대형 기업 취약점 연구 역량을 보강하는 구간입니다.

| 주차 | 주제 | 산출물 |
|---|---|---|
| 41 | Linux kernel internals: process, VFS, mm | kernel concept map |
| 42 | kernel module, ioctl, copy_from_user, locking | toy vulnerable driver 분석 노트 |
| 43 | kernel debugging: qemu, kgdb, crash, ftrace, bpftrace | crash-to-root-cause lab |
| 44 | kernel exploitation primitives and mitigations | defensive exploit primitive map |
| 45 | Windows kernel/driver intro, WinDbg, ETW | Windows kernel artifact note |
| 46 | fuzzing pipeline: AFL++, libFuzzer, syzkaller | fuzzing triage report |
| 47 | cloud/SaaS IR: AWS/Azure/GCP logs, identity | cloud timeline report |
| 48 | mobile/macOS artifact intro | Android/iOS/macOS artifact map |
| 49 | detection engineering: Sigma, YARA, KQL/Splunk | detection rule pack |
| 50 | malware automation: config extraction, capa, sandbox output | config extractor script |
| 51 | capstone: malware-to-DFIR case | full incident report |
| 52 | capstone: vulnerability research to advisory | root cause and patch-impact report |

## 자료 우선순위

1. 무료 핵심: pwn.college, OpenSecurityTraining2, official docs, MIT/CMU/Berkeley 공개 강의, Linux kernel docs
2. 이미 결제한 실습: Dreamhack, Hack The Box Academy/Challenges
3. 보유 도서: CSAPP, Windows Internals, Practical Malware Analysis, Practical Binary Analysis, Linux kernel/BPF 계열
4. 추가 구매 후보: `Linux Device Drivers`, `The Rootkit Arsenal`, `Practical Reverse Engineering`, `Serious Cryptography`, `Designing Data-Intensive Applications`
5. 유료 강의는 SANS syllabus를 체크리스트로만 사용하고, 실제 학습은 무료/보유/이미 결제한 자료로 대체합니다.

## 출처 링크

- [MIT EECS 6-3 degree requirements](https://catalog.mit.edu/degree-charts/computer-science-engineering-course-6-3/)
- [Stanford Computer Science undergraduate program](https://bulletin.stanford.edu/programs/CS-BS)
- [CMU Computer Science bachelor's curriculum](https://csd.cmu.edu/academics/undergraduate/bachelors/overview)
- [UC Berkeley CS major requirements](https://berkeley-public.courseleaf.com/undergraduate/degree-programs/computer-science/)
- [UIUC Computer Science degree requirements](https://cs.illinois.edu/academics/undergraduate/degree-program-options/bs-computer-science)
- [Cornell Computer Science major requirements](https://www.cs.cornell.edu/undergrad/csmajor)
- [Princeton Computer Science requirements](https://www.cs.princeton.edu/ugrad/current-programs/requirements)
- [Georgia Tech CS threads](https://www.cc.gatech.edu/academics/threads)
- [University of Washington CSE degree requirements](https://www.cs.washington.edu/academics/ugrad/current-students/degree)
- [UT Austin Computer Science degree plans](https://www.cs.utexas.edu/undergraduate-program/academics/curriculum/degree-plans)
- [NIST NICE Framework Resource Center](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center)
- [DoD Cyber Workforce Framework](https://public.cyber.mil/wid/dcwf/)
- [ACM/IEEE/AAAI CS2023](https://csed.acm.org/)
- [SANS FOR500](https://www.sans.org/cyber-security-courses/windows-forensic-analysis/)
- [SANS FOR508](https://www.sans.org/cyber-security-courses/advanced-incident-response-threat-hunting-training/)
- [SANS FOR610](https://www.sans.org/cyber-security-courses/reverse-engineering-malware-malware-analysis-tools-techniques/)
- [SANS SEC660](https://www.sans.org/cyber-security-courses/advanced-penetration-testing-exploits-ethical-hacking/)
- [SANS SEC760](https://www.sans.org/cyber-security-courses/advanced-exploit-development-penetration-testers/)
- [pwn.college](https://pwn.college/)
- [OpenSecurityTraining2](https://p.ost2.fyi/)
- [Hack The Box Academy](https://academy.hackthebox.com/)
- [Dreamhack](https://dreamhack.io/)
