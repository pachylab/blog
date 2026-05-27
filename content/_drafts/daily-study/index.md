---
title: "Daily Study 40주 계획"
draft: true
---

# Daily Study 40주 계획

각 문서는 제목을 Week NN Day NN 형식으로 구성했다. 문서 하나만 열어도 자료 범위, 핵심 키워드, 개념 정리 지시, 실습, 복습 질문을 확인할 수 있다.

## Week 01: 학습 환경, Linux CLI, 수 표현의 첫 기준

- [[_drafts/daily-study/week-01-day-01|Week 01 Day 01: Linux CLI와 분석 노트 구조]]
- [[_drafts/daily-study/week-01-day-02|Week 01 Day 02: bit/byte와 진수 변환]]
- [[_drafts/daily-study/week-01-day-03|Week 01 Day 03: 분석 VM 분리와 샘플 취급 원칙]]
- [[_drafts/daily-study/week-01-day-04|Week 01 Day 04: boolean, set, relation, function 기초]]
- [[_drafts/daily-study/week-01-day-05|Week 01 Day 05: C 프로그램과 메모리 영역 맛보기]]
- [[_drafts/daily-study/week-01-day-06|Week 01 Day 06: CLI, hex dump, 노트 재현성 실습]]
- [[_drafts/daily-study/week-01-day-07|Week 01 Day 07: 주간 복습과 다음 질문 설계]]

## Week 02: 정수 표현, endian, CPU 실행 모델

- [[_drafts/daily-study/week-02-day-01|Week 02 Day 01: signed/unsigned와 integer type]]
- [[_drafts/daily-study/week-02-day-02|Week 02 Day 02: two complement와 overflow]]
- [[_drafts/daily-study/week-02-day-03|Week 02 Day 03: endianness, word size, alignment]]
- [[_drafts/daily-study/week-02-day-04|Week 02 Day 04: CPU, ISA, instruction 구조]]
- [[_drafts/daily-study/week-02-day-05|Week 02 Day 05: cache, TLB, pipeline, branch prediction]]
- [[_drafts/daily-study/week-02-day-06|Week 02 Day 06: 정수와 instruction 통합 실습]]
- [[_drafts/daily-study/week-02-day-07|Week 02 Day 07: 주간 복습과 취약점 연결]]

## Week 03: register, stack frame, ABI, privilege transition

- [[_drafts/daily-study/week-03-day-01|Week 03 Day 01: general-purpose register와 flag register]]
- [[_drafts/daily-study/week-03-day-02|Week 03 Day 02: program counter, stack pointer, base pointer]]
- [[_drafts/daily-study/week-03-day-03|Week 03 Day 03: calling convention과 ABI]]
- [[_drafts/daily-study/week-03-day-04|Week 03 Day 04: stack frame, prologue, epilogue]]
- [[_drafts/daily-study/week-03-day-05|Week 03 Day 05: user/kernel mode와 interrupt/exception/trap]]
- [[_drafts/daily-study/week-03-day-06|Week 03 Day 06: x86/x64와 ARM/ARM64 assembly 입문]]
- [[_drafts/daily-study/week-03-day-07|Week 03 Day 07: 주간 복습과 stack 기반 사고]]

## Week 04: process, thread, scheduler, IPC

- [[_drafts/daily-study/week-04-day-01|Week 04 Day 01: process, thread, task의 차이]]
- [[_drafts/daily-study/week-04-day-02|Week 04 Day 02: scheduler와 context switching]]
- [[_drafts/daily-study/week-04-day-03|Week 04 Day 03: process 생성과 exec 흐름]]
- [[_drafts/daily-study/week-04-day-04|Week 04 Day 04: IPC와 synchronization]]
- [[_drafts/daily-study/week-04-day-05|Week 04 Day 05: service, daemon, job, startup 실행 단위]]
- [[_drafts/daily-study/week-04-day-06|Week 04 Day 06: 프로세스 관찰 도구 실습]]
- [[_drafts/daily-study/week-04-day-07|Week 04 Day 07: 주간 복습과 malware/forensics 연결]]

## Week 05: virtual memory와 exploit mitigation

