## GitHub Copilot Chat

- Extension Version: 0.28.3 (prod)
- VS Code: vscode/1.101.1
- OS: Linux

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.207.73.85 (220 ms)
- DNS ipv6 Lookup: Error (68 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (2 ms)
- Electron fetch (configured): HTTP 200 (1148 ms)
- Node.js https: HTTP 200 (1127 ms)
- Node.js fetch: HTTP 200 (1081 ms)
- Helix fetch: HTTP 200 (976 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.112.21 (216 ms)
- DNS ipv6 Lookup: Error (8 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (221 ms)
- Electron fetch (configured): HTTP 200 (1400 ms)
- Node.js https: HTTP 200 (1352 ms)
- Node.js fetch: HTTP 200 (1804 ms)
- Helix fetch: HTTP 200 (1250 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).