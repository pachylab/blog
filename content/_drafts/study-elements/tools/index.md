---
title: "Tools"
draft: true
---

보안 공부 전반에서 반복해서 사용하는 도구를 별도 축으로 정리합니다. 공개할 때는 content/wiki/tools/ 로 옮깁니다.

## 기존 도구 노트

- [[_drafts/study-elements/tools/gdb|gdb]]
- [[_drafts/study-elements/tools/pwndbg|pwndbg]]
- [[_drafts/study-elements/tools/pwntools|pwntools]]
- [[_drafts/study-elements/tools/ghidra|Ghidra]]
- [[_drafts/study-elements/tools/ida|IDA]]
- [[_drafts/study-elements/tools/x64dbg|x64dbg]]
- [[_drafts/study-elements/tools/volatility|Volatility]]
- [[_drafts/study-elements/tools/wireshark|Wireshark]]
- [[_drafts/study-elements/tools/strace-ltrace|strace/ltrace]]
- [[_drafts/study-elements/tools/yara|YARA]]

## 40주 도구 축 보강 대상

| 영역 | 우선 도구 |
|---|---|
| 랩/운영 | Git, Markdown, VirtualBox/VMware/Hyper-V, FLARE-VM, REMnux, Docker |
| 리버싱 | Ghidra, IDA, Binary Ninja, Cutter/Rizin, GDB/LLDB, x64dbg, WinDbg, Frida |
| 파일/바이너리 triage | file, strings, Detect It Easy, PEStudio, PE-bear, CFF Explorer, LIEF, pefile, pyelftools |
| 악성코드 분석 | capa, FLOSS, YARA, Sigma, FakeNet-NG, INetSim, Procmon, Autoruns, PE-sieve, CAPE/Cuckoo |
| 시스템 해킹 | pwntools, checksec, ROPgadget, Ropper, one_gadget, seccomp-tools, AFL++, libFuzzer, Sanitizers |
| DFIR | KAPE, Eric Zimmerman Tools, RegRipper, plaso, Timesketch, Volatility 3, MemProcFS, Velociraptor, osquery |
| 네트워크/탐지 | Wireshark, tshark, tcpdump, Zeek, Suricata, NetworkMiner, Sysmon, Elastic/Splunk/Wazuh |
| Cloud/Container/Mobile | AWS CLI/CloudTrail/Athena, Entra logs, GCP Cloud Logging, kubectl, Falco, Trivy/Syft, JADX/apktool, ALEAPP/iLEAPP |

## 도구 노트 작성 기준

새 도구를 공부할 때는 [[_drafts/templates/tool-note|tool-note 템플릿]]으로 목적, 입력, 출력, workflow, 해석 기준, 한계를 먼저 적습니다.
