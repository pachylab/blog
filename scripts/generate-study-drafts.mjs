#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const contentRoot = path.join(root, "content")
const draftRoot = path.join(contentRoot, "_drafts")
const sourcePath =
  process.env.ROADMAP_SOURCE ?? "/Users/morae/Downloads/security_study_roadmap_expanded.md"

const topicFiles = new Map()

const csColumnToCategory = {
  "컴퓨터 구조": "cs/arch",
  운영체제: "cs/os",
  네트워크: "cs/net",
  "컴파일러/언어": "cs/lang",
}

const securityColumnToCategory = {
  리버싱: "security/re",
  "악성코드 분석": "security/malware",
  "시스템 해킹": "security/pwn",
  "디지털 포렌식": "security/dfir",
}

const conceptSectionToCategory = {
  "컴퓨터 구조": "cs/arch",
  운영체제: "cs/os",
  네트워크: "cs/net",
  "컴파일러와 언어": "cs/lang",
  암호학: "cs/crypto",
  리버싱: "security/re",
  "악성코드 분석": "security/malware",
  "시스템 해킹": "security/pwn",
  "디지털 포렌식": "security/dfir",
}

const platformGroups = {
  "platforms/linux": [
    "Linux CLI",
    "Linux filesystem layout",
    "file descriptor",
    "process and job control",
    "Linux permission",
    "PATH",
    "environment variable",
    "procfs",
    "ptrace",
    "systemd",
    "namespace",
    "seccomp",
    "ELF loader",
    "mmap",
    "strace",
    "ltrace",
  ],
  "platforms/windows": [
    "Windows API",
    "PE loader",
    "Registry",
    "Windows Service",
    "Scheduled Task",
    "WMI",
    "Event Log",
    "Object Manager",
    "Process Injection",
    "DLL",
    "PowerShell",
    "Prefetch",
    "ShimCache",
    "AmCache",
    "SRUM",
    "Windows memory artifact",
  ],
  "platforms/android": [
    "APK",
    "DEX",
    "ART runtime",
    "Binder",
    "Android permission",
    "Android app sandbox",
    "Intent",
    "Android SQLite artifact",
    "Android forensics",
  ],
  "platforms/ios": [
    "IPA",
    "Mach-O",
    "iOS code signing",
    "iOS sandbox",
    "Keychain",
    "plist",
    "Jailbreak",
    "iOS forensics",
  ],
}

const extraGroups = {
  "cs/bin": [
    "PE File Format",
    "ELF File Format",
    "Mach-O File Format",
    "section",
    "segment",
    "symbol",
    "relocation",
    "import table",
    "export table",
    "IAT",
    "EAT",
    "GOT",
    "PLT",
    "debug information",
    "PDB",
    "DWARF",
  ],
  "cs/db": ["SQLite", "JSON", "plist", "protobuf", "browser history database", "cache artifact"],
}