- [[_drafts/daily-study/week-05-day-01|Week 05 Day 01: virtual address space와 physical memory]]
- [[_drafts/daily-study/week-05-day-02|Week 05 Day 02: page, page table, page fault]]
- [[_drafts/daily-study/week-05-day-03|Week 05 Day 03: stack, heap, mmap, shared memory]]
- [[_drafts/daily-study/week-05-day-04|Week 05 Day 04: ASLR, DEP/NX, stack canary]]
- [[_drafts/daily-study/week-05-day-05|Week 05 Day 05: PIE, RELRO, dynamic relocation]]
- [[_drafts/daily-study/week-05-day-06|Week 05 Day 06: memory map과 crash 원인 분석 실습]]
- [[_drafts/daily-study/week-05-day-07|Week 05 Day 07: 주간 복습과 exploit/forensics 연결]]

## Week 06: C, object layout, memory safety

- [[_drafts/daily-study/week-06-day-01|Week 06 Day 01: C pointer, array, string]]
- [[_drafts/daily-study/week-06-day-02|Week 06 Day 02: struct, union, enum과 padding]]
- [[_drafts/daily-study/week-06-day-03|Week 06 Day 03: integer type, signedness, UB 재확인]]
- [[_drafts/daily-study/week-06-day-04|Week 06 Day 04: function pointer, callback, vtable]]
- [[_drafts/daily-study/week-06-day-05|Week 06 Day 05: memory safety와 ownership/lifetime]]
- [[_drafts/daily-study/week-06-day-06|Week 06 Day 06: sanitizer 기반 C 버그 실습]]
- [[_drafts/daily-study/week-06-day-07|Week 06 Day 07: 주간 복습과 pwn/reversing 연결]]

## Week 07: compiler, linker, loader, intermediate representation

- [[_drafts/daily-study/week-07-day-01|Week 07 Day 01: compiler, assembler, linker, loader]]
- [[_drafts/daily-study/week-07-day-02|Week 07 Day 02: symbol, relocation, debug information]]
- [[_drafts/daily-study/week-07-day-03|Week 07 Day 03: AST, IR, CFG, data flow, SSA]]
- [[_drafts/daily-study/week-07-day-04|Week 07 Day 04: optimization과 decompiler 차이]]
- [[_drafts/daily-study/week-07-day-05|Week 07 Day 05: bytecode, VM, JIT, interpreter loop]]
- [[_drafts/daily-study/week-07-day-06|Week 07 Day 06: Python scripting, pwntools, parser automation]]
- [[_drafts/daily-study/week-07-day-07|Week 07 Day 07: 주간 복습과 자동 분석 연결]]

## Week 08: filesystem, metadata, evidence handling

- [[_drafts/daily-study/week-08-day-01|Week 08 Day 01: file, directory, metadata, timestamp]]
- [[_drafts/daily-study/week-08-day-02|Week 08 Day 02: inode, MFT, journal]]
- [[_drafts/daily-study/week-08-day-03|Week 08 Day 03: NTFS, ext4, APFS, FAT/exFAT]]
- [[_drafts/daily-study/week-08-day-04|Week 08 Day 04: symbolic link, hard link, ADS]]
- [[_drafts/daily-study/week-08-day-05|Week 08 Day 05: evidence, forensic image, write blocker]]
- [[_drafts/daily-study/week-08-day-06|Week 08 Day 06: file carving, deleted recovery, timeline]]
- [[_drafts/daily-study/week-08-day-07|Week 08 Day 07: 주간 복습과 DFIR 연결]]

## Week 09: network fundamentals와 protocol reading

- [[_drafts/daily-study/week-09-day-01|Week 09 Day 01: OSI model과 TCP/IP stack]]
- [[_drafts/daily-study/week-09-day-02|Week 09 Day 02: Ethernet, IP, ARP]]
- [[_drafts/daily-study/week-09-day-03|Week 09 Day 03: TCP, UDP, ICMP]]
- [[_drafts/daily-study/week-09-day-04|Week 09 Day 04: port, socket, session, routing, NAT]]
- [[_drafts/daily-study/week-09-day-05|Week 09 Day 05: DNS, HTTP, HTTPS, TLS]]
- [[_drafts/daily-study/week-09-day-06|Week 09 Day 06: Wireshark/tcpdump 기본 필터]]
- [[_drafts/daily-study/week-09-day-07|Week 09 Day 07: 주간 복습과 network IOC 연결]]

## Week 10: network forensics, IDS, C2 traffic

