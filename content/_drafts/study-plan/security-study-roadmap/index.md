---
title: "40주 보안 학습 로드맵"
draft: true
---

# 40주 보안 학습 로드맵

이 로드맵은 매일 하나의 문서만 열어도 학습할 자료, 핵심 키워드, 반드시 정리할 개념, 실습, 복습 질문을 확인할 수 있게 구성했다. 도구 사용법만 익히는 과정이 아니라 컴퓨터 구조, 운영체제, 네트워크, 컴파일러/언어, 수학, 암호학, 리버싱, 악성코드 분석, 시스템 해킹, 시스템 보안, 디지털 포렌식을 계속 교차시킨다.

## 관련 문서

- [[_drafts/study-plan/security-study-roadmap/resource-catalog/index|공부 자료 카탈로그]]
- [[_drafts/study-plan/security-study-roadmap/crypto-math-foundation/index|암호학 수학 기초 로드맵]]
- [[_drafts/study-plan/security-study-roadmap/curriculum-review/index|커리큘럼 검증 패킷]]
- [[_drafts/study-plan/security-study-roadmap/research-loop/index|주간 연구 루프와 Target Ownership]]
- [[_drafts/daily-study/writing-guide/index|Daily Study 작성 가이드]]

## 권장 운영 강도

이 40주 계획은 주 5일 새 진도, 주 1회 review, 주 1회 휴식을 기준으로 한다. 새 진도는 하루 2-3시간, review는 60-90분이면 충분하다. 주당 총 학습량은 보통 11-16시간이다.

주 6일을 모두 새 진도로 채우지 않는다. 여섯 번째 학습 회차는 `week-XX-review`로 운영하며, Day 01-05 산출물을 회상하고 정리하고 다음 주 질문을 작게 만드는 데 쓴다. 휴식일에는 밀린 진도를 보충하지 않고, 필요하면 다음 회차 첫 행동 1개만 확인한다.

이 과정의 정확한 목표는 "40주 동안 보안 연구자가 된다"가 아니라 "보안 연구자가 되기 위한 공통 기반, 분석 습관, 산출물 포트폴리오, 연구 루프를 만든다"이다. 40주 뒤에는 pwn, reversing/malware, DFIR, kernel/system security 중 하나를 장기 연구축으로 고른다.

하루 2-3시간 기준의 기본 루틴은 Warm-up 10-15분, Core reading 30-45분, Lab 60-90분, Output 30-40분, Review 10-15분이다. Review 회차는 Warm-up 10분, 산출물 재검토 30-40분, unknown pruning 15분, 다음 질문 설계 15분으로 운영한다.

Week 12부터는 매주 advisory, CVE, paper, vendor patch note 중 하나를 30분 읽고 5줄 research note를 남긴다. 이 작업도 새 진도일을 늘리는 방식이 아니라 review 회차의 research note 칸에서 처리한다. Week 38-40은 실제 CVE 등록을 완료 조건으로 삼지 않고, 그동안 쌓은 note 중 1-2개를 advisory-grade reproduction/report로 다듬는 구간이다.

## 40주 후 연구원 기준

이 커리큘럼의 기준은 "혼자 많이 공부한 사람"이 아니라, 월 10,000 USD 수준의 비용을 들여 junior security researcher로 고용했을 때 믿고 작은 연구 과제를 맡길 수 있는 사람이다. 40주 후에도 Pwnie급 독립 연구자가 완성되는 것은 아니지만, 아래 기준을 통과해야 후속 심화 과정이나 교육 사업의 검증 사례로 삼을 수 있다.

