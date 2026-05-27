---
title: "공부 자료 카탈로그"
draft: true
---

# 공부 자료 카탈로그

이 문서는 40주 로드맵에서 반복해서 쓰는 책, 강의, 문서, 실습 사이트를 한 곳에 모은 자료표다. 새 자료를 추가할 때는 "언제 쓰는지"와 "어떤 산출물로 연결되는지"를 같이 적는다.

## 사용 원칙

- 무료 공식 문서와 공개 강의를 먼저 사용한다.
- 책은 깊이 있는 기준서로 쓰고, 매일 전부 읽지 않는다. 해당 주차의 범위만 읽는다.
- 실습 사이트는 문제 풀이 자체보다 writeup, 재현 로그, 한계 정리를 남기는 데 쓴다.
- 암호학 수학은 Week 31 전에 중학교-고등학교 수학 gate를 통과하는 방식으로 운영한다.
- 사용자가 보유한 책은 아래 "보유 서적 매핑"을 기준으로 필요한 주차에만 참고한다.

## 보유 서적 매핑

| 서적 | 참고할 파트 | 공부 계획 반영 위치 |
|---|---|---|
| 해킹: 공격의 예술 | C, assembly, shellcode, stack overflow, debugging, network basics. 오래된 환경 차이는 기록하고 현대 mitigation은 별도 자료로 보완 | Week 03, 06, 13, 19-22 |
| 리버싱 핵심 원리 | x86 assembly, Windows reversing, PE, debugger, API tracing, unpacking 기초 | Week 11-13, 17, 36 |
| Concrete Mathematics | sum, recurrence, number theory, binomial coefficient, probability. 암호학/알고리즘 수학 심화 참고 | Week 31-35 |
| 컴퓨터시스템 딥다이브 | computer system, CPU, memory, process, executable, OS interface를 넓게 복습 | Week 02-07, 11 |
| 운영체제 - Stallings | process, thread, scheduler, concurrency, memory management, filesystem, I/O, security model을 이론적으로 보강 | Week 04-05, 08, 24-25 |
| 운영체제 - Silberschatz | Operating System Concepts 기준으로 process/thread, synchronization, virtual memory, filesystem, protection/security를 복습 | Week 04-05, 08, 24-25 |
| 사이버 사고 대응 실무 | IR lifecycle, triage, scoping, timeline, evidence, final report 구조 | Week 26-30, 37, 40 |
| 디지털 포렌식과 사고 대응 2/e | evidence handling, acquisition, artifact analysis, timeline, incident response report를 DFIR 흐름으로 보강 | Week 08, 26-30, 37, 40 |
| 리눅스 커널 심층 구조 | process, scheduler, VFS, memory, syscall, module, driver 구조 | Week 25 |
| 시스인터널스 도구로 윈도우 문제 해결하기 | Process Explorer, Procmon, Autoruns, handle, service, registry 관찰 | Week 14-16, 24, 26 |
| 윈도우 레지스트리 포렌식 | registry hive, Run key, service, UserAssist, ShellBags, USB/device artifact, persistence 분석 | Week 16, 24, 26 |
| 셸 스크립트 프로그래밍 입문 | shell, pipeline, text processing, 반복 분석 자동화 | Week 01, 07, 40 |
| 실전 리눅스 악성코드 분석 | ELF malware, Linux persistence, process/network artifact, Linux-focused dynamic analysis | Week 14-18, 25, 37 |
| Windows Internals 7/e Vol.1, Vol.2 | system architecture, process/thread/job, memory manager, security, registry, I/O, service, ETW | Week 24, 26, 28 |
| 메모리 포렌식 | memory acquisition, process reconstruction, DLL/handle/VAD, malfind, injected code, rootkit indicator 분석 | Week 28, 37 |
| BPF Performance Tools | eBPF, tracing, perf, bpftrace, observability와 kernel signal extraction | Week 25 |
| Learning Malware Analysis | malware triage, static/dynamic analysis, unpacking, behavior report | Week 14-18, 37 |
| Malware Analysis and Detection Engineering | YARA/Sigma, detection lifecycle, telemetry, false positive 관리 | Week 15, 18, 37 |
| Cryptography & Network Security | classical crypto, symmetric/public-key crypto, hash/MAC, authentication, network security protocol | Week 08-10, 18, 29, 31-33, 35 |
| The Shellcoder's Handbook | shellcode, stack/heap exploitation, exploit development. 현대 mitigation은 pwn.college/ROP Emporium으로 보완 | Week 19-23, 38 |
| 실전 바이너리 분석 | ELF, disassembly, instrumentation, binary analysis workflow, vulnerability research | Week 11-13, 23, 38 |
| 전문가를 위한 C | C pointer, array, lifetime, undefined behavior, ABI와 연결되는 C 함정 | Week 06, 20-21 |
| 모던 C | integer, pointer, object model, safer C style, UB 정리 | Week 06, 20-21 |
| 메타스플로잇 | exploit 검증 프레임워크와 모듈 구조를 이해하는 보조 자료. 허가된 lab에서만 사용 | Week 19, 38-39 |
| Computer Systems: A Programmer's Perspective | bit/byte, machine code, linking, VM, process, network programming의 주 교재 | Week 02-07, 11, 19-23 |
| Kernighan C 언어 프로그래밍 | C syntax, pointer, array, string, struct의 기본 교재 | Week 06 |
| 실전 버그바운티 | 취약점 보고, 재현 절차, 영향 설명, responsible disclosure 관점 보조. Web 심화는 core 밖 선택 주제 | Week 39-40 |
| Structure and Interpretation of Computer Programs | abstraction, interpreter, recursion, environment model, symbolic thinking | Week 07, 34-36 |