- [[_drafts/daily-study/week-10-day-01|Week 10 Day 01: packet, frame, stream, PCAP 심화]]
- [[_drafts/daily-study/week-10-day-02|Week 10 Day 02: ARP, DHCP, routing table, firewall]]
- [[_drafts/daily-study/week-10-day-03|Week 10 Day 03: IDS/IPS와 Zeek/Suricata]]
- [[_drafts/daily-study/week-10-day-04|Week 10 Day 04: network IOC, JA3/JA4, TLS fingerprint]]
- [[_drafts/daily-study/week-10-day-05|Week 10 Day 05: C2, beaconing, DGA, domain fronting]]
- [[_drafts/daily-study/week-10-day-06|Week 10 Day 06: network forensics와 exfiltration pattern]]
- [[_drafts/daily-study/week-10-day-07|Week 10 Day 07: 주간 복습과 탐지 룰 연결]]

## Week 11: executable format, loader, firmware intro

- [[_drafts/daily-study/week-11-day-01|Week 11 Day 01: program loader와 executable format]]
- [[_drafts/daily-study/week-11-day-02|Week 11 Day 02: ELF 구조와 GOT/PLT]]
- [[_drafts/daily-study/week-11-day-03|Week 11 Day 03: PE 구조와 IAT/EAT]]
- [[_drafts/daily-study/week-11-day-04|Week 11 Day 04: Mach-O와 load command]]
- [[_drafts/daily-study/week-11-day-05|Week 11 Day 05: dynamic linking, static linking, relocation]]
- [[_drafts/daily-study/week-11-day-06|Week 11 Day 06: readelf/otool/dumpbin 실습]]
- [[_drafts/daily-study/week-11-day-07|Week 11 Day 07: firmware/IoT 맛보기: binwalk, ARM/MIPS, QEMU]]

## Week 12: static reversing workflow, IDA/Ghidra, AI-assisted analysis

- [[_drafts/daily-study/week-12-day-01|Week 12 Day 01: static analysis와 dynamic analysis 비교]]
- [[_drafts/daily-study/week-12-day-02|Week 12 Day 02: disassembly와 decompilation 읽기]]
- [[_drafts/daily-study/week-12-day-03|Week 12 Day 03: xref와 function boundary]]
- [[_drafts/daily-study/week-12-day-04|Week 12 Day 04: CFG와 call graph]]
- [[_drafts/daily-study/week-12-day-05|Week 12 Day 05: string reference와 library identification]]
- [[_drafts/daily-study/week-12-day-06|Week 12 Day 06: IDA/Ghidra 프로젝트 정리]]
- [[_drafts/daily-study/week-12-day-07|Week 12 Day 07: AI-assisted binary analysis와 triage report]]

## Week 13: debugging, tracing, patching

- [[_drafts/daily-study/week-13-day-01|Week 13 Day 01: GDB/IDA debugger: breakpoint와 single-step]]
- [[_drafts/daily-study/week-13-day-02|Week 13 Day 02: watchpoint와 memory tracing]]
- [[_drafts/daily-study/week-13-day-03|Week 13 Day 03: x64dbg와 WinDbg 기본]]
- [[_drafts/daily-study/week-13-day-04|Week 13 Day 04: Frida와 API tracing]]
- [[_drafts/daily-study/week-13-day-05|Week 13 Day 05: patching과 behavioral change]]
- [[_drafts/daily-study/week-13-day-06|Week 13 Day 06: debugging report 재현성]]
- [[_drafts/daily-study/week-13-day-07|Week 13 Day 07: 주간 복습과 동적 분석 연결]]

## Week 14: malware taxonomy와 안전한 triage

- [[_drafts/daily-study/week-14-day-01|Week 14 Day 01: malware taxonomy 개요]]
- [[_drafts/daily-study/week-14-day-02|Week 14 Day 02: safe lab와 sample handling]]
- [[_drafts/daily-study/week-14-day-03|Week 14 Day 03: static triage: hash, strings, imports]]
- [[_drafts/daily-study/week-14-day-04|Week 14 Day 04: dynamic triage: process, file, registry, network]]
- [[_drafts/daily-study/week-14-day-05|Week 14 Day 05: IOC, TTP, ATT&CK-style thinking]]
- [[_drafts/daily-study/week-14-day-06|Week 14 Day 06: report structure와 근거 분리]]
- [[_drafts/daily-study/week-14-day-07|Week 14 Day 07: 주간 복습과 안전 원칙 재점검]]

## Week 15: detection engineering: YARA, Sigma, logs

