---
title: "33주차: Memory Forensics"
draft: true
---

# 33주차: Memory Forensics

## 기준

- 주 5일
- 하루 2시간
- 실습 70분, 개념 35분, 노트 15분을 기본 단위로 사용

## 참고 자료

- The Art of Memory Forensics
- Volatility docs

## 연결 노트

### Security

- [[_drafts/study-elements/security/dfir/memory-dump|memory dump]]
- [[_drafts/study-elements/security/dfir/process-reconstruction|process reconstruction]]
- [[_drafts/study-elements/security/dfir/dll-list|DLL list]]
- [[_drafts/study-elements/security/dfir/vad|VAD]]
- [[_drafts/study-elements/security/dfir/malfind|malfind]]

## 요일별 계획

### 월요일

- 개념: [[_drafts/study-elements/security/dfir/memory-dump|memory dump]], [[_drafts/study-elements/security/dfir/process-reconstruction|process reconstruction]]
- 자료: The Art of Memory Forensics
- 노트: 이번 주 목표와 모르는 용어를 `_drafts`에 정리

### 화요일

- 실습: Volatility 기본 plugin 출력의 의미를 process, dll, handle, VAD 중심으로 정리한다.
- 개념: [[_drafts/study-elements/security/dfir/dll-list|DLL list]], [[_drafts/study-elements/security/dfir/vad|VAD]]
- 노트: 실습 중 확인한 명령어, 주소, artifact를 짧게 기록

### 수요일

- 자료: Volatility docs
- 실습: 월/화에 막힌 부분을 debugger, disassembler, packet viewer 중 해당 도구로 재확인
- 노트: 왜 막혔는지와 다음 확인 지점을 적기

### 목요일

- 실습: Volatility 기본 plugin 출력의 의미를 process, dll, handle, VAD 중심으로 정리한다.
- 개념: [[_drafts/study-elements/security/dfir/malfind|malfind]]
- 노트: 재현 절차를 lab 또는 concept 초안으로 분리

### 금요일

- 산출물: memory forensics lab
- 복습: 이번 주 개념 링크가 public wiki로 옮길 수준인지 표시
- 정리: 다음 주에 이어갈 질문 3개 작성

## 완료 기준

- [ ] daily note 2개 이상
- [ ] concept seed 2개 이상
- [ ] 실습 또는 분석 산출물 1개
- [ ] 막힌 지점과 해결 과정을 한 문단으로 정리