const systemHacking36 = [
  {
    week: 1,
    stage: "Linux / CLI / 개발환경",
    materials: "pwn.college Start Here, Linux Luminarium: Hello Hackers, Pondering Paths",
    practice: "pwn.college 계정, SSH key, workspace 접속, cd, ls, cat, 절대/상대경로 연습",
    review: "/, /home, /bin, /usr, /tmp 의미",
    topics: ["Linux CLI", "absolute path", "relative path", "SSH key", "workspace"],
  },
  {
    week: 2,
    stage: "Linux 명령어와 문서 읽기",
    materials: "Linux Luminarium: Comprehending Commands, Digesting Documentation, File Globbing",
    practice: "man, --help, wildcard *, ?, [] 사용",
    review: "manual page, shell glob, command option",
    topics: ["man page", "file globbing", "wildcard", "command option"],
  },
  {
    week: 3,
    stage: "pipe, redirection, grep, find",
    materials: "Practicing Piping, Data Manipulation, Shell Variables",
    practice: "pipe, redirection, grep, find, stdin/stdout/stderr 실습",
    review: "file descriptor 0/1/2",
    topics: ["pipe", "redirection", "grep", "find", "stdin", "stdout", "stderr"],
  },
  {
    week: 4,
    stage: "process, permission, PATH, tmux",
    materials:
      "Processes and Jobs, Perceiving Permissions, Chaining Commands, Pondering PATH, Terminal Multiplexing",
    practice: "ps, kill, chmod, PATH, tmux 실습",
    review: "rwx, UID/GID, environment variable, exit code",
    topics: ["process", "permission", "PATH", "tmux", "UID", "GID", "exit code"],
  },
  {
    week: 5,
    stage: "C 컴파일, 타입, 포인터 입문",
    materials: "C 기본, gcc, pointer",
    practice: "gcc -Wall -Wextra -g, sizeof, pointer 예제 작성",
    review: "정수 타입 크기, signed/unsigned",
    topics: ["C basics", "gcc", "pointer", "sizeof", "signed/unsigned"],
  },
  {
    week: 6,
    stage: "배열, 문자열, 포인터 산술",
    materials: "array, string, pointer arithmetic",
    practice: "char buf[32], strlen, strcpy, null byte 실험",
    review: "C string은 null-terminated라는 점",
    topics: ["array", "string", "pointer arithmetic", "null byte", "strcpy"],
  },
  {
    week: 7,
    stage: "struct, stack frame, 함수 호출",
    materials: "struct, function call, stack frame",
    practice: "struct를 만들고 GDB에서 메모리 확인",
    review: "stack grows downward, local variable 배치",
    topics: ["struct", "function call", "stack frame", "local variable"],
  },
  {
    week: 8,
    stage: "heap, malloc/free, ownership",
    materials: "heap, malloc/free, ownership",
    practice: "malloc/free 예제, double free, UAF를 sanitizer로 관찰",
    review: "stack vs heap 차이",
    topics: ["heap", "malloc", "free", "double free", "Use After Free", "sanitizer"],
  },
  {
    week: 9,
    stage: "작은 취약 프로그램 만들기",
    materials: "BOF toy program",
    practice: "BOF가 나는 toy program 작성 후 crash 분석",
    review: 'gets, strcpy, scanf("%s")가 왜 위험한지',
    topics: ["buffer overflow", "crash analysis", "gets", "scanf"],
  },
  {
    week: 10,
    stage: "x86-64 register, instruction, memory",
    materials: "OST2 Architecture 1001",
    practice: "objdump -d, gdb disassemble, 간단한 C 코드 어셈블리 보기",
    review: "rax, rbx, rcx, rdx, rdi, rsi, rsp, rbp, rip",
    topics: ["x86-64 assembly", "register", "instruction", "objdump", "gdb disassemble"],
  },
  {
    week: 11,
    stage: "machine code와 메모리",
    materials: "pwn.college Computing 101: Your First Program, Computer Memory",
    practice: "레지스터 값 바꾸기, 메모리 읽기 문제 풀이",
    review: "little endian, word/dword/qword",
    topics: ["machine code", "computer memory", "little endian", "word size"],
  },
  {
    week: 12,
    stage: "stack, push, pop, call, ret",
    materials: "Computing 101: The Stack",
    practice: "함수 호출 전후 stack 그리기",
    review: "saved RBP, saved RIP",
    topics: ["stack", "push", "pop", "call", "ret", "saved RBP", "saved RIP"],
  },
  {
    week: 13,
    stage: "control flow, flags, conditional jump",
    materials: "cmp, test, conditional jump",
    practice: "cmp, test, je, jne, jg, jl 예제 디버깅",
    review: "ZF, CF, SF, OF 의미",
    topics: ["control flow", "flags", "conditional jump", "cmp", "test"],
  },
  {
    week: 14,
    stage: "syscall, Linux ABI, assembly crash course",
    materials: "Computing 101: Assembly Crash Course",
    practice: "syscall convention 추적",
    review: "syscall convention: rax, rdi, rsi, rdx, r10, r8, r9",
    topics: ["syscall", "Linux ABI", "syscall convention", "rax", "rdi", "rsi", "rdx"],
  },
  {
    week: 15,
    stage: "Assembly 복습",
    materials: "C to assembly review",
    practice: "C 코드 5개를 컴파일하고 assembly로 역추적",
    review: "C 한 줄이 assembly 여러 줄로 바뀌는 패턴",
    topics: ["C to assembly", "compiler output", "prologue/epilogue"],
  },
  {
    week: 16,
    stage: "GDB 기본",
    materials: "OST2 Debuggers 1012",
    practice: "breakpoint, run, si, ni, info reg, x/20gx",
    review: "GDB 명령어 cheat sheet",
    topics: ["GDB", "breakpoint", "single-step", "info registers", "memory examine"],
  },
  {
    week: 17,
    stage: "Software Introspection",
    materials: "pwn.college Computing 101: Software Introspection, Debugging Refresher",
    practice: "프로그램을 멈추고 register/stack/memory 추적",
    review: "현재 RIP가 어디를 가리키는가?",
    topics: ["software introspection", "debugging", "RIP", "stack memory"],
  },
  {
    week: 18,
    stage: "ELF, section, symbol, PLT/GOT",
    materials: "ELF와 바이너리 기본 도구",
    practice: "readelf, objdump, nm, strings, file, checksec 사용",
    review: ".text, .data, .bss, .got, .plt",
    topics: ["ELF File Format", "section", "symbol", "PLT", "GOT", "checksec"],
  },
  {
    week: 19,
    stage: "RE 기초, Ghidra/IDA 입문",
    materials: "small crackme",
    practice: "아주 작은 crackme 분석, pseudocode와 assembly 대조",
    review: "함수 호출 그래프, basic block, xref",
    topics: ["reverse engineering", "Ghidra", "IDA", "pseudocode", "xref", "basic block"],
  },
  {
    week: 20,
    stage: "stack buffer overflow",
    materials: "OST2 Vulnerabilities 1001",
    practice: "stack BOF toy program을 GDB로 분석",
    review: "buffer, saved RBP, saved RIP 관계",
    topics: ["stack buffer overflow", "saved RBP", "saved RIP", "exploit primitive"],
  },
  {
    week: 21,
    stage: "heap BOF, OOB write",
    materials: "OST2 Vulnerabilities 1001",
    practice: "heap chunk를 할당하고 주소/배치 관찰",
    review: "contiguous memory, bounds check",
    topics: ["heap buffer overflow", "out-of-bounds write", "heap chunk", "bounds check"],
  },
  {
    week: 22,
    stage: "integer overflow/underflow",
    materials: "OST2 Vulnerabilities 1001",
    practice: "uint32_t, int, size 계산 오류 예제 작성",
    review: "signed/unsigned 비교 오류",
    topics: ["integer overflow", "integer underflow", "signedness bug", "size calculation"],
  },
  {
    week: 23,
    stage: "UAF, race, info leak 개요",
    materials: "OST2 Vulnerabilities 1002",
    practice: "UAF toy example, TOCTOU toy example 관찰",
    review: "dangling pointer, lifetime, info leak의 역할",
    topics: ["Use After Free", "race condition", "information disclosure", "TOCTOU"],
  },
  {
    week: 24,
    stage: "Program Security 입문",
    materials: "pwn.college Program Security",
    practice: "argv/envp/stdin/file descriptor 기반 문제 풀이",
    review: "process memory map, /proc/self/maps",
    topics: ["argv", "envp", "stdin", "file descriptor", "process memory map"],
  },
  {
    week: 25,
    stage: "shellcode 기초",
    materials: "pwn.college shellcode",
    practice: "shellcode 관련 문제, syscall 흐름 분석",
    review: "Linux syscall convention 복습",
    topics: ["shellcode", "syscall", "Linux syscall convention"],
  },
  {
    week: 26,
    stage: "stack BOF, ret overwrite",
    materials: "stack BOF",
    practice: "crash → offset 찾기 → RIP 제어 확인",
    review: "cyclic pattern, offset 개념",
    topics: ["return address overwrite", "cyclic pattern", "offset", "RIP control"],
  },
  {
    week: 27,
    stage: "ret2win, function redirection",
    materials: "ret2win",
    practice: "원하는 함수로 control flow 이동",
    review: "control-flow hijacking 개념",
    topics: ["ret2win", "function redirection", "control-flow hijacking"],
  },
  {
    week: 28,
    stage: "mitigation: NX, Canary, PIE, ASLR",
    materials: "checksec와 mitigation",
    practice: "checksec 결과와 exploit 전략 연결",
    review: "각 mitigation이 막는 것/못 막는 것",
    topics: ["NX", "stack canary", "PIE", "ASLR", "RELRO", "mitigation bypass"],
  },
  {
    week: 29,
    stage: "ROP 기본",
    materials: "Return Oriented Programming",
    practice: "gadget 찾기, argument register 세팅",
    review: "pop rdi; ret가 왜 중요한지",
    topics: ["ROP", "gadget", "pop rdi ret", "argument register"],
  },
  {
    week: 30,
    stage: "ret2libc, leak 기반 exploit",
    materials: "ret2libc",
    practice: "주소 leak → libc base 계산 흐름 연습",
    review: "ASLR 우회는 주소 정보가 핵심",
    topics: ["ret2libc", "address leak", "libc base", "ASLR bypass"],
  },
  {
    week: 31,
    stage: "ROP 복습/stack pivot 입문",
    materials: "ROP review",
    practice: "막힌 ROP 문제 2~3개 writeup 작성",
    review: "gadget chain을 표로 정리",
    topics: ["stack pivot", "ROP chain", "writeup"],
  },
  {
    week: 32,
    stage: "heap allocator 기본",
    materials: "Software Exploitation: allocator basics",
    practice: "malloc/free 순서, chunk 재사용 관찰",
    review: "chunk, bin, tcache, metadata",
    topics: ["heap allocator", "malloc", "free", "chunk", "bin", "tcache", "metadata"],
  },
  {
    week: 33,
    stage: "Dynamic Allocator Misuse",
    materials: "double free, UAF, heap overflow",
    practice: "double free, UAF, heap overflow류 문제 풀이",
    review: "할당 순서를 그림으로 그리기",
    topics: ["Dynamic Allocator Misuse", "double free", "Use After Free", "heap overflow"],
  },
  {
    week: 34,
    stage: "format string, arbitrary read/write",
    materials: "Format String Exploits",
    practice: "format string 문제 기초 풀이",
    review: "%p, %s, %n의 의미와 위험성",
    topics: ["format string bug", "arbitrary read", "arbitrary write"],
  },
  {
    week: 35,
    stage: "OS Internals",
    materials: "OST2 Architecture 2001",
    practice: "/proc/self/maps, mmap 실험, syscall trace",
    review: "virtual address vs physical address",
    topics: ["virtual memory", "paging", "ring0-ring3", "mmap", "syscall tracing"],
  },
  {
    week: 36,
    stage: "System Security 입문",
    materials: "pwn.college System Security",
    practice: "sandboxing/race 초반 문제",
    review: "seccomp, namespace, TOCTOU, kernel/user boundary",
    topics: [
      "sandboxing",
      "race condition",
      "kernel security",
      "seccomp",
      "namespace",
      "kernel-user boundary",
    ],
  },
]