| 역량 | 채용 기준 | 커리큘럼 증거 |
|---|---|---|
| 재현성 | 다른 사람이 같은 환경에서 결과를 재현할 수 있게 target/version, input/hash, exact command, stdout/stderr, exit status를 남긴다. | 모든 daily worksheet의 실습 기록과 Week 39 reproduction packet |
| 취약점 사고 | crash와 vulnerability를 구분하고, root cause, primitive, mitigation 영향을 분리해 설명한다. | Week 19-23, Week 38-39 vuln writeup |
| 리버싱 사고 | decompiler 결과를 그대로 믿지 않고 xref, CFG, dynamic trace, register/memory 근거로 가설을 검증한다. | Week 11-13, Week 36-37 reversing report |
| 악성코드/탐지 사고 | sample safety, behavior evidence, IOC/TTP, detection idea, false positive risk를 분리한다. | Week 14-18, Week 37 malware report |
| DFIR 사고 | artifact provenance, timestamp/timezone, actor/action/source/confidence, telemetry gap을 report에 남긴다. | Week 26-30, Week 37 incident note |
| 시스템 경계 사고 | user/kernel, token/ACL, capability/namespace/seccomp, LSM/eBPF/ETW telemetry를 권한 경계와 연결한다. | Week 24-25, Week 30, Week 38 |
| 공개 가능한 산출물 | 공개 claim과 private evidence/redaction 경계를 구분해 포트폴리오로 공개 가능한 글을 만든다. | Week 40 capstone과 advisory redaction worksheet |

## 실행기능 부담을 줄이는 운영 원칙

이 항목은 학습 설계 지침이며 진단, 치료, 복약 조언이 아니다. 성인 ADHD 학습자는 의지의 문제가 아니라 시작, 전환, 작업기억, 시간 추정, 산출물 마감에서 부담이 커지기 쉽다. 따라서 이 커리큘럼은 긴 독서와 완벽한 노트보다 "작게 시작하고, 바로 관찰하고, 짧게 회상하고, 다음 행동을 남기는" 방식으로 운영한다.

| 원칙 | 로드맵 적용 |
|---|---|
| 시작 비용 낮추기 | 매일 첫 행동을 5분 이하로 둔다. 예: 제목 읽기, 키워드 3개 표시, 명령어 1개 버전 확인 |
| 작업기억 외부화 | worksheet에 fact, inference, unknown, next check를 분리해 머릿속 임시 기억을 줄인다. |
| 시간상자 | Core reading은 30-45분에서 멈추고, 남은 시간은 Lab과 Output에 쓴다. |
| 검색보다 회상 | 이전 회차 질문 2개, 오늘 키워드 3개, 1/3/7회차 복습 카드를 직접 답하게 한다. |
| 선택지 제한 | Primary 자료는 하루 1개만 고르고 Reference는 막힌 용어 확인용으로 제한한다. |
| 실패 기록 허용 | 실습 실패도 exact command, stderr, exit status, 다음 확인 질문이 있으면 완료로 본다. |
| 난이도 계단 | minimum, standard, stretch를 나눠 컨디션이 낮은 날도 학습 루틴이 끊기지 않게 한다. |

## 최신 연구 반영 기준

최근 학습 연구에서는 단순 재독보다 retrieval practice, spaced practice, interleaving, 구체적 피드백이 장기 기억과 전이에 더 적합하다는 결론이 반복된다. 성인 ADHD 관련 심리사회적 연구는 시간관리, 조직화, 과제분해, 외부 단서, 행동 보상 같은 실행기능 보조가 실제 기능 개선에 중요하다고 본다. 그래서 daily guide와 worksheet는 모든 날짜에 같은 양식을 복사하지 않고, 주제군마다 다른 산출물 질문을 둔다.

최근 보안 연구를 보면 시스템 해킹은 coverage-guided fuzzing, directed fuzzing, sanitizer 기반 crash triage, patch diffing, variant hypothesis가 계속 중요하다. 리버싱은 decompiler output을 그대로 믿지 않고 xref, type recovery, dynamic trace, AI-assisted hypothesis를 검증하는 흐름이 강해지고 있다. 악성코드 분석은 static/dynamic triage, anti-analysis, config extraction, C2 timeline, detection engineering이 연결된다. DFIR은 memory/cloud/container/identity artifact와 provenance, timeline, telemetry gap을 함께 다루는 방향이다. 이 흐름을 Week 12 이후 연구 루프와 각 daily worksheet의 산출물 질문에 반영한다.

## 도메인 커버리지

