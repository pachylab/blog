---
title: "40주 보안 학습 로드맵"
draft: true
---

주 5일, 하루 2시간 기준의 통합 로드맵입니다.

흐름은 Linux/C/Assembly/GDB/Pwn을 먼저 깊게 잡고, 이후 리버싱, 악성코드 분석, 디지털 포렌식, 암호학, 통합 산출물로 확장합니다.

이 로드맵의 외부 기준은 [[_drafts/study-plan/security-study-roadmap/curriculum-benchmark/index|직무 기준 보안 커리큘럼 벤치마크]]에 둡니다. 상위권 미국 CS 커리큘럼, NIST NICE/DoD DCWF, IEEE/ACM CS2023, SANS syllabus, pwn.college, OST2, HTB, Dreamhack, 대형 IT/보안 기업군의 공고 요구를 한 번에 비교하기 위한 기준 문서입니다.

## 검토 메모

현재 40주 순서는 유지합니다. 초반 24주가 Linux, C, Assembly, GDB, ELF, Pwn으로 이어져 있어 이후 리버싱/악성코드/포렌식의 기반이 됩니다. 이 순서를 당겨 바꾸면 뒤쪽 분석 과목이 도구 사용법 암기처럼 흐를 가능성이 큽니다.

보강한 부분은 도구 축입니다. GDB, Ghidra, IDA, Volatility, Wireshark 같은 도구는 특정 분야 하나에만 묶기 어렵기 때문에 [[_drafts/study-elements/tools/index|Tools]]로 별도 관리합니다.

직무 기준으로 보면 1-12주차는 상위권 CS core, 13-25주차는 pwn/RE/OS internals, 26-34주차는 malware/DFIR, 35-40주차는 crypto/case study/portfolio 역할을 맡습니다. Linux kernel hacking, fuzzing, cloud IR, detection engineering은 40주 뒤 후속 12주 심화로 분리합니다.

추후 공개 wiki로 옮길 때는 `_drafts/study-elements/cs/data-structures-and-algorithms/` 안에 섞여 있는 pwn/RE/OS 성격의 generated note를 그대로 옮기지 말고, 실제 성격에 맞춰 `wiki/security/`, `wiki/cs/`, `wiki/platforms/`, `wiki/tools/`로 다시 분류합니다.

## 보강 후보