function main() {
  const source = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, "utf8") : ""

  addSourceConcepts(source)
  addStaticConcepts()

  prepareStudyPlanOutput()
  writeIndexFiles()
  writeTemplates()
  writeUnifiedRoadmap()
  writeTopicFiles()

  console.log(`Generated ${topicFiles.size} study element drafts under content/_drafts`)
}

const unifiedRoadmap = [
  {
    title: "Linux CLI와 학습 환경",
    resources: [
      "pwn.college: Start Here, Linux Luminarium",
      "The Linux Command Line",
      "OST2 학습 환경 안내",
    ],
    concepts: [
      ["platforms/linux", "Linux CLI"],
      ["platforms/linux", "absolute path"],
      ["platforms/linux", "relative path"],
      ["platforms/linux", "file descriptor"],
      ["platforms/linux", "PATH"],
    ],
    practice:
      "SSH key, workspace, cd/ls/cat/grep/find, pipe/redirection을 pwn.college 환경에서 반복한다.",
    output: "Linux CLI cheat sheet와 daily note 2개",
  },
  {
    title: "프로세스, 권한, shell 사용 습관",
    resources: ["pwn.college: Linux Luminarium", "OST2: Dbg1012 준비 자료"],
    concepts: [
      ["cs/os", "process"],
      ["cs/os", "thread"],
      ["platforms/linux", "permission"],
      ["platforms/linux", "environment variable"],
      ["platforms/linux", "tmux"],
    ],
    practice: "ps, kill, chmod, env, exit code, tmux session을 실습하고 명령 조합을 기록한다.",
    output: "process/permission 개념 초안과 명령어 노트",
  },
  {
    title: "C 기본과 컴파일",
    resources: ["C Programming: A Modern Approach", "Learn-C.org", "OST2 Arch1001 prerequisites"],
    concepts: [
      ["cs/lang", "C basics"],
      ["cs/lang", "gcc"],
      ["cs/lang", "integer type"],
      ["cs/lang", "signed/unsigned"],
      ["cs/lang", "sizeof"],
    ],
    practice: "gcc -Wall -Wextra -g, -O0/-O2 차이, sizeof와 정수 변환 예제를 작성한다.",
    output: "C compile option 노트와 integer type seed",
  },
  {
    title: "Pointer, array, string, struct",
    resources: ["C Programming: A Modern Approach", "Computer Systems: A Programmer's Perspective"],
    concepts: [
      ["cs/lang", "pointer"],
      ["cs/lang", "array"],
      ["cs/lang", "string"],
      ["cs/lang", "struct"],
      ["cs/lang", "null byte"],
    ],
    practice: "char buffer, pointer arithmetic, strlen/strcpy, struct layout을 GDB로 확인한다.",
    output: "pointer vs array 문서와 memory layout 그림",
  },
  {
    title: "Stack, heap, malloc/free",
    resources: ["Computer Systems: A Programmer's Perspective", "OST2 Vulns1001 preview"],
    concepts: [
      ["cs/os", "stack"],
      ["cs/os", "heap"],
      ["cs/lang", "malloc"],
      ["cs/lang", "free"],
      ["security/pwn", "Use After Free"],
    ],
    practice: "stack/heap toy program, malloc/free, UAF/double free를 sanitizer와 GDB로 관찰한다.",
    output: "stack vs heap 노트와 UAF toy lab 초안",
  },
  {
    title: "컴퓨터 구조 기초",
    resources: [
      "Computer Organization and Design",
      "Computer Systems: A Programmer's Perspective",
      "pwn.college: Computing 101",
    ],
    concepts: [
      ["cs/arch", "bit/byte"],
      ["cs/arch", "ISA"],
      ["cs/arch", "register"],
      ["cs/arch", "endianness"],
      ["cs/arch", "word size"],
    ],
    practice: "진수 변환, little endian 메모리 표현, register 이름을 손으로 표로 만든다.",
    output: "컴퓨터 구조 기초 map seed",
  },
  {
    title: "x86-64 Assembly 1",
    resources: ["OST2: Architecture 1001 x86-64 Assembly", "pwn.college: Computing 101"],
    concepts: [
      ["cs/arch", "x86-64 assembly"],
      ["cs/arch", "instruction"],
      ["cs/arch", "addressing mode"],
      ["cs/arch", "rax"],
      ["cs/arch", "rip"],
    ],
    practice: "간단한 C 코드를 objdump와 GDB disassemble로 보고 instruction을 주석 처리한다.",
    output: "x86-64 register 노트와 assembly reading seed",
  },
  {
    title: "x86-64 Assembly 2: stack과 control flow",
    resources: ["OST2: Architecture 1001", "Practical Binary Analysis"],
    concepts: [
      ["cs/arch", "stack pointer"],
      ["cs/arch", "base pointer"],
      ["cs/arch", "call"],
      ["cs/arch", "ret"],
      ["cs/arch", "conditional jump"],
    ],
    practice: "push/pop/call/ret 전후 RSP/RBP 변화를 손으로 그리고 GDB로 검증한다.",
    output: "stack frame 문서와 call/ret trace",
  },
  {
    title: "ABI, calling convention, syscall",
    resources: ["OST2: Architecture 1001", "System V AMD64 ABI", "pwn.college: Computing 101"],
    concepts: [
      ["cs/arch", "calling convention"],
      ["cs/arch", "ABI"],
      ["cs/os", "syscall"],
      ["platforms/linux", "Linux syscall convention"],
      ["cs/arch", "flags"],
    ],
    practice: "함수 인자 전달, syscall number와 인자 register를 GDB로 추적한다.",
    output: "calling convention 문서와 syscall table seed",
  },
  {
    title: "GDB 기본기",
    resources: ["OST2: Debuggers 1012 Introductory GDB", "pwn.college: Debugging Refresher"],
    concepts: [
      ["security/re", "GDB"],
      ["security/re", "breakpoint"],
      ["security/re", "single-step"],
      ["security/re", "memory examine"],
      ["security/re", "info registers"],
    ],
    practice: "break/run/si/ni/x/20gx/info reg/disassemble를 같은 바이너리에 반복 적용한다.",
    output: "GDB cheat sheet와 첫 debug writeup",
  },
  {
    title: "ELF와 동적 링킹",
    resources: ["Practical Binary Analysis", "Computer Systems: A Programmer's Perspective"],
    concepts: [
      ["cs/bin", "ELF File Format"],
      ["cs/bin", "section"],
      ["cs/bin", "symbol"],
      ["cs/bin", "GOT"],
      ["cs/bin", "PLT"],
    ],
    practice: "file/readelf/objdump/nm/strings/checksec로 ELF triage를 반복한다.",
    output: "ELF File Format과 GOT/PLT seed",
  },
  {
    title: "PE와 Windows 실행 모델",
    resources: [
      "Practical Malware Analysis",
      "Practical Binary Analysis",
      "Windows Internals Part 1",
    ],
    concepts: [
      ["cs/bin", "PE File Format"],
      ["cs/bin", "IAT"],
      ["cs/bin", "EAT"],
      ["platforms/windows", "Windows API"],
      ["platforms/windows", "PE loader"],
    ],
    practice:
      "PE header, section, import table을 pestudio/PE-bear 또는 readpe 계열 도구로 확인한다.",
    output: "PE File Format 보강과 IAT 노트",
  },
  {
    title: "리버싱 기초 워크플로",
    resources: [
      "Practical Binary Analysis",
      "Malware Analysis and Reverse Engineering",
      "Ghidra/IDA docs",
    ],
    concepts: [
      ["security/re", "static analysis"],
      ["security/re", "dynamic analysis"],
      ["security/re", "xref"],
      ["security/re", "CFG"],
      ["security/re", "decompilation"],
    ],
    practice: "작은 crackme를 Ghidra/IDA에서 함수명, xref, string 기준으로 분석한다.",
    output: "static analysis checklist와 crackme note",
  },
  {
    title: "취약점 유형 1: stack/OOB/integer",
    resources: ["OST2: Vulnerabilities 1001", "pwn.college: Program Security preview"],
    concepts: [
      ["security/pwn", "stack buffer overflow"],
      ["security/pwn", "out-of-bounds write"],
      ["security/pwn", "integer overflow"],
      ["security/pwn", "integer underflow"],
      ["security/pwn", "exploit primitive"],
    ],
    practice: "BOF/OOB/integer toy program을 만들고 crash와 primitive를 분리해서 기록한다.",
    output: "취약점 유형 표와 toy lab 1개",
  },
  {
    title: "취약점 유형 2: heap/UAF/race/info leak",
    resources: ["OST2: Vulnerabilities 1002", "pwn.college: Dynamic Allocator Misuse preview"],
    concepts: [
      ["security/pwn", "heap overflow"],
      ["security/pwn", "Use After Free"],
      ["security/pwn", "double free"],
      ["security/pwn", "race condition"],
      ["security/pwn", "information disclosure"],
    ],
    practice: "UAF와 TOCTOU toy example을 만들고 발생 조건과 primitive를 쓴다.",
    output: "UAF/race/info leak seed와 toy lab",
  },
  {
    title: "pwn.college Program Security 입문",
    resources: ["pwn.college: Program Security", "pwntools docs"],
    concepts: [
      ["security/pwn", "argv"],
      ["security/pwn", "envp"],
      ["platforms/linux", "procfs"],
      ["security/pwn", "crash analysis"],
      ["security/pwn", "offset"],
    ],
    practice: "argv/envp/stdin/file descriptor 기반 문제를 풀고 /proc/self/maps를 관찰한다.",
    output: "Program Security 풀이 노트 2개",
  },
  {
    title: "Shellcode와 syscall 기반 exploit",
    resources: ["pwn.college: Program Security shellcode", "OST2 Architecture 1001"],
    concepts: [
      ["security/pwn", "shellcode"],
      ["cs/os", "memory permission"],
      ["security/pwn", "NX"],
      ["platforms/linux", "Linux syscall convention"],
      ["security/pwn", "pwntools"],
    ],
    practice: "shellcode 문제를 풀고 syscall 인자와 메모리 권한 변화를 표로 정리한다.",
    output: "shellcode lab writeup",
  },
  {
    title: "Stack BOF, ret overwrite, ret2win",
    resources: ["pwn.college: Program Security", "OST2 Vulns1001"],
    concepts: [
      ["security/pwn", "return address overwrite"],
      ["security/pwn", "RIP control"],
      ["security/pwn", "cyclic pattern"],
      ["security/pwn", "ret2win"],
      ["security/pwn", "control-flow hijacking"],
    ],
    practice: "crash, offset 찾기, RIP 제어, ret2win까지 한 흐름으로 수행한다.",
    output: "ret2win writeup과 exploit.py",
  },
  {
    title: "Mitigation과 leak 사고방식",
    resources: ["pwn.college: Program Security", "Practical Binary Analysis"],
    concepts: [
      ["security/pwn", "ASLR"],
      ["security/pwn", "PIE"],
      ["security/pwn", "stack canary"],
      ["security/pwn", "RELRO"],
      ["security/pwn", "address leak"],
    ],
    practice: "checksec 결과별로 필요한 정보와 가능한 우회 전략을 먼저 적고 exploit을 시도한다.",
    output: "mitigation matrix",
  },
  {
    title: "ROP 기본",
    resources: ["pwn.college: Return Oriented Programming", "Practical Binary Analysis"],
    concepts: [
      ["security/pwn", "ROP"],
      ["security/pwn", "gadget"],
      ["security/pwn", "pop rdi ret"],
      ["security/pwn", "ROP chain"],
      ["security/pwn", "stack alignment"],
    ],
    practice: "gadget 찾기, 인자 register 세팅, chain을 표로 먼저 작성한다.",
    output: "ROP basic writeup",
  },
  {
    title: "ret2libc와 ASLR 우회",
    resources: ["pwn.college: Program Exploitation", "pwntools docs"],
    concepts: [
      ["security/pwn", "ret2libc"],
      ["security/pwn", "libc base"],
      ["security/pwn", "address leak"],
      ["cs/bin", "GOT"],
      ["cs/bin", "PLT"],
    ],
    practice: "leak → libc base 계산 → system('/bin/sh') 흐름을 반복한다.",
    output: "ret2libc writeup과 계산 노트",
  },
  {
    title: "Heap allocator와 tcache",
    resources: ["pwn.college: Dynamic Allocator Misuse", "glibc malloc 관련 자료"],
    concepts: [
      ["security/pwn", "heap allocator"],
      ["security/pwn", "heap chunk"],
      ["security/pwn", "tcache"],
      ["security/pwn", "fastbin"],
      ["security/pwn", "heap feng shui"],
    ],
    practice: "malloc/free 순서와 chunk 재사용을 heap timeline으로 기록한다.",
    output: "heap allocation timeline lab",
  },
  {
    title: "Format string과 arbitrary read/write",
    resources: ["pwn.college: Format String Exploits", "Practical Binary Analysis"],
    concepts: [
      ["security/pwn", "format string bug"],
      ["security/pwn", "arbitrary read"],
      ["security/pwn", "arbitrary write"],
      ["security/pwn", "GOT overwrite"],
      ["security/pwn", "write primitive"],
    ],
    practice: "%p/%s/%n 동작을 toy program에서 확인하고 read/write primitive로 정리한다.",
    output: "format string writeup",
  },
  {
    title: "OS Internals와 System Security 입문",
    resources: ["OST2: Architecture 2001 x86-64 OS Internals", "pwn.college: System Security"],
    concepts: [
      ["cs/os", "virtual memory"],
      ["cs/os", "page table"],
      ["cs/arch", "ring0-ring3"],
      ["platforms/linux", "seccomp"],
      ["security/pwn", "sandboxing"],
    ],
    practice: "mmap, /proc/self/maps, strace, seccomp 초반 문제를 실습한다.",
    output: "userspace/system/kernel 차이 정리",
  },
  {
    title: "Windows Internals 1: process와 object",
    resources: ["Windows Internals Part 1", "Practical Malware Analysis"],
    concepts: [
      ["platforms/windows", "Process"],
      ["platforms/windows", "Thread"],
      ["platforms/windows", "Object Manager"],
      ["platforms/windows", "Handle"],
      ["platforms/windows", "DLL"],
    ],
    practice: "Process Explorer/Procmon으로 process, thread, handle, DLL을 관찰한다.",
    output: "Windows process/object map",
  },
  {
    title: "악성코드 정적 분석",
    resources: ["Practical Malware Analysis", "Malware Analysis and Reverse Engineering"],
    concepts: [
      ["security/malware", "malware triage"],
      ["security/malware", "IOC"],
      ["security/malware", "YARA"],
      ["security/malware", "API Hashing"],
      ["security/malware", "string encryption"],
    ],
    practice: "샘플 대신 toy binary로 hash, strings, imports, section anomaly를 triage한다.",
    output: "static malware analysis checklist",
  },
  {
    title: "악성코드 동적 분석",
    resources: ["Practical Malware Analysis", "Windows Internals Part 1"],
    concepts: [
      ["security/malware", "dynamic analysis"],
      ["platforms/windows", "Registry"],
      ["platforms/windows", "Windows Service"],
      ["platforms/windows", "Scheduled Task"],
      ["platforms/windows", "Event Log"],
    ],
    practice: "Procmon, Process Explorer, Regshot 스타일의 행위 관찰 절차를 정리한다.",
    output: "dynamic analysis lab template",
  },
  {
    title: "Unpacking과 anti-analysis",
    resources: ["Practical Malware Analysis", "Malware Analysis and Reverse Engineering"],
    concepts: [
      ["security/re", "packing"],
      ["security/re", "unpacking"],
      ["security/re", "OEP"],
      ["security/re", "anti-debugging"],
      ["security/re", "anti-VM"],
    ],
    practice:
      "packed toy binary 또는 UPX 샘플에서 OEP, dump, import reconstruction 흐름을 정리한다.",
    output: "unpacking checklist",
  },
  {
    title: "Process Injection과 persistence",
    resources: ["Practical Malware Analysis", "Windows Internals Part 1"],
    concepts: [
      ["security/malware", "process injection"],
      ["platforms/windows", "WriteProcessMemory"],
      ["platforms/windows", "CreateRemoteThread"],
      ["platforms/windows", "WMI"],
      ["security/malware", "persistence"],
    ],
    practice: "DLL injection, process hollowing, APC injection의 차이를 표로 정리한다.",
    output: "process injection 비교표",
  },
  {
    title: "C2, 네트워크, 탐지 룰",
    resources: ["Practical Malware Analysis", "Wireshark docs", "Sigma/YARA examples"],
    concepts: [
      ["cs/net", "DNS"],
      ["cs/net", "HTTP"],
      ["cs/net", "TLS"],
      ["security/malware", "C2"],
      ["security/malware", "beaconing"],
    ],
    practice: "PCAP에서 DNS/HTTP/TLS 흐름을 보고 IOC와 YARA/Sigma 초안을 작성한다.",
    output: "C2 traffic triage note",
  },
  {
    title: "디스크 포렌식 기초",
    resources: ["File System Forensic Analysis", "The Art of Memory Forensics"],
    concepts: [
      ["security/dfir", "forensic image"],
      ["security/dfir", "chain of custody"],
      ["cs/os", "filesystem"],
      ["cs/os", "inode"],
      ["cs/os", "MFT"],
    ],
    practice: "toy image 기준으로 partition, filesystem, deleted file, carving 흐름을 정리한다.",
    output: "disk forensics lab template",
  },
  {
    title: "Windows artifact와 timeline",
    resources: [
      "Windows Internals Part 1",
      "Windows Forensics 자료",
      "The Art of Memory Forensics",
    ],
    concepts: [
      ["platforms/windows", "Prefetch"],
      ["platforms/windows", "ShimCache"],
      ["platforms/windows", "AmCache"],
      ["platforms/windows", "SRUM"],
      ["security/dfir", "timeline analysis"],
    ],
    practice: "Registry/Event Log/Prefetch/AmCache를 timeline 관점으로 묶는다.",
    output: "Windows artifact map",
  },
  {
    title: "Memory Forensics",
    resources: ["The Art of Memory Forensics", "Volatility docs"],
    concepts: [
      ["security/dfir", "memory dump"],
      ["security/dfir", "process reconstruction"],
      ["security/dfir", "DLL list"],
      ["security/dfir", "VAD"],
      ["security/dfir", "malfind"],
    ],
    practice: "Volatility 기본 plugin 출력의 의미를 process, dll, handle, VAD 중심으로 정리한다.",
    output: "memory forensics lab",
  },
  {
    title: "Network, browser, mobile forensics",
    resources: ["Wireshark docs", "Android Security Internals", "iOS Application Security"],
    concepts: [
      ["cs/net", "PCAP"],
      ["cs/db", "SQLite"],
      ["cs/db", "JSON"],
      ["platforms/android", "Android app sandbox"],
      ["platforms/ios", "iOS sandbox"],
    ],
    practice: "PCAP, browser history SQLite, Android/iOS artifact 구조를 비교한다.",
    output: "network/mobile artifact note",
  },
  {
    title: "암호학 기초와 TLS",
    resources: [
      "Serious Cryptography",
      "Cryptography Engineering",
      "Computer Networking: A Top-Down Approach",
    ],
    concepts: [
      ["cs/crypto", "hash function"],
      ["cs/crypto", "HMAC"],
      ["cs/crypto", "AES"],
      ["cs/crypto", "public-key cryptography"],
      ["cs/crypto", "TLS"],
    ],
    practice: "hash/HMAC/AES/TLS handshake를 분석 관점에서 요약한다.",
    output: "암호학 map seed",
  },
  {
    title: "악성코드와 암호 오용",
    resources: ["Practical Malware Analysis", "Serious Cryptography"],
    concepts: [
      ["cs/crypto", "XOR encoding"],
      ["cs/crypto", "KDF"],
      ["cs/crypto", "PRNG"],
      ["security/malware", "config extraction"],
      ["security/malware", "ransomware"],
    ],
    practice:
      "toy config decryption, XOR/rolling key, ransomware-style encryption flow를 구현해 본다.",
    output: "malware crypto misuse note",
  },
  {
    title: "통합 사례 1: malware-to-forensics",
    resources: [
      "Practical Malware Analysis",
      "The Art of Memory Forensics",
      "Windows Internals Part 1",
    ],
    concepts: [
      ["security/malware", "IOC"],
      ["security/dfir", "timeline analysis"],
      ["platforms/windows", "Event Log"],
      ["cs/net", "PCAP"],
      ["security/malware", "persistence"],
    ],
    practice: "toy malware 행위 → host artifact → network IOC → timeline 순서로 보고서를 쓴다.",
    output: "IR mini report 초안",
  },
  {
    title: "통합 사례 2: pwn-to-reversing",
    resources: [
      "pwn.college: Program Security",
      "Practical Binary Analysis",
      "OST2 Vulns1001/1002",
    ],
    concepts: [
      ["security/pwn", "crash analysis"],
      ["security/re", "patch diffing"],
      ["security/pwn", "ROP"],
      ["security/pwn", "heap allocator"],
      ["security/pwn", "exploit primitive"],
    ],
    practice: "취약 바이너리 하나를 RE로 원인 분석하고 pwn 관점 writeup으로 연결한다.",
    output: "binary vulnerability writeup",
  },
  {
    title: "논문 읽기와 구현 계획",
    resources: ["USENIX Security papers", "IEEE S&P papers", "ACM CCS papers"],
    concepts: [
      ["security/re", "symbolic execution"],
      ["security/re", "taint analysis"],
      ["security/malware", "family clustering"],
      ["security/dfir", "evidence"],
      ["cs/math", "statistics"],
    ],
    practice: "논문 1편을 읽고 문제/아이디어/평가/재현할 것 템플릿으로 정리한다.",
    output: "첫 paper review draft",
  },
  {
    title: "포트폴리오 정리와 다음 계획",
    resources: ["작성한 notes, labs, papers", "Quartz docs", "개인 블로그 운영 정책"],
    concepts: [
      ["security/pwn", "writeup"],
      ["security/malware", "report structure"],
      ["security/dfir", "incident report"],
      ["security/re", "analysis checklist"],
      ["cs/crypto", "hash-based IOC"],
    ],
    practice: "공개할 article/lab/paper 후보를 고르고 portfolio 링크 구조를 정리한다.",
    output: "portfolio 업데이트와 다음 12주 계획",
  },
]

