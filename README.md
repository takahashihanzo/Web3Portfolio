# Web3Portfolio Architecture

## Overview
This repository contains custom-built blockchain node infrastructure and smart contract architecture. It is developed entirely from scratch, focusing on secure transaction validation, vesting mechanisms, and a highly readable, clean codebase optimized for developer collaboration.

## Core Components
* **VestingLogic**: A secure Solidity smart contract designed to lock user tokens and strictly release them only after a predefined cliff duration has passed.
* **P2P Node Server**: A backend HTTP server managing real-time transaction verification and broadcasting across a custom peer-to-peer network.
* **Block Miner**: A consensus module that simulates Proof of Work (PoW) validation for processing pending transactions into blocks.

## Directory Layout
Strict naming conventions and structural organization are maintained across the project for clarity:

```text
Web3Portfolio
├── contracts
│   └── VestingLogic.sol
├── core
│   ├── blockMiner.js
│   └── nodeServer.js
├── scripts
│   ├── deployContract.js
│   └── networkSetup.js
├── test
│   ├── nodeTest.js
│   └── vestingTest.js
├── config
│   └── networkSettings.json
└── package.json
```

## Quick Start
To initialize the network configuration and start the P2P Node Server locally:
```bash
npm install
npm start
```

To execute the smart contract and server test suites:
```bash
npm test
```

## Legal & Copyright
Copyright (c) 2026 Takahashi Hanzo. All rights reserved.
