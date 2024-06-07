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
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html)
            response.end();
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
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html)
            response.end();
          });
        
        break;

    case '/products':
        if(DEBUG) console.log('products');
        fs.readFile(__dirname + "/views/products.html", function (error, html) {
            if (error) {
                throw error;
            }
            else{
                if(DEBUG) console.log("Sucessfully loaded file")
            }
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html)
            response.end();
            });
        break;
    case '/subscribe':
        if(DEBUG) console.log('subscribe');
        fs.readFile(__dirname + "/views/subscribe.html", function (error, html) {
            if (error) {
                throw error;
            }
            else{
                if(DEBUG) console.log("Sucessfully loaded file")
            }
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html)
            response.end();
            });
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
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html)
            response.end();
            });
        break;
   default:
    console.log("could not find page")

    fs.readFile(__dirname + "/views/invalidPage.html", function (error, html) {
        if (error) {
            throw error;
        }
        else{
            if(DEBUG) console.log("Sucessfully loaded file")
        }
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(html)
        response.end();
        });
        
}
}
);

server.listen(port, () => {
    console.log(`Server running on port ${port}...`)
  });