main()

function addSourceConcepts(source) {
  if (!source) return

  const sections = extractConceptSections(source)
  for (const [section, lines] of sections) {
    const baseCategory = conceptSectionToCategory[section]
    if (!baseCategory && section !== "자료구조/알고리즘/수학") continue

    for (const line of lines) {
      for (const topic of splitTopics(line.replace(/^\d+\.\s*/, ""))) {
        const category =
          section === "자료구조/알고리즘/수학" ? combinedMathCategory(topic) : baseCategory
        addTopic(category, topic)
      }
    }
  }
}

function addStaticConcepts() {
  for (const [category, topics] of Object.entries(platformGroups)) {
    for (const topic of topics) addTopic(category, topic)
  }

  for (const [category, topics] of Object.entries(extraGroups)) {
    for (const topic of topics) addTopic(category, topic)
  }

  for (const week of systemHacking36) {
    for (const topic of week.topics) addTopic(guessCategory(topic), topic)
  }

  for (const week of unifiedRoadmap) {
    for (const [category, topic] of week.concepts) addTopic(category, topic)
  }
}

function prepareStudyPlanOutput() {
  for (const name of ["security-roadmap-24w", "system-hacking-36w", "security-study-roadmap"]) {
    fs.rmSync(path.join(draftRoot, "study-plan", name), { recursive: true, force: true })
  }
}

