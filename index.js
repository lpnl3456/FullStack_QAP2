const http = require('http');
const fs = require('fs');
const port = 3000;


global.DEBUG = true;

const server = http.createServer( async (request, response) => {
    // ignore the favicon.ico for some browsers
    if (request.url === '/favicon.ico') {
      // Ignore favicon.ico requests
      response.writeHead(204, {'Content-Type': 'image/x-icon'});
      response.end();
      return;
    }
    const fullUrl = `http://${request.headers.host}${request.url}`;
    switch(request.url) {
    case '/':
        if(DEBUG) console.log("Homepage");
        fs.readFile(__dirname + "/views/homepage.html", function (error, html) {
            if (error) {
              throw error;
            }

            else{
                if(DEBUG) console.log("Sucessfully loaded file")
            }

            response.end(html);
          });
        break;
    case '/contacts':
        if(DEBUG) console.log('contact');

        fs.readFile(__dirname + "/views/contacts.html", function (error, html) {
            if (error) {
              throw error;
            }
            else{
                if(DEBUG) console.log("Sucessfully loaded file")
            }
            response.end(html);
          });
        
        break;
    case '/prodcuts':
        if(DEBUG) console.log('products');
        break;
    case '/subscribe':
        if(DEBUG) console.log('subscribe');
        break;
    case '/about':
        if(DEBUG) console.log('about');
        fs.readFile(__dirname + "/views/about.html", function (error, html) {
            if (error) {
                throw error;
            }
            else{
                if(DEBUG) console.log("Sucessfully loaded file")
            }
            response.end(html);
            });
        break;
        
}
}
);

server.listen(port, () => {
    console.log(`Server running on port ${port}...`)
  });

