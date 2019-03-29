const fs = require('fs');
const path = require('path');
const queryString = require('query-string');
const places = require('../places.json');

// function handler (request, response) {

const handleQuery = (request, response) => {
  let filtered = [];
  let searchString = queryString.parse(request.url)['/query'].toLowerCase();

  let newArray = places['cities'].map(city1 => {
    if (city1.city.toLowerCase().includes(searchString)) {
      return filtered.push(city1.city.toLowerCase());
    }
  });

  const firstEight = filtered.slice(0, 8);
  // console.log(firstEight);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(firstEight));
};

const handleHomeRoute = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end("<h1>Sorry, we've had a problem on our end</h1>");
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const handlePublic = (request, response, url) => {
  console.log(request.method);
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    png: 'image/png'
  };

  // Replaced err with error in line 30
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('<h1>404 file not found</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': extensionType[extension] });
      response.end(file);
    }
  });
  console.log(url);
};
// if (request.method === "POST") {
//   var allTheData = '';
//   request.on('data', (chunkOfData) => {
//     allTheData += chunkOfData;
//   });
//   request.on('end', () => {
//     const convertedData = querystring.parse(allTheData);
//     console.log(convertedData);
//     response.writeHead(302, {"Location": "/"});
//     response.end();
//   })
// }
// };

module.exports = {
  // handler
  handleHomeRoute,
  handlePublic,
  handleQuery
};
