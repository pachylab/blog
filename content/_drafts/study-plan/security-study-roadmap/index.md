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

## 권장 운영 강도

이 40주 계획은 주 10-15시간 이상 공부할 때 현실적이다. 주 6-9시간이라면 Week 11-18, Week 19-25, Week 26-33을 늘려 52주 과정으로 운영하는 편이 낫다. 매일 모든 자료를 깊게 읽는 방식이 아니라, 핵심 자료 1개, 실습 1개, 복습 질문을 완료하고 나머지는 보조 자료로 둔다.

## 도메인 커버리지

| 도메인 | 반영 위치 |
|---|---|
| 컴퓨터 구조 | Week 01-03, 05, 35에서 bit/byte, 진수, signed/unsigned, two complement, endianness, word size, alignment, CPU/ISA/instruction, register, calling convention, cache/TLB/pipeline까지 다룬다. |
| 운영체제 | Week 04-05, 08, 24-25에서 process/thread/task, scheduler, virtual memory, filesystem, executable loader, Windows internals, Linux kernel을 연결한다. |
| 시스템 보안 | Week 05, 23-25, 30, 38에서 OS 보안 모델, access control, token/ACL/UAC, code integrity, driver/IOCTL, Linux capability/namespace/cgroup/seccomp, LSM, audit/eBPF, container isolation, hardening을 다룬다. |
| 네트워크 | Week 09-10, 18, 29에서 OSI/TCP-IP, DNS/HTTP/TLS, PCAP, IDS/IPS, C2, JA3/JA4, network forensics를 다룬다. |
| 컴파일러와 언어 | Week 06-07, 11, 36에서 C memory model, compiler/assembler/linker/loader, symbol/relocation/debug info, IR/CFG/SSA, bytecode/VM/JIT, runtime reversing을 다룬다. |
| 자료구조/알고리즘/수학 | Week 01-02, 31-35에서 중등 수학의 정수/분수/비례/소인수분해, 고등 수학의 함수/지수/로그/확률, 이산수학의 set/relation/function/boolean/counting/modular arithmetic/SMT/entropy를 보안 문제에 적용한다. |
| 암호학 | Week 31-33에서 암호학 수학 선행 점검을 같이 수행하며 encoding/hash/HMAC, AES, stream cipher, RSA/ECC/DH, PKI/TLS, KDF, CSPRNG, malware config/ransomware crypto를 다룬다. |
| 리버싱 | Week 11-13, 17, 36에서 PE/ELF/Mach-O, firmware/IoT 입문, IDA/Ghidra, disassembly/decompilation, xref/function boundary, CFG/call graph, debugging, patching, AI-assisted binary analysis, obfuscation/unpacking을 다룬다. |
| 악성코드 분석 | Week 14-18, 37에서 taxonomy, safe lab, IOC/TTP/ATT&CK, YARA/Sigma, persistence, injection, anti-analysis, C2, report를 다룬다. |
| 시스템 해킹 | Week 19-23, 38-39에서 stack/heap/format string/integer/OOB/ROP/seccomp/AFL++/libFuzzer/symbolic execution/kernel exploit intro/N-day/CVE reporting까지 다룬다. |
| 디지털 포렌식 | Week 08, 26-30, 37에서 evidence, disk/filesystem, Windows artifacts, memory dump, network forensics, mobile/cloud/container, incident response를 다룬다. |

## 40주 계획

