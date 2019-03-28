const http = require('http');
const router = require('./router');
const port = 4001;

const server = http.createServer(router);

server.listen(port);

console.log('Server running on port 4001');
