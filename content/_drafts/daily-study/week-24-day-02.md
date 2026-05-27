---
title: "Week 24 Day 02: Windows security model: token, SID, ACL, UAC"
draft: true
---

# Week 24 Day 02: Windows security model: token, SID, ACL, UAC

## 오늘의 목표

- Windows process, Windows thread, job object를 Windows 보안 모델의 실행 단위로 설명한다.
- access token, SID, privilege, integrity level, ACL/DACL/SACL, UAC가 access control과 privilege boundary에 어떻게 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Windows Internals 7/e Vol.1/Vol.2, 시스인터널스 도구로 윈도우 문제 해결하기, 윈도우 레지스트리 포렌식, 운영체제 - Stallings, 운영체제 - Silberschatz - process/thread/object manager/registry/service/protection
- Windows Internals Part 1: Concepts and Tools, System Architecture, Processes/Threads/Jobs, Memory Management, Security
- Windows Internals Part 1: Processes, Threads, Jobs, Security 중 token, SID, privilege, integrity level 관련 파트
- Microsoft Learn: Access Control Model, Access Tokens, Security Identifiers, Access Control Lists, User Account Control
- Sysinternals Process Explorer: process token, integrity, privileges, handles 관찰 기능
- Sysinternals AccessChk: object ACL과 effective permission 확인

## 핵심 키워드

Windows process, Windows thread, job object, access token, SID, privilege, integrity level, ACL, DACL, SACL, UAC

## 반드시 정리할 개념

- Windows process: process가 access token을 통해 security context를 갖고, handle table과 object 접근 권한을 통해 시스템 보안 경계에 연결되는 구조를 정리한다.
- Windows thread: thread token과 impersonation이 process token과 어떻게 다르고, 서비스/서버 프로세스 분석에서 왜 중요한지 정리한다.
- job object: process group에 resource limit과 policy를 적용하는 방식과 sandbox/AppContainer 분석에서 확인할 지점을 정리한다.
- access token: user SID, group SID, privileges, integrity level, default DACL이 들어 있는 보안 컨텍스트로 정리한다.
- ACL/DACL/SACL: DACL은 접근 허용/거부, SACL은 audit 정책이라는 차이를 object manager와 event log 관점으로 정리한다.
- UAC: admin token split, elevation, integrity level 변화가 권한 상승과 persistence 분석에 미치는 영향을 정리한다.
- privilege: SeDebugPrivilege, SeImpersonatePrivilege처럼 exploit이나 post-exploitation에서 자주 언급되는 privilege가 어떤 작업을 허용하는지 정리한다.

## 실습

- Windows VM에서 Process Explorer로 일반 프로세스와 관리자 권한 프로세스의 token, integrity level, privileges를 비교한다.
- AccessChk 또는 파일/서비스 속성 화면으로 같은 object의 DACL을 확인하고, 어떤 SID에 어떤 access mask가 부여되는지 표로 정리한다.
- Event Viewer 또는 Sysmon 로그에서 UAC elevation, service 실행, privileged operation을 확인할 수 있는 event 후보를 적는다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Process Explorer와 AccessChk로 본 token/integrity/ACL 표
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. access token 안의 user SID, group SID, privilege, integrity level은 각각 어떤 보안 판단에 쓰이는가?
2. UAC elevation 전후로 token과 integrity level이 어떻게 달라지는가?
3. DACL과 SACL은 접근 제어와 감사 로그에서 각각 어떤 역할을 하는가?
4. SeDebugPrivilege와 SeImpersonatePrivilege는 취약점 분석이나 사고 분석에서 왜 중요한가?
5. job object나 AppContainer 같은 제한 정책은 process 격리에 어떤 영향을 주는가?
6. Process Explorer와 AccessChk 결과를 서로 검증할 때 어떤 필드를 비교해야 하는가?
7. 오늘 산출물인 "Process Explorer와 AccessChk로 본 token/integrity/ACL 표"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