## 수학과 암호학 기초

| 자료 | 유형 | 언제 쓰는지 | 연결 주차 |
|---|---|---|---|
| [EBSi](https://www.ebsi.co.kr/) | 무료 강의 | 한국어로 중학-고등 수학 개념을 빠르게 복습한다. 수학(상/하), 수학 I, 확률과 통계에서 막힐 때 사용 | Week 31-35 |
| [Khan Academy Math](https://www.khanacademy.org/math) | 무료 강의/문제 | 중학 수학, Algebra 1/2, Precalculus, Probability and statistics를 빠르게 복습한다. 소인수분해, GCD, 함수, 지수/로그, 확률이 막힐 때 사용 | Week 01-02, 31-35 |
| [OpenStax Prealgebra](https://openstax.org/details/books/prealgebra-2e) | 무료 교재 | 정수, 분수, 비례, 약수/배수, 소인수분해를 글로 다시 확인할 때 사용 | Week 31 Day 01 |
| [OpenStax Algebra and Trigonometry](https://openstax.org/details/books/algebra-and-trigonometry-2e) | 무료 교재 | 함수, 역함수, 지수, 로그, 다항식을 복습한다. keyspace와 exponential growth 이해에 사용 | Week 31-32 |
| [OpenStax Introductory Statistics](https://openstax.org/details/books/introductory-statistics-2e) | 무료 교재 | sample space, distribution, probability, expected value, bias를 보충한다 | Week 31 Day 04, Week 33 Day 02, Week 35 |
| [MIT 6.042J Mathematics for Computer Science](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/) | 공개 강의 | set, relation, function, counting, probability, graph theory, number theory를 필요한 lecture만 골라 본다 | Week 01, 31-35 |
| [3Blue1Brown](https://www.3blue1brown.com/) | 시각화 강의 | 선형대수, 지수/로그, 확률 직관이 막힐 때 보조 자료로 사용 | Week 31-35 |
| [The Joy of Cryptography](https://joyofcryptography.com/) | 무료 교재 | pseudorandomness, symmetric/public-key crypto의 이론적 뼈대를 잡는다 | Week 31-33 |
| [Serious Cryptography](https://nostarch.com/seriouscrypto) | 책 | hash, MAC, authenticated encryption, public-key crypto, randomness를 실무 구현 관점으로 읽는다 | Week 31-33 |
| [Cryptopals](https://cryptopals.com/) | 실습 | XOR, encoding, block cipher mode, padding, oracle류 실습을 작은 코드로 푼다 | Week 31-33 |
| [CryptoHack](https://cryptohack.org/) | 실습 | modular arithmetic, RSA, ECC, symmetric crypto 문제로 암호학 수학을 연습한다 | Week 32-35 |
| [RFC 4648](https://www.rfc-editor.org/rfc/rfc4648), [RFC 2104](https://www.rfc-editor.org/rfc/rfc2104), [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446) | 표준 문서 | Base64, HMAC, TLS 1.3 필드와 용어를 정확히 확인한다 | Week 31-32 |
| [NIST SP 800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final), [FIPS 180-4](https://csrc.nist.gov/publications/detail/fips/180/4/final) | 표준 문서 | block cipher mode와 SHA 계열 해시의 공식 정의를 확인한다 | Week 31-32 |
| [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) | 실무 가이드 | salt, KDF, password hashing, work factor를 실무 관점으로 정리한다 | Week 33 |

## CS, 컴퓨터 구조, 운영체제

| 자료 | 유형 | 언제 쓰는지 | 연결 주차 |
|---|---|---|---|
| [The Linux Command Line](https://linuxcommand.org/tlcl.php) | 무료 책 | Linux CLI, redirection, shell workflow를 익힌다 | Week 01 |
| [CS:APP](https://csapp.cs.cmu.edu/) | 책 | bit/byte, integer, assembly, linking, virtual memory, process를 시스템 보안 언어로 연결한다 | Week 02-07, 11, 19-23 |
| [OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/) | 무료 책 | process, scheduler, virtual memory, filesystem, concurrency를 학습한다 | Week 04-05, 08, 24-25 |
| [OpenSecurityTraining2](https://p.ost2.fyi/) | 무료 강의 | x86/x64 architecture, assembly, vulnerability/reversing 기초를 강의와 실습으로 보강한다 | Week 03, 11-13, 19-23 |
| 해커의 기쁨(Hacker's Delight) | 책 | 한국어판을 구할 수 있으면 우선 사용한다. bit trick, integer representation, overflow, bit vector 사고를 보강한다. `hackersdelight.org`는 현재 책 사이트가 아니므로 사용하지 않는다 | Week 02, 31, 35 |
| [CLRS](https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/) | 책 | 자료구조, Big-O, graph, sorting/searching의 기준서로 사용 | Week 34-35 |
| [Algorithms, 4th Edition](https://algs4.cs.princeton.edu/home/) | 무료 책/강의 | graph, string processing, sorting/searching을 구현 중심으로 연습한다 | Week 34-35 |

## C, 컴파일러, 리버싱

| 자료 | 유형 | 언제 쓰는지 | 연결 주차 |
|---|---|---|---|
| The C Programming Language | 책 | pointer, array, string, struct, function pointer, memory layout 기초 | Week 06, 19-23 |
| Modern C | 책 | undefined behavior, signedness, object lifetime, safer C 습관 보강 | Week 06, 20-21 |
| [LLD documentation](https://lld.llvm.org/) | 공식 문서 | 최신 linker 관점에서 ELF/COFF/Mach-O/Wasm linking, LTO, linker behavior를 확인한다. `Linkers and Loaders` 대체 1순위 | Week 07, 11 |
| [The ELF, COFF and Wasm Linkers](https://lld.llvm.org/NewLLD.html) | 공식 문서 | LLD 내부 설계, object file 처리, symbol resolution, relocation 흐름을 읽는다 | Week 07, 11 |
| [Ian Lance Taylor's Linkers series](https://www.airs.com/blog/archives/38) | 글 시리즈 | classic linker 개념을 무료로 훑을 때 사용한다. `Linkers and Loaders` 대체 보조 자료 | Week 07, 11 |
| System V ABI, Microsoft PE/COFF spec, Apple Mach-O docs | 공식 문서 | ELF/PE/Mach-O 포맷을 OS별로 정확히 확인한다 | Week 11 |
| [LLVM documentation](https://llvm.org/docs/) | 공식 문서 | IR, CFG, SSA, sanitizer, coverage 개념 확인 | Week 07, 23, 36 |
| [Ghidra](https://ghidra-sre.org/) | 도구/문서 | disassembly, decompiler, xref, function graph, type recovery 실습 | Week 12, 36-37 |
| [Hex-Rays IDA](https://hex-rays.com/ida-pro/) | 도구/문서 | IDA view, graph, xref, function naming, debugging workflow 비교 | Week 12-13 |
| [Practical Binary Analysis](https://nostarch.com/binaryanalysis) | 책 | ELF, disassembly, binary instrumentation, vulnerability analysis 보강 | Week 11-13, 38 |
| [Malware Unicorn](https://malwareunicorn.org/) | 워크숍 | reversing methodology, API flow, malware-style analysis를 실습한다 | Week 12-18 |

## 시스템 해킹과 퍼징

| 자료 | 유형 | 언제 쓰는지 | 연결 주차 |
|---|---|---|---|
| [pwn.college](https://pwn.college/) | 실습 플랫폼 | Linux, Program Security, System Security를 단계적으로 푼다 | Week 01-05, 19-23 |
| [ROP Emporium](https://ropemporium.com/) | 실습 | ret2win, ROP chain, pivot 등 exploit primitive 연습 | Week 19, 22, 38 |
| [how2heap](https://github.com/shellphish/how2heap) | 실습 코드 | glibc malloc, tcache, fastbin, UAF, double free 예제 관찰 | Week 21 |
| [AFL++](https://aflplus.plus/) | 도구/문서 | coverage-guided fuzzing, corpus, crash minimization, afl-cmin/afl-tmin | Week 23, 38 |
| [libFuzzer](https://llvm.org/docs/LibFuzzer.html) | 도구/문서 | in-process fuzzing harness와 sanitizer 기반 crash triage | Week 23, 38 |
| [angr](https://angr.io/) | 도구/문서 | symbolic execution, CFGFast, solver 기반 조건 분석 | Week 23, 35, 39 |
| [Z3Py Guide](https://ericpony.github.io/z3py-tutorial/guide-examples.htm) | 튜토리얼 | bit-vector, constraint, SMT 모델링 실습 | Week 23, 35 |
| [BinDiff](https://www.zynamics.com/bindiff.html), [Diaphora](https://github.com/joxeankoret/diaphora) | 도구 | patch diffing, N-day 분석, variant search | Week 23, 38-39 |

## Windows, Linux, 시스템 보안

| 자료 | 유형 | 언제 쓰는지 | 연결 주차 |
|---|---|---|---|
| Windows Internals | 책 | object manager, process/thread, memory manager, registry, services, I/O, security model | Week 24, 26, 28 |
| [Microsoft Learn](https://learn.microsoft.com/) | 공식 문서 | access token, ACL, UAC, WDAC, AppLocker, Event Log, ETW, Sysmon 관련 공식 정의 확인 | Week 24, 26 |
| [Sysinternals](https://learn.microsoft.com/sysinternals/) | 도구/문서 | Process Explorer, Procmon, Autoruns로 Windows artifact 관찰 | Week 14-16, 24, 26 |
| Linux Kernel Development | 책 | kernel architecture, process, memory, VFS, module 개념 보강 | Week 25 |
| [Linux kernel docs](https://docs.kernel.org/) | 공식 문서 | syscall, VFS, security module, eBPF, driver, module 문서 확인 | Week 25 |
| [man7.org Linux man-pages](https://man7.org/linux/man-pages/) | 공식 문서 | system call, procfs, mmap, ptrace, capabilities, namespaces 확인 | Week 01-05, 25 |
| [Docker security docs](https://docs.docker.com/engine/security/) | 공식 문서 | rootless mode, default capabilities, seccomp profile 확인 | Week 25, 30 |

## 네트워크, 악성코드, 포렌식

| 자료 | 유형 | 언제 쓰는지 | 연결 주차 |
|---|---|---|---|
| [Wireshark User's Guide](https://www.wireshark.org/docs/wsug_html_chunked/) | 공식 문서 | display filter, follow stream, protocol field 해석 | Week 09-10, 29, 32 |
| [Zeek Docs](https://docs.zeek.org/) | 공식 문서 | conn.log, dns.log, http.log, ssl.log, uid correlation | Week 10, 15, 18, 29 |
| [Suricata Docs](https://docs.suricata.io/) | 공식 문서 | IDS rule syntax, eve.json, alert triage | Week 10, 15, 29 |
| [Malware Traffic Analysis](https://www.malware-traffic-analysis.net/) | 실습 PCAP | DNS/HTTP/TLS 기반 malware traffic timeline 연습 | Week 10, 18, 29 |
| Practical Malware Analysis | 책 | static/dynamic malware triage, IDA, API, persistence, unpacking | Week 14-18, 37 |
| [REMnux Docs](https://docs.remnux.org/) | 도구/문서 | malware analysis VM, INetSim, FakeDNS, safe handling | Week 14-18, 37 |
| [YARA Docs](https://yara.readthedocs.io/) | 공식 문서 | file/content detection rule 작성 | Week 15, 37 |
| [Sigma](https://sigmahq.io/) | 규칙/문서 | log detection rule, data source, false positive 관리 | Week 15, 37 |
| File System Forensic Analysis | 책 | filesystem metadata, timeline, deleted recovery, carving | Week 08, 27 |
| The Art of Memory Forensics | 책 | memory acquisition, process, DLL, handle, VAD, malfind | Week 28 |
| [Volatility 3 Docs](https://volatility3.readthedocs.io/) | 공식 문서 | memory dump 분석 플러그인 사용 | Week 28 |
| [Autopsy/Sleuth Kit](https://www.sleuthkit.org/) | 도구/문서 | disk image ingest, timeline, file carving workflow | Week 08, 27 |

## 보고서, 프레임워크, 기준 문서

| 자료 | 유형 | 언제 쓰는지 | 연결 주차 |
|---|---|---|---|
| [MITRE ATT&CK](https://attack.mitre.org/) | 프레임워크 | IOC/TTP, technique, data source, detection mapping | Week 14-18, 37 |
| [NIST NICE Framework](https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center) | 직무 기준 | 직무별 knowledge/skill/task를 산출물과 연결 | Week 40 |
| [FIRST CVSS](https://www.first.org/cvss/) | 표준 | 취약점 영향도와 CVSS 산정 | Week 39 |
| [MITRE CVE Program](https://www.cve.org/) | 표준/절차 | CVE request, CNA, affected version, public reference 확인 | Week 39 |
| [BoB 공식 트랙 안내](https://www.kitribob.kr/learn/curriculum) | 교육 기준 | 취약점 분석/디지털 포렌식 트랙 대조 기준 | curriculum review |
| [헌팅마스터 2026](https://hunma.kr/index.html) | 교육 기준 | Reversing & Fuzzing 심화 항목 대조 기준 | curriculum benchmark |

## 우선순위

| 우선순위 | 자료군 | 이유 |
|---|---|---|
| 1 | Khan Academy, OpenStax, MIT 6.042J, pwn.college, OST2, official docs | 무료이고 개념-실습 연결이 좋다 |
| 2 | CS:APP, OSTEP, Serious Cryptography, Practical Malware Analysis, Windows Internals | 깊이 있는 기준서로 장기 재사용 가능하다 |
| 3 | Cryptopals, CryptoHack, ROP Emporium, how2heap, Malware Traffic Analysis | 주차별 산출물을 만들기 좋다 |
| 4 | SANS syllabus, BoB/헌팅마스터 공개 교육과정 | 직접 학습 자료라기보다 역량 체크리스트로 쓴다 |