40주 뒤에 여유가 있으면 아래 주제를 별도 확장 주차로 둡니다. 자세한 순서는 [[_drafts/study-plan/security-study-roadmap/curriculum-benchmark/index#후속-12주-심화-순서|후속 12주 심화 순서]]를 따릅니다.

- Linux kernel internals: syscall, VFS, mm, module, driver, eBPF
- Kernel vulnerability research: syzkaller, crash triage, KASLR/SMEP/SMAP/KPTI
- Android internals: Binder, permission, APK/DEX, ART, app sandbox
- iOS internals: IPA, Mach-O, code signing, sandbox, Keychain
- Windows telemetry: Sysmon, ETW, Event Log, Registry timeline
- Cloud/SaaS IR: AWS/Azure/GCP audit logs, identity, KQL/Splunk timeline
- Applied cryptography: TLS 실습, certificate validation, crypto misuse case study
- Paper-to-lab loop: 논문 1편을 읽고 toy implementation 또는 재현 실험으로 연결

## Weeks

- [[_drafts/study-plan/security-study-roadmap/week-01/index|1주차: Linux CLI와 학습 환경]]
- [[_drafts/study-plan/security-study-roadmap/week-02/index|2주차: 프로세스, 권한, shell 사용 습관]]
- [[_drafts/study-plan/security-study-roadmap/week-03/index|3주차: C 기본과 컴파일]]
- [[_drafts/study-plan/security-study-roadmap/week-04/index|4주차: Pointer, array, string, struct]]
- [[_drafts/study-plan/security-study-roadmap/week-05/index|5주차: Stack, heap, malloc/free]]
- [[_drafts/study-plan/security-study-roadmap/week-06/index|6주차: 컴퓨터 구조 기초]]
- [[_drafts/study-plan/security-study-roadmap/week-07/index|7주차: x86-64 Assembly 1]]
- [[_drafts/study-plan/security-study-roadmap/week-08/index|8주차: x86-64 Assembly 2: stack과 control flow]]
- [[_drafts/study-plan/security-study-roadmap/week-09/index|9주차: ABI, calling convention, syscall]]
- [[_drafts/study-plan/security-study-roadmap/week-10/index|10주차: GDB 기본기]]
- [[_drafts/study-plan/security-study-roadmap/week-11/index|11주차: ELF와 동적 링킹]]
- [[_drafts/study-plan/security-study-roadmap/week-12/index|12주차: PE와 Windows 실행 모델]]
- [[_drafts/study-plan/security-study-roadmap/week-13/index|13주차: 리버싱 기초 워크플로]]
- [[_drafts/study-plan/security-study-roadmap/week-14/index|14주차: 취약점 유형 1: stack/OOB/integer]]
- [[_drafts/study-plan/security-study-roadmap/week-15/index|15주차: 취약점 유형 2: heap/UAF/race/info leak]]
- [[_drafts/study-plan/security-study-roadmap/week-16/index|16주차: pwn.college Program Security 입문]]
- [[_drafts/study-plan/security-study-roadmap/week-17/index|17주차: Shellcode와 syscall 기반 exploit]]
- [[_drafts/study-plan/security-study-roadmap/week-18/index|18주차: Stack BOF, ret overwrite, ret2win]]
- [[_drafts/study-plan/security-study-roadmap/week-19/index|19주차: Mitigation과 leak 사고방식]]
- [[_drafts/study-plan/security-study-roadmap/week-20/index|20주차: ROP 기본]]
- [[_drafts/study-plan/security-study-roadmap/week-21/index|21주차: ret2libc와 ASLR 우회]]
- [[_drafts/study-plan/security-study-roadmap/week-22/index|22주차: Heap allocator와 tcache]]
- [[_drafts/study-plan/security-study-roadmap/week-23/index|23주차: Format string과 arbitrary read/write]]
- [[_drafts/study-plan/security-study-roadmap/week-24/index|24주차: OS Internals와 System Security 입문]]
- [[_drafts/study-plan/security-study-roadmap/week-25/index|25주차: Windows Internals 1: process와 object]]
- [[_drafts/study-plan/security-study-roadmap/week-26/index|26주차: 악성코드 정적 분석]]
- [[_drafts/study-plan/security-study-roadmap/week-27/index|27주차: 악성코드 동적 분석]]
- [[_drafts/study-plan/security-study-roadmap/week-28/index|28주차: Unpacking과 anti-analysis]]
- [[_drafts/study-plan/security-study-roadmap/week-29/index|29주차: Process Injection과 persistence]]
- [[_drafts/study-plan/security-study-roadmap/week-30/index|30주차: C2, 네트워크, 탐지 룰]]
- [[_drafts/study-plan/security-study-roadmap/week-31/index|31주차: 디스크 포렌식 기초]]
- [[_drafts/study-plan/security-study-roadmap/week-32/index|32주차: Windows artifact와 timeline]]
- [[_drafts/study-plan/security-study-roadmap/week-33/index|33주차: Memory Forensics]]
- [[_drafts/study-plan/security-study-roadmap/week-34/index|34주차: Network, browser, mobile forensics]]
- [[_drafts/study-plan/security-study-roadmap/week-35/index|35주차: 암호학 기초와 TLS]]
- [[_drafts/study-plan/security-study-roadmap/week-36/index|36주차: 악성코드와 암호 오용]]
- [[_drafts/study-plan/security-study-roadmap/week-37/index|37주차: 통합 사례 1: malware-to-forensics]]
- [[_drafts/study-plan/security-study-roadmap/week-38/index|38주차: 통합 사례 2: pwn-to-reversing]]
- [[_drafts/study-plan/security-study-roadmap/week-39/index|39주차: 논문 읽기와 구현 계획]]
- [[_drafts/study-plan/security-study-roadmap/week-40/index|40주차: 포트폴리오 정리와 다음 계획]]