| 도메인 | 반영 위치 |
|---|---|
| 컴퓨터 구조 | Week 01-03, 05, 35에서 bit/byte, 진수, signed/unsigned, two complement, endianness, word size, alignment, CPU/ISA/instruction, register, calling convention, cache/TLB/pipeline까지 다룬다. |
| 운영체제 | Week 04-05, 08, 24-25에서 process/thread/task, scheduler, virtual memory, filesystem, executable loader, Windows internals, Linux kernel을 연결한다. |
| 시스템 보안 | Week 05, 24-25, 30, 38에서 OS 보안 모델, access control, token/ACL/UAC, driver/IOCTL, Linux capability/namespace/cgroup/seccomp, LSM/eBPF telemetry, container isolation, hardening을 다룬다. |
| 네트워크 | Week 09-10, 18, 29에서 OSI/TCP-IP, DNS/HTTP/TLS, PCAP, IDS/IPS, C2, JA3/JA4, network forensics를 다룬다. |
| 컴파일러와 언어 | Week 06-07, 11, 36에서 C memory model, compiler/assembler/linker/loader, symbol/relocation/debug info, IR/CFG/SSA, bytecode/VM/JIT, runtime reversing을 다룬다. |
| 자료구조/알고리즘/수학 | Week 01-02, 31-35에서 중등 수학의 정수/분수/비례/소인수분해, 고등 수학의 함수/지수/로그/확률, 이산수학의 set/relation/function/boolean/counting/modular arithmetic/SMT/entropy를 보안 문제에 적용한다. |
| 암호학 | Week 31-33에서 암호학 수학 선행 점검을 같이 수행하며 encoding/hash/HMAC, AES, stream cipher, RSA/ECC/DH, PKI/TLS, KDF, CSPRNG, malware config/ransomware crypto를 다룬다. |
| 리버싱 | Week 11-13, 17, 36에서 PE/ELF/Mach-O, IDA/Ghidra, disassembly/decompilation, xref/function boundary, CFG/call graph, debugging, patching, obfuscation/unpacking, runtime별 reversing을 다룬다. |
| 악성코드 분석 | Week 14-18, 37에서 taxonomy, safe lab, IOC/TTP/ATT&CK, YARA/Sigma, persistence, injection, anti-analysis, C2, report를 다룬다. |
| 시스템 해킹 | Week 19-25, 38-39에서 stack/heap/format string/integer/OOB/ROP/seccomp/AFL++/libFuzzer/symbolic execution/patch diffing/N-day/CVE reporting과 kernel bug class mapping까지 다룬다. |
| 디지털 포렌식 | Week 08, 26-30, 37에서 evidence, disk/filesystem, Windows artifacts, memory dump, network forensics, mobile/cloud/container identity artifact와 incident scope를 다룬다. |

## 40주 계획

