---
title: "Week 37 Day 06: report writing: fact, inference, limit"
draft: true
---

# Week 37 Day 06: report writing: fact, inference, limit

## 오늘의 목표

- report structure, evidence, inference를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- assumption, limitation, IOC가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Learning Malware Analysis, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석, 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 메모리 포렌식 - malware report, memory/process evidence, detection rule, incident narrative
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- File System Forensic Analysis: file systems, metadata, timeline, deleted file recovery 관련 장
- Linux man pages: stat, inode, ln, mount, debugfs, fsck, find
- Microsoft Learn: NTFS overview, alternate data streams, file times, USN journal 개요
- ext4 documentation: extents, journal, inode; Apple File System Guide: APFS snapshot/clone 개요
- Sleuth Kit/Autopsy docs: disk image ingest, timeline, file carving workflow

## 핵심 키워드

report structure, evidence, inference, assumption, limitation, IOC, TTP

## 반드시 정리할 개념

- report structure: 포트폴리오 산출물은 재현성, 기술 깊이, 근거 품질, 공개 가능성으로 평가한다. 민감 정보와 dual-use 세부사항은 분리한다.
- evidence: 원본 증거와 분석 복제본을 구분하고 acquisition 시각, hash, 도구 버전, write-block 여부를 기록한다.
- inference: inference의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- assumption: assumption의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- limitation: limitation의 정의, 관찰 가능한 artifact, 보안 분석에서 쓰이는 지점, 혼동하기 쉬운 개념을 2-3문장으로 정리한다.
- IOC: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.
- TTP: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.

## 실습

- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 분석 보고서 1차본
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. report structure를 공개 후보로 고를 때 재현성, 근거 품질, 민감 정보 제거, 읽는 사람의 맥락 중 무엇을 확인해야 하는가?
2. evidence를 기록할 때 hash, 시간, 도구 버전, 분석자, 원본/복제본 구분 중 무엇이 빠지면 신뢰성이 약해지는가?
3. inference를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. assumption를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
5. limitation를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
6. IOC를 보고서나 rule로 쓸 때 false positive를 줄이기 위한 조건은 무엇인가?
7. 오늘 산출물인 "분석 보고서 1차본"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
