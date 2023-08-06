const http = require('http');

function router(req, res) {
  console.log('new request');
  console.log(req.url);

  switch (req.url) {
    case '/hello':
      res.write('Helloooooo');
      res.end();
      break;
    default:
      res.write('404 Error');
      res.end();
  }

//   res.writeHead(201, {'Content-Type': 'text/plain'})
//   res.write('hello from the http server nodejs')

//   res.end();
 }

http.createServer(router).listen(3000);

console.log("Listening htto in port 3000");
