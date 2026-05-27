---
title: "Week 25 Day 03: VFS, inode, file operations"
draft: true
---

# Week 25 Day 03: VFS, inode, file operations

## 오늘의 목표

- VFS, inode, file operations를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- dentry, mount namespace, filesystem driver가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 리눅스 커널 심층 구조, BPF Performance Tools, 실전 리눅스 악성코드 분석, 운영체제 - Stallings, 운영체제 - Silberschatz - syscall, VFS, scheduler, memory management, tracing, Linux malware artifact
- Linux Kernel Development: process management, system calls, virtual file system, modules, memory management 관련 장
- Linux kernel documentation: filesystems/proc, driver-api, bpf, admin-guide/LSM, userspace-api/seccomp_filter
- man pages: proc, capabilities, namespaces, cgroups, seccomp, auditctl, bpf, systemd.service
- kernel docs 또는 LWN: eBPF verifier, LSM hooks, namespace/cgroup 개요
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- Sleuth Kit/Autopsy docs: disk image ingest, timeline, file carving workflow

## 핵심 키워드

VFS, inode, file operations, dentry, mount namespace, filesystem driver, permission check

## 반드시 정리할 개념

- VFS: Linux 관찰 지점을 procfs/sysfs/auditd/eBPF/systemd로 나누고 namespace/cgroup/capability/seccomp/LSM의 경계를 정리한다.
- inode: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- file operations: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- dentry: dentry의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- mount namespace: mount namespace의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- filesystem driver: content와 metadata를 분리하고 inode/MFT/journal/timestamp가 삭제, 이동, 실행 흔적을 어떻게 남기는지 정리한다.
- permission check: permission check의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.

## 실습

- 테스트 디렉터리에서 파일 생성/수정/이동/삭제를 수행하고 stat, hash, timeline을 기록한다. 가능하면 작은 disk image에서 같은 artifact를 찾는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- VFS 경로 해석 흐름도
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. VFS를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
2. inode artifact가 증명할 수 있는 행위와 증명할 수 없는 행위는 무엇인가?
3. file operations artifact가 증명할 수 있는 행위와 증명할 수 없는 행위는 무엇인가?
4. dentry를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. mount namespace를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. filesystem driver를 user-mode 도구 출력과 kernel/object 관점으로 동시에 설명할 수 있는가?
7. 오늘 산출물인 "VFS 경로 해석 흐름도"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