function writeIndexFiles() {
  writeFile(
    path.join(draftRoot, "index.md"),
    frontmatter({
      title: "_drafts",
      draft: true,
    }) +
      [
        "공개 전 공부 요소와 주차별 계획을 보관하는 작업 공간입니다.",
        "",
        "- [[_drafts/study-elements/index|공부 요소]]",
        "- [[_drafts/study-plan/index|공부계획]]",
        "- [[_drafts/templates/concept|템플릿]]",
        "- [[_drafts/metadata-policy|메타데이터 정책]]",
        "",
      ].join("\n"),
  )

  writeFile(
    path.join(draftRoot, "study-elements/index.md"),
    frontmatter({
      title: "공부 요소",
      draft: true,
    }) +
      [
        "개념을 작은 단위로 쪼갠 초안 노트입니다. 공개할 때는 `content/wiki/`, `content/labs/`, `content/articles/` 중 성격에 맞는 위치로 옮깁니다.",
        "",
        "## CS",
        "- [[_drafts/study-elements/cs/arch/index|컴퓨터 구조]]",
        "- [[_drafts/study-elements/cs/os/index|운영체제]]",
        "- [[_drafts/study-elements/cs/bin/index|바이너리 포맷]]",
        "- [[_drafts/study-elements/cs/net/index|네트워크]]",
        "- [[_drafts/study-elements/cs/lang/index|컴파일러/언어]]",
        "- [[_drafts/study-elements/cs/dsa/index|자료구조/알고리즘]]",
        "- [[_drafts/study-elements/cs/math/index|수학]]",
        "- [[_drafts/study-elements/cs/crypto/index|암호학]]",
        "",
        "## Security",
        "- [[_drafts/study-elements/security/pwn/index|시스템 해킹]]",
        "- [[_drafts/study-elements/security/re/index|리버싱]]",
        "- [[_drafts/study-elements/security/malware/index|악성코드 분석]]",
        "- [[_drafts/study-elements/security/dfir/index|디지털 포렌식]]",
        "",
        "## Platforms",
        "- [[_drafts/study-elements/platforms/linux/index|Linux]]",
        "- [[_drafts/study-elements/platforms/windows/index|Windows]]",
        "- [[_drafts/study-elements/platforms/android/index|Android]]",
        "- [[_drafts/study-elements/platforms/ios/index|iOS]]",
        "",
      ].join("\n"),
  )

  writeFile(
    path.join(draftRoot, "study-plan/index.md"),
    frontmatter({
      title: "공부계획",
      draft: true,
    }) +
      [
        "주차별 학습 계획입니다. 각 항목은 `_drafts/study-elements/`의 개념 초안으로 연결합니다.",
        "",
        "- [[_drafts/study-plan/security-study-roadmap/index|40주 보안 학습 로드맵]]",
        "",
      ].join("\n"),
  )

  writeFile(
    path.join(draftRoot, "metadata-policy.md"),
    frontmatter({
      title: "메타데이터 정책",
      draft: true,
    }) +
      [
        "Quartz 빌드에서는 `FolderMetadata` transformer가 경로를 보고 기본 `draft`, `tags`를 채웁니다.",
        "",
        "직접 노트를 만들 때는 frontmatter 없이 첫 줄에 H1만 적어도 됩니다.",
        "",
        "```markdown",
        "# DNS",
        "",
        "DNS 메모를 여기에 작성합니다.",
        "```",
        "",
        "빌드 시 `FrontMatter` transformer가 첫 H1을 `title`로 사용하고, 본문에서는 같은 H1을 제거합니다. 나머지 기본 메타데이터는 파일 경로 기준으로 채워집니다.",
        "",
        "## 공개 위치 기준",
        "",
        "- 완성형 글: `content/articles/`",
        "- 재사용 개념: `content/wiki/`",
        "- 실습과 write-up: `content/labs/`",
        "- 논문 리뷰: `content/papers/`",
        "- 공부 기록: `content/journal/`",
        "- 주제별 입구: `content/maps/`",
        "- 공개 전 초안: `content/_drafts/`",
        "",
      ].join("\n"),
  )
}

