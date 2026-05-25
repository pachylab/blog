---
title: "37주차: 통합 사례 1: malware-to-forensics"
draft: true
---

# 37주차: 통합 사례 1: malware-to-forensics

## 기준

- 주 5일
- 하루 2시간
- 실습 70분, 개념 35분, 노트 15분을 기본 단위로 사용

## 참고 자료

- Practical Malware Analysis
- The Art of Memory Forensics
- Windows Internals Part 1

## 연결 노트

### Security

- [[_drafts/study-elements/security/malware-analysis/ioc|IOC]]
- [[_drafts/study-elements/security/dfir/timeline-analysis|timeline analysis]]
- [[_drafts/study-elements/security/malware-analysis/persistence|persistence]]

### Platforms

- [[_drafts/study-elements/platforms/windows/event-log|Event Log]]

### CS

- [[_drafts/study-elements/cs/networking/pcap|PCAP]]

## 요일별 계획

### 월요일

- 개념: [[_drafts/study-elements/security/malware-analysis/ioc|IOC]], [[_drafts/study-elements/security/dfir/timeline-analysis|timeline analysis]]
- 자료: Practical Malware Analysis
- 노트: 이번 주 목표와 모르는 용어를 `_drafts`에 정리

### 화요일

- 실습: toy malware 행위 → host artifact → network IOC → timeline 순서로 보고서를 쓴다.
- 개념: [[_drafts/study-elements/platforms/windows/event-log|Event Log]], [[_drafts/study-elements/cs/networking/pcap|PCAP]]
- 노트: 실습 중 확인한 명령어, 주소, artifact를 짧게 기록

### 수요일

- 자료: The Art of Memory Forensics
- 실습: 월/화에 막힌 부분을 debugger, disassembler, packet viewer 중 해당 도구로 재확인
- 노트: 왜 막혔는지와 다음 확인 지점을 적기

### 목요일

- 실습: toy malware 행위 → host artifact → network IOC → timeline 순서로 보고서를 쓴다.
- 개념: [[_drafts/study-elements/security/malware-analysis/persistence|persistence]]
- 노트: 재현 절차를 lab 또는 wiki 초안으로 분리

### 금요일

- 산출물: IR mini report 초안
- 복습: 이번 주 개념 링크가 public wiki로 옮길 수준인지 표시
- 정리: 다음 주에 이어갈 질문 3개 작성

## 완료 기준

- [ ] study log 2개 이상
- [ ] wiki seed 2개 이상
- [ ] 실습 또는 분석 산출물 1개
- [ ] 막힌 지점과 해결 과정을 한 문단으로 정리