- [[_drafts/daily-study/week-15-day-01|Week 15 Day 01: YARA syntax와 file/content detection]]
- [[_drafts/daily-study/week-15-day-02|Week 15 Day 02: Sigma와 log detection]]
- [[_drafts/daily-study/week-15-day-03|Week 15 Day 03: Sysmon과 Windows Event]]
- [[_drafts/daily-study/week-15-day-04|Week 15 Day 04: Zeek/Suricata network detection]]
- [[_drafts/daily-study/week-15-day-05|Week 15 Day 05: false positive management]]
- [[_drafts/daily-study/week-15-day-06|Week 15 Day 06: ATT&CK coverage mapping]]
- [[_drafts/daily-study/week-15-day-07|Week 15 Day 07: 주간 복습과 detection backlog]]

## Week 16: persistence, injection, config extraction

- [[_drafts/daily-study/week-16-day-01|Week 16 Day 01: Run key, service, scheduled task]]
- [[_drafts/daily-study/week-16-day-02|Week 16 Day 02: WMI와 startup artifact]]
- [[_drafts/daily-study/week-16-day-03|Week 16 Day 03: DLL injection과 thread injection]]
- [[_drafts/daily-study/week-16-day-04|Week 16 Day 04: process hollowing과 APC injection]]
- [[_drafts/daily-study/week-16-day-05|Week 16 Day 05: API hashing과 string encryption]]
- [[_drafts/daily-study/week-16-day-06|Week 16 Day 06: malware config extraction]]
- [[_drafts/daily-study/week-16-day-07|Week 16 Day 07: 주간 복습과 host detection 연결]]

## Week 17: anti-analysis, obfuscation, packing

- [[_drafts/daily-study/week-17-day-01|Week 17 Day 01: anti-debugging]]
- [[_drafts/daily-study/week-17-day-02|Week 17 Day 02: anti-VM, anti-sandbox, anti-tampering]]
- [[_drafts/daily-study/week-17-day-03|Week 17 Day 03: obfuscation과 deobfuscation]]
- [[_drafts/daily-study/week-17-day-04|Week 17 Day 04: control-flow flattening과 opaque predicate]]
- [[_drafts/daily-study/week-17-day-05|Week 17 Day 05: packing, OEP, dump]]
- [[_drafts/daily-study/week-17-day-06|Week 17 Day 06: custom packer와 import reconstruction]]
- [[_drafts/daily-study/week-17-day-07|Week 17 Day 07: 주간 복습과 분석 우선순위]]

## Week 18: C2, beaconing, DGA, network malware

- [[_drafts/daily-study/week-18-day-01|Week 18 Day 01: C2 architecture와 payload staging]]
- [[_drafts/daily-study/week-18-day-02|Week 18 Day 02: beaconing과 jitter 분석]]
- [[_drafts/daily-study/week-18-day-03|Week 18 Day 03: DGA와 domain fronting]]
- [[_drafts/daily-study/week-18-day-04|Week 18 Day 04: network IOC와 TLS fingerprint]]
- [[_drafts/daily-study/week-18-day-05|Week 18 Day 05: exfiltration pattern과 session reconstruction]]
- [[_drafts/daily-study/week-18-day-06|Week 18 Day 06: C2 config와 network detection 연결]]
- [[_drafts/daily-study/week-18-day-07|Week 18 Day 07: 주간 복습과 C2 report]]

## Week 19: system hacking: stack overflow 입문

- [[_drafts/daily-study/week-19-day-01|Week 19 Day 01: vulnerability, exploit, exploit primitive]]
- [[_drafts/daily-study/week-19-day-02|Week 19 Day 02: stack overflow와 buffer overflow]]
- [[_drafts/daily-study/week-19-day-03|Week 19 Day 03: crash 분석과 offset 계산]]
- [[_drafts/daily-study/week-19-day-04|Week 19 Day 04: ret2win 기초]]
- [[_drafts/daily-study/week-19-day-05|Week 19 Day 05: shellcode와 NX 관계 맛보기]]
- [[_drafts/daily-study/week-19-day-06|Week 19 Day 06: pwntools exploit skeleton]]
- [[_drafts/daily-study/week-19-day-07|Week 19 Day 07: 주간 복습과 stack exploit report]]

## Week 20: format string, integer bug, arbitrary read/write

- [[_drafts/daily-study/week-20-day-01|Week 20 Day 01: format string bug 구조]]
- [[_drafts/daily-study/week-20-day-02|Week 20 Day 02: arbitrary read/write와 GOT overwrite]]
- [[_drafts/daily-study/week-20-day-03|Week 20 Day 03: integer overflow/underflow]]
- [[_drafts/daily-study/week-20-day-04|Week 20 Day 04: signedness bug]]
- [[_drafts/daily-study/week-20-day-05|Week 20 Day 05: out-of-bounds read/write]]
- [[_drafts/daily-study/week-20-day-06|Week 20 Day 06: exploit reliability와 mitigation 확인]]
- [[_drafts/daily-study/week-20-day-07|Week 20 Day 07: 주간 복습과 primitive 조합]]