function writeUnifiedRoadmap() {
  writeFile(
    path.join(draftRoot, "study-plan/security-study-roadmap/index.md"),
    frontmatter({
      title: "40주 보안 학습 로드맵",
      draft: true,
    }) +
      [
        "주 5일, 하루 2시간 기준의 통합 로드맵입니다.",
        "",
        "흐름은 Linux/C/Assembly/GDB/Pwn을 먼저 깊게 잡고, 이후 리버싱, 악성코드 분석, 디지털 포렌식, 암호학, 통합 산출물로 확장합니다.",
        "",
        "## Weeks",
        ...unifiedRoadmap.map(
          (week, index) =>
            `- [[_drafts/study-plan/security-study-roadmap/week-${pad(index + 1)}/index|${index + 1}주차: ${week.title}]]`,
        ),
        "",
      ].join("\n"),
  )

  unifiedRoadmap.forEach((week, index) => {
    const weekNumber = index + 1
    const conceptLinks = week.concepts.map(([category, topic]) => topicLink(category, topic))
    const conceptGroups = week.concepts.reduce((groups, [category, topic]) => {
      const group = categoryRootLabel(category)
      const values = groups.get(group) ?? []
      values.push(topicLink(category, topic))
      groups.set(group, values)
      return groups
    }, new Map())

    const body = [
      `# ${weekNumber}주차: ${week.title}`,
      "",
      "## 기준",
      "",
      "- 주 5일",
      "- 하루 2시간",
      "- 실습 70분, 개념 35분, 노트 15분을 기본 단위로 사용",
      "",
      "## 참고 자료",
      "",
      ...week.resources.map((resource) => `- ${resource}`),
      "",
      "## 연결 노트",
      "",
      ...[...conceptGroups.entries()].flatMap(([group, links]) => [
        `### ${group}`,
        "",
        ...links.map((link) => `- ${link}`),
        "",
      ]),
      "## 요일별 계획",
      "",
      renderDay("월요일", [
        `개념: ${conceptLinks.slice(0, 2).join(", ")}`,
        `자료: ${week.resources[0]}`,
        "노트: 이번 주 목표와 모르는 용어를 `_drafts`에 정리",
      ]),
      renderDay("화요일", [
        `실습: ${week.practice}`,
        `개념: ${conceptLinks.slice(2, 4).join(", ") || conceptLinks.slice(0, 1).join(", ")}`,
        "노트: 실습 중 확인한 명령어, 주소, artifact를 짧게 기록",
      ]),
      renderDay("수요일", [
        `자료: ${week.resources[1] ?? week.resources[0]}`,
        "실습: 월/화에 막힌 부분을 debugger, disassembler, packet viewer 중 해당 도구로 재확인",
        "노트: 왜 막혔는지와 다음 확인 지점을 적기",
      ]),
      renderDay("목요일", [
        `실습: ${week.practice}`,
        `개념: ${conceptLinks.slice(4, 6).join(", ") || conceptLinks.slice(0, 1).join(", ")}`,
        "노트: 재현 절차를 lab 또는 concept 초안으로 분리",
      ]),
      renderDay("금요일", [
        `산출물: ${week.output}`,
        "복습: 이번 주 개념 링크가 public wiki로 옮길 수준인지 표시",
        "정리: 다음 주에 이어갈 질문 3개 작성",
      ]),
      "## 완료 기준",
      "",
      "- [ ] daily note 2개 이상",
      "- [ ] concept seed 2개 이상",
      "- [ ] 실습 또는 분석 산출물 1개",
      "- [ ] 막힌 지점과 해결 과정을 한 문단으로 정리",
      "",
    ].join("\n")

    writeFile(
      path.join(draftRoot, `study-plan/security-study-roadmap/week-${pad(weekNumber)}/index.md`),
      frontmatter({
        title: `${weekNumber}주차: ${week.title}`,
        draft: true,
      }) + body,
    )
  })
}