| 주차 | 주제 | 일별 흐름 | 대표 산출물 |
|---|---|---|---|
| Week 01 | 학습 환경, Linux CLI, 수 표현의 첫 기준 | Linux CLI와 분석 노트 구조 / bit/byte와 진수 변환 / 분석 VM 분리와 샘플 취급 원칙 / boolean, set, relation, function 기초 / C 프로그램과 메모리 영역 맛보기 / CLI, hex dump, 노트 재현성 실습 / 주간 복습과 다음 질문 설계 | 분석 랩 체크리스트, Linux CLI 명령 로그, bit/byte 변환 노트 |
| Week 02 | 정수 표현, endian, CPU 실행 모델 | signed/unsigned와 integer type / two complement와 overflow / endianness, word size, alignment / CPU, ISA, instruction 구조 / cache, TLB, pipeline, branch prediction / 정수와 instruction 통합 실습 / 주간 복습과 취약점 연결 | 정수 표현 실습 코드, endian/alignment 표, instruction 해석 노트 |
| Week 03 | register, stack frame, ABI, privilege transition | general-purpose register와 flag register / program counter, stack pointer, base pointer / calling convention과 ABI / stack frame, prologue, epilogue / user/kernel mode와 interrupt/exception/trap / x86/x64와 ARM/ARM64 assembly 입문 / 주간 복습과 stack 기반 사고 | 함수 호출 stack diagram, syscall transition 노트, x86/ARM 비교표 |
| Week 04 | process, thread, scheduler, IPC | process, thread, task의 차이 / scheduler와 context switching / process 생성과 exec 흐름 / IPC와 synchronization / service, daemon, job, startup 실행 단위 / 프로세스 관찰 도구 실습 / 주간 복습과 malware/forensics 연결 | 프로세스 관찰 리포트와 context switch/IPC 정리 |
| Week 05 | virtual memory와 exploit mitigation | virtual address space와 physical memory / page, page table, page fault / stack, heap, mmap, shared memory / ASLR, DEP/NX, stack canary / PIE, RELRO, dynamic relocation / memory map과 crash 원인 분석 실습 / 주간 복습과 exploit/forensics 연결 | memory map 해석 노트, page fault 정리, mitigation 매트릭스 |
| Week 06 | C, object layout, memory safety | C pointer, array, string / struct, union, enum과 padding / integer type, signedness, UB 재확인 / function pointer, callback, vtable / memory safety와 ownership/lifetime / sanitizer 기반 C 버그 실습 / 주간 복습과 pwn/reversing 연결 | C memory layout 실습 모음과 memory safety 체크리스트 |
| Week 07 | compiler, linker, loader, intermediate representation | compiler, assembler, linker, loader / symbol, relocation, debug information / AST, IR, CFG, data flow, SSA / optimization과 decompiler 차이 / bytecode, VM, JIT, interpreter loop / Python scripting, pwntools, parser automation / 주간 복습과 자동 분석 연결 | 빌드 파이프라인 artifact와 symbol/relocation 분석 노트 |
| Week 08 | filesystem, metadata, evidence handling | file, directory, metadata, timestamp / inode, MFT, journal / NTFS, ext4, APFS, FAT/exFAT / symbolic link, hard link, ADS / evidence, forensic image, write blocker / file carving, deleted recovery, timeline / 주간 복습과 DFIR 연결 | 파일시스템 artifact 비교표와 timeline 초안 |
| Week 09 | network fundamentals와 protocol reading | OSI model과 TCP/IP stack / Ethernet, IP, ARP / TCP, UDP, ICMP / port, socket, session, routing, NAT / DNS, HTTP, HTTPS, TLS / Wireshark/tcpdump 기본 필터 / 주간 복습과 network IOC 연결 | 계층별 packet 해석 노트와 기본 PCAP |
| Week 10 | network forensics, IDS, C2 traffic | packet, frame, stream, PCAP 심화 / ARP, DHCP, routing table, firewall / IDS/IPS와 Zeek/Suricata / network IOC, JA3/JA4, TLS fingerprint / C2, beaconing, DGA, domain fronting / network forensics와 exfiltration pattern / 주간 복습과 탐지 룰 연결 | PCAP timeline, network IOC, IDS rule 초안 |
| Week 11 | executable format, loader, firmware intro | program loader와 executable format / ELF 구조와 GOT/PLT / PE 구조와 IAT/EAT / Mach-O와 load command / dynamic linking, static linking, relocation / readelf/otool/dumpbin 실습 / firmware/IoT 맛보기: binwalk, ARM/MIPS, QEMU | PE/ELF/Mach-O 구조 비교와 firmware 구조 분석 체크리스트 |
| Week 12 | static reversing workflow, IDA/Ghidra, AI-assisted analysis | static analysis와 dynamic analysis 비교 / disassembly와 decompilation 읽기 / xref와 function boundary / CFG와 call graph / string reference와 library identification / IDA/Ghidra 프로젝트 정리 / AI-assisted binary analysis와 triage report | IDA/Ghidra project와 static/AI triage report 초안 |
| Week 13 | debugging, tracing, patching | GDB/IDA debugger: breakpoint와 single-step / watchpoint와 memory tracing / x64dbg와 WinDbg 기본 / Frida와 API tracing / patching과 behavioral change / debugging report 재현성 / 주간 복습과 동적 분석 연결 | 디버깅 재현 로그와 patch 영향 분석 |
| Week 14 | malware taxonomy와 안전한 triage | malware taxonomy 개요 / safe lab와 sample handling / static triage: hash, strings, imports / dynamic triage: process, file, registry, network / IOC, TTP, ATT&CK-style thinking / report structure와 근거 분리 / 주간 복습과 안전 원칙 재점검 | 교육용 샘플 triage report와 IOC/TTP 표 |
| Week 15 | detection engineering: YARA, Sigma, logs | YARA syntax와 file/content detection / Sigma와 log detection / Sysmon과 Windows Event / Zeek/Suricata network detection / false positive management / ATT&CK coverage mapping / 주간 복습과 detection backlog | YARA/Sigma rule 초안과 false positive 관리표 |
| Week 16 | persistence, injection, config extraction | Run key, service, scheduled task / WMI와 startup artifact / DLL injection과 thread injection / process hollowing과 APC injection / API hashing과 string encryption / malware config extraction / 주간 복습과 host detection 연결 | persistence/injection artifact matrix와 config extractor 초안 |
| Week 17 | anti-analysis, obfuscation, packing | anti-debugging / anti-VM, anti-sandbox, anti-tampering / obfuscation과 deobfuscation / control-flow flattening과 opaque predicate / packing, OEP, dump / custom packer와 import reconstruction / 주간 복습과 분석 우선순위 | anti-analysis 체크리스트와 unpacking 노트 |
| Week 18 | C2, beaconing, DGA, network malware | C2 architecture와 payload staging / beaconing과 jitter 분석 / DGA와 domain fronting / network IOC와 TLS fingerprint / exfiltration pattern과 session reconstruction / C2 config와 network detection 연결 / 주간 복습과 C2 report | C2 traffic timeline과 network IOC report |
| Week 19 | system hacking: stack overflow 입문 | vulnerability, exploit, exploit primitive / stack overflow와 buffer overflow / crash 분석과 offset 계산 / ret2win 기초 / shellcode와 NX 관계 맛보기 / pwntools exploit skeleton / 주간 복습과 stack exploit report | stack overflow writeup와 exploit primitive 노트 |
| Week 20 | format string, integer bug, arbitrary read/write | format string bug 구조 / arbitrary read/write와 GOT overwrite / integer overflow/underflow / signedness bug / out-of-bounds read/write / exploit reliability와 mitigation 확인 / 주간 복습과 primitive 조합 | format string/integer/OOB 취약점 분석 노트 |
| Week 21 | heap internals와 heap exploitation | heap internals와 malloc/free / fastbin, tcache, unsorted bin / Use After Free / double free와 tcache poisoning / out-of-bounds와 type confusion / heap feng shui와 exploit grooming / 주간 복습과 heap primitive 정리 | heap allocator 구조와 UAF/double-free 실습 노트 |
| Week 22 | ROP, ret2libc, mitigation bypass | ret2libc와 leak 기반 exploit / ROP gadget과 chain 구성 / JOP, SROP, stack pivot / canary, PIE, RELRO 우회 사고 / seccomp와 sandbox 제약 / exploit 안정화와 remote 환경 / 주간 복습과 mitigation matrix | ROP chain writeup와 mitigation bypass 전략표 |
| Week 23 | fuzzing, symbolic execution, patch diffing, kernel exploit 입문 | AFL++/libFuzzer harness와 corpus / sanitizer와 crash triage / symbolic execution과 SMT / taint analysis와 source/sink / patch diffing과 variant analysis / kernel exploitation, LPE, sandbox escape intro / 주간 복습과 취약점 연구 흐름 | coverage-guided fuzzing/crash triage report와 symbolic constraint 예제 |
| Week 24 | Windows internals와 system security | object manager와 handle / Windows security model: token, SID, ACL, UAC / PEB, TEB, EPROCESS, ETHREAD / Windows memory manager / registry, service, WMI / driver, module, syscall table, IOCTL / ETW, AMSI, Sysmon, Code Integrity | Windows object/process/memory/driver/system security 관찰 노트 |
| Week 25 | Linux kernel, system security, observability | kernel, module, syscall table / process/task scheduler와 procfs / VFS, inode, file operations / driver, module, IOCTL / capabilities, namespace, cgroup, seccomp / AppArmor, SELinux, LSM, auditd / eBPF, systemd sandboxing, kernel lockdown | Linux kernel 관찰 지점과 시스템 보안 모델 정리 |
| Week 26 | Windows DFIR artifacts | registry hives와 event log / Prefetch, ShimCache, AmCache / SRUM과 network/application usage / LNK, JumpList, Recycle Bin / browser history, cookies, cache / Windows timeline 통합 / 주간 복습과 incident scoping | Windows artifact timeline과 실행 흔적 분석 보고서 |
| Week 27 | disk and filesystem forensics | evidence, chain of custody, imaging / partition과 filesystem 식별 / deleted recovery와 file carving / timestamp, timezone, MACB / NTFS MFT, USN, $LogFile / ext4 journal과 APFS snapshot / 주간 복습과 forensic report | disk image 분석 절차와 삭제 파일/timeline 보고서 |
| Week 28 | memory forensics | memory acquisition와 profile/symbol / process reconstruction / DLL list, handle, object / VAD와 malfind / network socket과 process correlation / memory IOC와 rootkit indicator / 주간 복습과 memory report | Volatility 기반 memory triage report |
| Week 29 | network forensics and session reconstruction | PCAP triage와 protocol inventory / DNS/HTTP/TLS session reconstruction / Zeek log timeline / Suricata alert triage / exfiltration과 lateral movement 패턴 / host-network correlation / 주간 복습과 network report | PCAP 기반 침해 흐름 timeline과 탐지 제안 |
| Week 30 | mobile, cloud, container, identity forensics | Android/iOS app sandbox / SQLite와 plist artifact / AWS CloudTrail과 cloud identity / Microsoft Entra와 sign-in/audit logs / GCP audit log와 Kubernetes audit / container runtime logs와 workload scope / incident response scoping과 final report | identity/workload 중심 incident scope 문서 |
| Week 31 | crypto math primer, encodings, hashing | 암호학 수학 gate와 encoding 구분 / Base64, hex, URL encoding, Unicode / XOR encoding과 반복키 / hash function: MD5, SHA-1, SHA-256 / HMAC과 keyed integrity / hash-based IOC와 malware triage / 주간 복습과 encoding script 정리 | 중등/고등 수학 점검표와 encoding/hash/HMAC 실습 코드 |
| Week 32 | applied cryptography: symmetric, asymmetric, TLS | AES와 block cipher mode / IV, nonce, padding / stream cipher: ChaCha20와 RC4 / RSA, ECC, Diffie-Hellman와 모듈러 산술 / digital signature, certificate, PKI / TLS certificate와 handshake 분석 / 주간 복습과 crypto misuse 목록 | AES/RSA/TLS handshake 실습 노트와 공개키 수학 체크리스트 |
| Week 33 | crypto misuse, randomness, malware config | KDF, salt, password hashing / PRNG, CSPRNG, entropy / malware config decryption / ransomware encryption model / hash-based IOC와 crypto artifact / crypto implementation pitfalls / 주간 복습과 malware crypto report | crypto misuse 분석표, entropy 노트, config decryptor 초안 |
| Week 34 | data structures and algorithms for analysis | array, linked list, stack, queue / hash table과 collision / tree, B-tree, trie, heap data structure / sorting, searching, Big-O / graph, BFS, DFS, shortest path / amortized analysis와 security workload / 주간 복습과 reversing/forensics 적용 | 자료구조/알고리즘 구현 노트와 분석 적용 예시 |
| Week 35 | math foundations for security analysis | string matching, regex, finite automaton / boolean algebra, set, relation, function / modular arithmetic와 bit vector / constraint와 SMT / probability, statistics, entropy / graph theory와 분석 그래프 / 주간 복습과 수학 적용 정리 | 수학 개념과 보안 적용 문제 풀이 노트 |
| Week 36 | advanced reversing: languages and runtimes | C++ object layout, vtable, RTTI / .NET, Java, bytecode, VM, JIT / Android DEX와 Dalvik/ART / Go, Rust, Swift binary 특징 / memory safety, ownership, garbage collection / parser automation과 batch reversing / 주간 복습과 runtime fingerprint | 언어/runtime별 reversing 관찰표와 automation script |
| Week 37 | integrated malware analysis project | project scope와 safe lab 재확인 / static triage와 executable 구조 / dynamic behavior와 host artifact / config extraction과 C2 timeline / detection rules와 false positive test / report writing: fact, inference, limit / 주간 복습과 peer-review checklist | malware-style 교육용 샘플 분석 보고서 |
| Week 38 | integrated exploit project, N-day, secure patching | target selection과 threat model / crash discovery와 root cause / primitive development / exploit chain와 mitigation bypass / patch design와 regression test / patch diffing와 variant search / 주간 복습과 exploit report | 취약점 분석, exploit, patch 영향 보고서 |
| Week 39 | CVE/N-day reproduction and reporting workflow | CVE/N-day reading protocol / environment reconstruction / core idea reproduction / variant analysis와 detection mapping / CVSS, responsible disclosure, CVE/KVE reporting / advisory와 portfolio article / 주간 복습과 연구 축적 | 논문/CVE 재현 노트와 CVSS/CVE/KVE reporting 초안 |
| Week 40 | portfolio, capstone, next roadmap | 40주 개념 coverage audit / best artifacts 선정과 정리 / analysis report polish / tooling automation 정리 / public wiki와 private notes 분리 / 다음 12주 심화 계획 / 최종 회고와 유지 루틴 | 최종 포트폴리오, 12주 후속 로드맵, 공개/비공개 산출물 분류 |

## 운영 방식

- 각 daily-study 문서는 날짜를 제목에 쓰지 않고 Week NN Day NN 형식으로 읽는다.
- daily-study 파일 이름은 `week-nn-day-nn.md` 형식으로 유지하고, 문서 안에서도 Week NN Day NN 기준으로 학습한다.
- 매주 산출물은 public wiki 후보, private lab note, report/writeup 후보로 나누어 정리한다.
- 실제 악성 샘플, 공격 코드, 취약한 환경을 다룰 때는 교육용/격리 환경만 사용하고, 실행보다 관찰과 재현 가능한 기록을 우선한다.
