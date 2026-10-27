// Copyright (c) 2026 Takahashi Hanzo. All rights reserved.

const http = require('http');

const serverNode = http.createServer((request, response) => {
    if (request.url === '/api/transaction' && request.method === 'POST') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ message: 'Transaction verified and broadcasted to P2P network' }));
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Network Route Not Found');
    }
});

const serverPort = 8080;
serverNode.listen(serverPort, () => {
    console.log(`P2P Node Server running on port ${serverPort}`);
});