function renderDay(day, items) {
  return [`### ${day}`, "", ...items.map((item) => `- ${item}`), ""].join("\n")
}

function categoryRootLabel(category) {
  if (category.startsWith("cs/")) return "CS"
  if (category.startsWith("security/")) return "Security"
  if (category.startsWith("platforms/")) return "Platforms"
  return "Notes"
}

function writeTemplates() {
  const templates = {
    "concept.md": [
      "## 한 줄 요약",
      "",
      "## 왜 배우나",
      "",
      "## 핵심 개념",
      "",
      "## 직접 확인할 것",
      "",
      "## 관련 노트",
      "",
    ],
    "weekly-plan.md": [
      "## 목표",
      "",
      "## CS 축",
      "",
      "## 보안 축",
      "",
      "## 컴퓨터 앞에서 할 것",
      "",
      "## 산출물",
      "",
    ],
    "lab.md": ["## 환경", "", "## 목표", "", "## 절차", "", "## 결과", "", "## 막힌 점", ""],
    "paper-review.md": [
      "## 3줄 요약",
      "",
      "## 문제",
      "",
      "## 핵심 아이디어",
      "",
      "## 방법론",
      "",
      "## 내가 얻은 것",
      "",
      "## 연결된 노트",
      "",
    ],
  }

  for (const [name, body] of Object.entries(templates)) {
    writeFile(
      path.join(draftRoot, "templates", name),
      frontmatter({
        title: name.replace(/\.md$/, ""),
        draft: true,
      }) + body.join("\n"),
    )
  }
}

function writeTopicFiles() {
  const categoryIndex = new Map()

  for (const [filePath, topic] of topicFiles) {
    const absolute = path.join(draftRoot, "study-elements", filePath)
    writeFile(absolute, renderConcept(topic))

    const category = path.dirname(filePath)
    const items = categoryIndex.get(category) ?? []
    items.push(topic)
    categoryIndex.set(category, items)
  }

  for (const [category, topics] of categoryIndex) {
    const title = categoryTitle(category)
    const links = topics
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((topic) => `- ${topicLink(category, topic.title)}`)
      .join("\n")

    writeFile(
      path.join(draftRoot, "study-elements", category, "index.md"),
      frontmatter({
        title,
        draft: true,
      }) + `${links}\n`,
    )
  }
}

function renderConcept(topic) {
  const data = {
    title: topic.title,
    draft: true,
  }

  if (topic.aliases?.length) {
    data.aliases = topic.aliases
  }

  return (
    frontmatter(data) +
    [
      "## 한 줄 요약",
      "",
      "## 왜 배우나",
      "",
      "## 핵심 질문",
      "",
      "- 이 개념은 어떤 문제를 설명하는가?",
      "- 실습에서 어떤 증거로 확인할 수 있는가?",
      "- 어느 분야 문서와 연결되는가?",
      "",
      "## 직접 확인할 것",
      "",
      "## 연결된 노트",
      "",
    ].join("\n")
  )
}

function renderLinkedSection(title, raw, category) {
  const topics = splitTopics(raw ?? "")
  if (topics.length === 0) return `### ${title}\n\n- 정리 예정\n`

  const links = topics
    .map((topic) => {
      const resolved = category === "combined" ? combinedMathCategory(topic) : category
      return `- ${topicLink(resolved, topic)}`
    })
    .join("\n")

  return `### ${title}\n\n${links}\n`
}

function topicLink(category, title) {
  const topic = addTopic(category, title)
  return `[[_drafts/study-elements/${category}/${topic.slug}|${title}]]`
}

