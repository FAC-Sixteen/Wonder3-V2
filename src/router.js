const handler = require('./handler.js');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handler.handleHomeRoute(request, response);
  } else if (url.includes('query')) {
    handler.handleQuery(request, response);
  } else if (url.includes('city')) {
    handler.handleCity(request, response);
  } else if (url.indexOf('public') !== -1) {
    handler.handlePublic(request, response, url);
  } else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>404 file not found</h1>');
  }
};

module.exports = router;
