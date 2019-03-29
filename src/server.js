const http = require('http');
const router = require('./router');
// const port = 4001;
// const matcher = require('./script.js')

const server = http.createServer(router);

server.listen(process.env.PORT || 4001);

console.log('Server running on port 4001');

// console.log("running matcher func:" , matcher());