function addTopic(category, title) {
  const cleanTitle = normalizeTitle(title)
  const slug = slugify(cleanTitle)
  const filePath = `${category}/${slug}.md`

  if (!topicFiles.has(filePath)) {
    topicFiles.set(filePath, {
      title: cleanTitle,
      slug,
    })
  }

  return topicFiles.get(filePath)
}

function extractTable(markdown, heading) {
  const start = markdown.indexOf(heading)
  if (start === -1) return []

  const lines = markdown.slice(start).split("\n")
  const tableStart = lines.findIndex((line) => line.trim().startsWith("|"))
  if (tableStart === -1) return []

  const tableLines = []
  for (const line of lines.slice(tableStart)) {
    if (!line.trim().startsWith("|")) break
    tableLines.push(line)
  }

  const [headerLine, , ...rowLines] = tableLines
  const headers = parseTableLine(headerLine)
  return rowLines.map((line) => {
    const cells = parseTableLine(line)
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]))
  })
}

function parseTableLine(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim())
}

function extractConceptSections(markdown) {
  const marker = "## 세분화된 개념 목록"
  const start = markdown.indexOf(marker)
  if (start === -1) return []

  const sectionText = markdown.slice(start + marker.length)
  const lines = sectionText.split("\n")
  const sections = []
  let current = null

  for (const line of lines) {
    if (line.startsWith("## ")) break

    const heading = line.match(/^###\s+(.+)$/)
    if (heading) {
      current = [heading[1].trim(), []]
      sections.push(current)
      continue
    }

    if (current && /^\d+\.\s+/.test(line.trim())) current[1].push(line.trim())
  }

  return sections
}

function byWeek(rows) {
  return new Map(rows.map((row) => [row["주차"], row]))
}

function splitTopics(value) {
  if (!value) return []
  return value
    .split(",")
    .map((topic) => normalizeTitle(topic))
    .filter(Boolean)
}

function normalizeTitle(value) {
  return value
    .replace(/\s+/g, " ")
    .replace(/\s+개요$/g, "")
    .replace(/\s+입문$/g, "")
    .replace(/\s+기초$/g, "")
    .trim()
}

function combinedMathCategory(topic) {
  const lower = topic.toLowerCase()
  if (
    [
      "hash",
      "checksum",
      "crypto",
      "xor",
      "kdf",
      "aes",
      "rsa",
      "tls",
      "certificate",
      "hmac",
      "nonce",
      "cipher",
      "encryption",
      "decryption",
      "signature",
      "pki",
    ].some((needle) => lower.includes(needle))
  ) {
    return "cs/crypto"
  }

  if (
    [
      "boolean",
      "set",
      "base conversion",
      "entropy",
      "probability",
      "statistics",
      "modular",
      "constraint",
      "bit-vector",
      "correlation",
      "frequency",
      "clustering",
      "confidence",
      "event ordering",
      "function",
      "relation",
    ].some((needle) => lower.includes(needle))
  ) {
    return "cs/math"
  }

  return "cs/dsa"
}

function guessCategory(topic) {
  const lower = topic.toLowerCase()

  if (
    [
      "linux",
      "ssh",
      "cli",
      "path",
      "grep",
      "find",
      "pipe",
      "redirection",
      "stdin",
      "stdout",
      "stderr",
      "tmux",
      "uid",
      "gid",
      "exit code",
      "proc",
      "strace",
      "ltrace",
      "namespace",
      "seccomp",
    ].some((needle) => lower.includes(needle))
  ) {
    return "platforms/linux"
  }

  if (
    ["windows", "registry", "prefetch", "amcache", "shimcache", "srum", "powershell"].some(
      (needle) => lower.includes(needle),
    )
  ) {
    return "platforms/windows"
  }

  if (
    [
      "gdb",
      "ida",
      "ghidra",
      "reverse",
      "pseudocode",
      "xref",
      "basic block",
      "objdump",
      "readelf",
      "checksec",
    ].some((needle) => lower.includes(needle))
  ) {
    return "security/re"
  }

  if (
    [
      "bof",
      "overflow",
      "uaf",
      "rop",
      "ret2",
      "shellcode",
      "exploit",
      "gadget",
      "mitigation",
      "canary",
      "pie",
      "aslr",
      "relro",
      "format string",
      "arbitrary",
      "tcache",
      "heap allocator",
      "stack pivot",
      "rip control",
      "cyclic",
    ].some((needle) => lower.includes(needle))
  ) {
    return "security/pwn"
  }

  if (
    [
      "elf",
      "pe ",
      "mach-o",
      "section",
      "segment",
      "symbol",
      "plt",
      "got",
      "iat",
      "eat",
      "relocation",
    ].some((needle) => lower.includes(needle))
  ) {
    return "cs/bin"
  }

  if (
    [
      "x86",
      "assembly",
      "register",
      "instruction",
      "machine code",
      "little endian",
      "word size",
      "flags",
      "conditional",
      "control flow",
      "call",
      "ret",
      "push",
      "pop",
      "rax",
      "rdi",
      "rsi",
      "rdx",
      "abi",
    ].some((needle) => lower.includes(needle))
  ) {
    return "cs/arch"
  }

  if (
    [
      "c ",
      "gcc",
      "pointer",
      "array",
      "string",
      "struct",
      "compiler",
      "function call",
      "undefined",
      "signed",
      "sanitizer",
    ].some((needle) => lower.includes(needle))
  ) {
    return "cs/lang"
  }

  if (
    [
      "stack",
      "heap",
      "process",
      "thread",
      "syscall",
      "mmap",
      "virtual memory",
      "paging",
      "ring",
      "memory map",
      "file descriptor",
    ].some((needle) => lower.includes(needle))
  ) {
    return "cs/os"
  }

  return combinedMathCategory(topic)
}

function categoryTitle(category) {
  const titles = {
    "cs/arch": "컴퓨터 구조",
    "cs/os": "운영체제",
    "cs/bin": "바이너리 포맷",
    "cs/net": "네트워크",
    "cs/lang": "컴파일러/언어",
    "cs/dsa": "자료구조/알고리즘",
    "cs/math": "수학",
    "cs/crypto": "암호학",
    "cs/db": "데이터베이스/스토리지",
    "security/re": "리버싱",
    "security/malware": "악성코드 분석",
    "security/pwn": "시스템 해킹",
    "security/dfir": "디지털 포렌식",
    "platforms/linux": "Linux",
    "platforms/windows": "Windows",
    "platforms/android": "Android",
    "platforms/ios": "iOS",
  }

  return titles[category] ?? category
}

function frontmatter(data) {
  const lines = ["---"]
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        continue
      } else {
        lines.push(`${key}:`)
        for (const item of value) lines.push(`  - ${yamlScalar(item)}`)
      }
    } else if (typeof value === "boolean") {
      lines.push(`${key}: ${value}`)
    } else {
      lines.push(`${key}: ${yamlScalar(value)}`)
    }
  }
  lines.push("---", "")
  return `${lines.join("\n")}\n`
}

function yamlScalar(value) {
  return `"${String(value).replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`
}

function slugify(value) {
  const slug = value
    .toLowerCase()
    .replace(/c\+\+/g, "cpp")
    .replace(/c#/g, "csharp")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")

  return slug || "topic"
}

function writeFile(filePath, body) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, `${body.trimEnd()}\n`, "utf8")
}

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

function pad(value) {
  return String(value).padStart(2, "0")
}