## Week 21: heap internals와 heap exploitation

- [[_drafts/daily-study/week-21-day-01|Week 21 Day 01: heap internals와 malloc/free]]
- [[_drafts/daily-study/week-21-day-02|Week 21 Day 02: fastbin, tcache, unsorted bin]]
- [[_drafts/daily-study/week-21-day-03|Week 21 Day 03: Use After Free]]
- [[_drafts/daily-study/week-21-day-04|Week 21 Day 04: double free와 tcache poisoning]]
- [[_drafts/daily-study/week-21-day-05|Week 21 Day 05: out-of-bounds와 type confusion]]
- [[_drafts/daily-study/week-21-day-06|Week 21 Day 06: heap feng shui와 exploit grooming]]
- [[_drafts/daily-study/week-21-day-07|Week 21 Day 07: 주간 복습과 heap primitive 정리]]

## Week 22: ROP, ret2libc, mitigation bypass

- [[_drafts/daily-study/week-22-day-01|Week 22 Day 01: ret2libc와 leak 기반 exploit]]
- [[_drafts/daily-study/week-22-day-02|Week 22 Day 02: ROP gadget과 chain 구성]]
- [[_drafts/daily-study/week-22-day-03|Week 22 Day 03: JOP, SROP, stack pivot]]
- [[_drafts/daily-study/week-22-day-04|Week 22 Day 04: canary, PIE, RELRO 우회 사고]]
- [[_drafts/daily-study/week-22-day-05|Week 22 Day 05: seccomp와 sandbox 제약]]
- [[_drafts/daily-study/week-22-day-06|Week 22 Day 06: exploit 안정화와 remote 환경]]
- [[_drafts/daily-study/week-22-day-07|Week 22 Day 07: 주간 복습과 mitigation matrix]]

## Week 23: fuzzing, symbolic execution, patch diffing, kernel exploit 입문

- [[_drafts/daily-study/week-23-day-01|Week 23 Day 01: AFL++/libFuzzer harness와 corpus]]
- [[_drafts/daily-study/week-23-day-02|Week 23 Day 02: sanitizer와 crash triage]]
- [[_drafts/daily-study/week-23-day-03|Week 23 Day 03: symbolic execution과 SMT]]
- [[_drafts/daily-study/week-23-day-04|Week 23 Day 04: taint analysis와 source/sink]]
- [[_drafts/daily-study/week-23-day-05|Week 23 Day 05: patch diffing과 variant analysis]]
- [[_drafts/daily-study/week-23-day-06|Week 23 Day 06: kernel exploitation, LPE, sandbox escape intro]]
- [[_drafts/daily-study/week-23-day-07|Week 23 Day 07: 주간 복습과 취약점 연구 흐름]]

## Week 24: Windows internals와 system security

- [[_drafts/daily-study/week-24-day-01|Week 24 Day 01: object manager와 handle]]
- [[_drafts/daily-study/week-24-day-02|Week 24 Day 02: Windows security model: token, SID, ACL, UAC]]
- [[_drafts/daily-study/week-24-day-03|Week 24 Day 03: PEB, TEB, EPROCESS, ETHREAD]]
- [[_drafts/daily-study/week-24-day-04|Week 24 Day 04: Windows memory manager]]
- [[_drafts/daily-study/week-24-day-05|Week 24 Day 05: registry, service, WMI]]
- [[_drafts/daily-study/week-24-day-06|Week 24 Day 06: driver, module, syscall table, IOCTL]]
- [[_drafts/daily-study/week-24-day-07|Week 24 Day 07: ETW, AMSI, Sysmon, Code Integrity]]

## Week 25: Linux kernel, system security, observability

- [[_drafts/daily-study/week-25-day-01|Week 25 Day 01: kernel, module, syscall table]]
- [[_drafts/daily-study/week-25-day-02|Week 25 Day 02: process/task scheduler와 procfs]]
- [[_drafts/daily-study/week-25-day-03|Week 25 Day 03: VFS, inode, file operations]]
- [[_drafts/daily-study/week-25-day-04|Week 25 Day 04: driver, module, IOCTL]]
- [[_drafts/daily-study/week-25-day-05|Week 25 Day 05: capabilities, namespace, cgroup, seccomp]]
- [[_drafts/daily-study/week-25-day-06|Week 25 Day 06: AppArmor, SELinux, LSM, auditd]]
- [[_drafts/daily-study/week-25-day-07|Week 25 Day 07: eBPF, systemd hardening, kernel lockdown]]

