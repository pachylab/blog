---
title: "20주차: ROP 기본"
draft: true
---

# 20주차: ROP 기본

## 기준

- 주 5일
- 하루 2시간
- 실습 70분, 개념 35분, 노트 15분을 기본 단위로 사용

## 참고 자료

- pwn.college: Return Oriented Programming
- Practical Binary Analysis
- Dreamhack/HTB: ROP chain practice

## 연결 노트

### Security

- [[_drafts/study-elements/security/system-hacking/rop|ROP]]
- [[_drafts/study-elements/security/system-hacking/gadget|gadget]]
- [[_drafts/study-elements/security/system-hacking/pop-rdi-ret|pop rdi ret]]
- [[_drafts/study-elements/security/system-hacking/rop-chain|ROP chain]]
- [[_drafts/study-elements/security/system-hacking/stack-alignment|stack alignment]]

## 요일별 계획

### 월요일

- 개념: [[_drafts/study-elements/security/system-hacking/rop|ROP]], [[_drafts/study-elements/security/system-hacking/gadget|gadget]]
- 자료: pwn.college: Return Oriented Programming
- 노트: 이번 주 목표와 모르는 용어를 `_drafts`에 정리

### 화요일

- 실습: gadget 찾기, 인자 register 세팅, chain을 표로 먼저 작성한다.
- 개념: [[_drafts/study-elements/security/system-hacking/pop-rdi-ret|pop rdi ret]], [[_drafts/study-elements/security/system-hacking/rop-chain|ROP chain]]
- 노트: 실습 중 확인한 명령어, 주소, artifact를 짧게 기록

### 수요일

- 자료: Practical Binary Analysis
- 실습: 월/화에 막힌 부분을 debugger, disassembler, packet viewer 중 해당 도구로 재확인
- 노트: 왜 막혔는지와 다음 확인 지점을 적기

### 목요일

- 실습: gadget 찾기, 인자 register 세팅, chain을 표로 먼저 작성한다.
- 개념: [[_drafts/study-elements/security/system-hacking/stack-alignment|stack alignment]]
- 노트: 재현 절차를 lab 또는 wiki 초안으로 분리

### 금요일

- 산출물: ROP basic writeup
- 복습: 이번 주 개념 링크가 public wiki로 옮길 수준인지 표시
- 정리: 다음 주에 이어갈 질문 3개 작성

## 완료 기준

- [ ] study log 2개 이상
- [ ] wiki seed 2개 이상
- [ ] 실습 또는 분석 산출물 1개
- [ ] 막힌 지점과 해결 과정을 한 문단으로 정리
