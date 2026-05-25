---
title: "27주차: 악성코드 동적 분석"
draft: true
---

# 27주차: 악성코드 동적 분석

## 기준

- 주 5일
- 하루 2시간
- 실습 70분, 개념 35분, 노트 15분을 기본 단위로 사용

## 참고 자료

- Practical Malware Analysis
- Windows Internals Part 1
- Sysinternals Procmon/Process Explorer
- REMnux docs
- SANS FOR610 syllabus checklist

## 연결 노트

### Security

- [[_drafts/study-elements/security/malware-analysis/dynamic-analysis|dynamic analysis]]

### Platforms

- [[_drafts/study-elements/platforms/windows/registry|Registry]]
- [[_drafts/study-elements/platforms/windows/windows-service|Windows Service]]
- [[_drafts/study-elements/platforms/windows/scheduled-task|Scheduled Task]]
- [[_drafts/study-elements/platforms/windows/event-log|Event Log]]

## 요일별 계획

### 월요일

- 개념: [[_drafts/study-elements/security/malware-analysis/dynamic-analysis|dynamic analysis]], [[_drafts/study-elements/platforms/windows/registry|Registry]]
- 자료: Practical Malware Analysis
- 노트: 이번 주 목표와 모르는 용어를 `_drafts`에 정리

### 화요일

- 실습: Procmon, Process Explorer, Regshot 스타일의 행위 관찰 절차를 정리한다.
- 개념: [[_drafts/study-elements/platforms/windows/windows-service|Windows Service]], [[_drafts/study-elements/platforms/windows/scheduled-task|Scheduled Task]]
- 노트: 실습 중 확인한 명령어, 주소, artifact를 짧게 기록

### 수요일

- 자료: Windows Internals Part 1
- 실습: 월/화에 막힌 부분을 debugger, disassembler, packet viewer 중 해당 도구로 재확인
- 노트: 왜 막혔는지와 다음 확인 지점을 적기

### 목요일

- 실습: Procmon, Process Explorer, Regshot 스타일의 행위 관찰 절차를 정리한다.
- 개념: [[_drafts/study-elements/platforms/windows/event-log|Event Log]]
- 노트: 재현 절차를 lab 또는 wiki 초안으로 분리

### 금요일

- 산출물: dynamic analysis lab template
- 복습: 이번 주 개념 링크가 public wiki로 옮길 수준인지 표시
- 정리: 다음 주에 이어갈 질문 3개 작성

## 완료 기준

- [ ] study log 2개 이상
- [ ] wiki seed 2개 이상
- [ ] 실습 또는 분석 산출물 1개
- [ ] 막힌 지점과 해결 과정을 한 문단으로 정리