## Week 26: Windows DFIR artifacts

- [[_drafts/daily-study/week-26-day-01|Week 26 Day 01: registry hives와 event log]]
- [[_drafts/daily-study/week-26-day-02|Week 26 Day 02: Prefetch, ShimCache, AmCache]]
- [[_drafts/daily-study/week-26-day-03|Week 26 Day 03: SRUM과 network/application usage]]
- [[_drafts/daily-study/week-26-day-04|Week 26 Day 04: LNK, JumpList, Recycle Bin]]
- [[_drafts/daily-study/week-26-day-05|Week 26 Day 05: browser history, cookies, cache]]
- [[_drafts/daily-study/week-26-day-06|Week 26 Day 06: Windows timeline 통합]]
- [[_drafts/daily-study/week-26-day-07|Week 26 Day 07: 주간 복습과 incident scoping]]

## Week 27: disk and filesystem forensics

- [[_drafts/daily-study/week-27-day-01|Week 27 Day 01: evidence, chain of custody, imaging]]
- [[_drafts/daily-study/week-27-day-02|Week 27 Day 02: partition과 filesystem 식별]]
- [[_drafts/daily-study/week-27-day-03|Week 27 Day 03: deleted recovery와 file carving]]
- [[_drafts/daily-study/week-27-day-04|Week 27 Day 04: timestamp, timezone, MACB]]
- [[_drafts/daily-study/week-27-day-05|Week 27 Day 05: NTFS MFT, USN, $LogFile]]
- [[_drafts/daily-study/week-27-day-06|Week 27 Day 06: ext4 journal과 APFS snapshot]]
- [[_drafts/daily-study/week-27-day-07|Week 27 Day 07: 주간 복습과 forensic report]]

## Week 28: memory forensics

- [[_drafts/daily-study/week-28-day-01|Week 28 Day 01: memory acquisition와 profile/symbol]]
- [[_drafts/daily-study/week-28-day-02|Week 28 Day 02: process reconstruction]]
- [[_drafts/daily-study/week-28-day-03|Week 28 Day 03: DLL list, handle, object]]
- [[_drafts/daily-study/week-28-day-04|Week 28 Day 04: VAD와 malfind]]
- [[_drafts/daily-study/week-28-day-05|Week 28 Day 05: network socket과 process correlation]]
- [[_drafts/daily-study/week-28-day-06|Week 28 Day 06: memory IOC와 rootkit indicator]]
- [[_drafts/daily-study/week-28-day-07|Week 28 Day 07: 주간 복습과 memory report]]

## Week 29: network forensics and session reconstruction

- [[_drafts/daily-study/week-29-day-01|Week 29 Day 01: PCAP triage와 protocol inventory]]
- [[_drafts/daily-study/week-29-day-02|Week 29 Day 02: DNS/HTTP/TLS session reconstruction]]
- [[_drafts/daily-study/week-29-day-03|Week 29 Day 03: Zeek log timeline]]
- [[_drafts/daily-study/week-29-day-04|Week 29 Day 04: Suricata alert triage]]
- [[_drafts/daily-study/week-29-day-05|Week 29 Day 05: exfiltration과 lateral movement 패턴]]
- [[_drafts/daily-study/week-29-day-06|Week 29 Day 06: host-network correlation]]
- [[_drafts/daily-study/week-29-day-07|Week 29 Day 07: 주간 복습과 network report]]

## Week 30: mobile, cloud, container, identity forensics

- [[_drafts/daily-study/week-30-day-01|Week 30 Day 01: Android/iOS app sandbox]]
- [[_drafts/daily-study/week-30-day-02|Week 30 Day 02: SQLite와 plist artifact]]
- [[_drafts/daily-study/week-30-day-03|Week 30 Day 03: AWS CloudTrail과 cloud identity]]
- [[_drafts/daily-study/week-30-day-04|Week 30 Day 04: Microsoft Entra와 sign-in/audit logs]]
- [[_drafts/daily-study/week-30-day-05|Week 30 Day 05: GCP audit log와 Kubernetes audit]]
- [[_drafts/daily-study/week-30-day-06|Week 30 Day 06: container runtime logs와 workload scope]]
- [[_drafts/daily-study/week-30-day-07|Week 30 Day 07: incident response scoping과 final report]]

