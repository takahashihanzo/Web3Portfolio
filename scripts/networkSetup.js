// Copyright (c) 2026 Takahashi Hanzo. All rights reserved.

const fs = require('fs');

function initializeNetwork() {
    console.log("Loading network configuration...");
    const configData = fs.readFileSync('./config/networkSettings.json', 'utf8');
    const parsedConfig = JSON.parse(configData);
    
    console.log(`Network initialized on chainId: ${parsedConfig.networkChainId}`);
}

initializeNetwork();
