---
title: "16주차: pwn.college Program Security 입문"
draft: true
---

# 16주차: pwn.college Program Security 입문

## 기준

- 주 5일
- 하루 2시간
- 실습 70분, 개념 35분, 노트 15분을 기본 단위로 사용

## 참고 자료

- pwn.college: Program Security
- pwntools docs
- Dreamhack: System Hacking beginner problems
- HTB: pwn/reversing warm-up challenges

## 연결 노트

### Security

- [[_drafts/study-elements/security/system-hacking/argv|argv]]
- [[_drafts/study-elements/security/system-hacking/envp|envp]]
- [[_drafts/study-elements/security/system-hacking/crash-analysis|crash analysis]]
- [[_drafts/study-elements/security/system-hacking/offset|offset]]

### Platforms

- [[_drafts/study-elements/platforms/linux/procfs|procfs]]

## 요일별 계획

### 월요일

- 개념: [[_drafts/study-elements/security/system-hacking/argv|argv]], [[_drafts/study-elements/security/system-hacking/envp|envp]]
- 자료: pwn.college: Program Security
- 노트: 이번 주 목표와 모르는 용어를 `_drafts`에 정리

### 화요일

- 실습: argv/envp/stdin/file descriptor 기반 문제를 풀고 /proc/self/maps를 관찰한다.
- 개념: [[_drafts/study-elements/platforms/linux/procfs|procfs]], [[_drafts/study-elements/security/system-hacking/crash-analysis|crash analysis]]
- 노트: 실습 중 확인한 명령어, 주소, artifact를 짧게 기록

### 수요일

- 자료: pwntools docs
- 실습: 월/화에 막힌 부분을 debugger, disassembler, packet viewer 중 해당 도구로 재확인
- 노트: 왜 막혔는지와 다음 확인 지점을 적기

### 목요일

- 실습: argv/envp/stdin/file descriptor 기반 문제를 풀고 /proc/self/maps를 관찰한다.
- 개념: [[_drafts/study-elements/security/system-hacking/offset|offset]]
- 노트: 재현 절차를 lab 또는 wiki 초안으로 분리

### 금요일

- 산출물: Program Security 풀이 노트 2개
- 복습: 이번 주 개념 링크가 public wiki로 옮길 수준인지 표시
- 정리: 다음 주에 이어갈 질문 3개 작성

## 완료 기준

- [ ] study log 2개 이상
- [ ] wiki seed 2개 이상
- [ ] 실습 또는 분석 산출물 1개
- [ ] 막힌 지점과 해결 과정을 한 문단으로 정리