## Week 31: crypto math primer, encodings, hashing

- [[_drafts/daily-study/week-31-day-01|Week 31 Day 01: 암호학 수학 gate와 encoding 구분]]
- [[_drafts/daily-study/week-31-day-02|Week 31 Day 02: Base64, hex, URL encoding, Unicode]]
- [[_drafts/daily-study/week-31-day-03|Week 31 Day 03: XOR encoding과 반복키]]
- [[_drafts/daily-study/week-31-day-04|Week 31 Day 04: hash function: MD5, SHA-1, SHA-256]]
- [[_drafts/daily-study/week-31-day-05|Week 31 Day 05: HMAC과 keyed integrity]]
- [[_drafts/daily-study/week-31-day-06|Week 31 Day 06: hash-based IOC와 malware triage]]
- [[_drafts/daily-study/week-31-day-07|Week 31 Day 07: 주간 복습과 encoding script 정리]]

## Week 32: applied cryptography: symmetric, asymmetric, TLS

- [[_drafts/daily-study/week-32-day-01|Week 32 Day 01: AES와 block cipher mode]]
- [[_drafts/daily-study/week-32-day-02|Week 32 Day 02: IV, nonce, padding]]
- [[_drafts/daily-study/week-32-day-03|Week 32 Day 03: stream cipher: ChaCha20와 RC4]]
- [[_drafts/daily-study/week-32-day-04|Week 32 Day 04: RSA, ECC, Diffie-Hellman와 모듈러 산술]]
- [[_drafts/daily-study/week-32-day-05|Week 32 Day 05: digital signature, certificate, PKI]]
- [[_drafts/daily-study/week-32-day-06|Week 32 Day 06: TLS certificate와 handshake 분석]]
- [[_drafts/daily-study/week-32-day-07|Week 32 Day 07: 주간 복습과 crypto misuse 목록]]

## Week 33: crypto misuse, randomness, malware config

- [[_drafts/daily-study/week-33-day-01|Week 33 Day 01: KDF, salt, password hashing]]
- [[_drafts/daily-study/week-33-day-02|Week 33 Day 02: PRNG, CSPRNG, entropy]]
- [[_drafts/daily-study/week-33-day-03|Week 33 Day 03: malware config decryption]]
- [[_drafts/daily-study/week-33-day-04|Week 33 Day 04: ransomware encryption model]]
- [[_drafts/daily-study/week-33-day-05|Week 33 Day 05: hash-based IOC와 crypto artifact]]
- [[_drafts/daily-study/week-33-day-06|Week 33 Day 06: crypto implementation pitfalls]]
- [[_drafts/daily-study/week-33-day-07|Week 33 Day 07: 주간 복습과 malware crypto report]]

## Week 34: data structures and algorithms for analysis

- [[_drafts/daily-study/week-34-day-01|Week 34 Day 01: array, linked list, stack, queue]]
- [[_drafts/daily-study/week-34-day-02|Week 34 Day 02: hash table과 collision]]
- [[_drafts/daily-study/week-34-day-03|Week 34 Day 03: tree, B-tree, trie, heap data structure]]
- [[_drafts/daily-study/week-34-day-04|Week 34 Day 04: sorting, searching, Big-O]]
- [[_drafts/daily-study/week-34-day-05|Week 34 Day 05: graph, BFS, DFS, shortest path]]
- [[_drafts/daily-study/week-34-day-06|Week 34 Day 06: amortized analysis와 security workload]]
- [[_drafts/daily-study/week-34-day-07|Week 34 Day 07: 주간 복습과 reversing/forensics 적용]]

## Week 35: math foundations for security analysis

- [[_drafts/daily-study/week-35-day-01|Week 35 Day 01: string matching, regex, finite automaton]]
- [[_drafts/daily-study/week-35-day-02|Week 35 Day 02: boolean algebra, set, relation, function]]
- [[_drafts/daily-study/week-35-day-03|Week 35 Day 03: modular arithmetic와 bit vector]]
- [[_drafts/daily-study/week-35-day-04|Week 35 Day 04: constraint와 SMT]]
- [[_drafts/daily-study/week-35-day-05|Week 35 Day 05: probability, statistics, entropy]]
- [[_drafts/daily-study/week-35-day-06|Week 35 Day 06: graph theory와 분석 그래프]]
- [[_drafts/daily-study/week-35-day-07|Week 35 Day 07: 주간 복습과 수학 적용 정리]]