| 주차 | 주제 | Day 01-05 새 진도 | Review | 대표 산출물 |
|---|---|---|---|---|
| Week 01 | 학습 환경, Linux CLI, 수 표현의 첫 기준 | Linux CLI와 분석 노트 구조 / bit/byte와 진수 변환 / 분석 VM 분리와 샘플 취급 원칙 / boolean, set, relation, function 기초 / C 프로그램과 메모리 영역 맛보기 | 주간 복습과 산출물 정리 | CLI 명령어 10개 이상과 출력 해석 표, 2진수/10진수/16진수 변환표와 hex dump 해석 예시, 개인 분석 랩 안전 체크리스트 |
| Week 02 | 정수 표현, endian, CPU 실행 모델 | signed/unsigned와 integer type / two complement와 overflow / endianness, word size, alignment / CPU, ISA, instruction 구조 / cache, TLB, pipeline, branch prediction | 주간 복습과 산출물 정리 | C integer type 크기와 범위 표, overflow/underflow 예제와 취약점 연결 메모, endianness와 struct padding hex dump 비교 |
| Week 03 | register, stack frame, ABI, privilege transition | general-purpose register와 flag register / program counter, stack pointer, base pointer / calling convention과 ABI / stack frame, prologue, epilogue / user/kernel mode와 interrupt/exception/trap | 주간 복습과 산출물 정리 | register 역할과 조건 분기 flag 해석표, GDB single-step으로 본 RIP/RSP/RBP 변화 로그, SysV와 Microsoft x64 calling convention 비교표 |
| Week 04 | process, thread, scheduler, IPC | process, thread, task의 차이 / scheduler와 context switching / process 생성과 exec 흐름 / IPC와 synchronization / service, daemon, job, startup 실행 단위 | 주간 복습과 산출물 정리 | process/thread/task 비교표, context switch 때 저장되는 상태 목록, fork/exec 실습 로그와 process tree |
| Week 05 | virtual memory와 exploit mitigation | virtual address space와 physical memory / page, page table, page fault / stack, heap, mmap, shared memory / ASLR, DEP/NX, stack canary / PIE, RELRO, dynamic relocation | 주간 복습과 exploit 사고 정리 | virtual-to-physical translation 흐름도, page fault 유형과 원인 정리표, memory region별 생성/권한/lifetime 표 |
| Week 06 | C, object layout, memory safety | C pointer, array, string / struct, union, enum과 padding / integer type, signedness, UB 재확인 / function pointer, callback, vtable / memory safety와 ownership/lifetime | 주간 복습과 산출물 정리 | pointer/array/string 메모리 그림, struct layout과 padding 계산표, C integer bug 패턴 5개 정리 |
| Week 07 | compiler, linker, loader, intermediate representation | compiler, assembler, linker, loader / symbol, relocation, debug information / AST, IR, CFG, data flow, SSA / optimization과 decompiler 차이 / bytecode, VM, JIT, interpreter loop | 주간 복습과 산출물 정리 | source-to-execution 파이프라인 그림, nm/readelf/objdump로 본 symbol과 relocation 표, 간단한 함수의 CFG와 data-flow 노트 |
| Week 08 | filesystem, metadata, evidence handling | file, directory, metadata, timestamp / inode, MFT, journal / NTFS, ext4, APFS, FAT/exFAT / symbolic link, hard link, ADS / evidence, forensic image, write blocker | 주간 복습과 산출물 정리 | timestamp 의미와 timezone 주의점 정리, inode/MFT/journal 역할 비교표, 파일시스템별 분석 포인트 표 |
| Week 09 | network fundamentals와 protocol reading | OSI model과 TCP/IP stack / Ethernet, IP, ARP / TCP, UDP, ICMP / port, socket, session, routing, NAT / DNS, HTTP, HTTPS, TLS | 주간 복습과 network evidence 정리 | OSI/TCP-IP 계층 매핑표, ARP와 IP header 필드 해석표, TCP handshake와 UDP/ICMP 비교 PCAP 노트 |
| Week 10 | network forensics, IDS, C2 traffic | packet, frame, stream, PCAP 심화 / ARP, DHCP, routing table, firewall / IDS/IPS와 Zeek/Suricata / network IOC, JA3/JA4, TLS fingerprint / C2, beaconing, DGA, domain fronting | 주간 복습과 forensic evidence 정리 | stream reconstruction 절차 노트, 네트워크 환경 artifact 정리표, Zeek/Suricata 로그 필드 비교표 |
| Week 11 | executable format and loader | program loader와 executable format / ELF 구조와 GOT/PLT / PE 구조와 IAT/EAT / Mach-O와 load command / dynamic linking, static linking, relocation | 주간 복습과 산출물 정리 | loader가 실행 전 수행하는 작업 목록, ELF header/section/program header 해석표, PE 구조와 import/export 분석 노트 |
| Week 12 | static reversing workflow, IDA/Ghidra | static analysis와 dynamic analysis 비교 / disassembly와 decompilation 읽기 / xref와 function boundary / CFG와 call graph / string reference와 library identification | 주간 복습과 reversing 관찰 정리 | static/dynamic triage 장단점 표, assembly와 decompiler output 차이 메모, 함수 경계 검증 체크리스트 |
| Week 13 | debugging, tracing, patching | GDB/IDA debugger: breakpoint와 single-step / watchpoint와 memory tracing / x64dbg와 WinDbg 기본 / Frida와 API tracing / patching과 behavioral change | 주간 복습과 산출물 정리 | breakpoint 위치와 register 변화 로그, watchpoint로 찾은 값 변경 경로, Windows debugger 화면별 읽을 항목 정리 |
| Week 14 | malware taxonomy와 안전한 triage | malware taxonomy 개요 / safe lab와 sample handling / static triage: hash, strings, imports / dynamic triage: process, file, registry, network / IOC, TTP, ATT&CK-style thinking | 주간 복습과 malware 분석 정리 | malware 유형별 기능/흔적 비교표, 악성코드 분석 전 안전 절차 체크리스트, static triage 표 |
| Week 15 | detection engineering: YARA, Sigma, logs | YARA syntax와 file/content detection / Sigma와 log detection / Sysmon과 Windows Event / Zeek/Suricata network detection / false positive management | 주간 복습과 산출물 정리 | YARA rule 2개와 match 근거, Sigma rule 1개와 logsource 설명, Sysmon event별 탐지 질문 표 |
| Week 16 | persistence, injection, config extraction | Run key, service, scheduled task / WMI와 startup artifact / DLL injection과 thread injection / process hollowing과 APC injection / API hashing과 string encryption | 주간 복습과 산출물 정리 | 지속성 기법별 artifact 표, WMI persistence 구성 요소와 탐지 포인트, injection 단계와 API/event mapping |
| Week 17 | anti-analysis, obfuscation, packing | anti-debugging / anti-VM, anti-sandbox, anti-tampering / obfuscation과 deobfuscation / control-flow flattening과 opaque predicate / packing, OEP, dump | 주간 복습과 산출물 정리 | anti-debug signal과 우회/탐지 표, 환경 검사 항목과 오탐 가능성 표, 난독화 전후 evidence 비교 |
| Week 18 | C2, beaconing, DGA, network malware | C2 architecture와 payload staging / beaconing과 jitter 분석 / DGA와 domain fronting / network IOC와 TLS fingerprint / exfiltration pattern과 session reconstruction | 주간 복습과 malware 분석 정리 | C2 구성 요소와 traffic 흐름도, beacon 후보 시간 간격 분석표, DGA/domain fronting 탐지 질문표 |
| Week 19 | system hacking: stack overflow 입문 | vulnerability, exploit, exploit primitive / stack overflow와 buffer overflow / crash 분석과 offset 계산 / ret2win 기초 / shellcode와 NX 관계 맛보기 | 주간 복습과 exploit 사고 정리 | bug/vulnerability/exploit/primitive 구분표, stack overflow 메모리 그림, cyclic offset 계산 로그 |
| Week 20 | format string, integer bug, arbitrary read/write | format string bug 구조 / arbitrary read/write와 GOT overwrite / integer overflow/underflow / signedness bug / out-of-bounds read/write | 주간 복습과 산출물 정리 | format string 읽기/쓰기 primitive 정리, GOT overwrite 성공/실패 조건표, integer bug에서 OOB로 이어지는 흐름도 |
| Week 21 | heap internals와 heap exploitation | heap internals와 malloc/free / fastbin, tcache, unsorted bin / Use After Free / double free와 tcache poisoning / out-of-bounds와 type confusion | 주간 복습과 exploit 사고 정리 | heap chunk layout 그림, glibc bin별 조건과 위험 표, UAF 발생과 재사용 흐름도 |
| Week 22 | ROP, ret2libc, mitigation bypass | ret2libc와 leak 기반 exploit / ROP gadget과 chain 구성 / JOP, SROP, stack pivot / canary, PIE, RELRO 우회 사고 / seccomp와 sandbox 제약 | 주간 복습과 산출물 정리 | ret2libc 주소 계산과 payload 표, ROP chain register state 계획표, ROP/JOP/SROP 차이와 필요 조건표 |
| Week 23 | fuzzing and crash triage, symbolic/patch analysis | AFL++/libFuzzer harness와 corpus / sanitizer와 crash triage / symbolic execution과 SMT 미니 예제 / taint analysis와 source/sink 개념 지도 / patch diffing과 variant hypothesis 맛보기 | 주간 복습과 exploit 사고 정리 | toy parser fuzzing harness와 corpus 설계, sanitizer crash report 해석, 간단한 branch 조건을 Z3로 푼 노트 |
| Week 24 | Windows internals와 system security | object manager와 handle / Windows security model: token, SID, ACL, UAC / PEB, TEB, EPROCESS, ETHREAD / Windows memory manager / registry, service, WMI | 주간 복습과 system boundary 정리 | object/handle 관찰 노트, Process Explorer에서 본 token/integrity/ACL 표, user/kernel process structure 비교 |
| Week 25 | Linux kernel, system security, observability | kernel, module, syscall table / process/task scheduler와 procfs / VFS, inode, file operations / driver, module, IOCTL / capabilities, namespace, cgroup, seccomp | 주간 복습과 system boundary 정리 | Linux syscall과 kernel module 개념도, /proc 기반 process 관찰표, VFS 경로 해석 흐름도 |
| Week 26 | Windows DFIR artifacts | registry hives와 event log / Prefetch, ShimCache, AmCache / SRUM과 network/application usage / LNK, JumpList, Recycle Bin / browser history, cookies, cache | 주간 복습과 forensic evidence 정리 | registry/event log evidence map, 실행 흔적 artifact 비교표, SRUM으로 볼 수 있는 질문 목록 |
| Week 27 | disk and filesystem forensics | evidence, chain of custody, imaging / partition과 filesystem 식별 / deleted recovery와 file carving / timestamp, timezone, MACB / NTFS MFT, USN, $LogFile | 주간 복습과 forensic evidence 정리 | forensic imaging checklist, disk image 구조 파악 로그, 삭제 파일 복구 가능성 판단표 |
| Week 28 | memory forensics | memory acquisition와 profile/symbol / process reconstruction / DLL list, handle, object / VAD와 malfind / network socket과 process correlation | 주간 복습과 forensic evidence 정리 | memory acquisition와 도구 입력 체크리스트, process list와 의심 기준 표, 프로세스별 module/handle 분석표 |
| Week 29 | network forensics and session reconstruction | PCAP triage와 protocol inventory / DNS/HTTP/TLS session reconstruction / Zeek log timeline / Suricata alert triage / exfiltration과 lateral movement 패턴 | 주간 복습과 forensic evidence 정리 | PCAP 요약과 주요 endpoint 표, DNS->HTTP/TLS session 연결표, Zeek UID 기반 timeline |
| Week 30 | mobile, cloud, container, identity forensics | Android/iOS app sandbox / SQLite와 plist artifact / AWS CloudTrail과 cloud identity / Microsoft Entra와 sign-in/audit logs / GCP audit log와 Kubernetes audit | 주간 복습과 forensic evidence 정리 | mobile app sandbox artifact 표, SQLite/plist 분석 질문표, CloudTrail event 해석표 |
| Week 31 | crypto math primer, encodings, hashing | 암호학 수학 gate와 encoding 구분 / Base64, hex, URL encoding, Unicode / XOR encoding과 반복키 / hash function: MD5, SHA-1, SHA-256 / HMAC과 keyed integrity | 주간 복습과 crypto misuse 정리 | 중등/고등 수학 점검표와 encoding 비교표, 문자열 인코딩 변환 예제 모음, XOR decode 스크립트와 한계 |
| Week 32 | applied cryptography: symmetric, asymmetric, TLS | AES와 block cipher mode / IV, nonce, padding / stream cipher: ChaCha20와 RC4 / RSA, ECC, Diffie-Hellman와 모듈러 산술 / digital signature, certificate, PKI | 주간 복습과 crypto misuse 정리 | AES mode별 보안 속성 비교표, IV/nonce/padding 실수 사례 정리, stream cipher 사용 조건과 RC4 위험 노트 |
| Week 33 | crypto misuse, randomness, malware config | KDF, salt, password hashing / PRNG, CSPRNG, entropy / malware config decryption / ransomware encryption model / hash-based IOC와 crypto artifact | 주간 복습과 malware 분석 정리 | password storage 실수와 올바른 설계 비교, 난수 생성과 entropy 실수 사례 정리, toy config decryptor 스크립트 |
| Week 34 | data structures and algorithms for analysis | array, linked list, stack, queue / hash table과 collision / tree, B-tree, trie, heap data structure / sorting, searching, Big-O / graph, BFS, DFS, shortest path | 주간 복습과 산출물 정리 | 기본 자료구조 구현과 복잡도 표, hash table 동작과 collision 실험, 트리 계열 구조 비교표 |
| Week 35 | math foundations for security analysis | string matching, regex, finite automaton / boolean algebra, set, relation, function / modular arithmetic와 bit vector / constraint와 SMT / probability, statistics, entropy | 주간 복습과 개념 적용 정리 | regex/automaton으로 탐지 조건 표현, 탐지 조건식을 boolean algebra로 단순화, bit-vector 연산과 integer bug 연결 |
| Week 36 | advanced reversing: languages and runtimes | C++ object layout, vtable, RTTI / .NET, Java, bytecode, VM, JIT / Android DEX와 Dalvik/ART / Go, Rust, Swift binary 특징 / memory safety, ownership, garbage collection | 주간 복습과 reversing 관찰 정리 | C++ class layout과 virtual call 분석, .NET/Java metadata와 bytecode 비교표, DEX 구조와 Android 앱 분석 포인트 |
| Week 37 | integrated malware analysis project | project scope와 safe lab 재확인 / static triage와 executable 구조 / dynamic behavior와 host artifact / config extraction과 C2 timeline / detection rules와 false positive test | 주간 복습과 malware 분석 정리 | 프로젝트 분석 계획서, static triage report, host behavior evidence table |
| Week 38 | integrated exploit project, N-day, secure patching | target ownership 후보와 threat model / crash discovery와 root cause / primitive development / exploit chain와 mitigation bypass / patch design와 regression test | 주간 복습과 exploit 사고 정리 | 대상과 공격면 정의서, crash root cause 분석표, primitive 확인 로그와 kernel bug class mapping |
| Week 39 | CVE/N-day reproduction and advisory-grade reporting | CVE/N-day reading protocol / environment reconstruction / core idea reproduction / variant analysis와 detection mapping / CVSS v4.0, responsible disclosure, CVE/KVE reporting | 주간 복습과 산출물 정리 | 논문/CVE/N-day 읽기 템플릿 작성본, 재현 환경 구성 로그, 핵심 아이디어 최소 재현 결과 |
| Week 40 | portfolio, capstone, next roadmap | 40주 개념 coverage audit / best artifacts 선정과 정리 / analysis report polish / tooling automation 정리 / advisory 공개 경계와 evidence redaction | 최종 회고와 유지 루틴 | 도메인별 강점/공백 audit 표, 공개 후보 산출물 10개 목록, 대표 분석 보고서 polished version, 공개 advisory / private evidence 분리표 |

## 운영 방식

- 각 daily-study 문서는 Week NN Day 01-05 형식으로 읽고, 주간 복습은 Week NN Review로 읽는다.
- daily-study는 `week-NN-day-NN/study.md` 학습 가이드와 `week-NN-day-NN/index.md` 결과물 worksheet 두 문서로 운영한다.
- 주간 review는 `week-NN-review/study.md`와 `week-NN-review/index.md`로 운영하며, 새 자료를 시작하지 않는다.
- 매주 산출물은 public wiki 후보, private lab note, report/writeup 후보로 나누어 정리한다.
- 실제 악성 샘플, 공격 코드, 취약한 환경을 다룰 때는 교육용/격리 환경만 사용하고, 실행보다 관찰과 재현 가능한 기록을 우선한다.
- 매일 짧은 글쓰기 훈련을 수행하되, 형식은 주제군마다 다르게 둔다. 예를 들어 pwn은 target/trigger/root cause/primitive, malware는 safety/behavior/IOC/TTP/detection, DFIR은 evidence/timestamp/confidence/gap을 쓴다.
- 모든 실습 로그에는 tool version, timezone, input path/hash, exact command, stdout/stderr, exit status를 남긴다.
