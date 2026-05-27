---
title: "Week 37 Day 07: 주간 복습과 peer-review checklist"
draft: true
---

# Week 37 Day 07: 주간 복습과 peer-review checklist

## 오늘의 목표

- malware analysis, static analysis, dynamic analysis를 자료의 정의, 실습 관찰, 보안 분석 쓰임으로 나누어 설명한다.
- config extraction, detection rule, report structure가 실제 artifact, primitive, IOC, evidence 중 어디에 연결되는지 예시를 남긴다.
- 오늘 실습에서 사용한 명령어와 도구 출력은 그대로 기록하고, 해석과 추정은 별도 문장으로 분리한다.
- 마지막에 내일 이어서 확인할 질문 2개를 만든다.

## 공부 자료

- 보유 서적: Learning Malware Analysis, Malware Analysis and Detection Engineering, 실전 리눅스 악성코드 분석, 사이버 사고 대응 실무, 디지털 포렌식과 사고 대응 2/e, 메모리 포렌식 - malware report, memory/process evidence, detection rule, incident narrative
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 3장 Advanced Static Techniques
- MITRE ATT&CK: Enterprise tactics, techniques, procedure examples, data sources
- Malware Unicorn: malware analysis methodology and lab safety sections
- REMnux docs: analysis VM 구성, INetSim, FakeDNS, safe sample handling
- Practical Malware Analysis: 1장 Basic Static Techniques, 2장 Basic Dynamic Analysis, 5장 IDA Pro
- Ghidra Student Guide: CodeBrowser, Listing, Decompiler, Symbol Tree, References, Function Graph
- OpenSecurityTraining2 Intro x86/x64: disassembly 읽기와 control flow 추적 파트
- Malware Unicorn reversing workshops: strings, xrefs, functions, API flow 실습
- Practical Malware Analysis: persistence, Windows API, DLL injection, process replacement 관련 장

## 핵심 키워드

malware analysis, static analysis, dynamic analysis, config extraction, detection rule, report structure

## 반드시 정리할 개념

- malware analysis: malware taxonomy를 기능, 전달 방식, persistence, C2 필요성으로 구분하고 IOC와 TTP를 분리한다.
- static analysis: 자동 분석 결과를 그대로 믿지 않고 xref, function boundary, CFG/call graph, runtime evidence로 교차 검증한다.
- dynamic analysis: 자동 분석 결과를 그대로 믿지 않고 xref, function boundary, CFG/call graph, runtime evidence로 교차 검증한다.
- config extraction: static analysis를 방해하는 지점과 deobfuscation/unpacking 후 새로 보이는 evidence를 비교한다.
- detection rule: YARA는 file/content, Sigma는 log/event 중심이라는 차이를 정리하고 rule 목적, 조건, false positive 관리 방법을 적는다.
- report structure: 포트폴리오 산출물은 재현성, 기술 깊이, 근거 품질, 공개 가능성으로 평가한다. 민감 정보와 dual-use 세부사항은 분리한다.

## 실습

- 실제 악성 샘플 대신 교육용 샘플이나 benign simulator로 static/dynamic triage 표를 작성한다. 실행은 격리 VM과 차단 네트워크에서만 설계한다.
- 직접 컴파일한 benign binary를 Ghidra에 로드하고 strings, xrefs, function graph, decompiler 결과를 서로 검증한다.
- benign simulator 또는 문서 예제로 persistence/injection 흐름을 API 단계와 artifact 단계로 나누어 표기한다.
- 오늘 사용한 명령어, 입력 파일, 출력, 해석, 막힌 지점, 다음 확인 지점을 같은 문서에 남긴다.

## 오늘 남길 산출물

- Week 37 최종 보고서와 검토 체크리스트
- 오늘 배운 키워드 중 3개를 골라 정의, 관찰 방법, 보안 분석에서의 쓰임을 각각 2문장 이상으로 정리한다.
- 실습이 실패했다면 실패한 명령어, 에러 메시지, 추정 원인, 다음 확인 지점을 그대로 남긴다.

## 복습 질문

1. malware analysis 유형을 기능, persistence, C2, payload 관점에서 다른 유형과 구분할 수 있는가?
2. static analysis 결과를 도구가 만든 값 그대로 믿지 않기 위해 어떤 교차 검증을 했는가?
3. dynamic analysis를 오늘 실습 결과와 연결해 설명하면 입력, 처리 과정, 출력, 한계는 무엇인가?
4. config extraction를 해제하거나 우회한 뒤 새로 보이는 evidence는 무엇이며 원래 결론이 어떻게 바뀌는가?
5. detection rule를 보고서나 rule로 쓸 때 false positive를 줄이기 위한 조건은 무엇인가?
6. report structure를 공개 후보로 고를 때 재현성, 근거 품질, 민감 정보 제거, 읽는 사람의 맥락 중 무엇을 확인해야 하는가?
7. 오늘 산출물인 "Week 37 최종 보고서와 검토 체크리스트"이 다음 분석 단계에서 재사용 가능하려면 어떤 정보가 더 필요한가?