## Week 36: advanced reversing: languages and runtimes

- [[_drafts/daily-study/week-36-day-01|Week 36 Day 01: C++ object layout, vtable, RTTI]]
- [[_drafts/daily-study/week-36-day-02|Week 36 Day 02: .NET, Java, bytecode, VM, JIT]]
- [[_drafts/daily-study/week-36-day-03|Week 36 Day 03: Android DEX와 Dalvik/ART]]
- [[_drafts/daily-study/week-36-day-04|Week 36 Day 04: Go, Rust, Swift binary 특징]]
- [[_drafts/daily-study/week-36-day-05|Week 36 Day 05: memory safety, ownership, garbage collection]]
- [[_drafts/daily-study/week-36-day-06|Week 36 Day 06: parser automation과 batch reversing]]
- [[_drafts/daily-study/week-36-day-07|Week 36 Day 07: 주간 복습과 runtime fingerprint]]

## Week 37: integrated malware analysis project

- [[_drafts/daily-study/week-37-day-01|Week 37 Day 01: project scope와 safe lab 재확인]]
- [[_drafts/daily-study/week-37-day-02|Week 37 Day 02: static triage와 executable 구조]]
- [[_drafts/daily-study/week-37-day-03|Week 37 Day 03: dynamic behavior와 host artifact]]
- [[_drafts/daily-study/week-37-day-04|Week 37 Day 04: config extraction과 C2 timeline]]
- [[_drafts/daily-study/week-37-day-05|Week 37 Day 05: detection rules와 false positive test]]
- [[_drafts/daily-study/week-37-day-06|Week 37 Day 06: report writing: fact, inference, limit]]
- [[_drafts/daily-study/week-37-day-07|Week 37 Day 07: 주간 복습과 peer-review checklist]]

## Week 38: integrated exploit project, N-day, secure patching

- [[_drafts/daily-study/week-38-day-01|Week 38 Day 01: target selection과 threat model]]
- [[_drafts/daily-study/week-38-day-02|Week 38 Day 02: crash discovery와 root cause]]
- [[_drafts/daily-study/week-38-day-03|Week 38 Day 03: primitive development]]
- [[_drafts/daily-study/week-38-day-04|Week 38 Day 04: exploit chain와 mitigation bypass]]
- [[_drafts/daily-study/week-38-day-05|Week 38 Day 05: patch design와 regression test]]
- [[_drafts/daily-study/week-38-day-06|Week 38 Day 06: patch diffing와 variant search]]
- [[_drafts/daily-study/week-38-day-07|Week 38 Day 07: 주간 복습과 exploit report]]

## Week 39: CVE/N-day reproduction and reporting workflow

- [[_drafts/daily-study/week-39-day-01|Week 39 Day 01: CVE/N-day reading protocol]]
- [[_drafts/daily-study/week-39-day-02|Week 39 Day 02: environment reconstruction]]
- [[_drafts/daily-study/week-39-day-03|Week 39 Day 03: core idea reproduction]]
- [[_drafts/daily-study/week-39-day-04|Week 39 Day 04: variant analysis와 detection mapping]]
- [[_drafts/daily-study/week-39-day-05|Week 39 Day 05: CVSS, responsible disclosure, CVE/KVE reporting]]
- [[_drafts/daily-study/week-39-day-06|Week 39 Day 06: advisory와 portfolio article]]
- [[_drafts/daily-study/week-39-day-07|Week 39 Day 07: 주간 복습과 연구 축적]]

## Week 40: portfolio, capstone, next roadmap

- [[_drafts/daily-study/week-40-day-01|Week 40 Day 01: 40주 개념 coverage audit]]
- [[_drafts/daily-study/week-40-day-02|Week 40 Day 02: best artifacts 선정과 정리]]
- [[_drafts/daily-study/week-40-day-03|Week 40 Day 03: analysis report polish]]
- [[_drafts/daily-study/week-40-day-04|Week 40 Day 04: tooling automation 정리]]
- [[_drafts/daily-study/week-40-day-05|Week 40 Day 05: public wiki와 private notes 분리]]
- [[_drafts/daily-study/week-40-day-06|Week 40 Day 06: 다음 12주 심화 계획]]
- [[_drafts/daily-study/week-40-day-07|Week 40 Day 07: 최종 회고와 유지 루틴]]
