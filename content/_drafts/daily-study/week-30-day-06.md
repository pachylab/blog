---
title: "Week 30 Day 06: container runtime logs와 workload scope"
draft: true
---

# Week 30 Day 06: container runtime logs와 workload scope

## 오늘의 목표

- container, container runtime logs, image를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- registry, volume mount, namespace가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e - mobile app sandbox, SQLite/plist, cloud/container scope, IR final report
- The Art of Memory Forensics: acquisition, processes, DLLs, handles, VAD, malfind 관련 장
- Volatility 3 docs: windows.pslist, pstree, dlllist, handles, vadinfo, malfind, netscan 플러그인
- Android Developers: app sandbox, data/file storage, SQLite; Apple docs: property list and app container 개요
- AWS CloudTrail docs, Microsoft Entra audit/sign-in logs docs, Kubernetes audit logging docs, container runtime logs docs
- SANS IR methodology: preparation, identification, containment, eradication, recovery, lessons learned와 report 구조
- CS:APP 3e: 7장 Linking 전체
- CS:APP 7장 Linking, LLD docs: ELF/COFF/Wasm linkers, Ian Lance Taylor Linkers series: object files, symbols, relocation, dynamic linking 관련 부분
- Crafting Interpreters: scanning/parsing, bytecode VM, compiler, garbage collection 관련 장
- LLVM docs: IR, basic block, control-flow graph, SSA form 개요

## 핵심 키워드

container, container runtime logs, image, registry, volume mount, namespace, cgroup

## 반드시 정리할 개념

- container: container의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- container runtime logs: container runtime logs의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- image: image의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- registry: Windows user-mode 도구 출력과 kernel object, registry, service, driver, telemetry source를 연결한다.
- volume mount: volume mount의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- namespace: namespace의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- cgroup: Linux 관찰 지점을 procfs/sysfs/auditd/eBPF/systemd로 나누고 namespace/cgroup/capability/seccomp/LSM의 경계를 정리한다.

## 실습

- 공개 sample log 또는 toy environment에서 account, device, workload, network, storage 이벤트를 시간순으로 배열하고 incident scope를 적는다.
- Windows VM 또는 공개 DFIR sample에서 Process Explorer, Procmon, Autoruns, Event Viewer/Sysmon, artifact parser 결과를 연결한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- container compromise scoping checklist
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. container를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. container runtime logs를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
3. image를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. registry를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
5. volume mount를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. namespace를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
7. 오늘 산출물인 "container compromise scoping checklist"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
