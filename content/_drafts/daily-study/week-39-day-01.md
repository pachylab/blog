---
title: "Week 39 Day 01: CVE/N-day reading protocol"
draft: true
---

# Week 39 Day 01: CVE/N-day reading protocol

## 오늘의 목표

- CVE advisory와 N-day writeup을 읽을 때 affected version, root cause, patch diff, PoC 조건을 분리해 기록한다.
- vulnerability class, CWE, CPE, threat model, reproduction plan이 exploit 재현과 보고서에 어떻게 연결되는지 정리한다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: 실전 버그바운티, 메타스플로잇 - reproducible report, impact, responsible disclosure, validation lab
- pwn.college Program Security: Memory Errors, Program Misuse, Shellcode, ROP 관련 모듈
- ROP Emporium: ret2win, split, callme, write4, fluff, pivot 단계별 문제
- CS:APP 3e: 3.10 Combining Control and Data 중 exploit 관련 부분
- how2heap: tcache, fastbin, unsorted bin, use-after-free, double-free 예제
- glibc malloc source/wiki: chunk layout, bins, tcache 동작 개요
- 선택한 논문, CVE advisory, vendor patch note: threat model, root cause, affected version, patch diff 중심으로 읽기
- NVD/CWE/CAPEC: 취약점 분류, 약점 패턴, 영향 범위 확인
- FIRST CVSS v4.0 specification/calculator: attack vector, complexity, privileges, user interaction, impact 산정
- MITRE CVE Program/CNA rules: CVE request, affected product/version, public reference, duplicate check
- 재현 대상 프로젝트 README/build docs: version pinning, dependency, test input 확인

## 핵심 키워드

research paper, CVE advisory, N-day, vulnerability class, CWE, CPE, affected version, threat model, patch diff, root cause, proof of concept, reproduction plan

## 반드시 정리할 개념

- CVE advisory: affected product/version, weakness class, impact, remediation, reference를 한 표로 분리한다.
- N-day: 이미 공개된 취약점의 재현 범위와 공개 가능한 PoC 범위를 구분한다.
- CWE/CPE: weakness category와 affected platform 식별자가 CVE/NVD 기록에서 어떤 역할을 하는지 정리한다.
- patch diff: 변경 함수, 추가된 검증, 제거된 unsafe path, regression test를 root cause와 연결한다.
- root cause: crash location이 아니라 잘못된 trust boundary, size calculation, lifetime, parser state 중 무엇이 원인인지 적는다.
- proof of concept: PoC가 exploitability를 증명하는 최소 조건과 공개 시 redaction이 필요한 정보를 구분한다.
- reproduction plan: version pinning, dependency, build flags, sample input, expected/observed result를 포함한다.

## 실습

- 공개 CVE 1건을 골라 advisory, NVD/CWE, vendor patch note를 대조하고 affected version, root cause, 재현 조건, patch impact를 표로 만든다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- 논문/CVE/N-day 읽기 템플릿 작성본
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. CVE advisory에서 affected version과 fixed version을 어떻게 확인했는가?
2. N-day 재현에서 공개 PoC를 그대로 실행하지 않고도 root cause를 검증할 방법은 무엇인가?
3. CWE/CPE가 취약점 분류와 영향 범위 판단에 어떤 정보를 주는가?
4. patch diff에서 실제 root cause를 가리키는 변경과 부수적 리팩터를 어떻게 구분했는가?
5. PoC가 crash만 증명하는지, exploit primitive까지 증명하는지 판단 기준은 무엇인가?
6. reproduction plan에 version pinning과 build flags를 빼면 어떤 재현성 문제가 생기는가?
7. 오늘 산출물인 "논문/CVE/N-day 읽기 템플릿 작성본"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
