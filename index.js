const http = require('http');
const fs = require('fs');
const port = 3000;

const myEventEmitter = require('./logEvents');
const { format, getYear } = require('date-fns');
const { v4: uuid } = require('uuid'); //guid



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
        try{
            fs.readFile(__dirname + "/views/homepage.html", function (error, html) {
            try{
 
            response.writeHead(200, { 'Content-Type': 'text/html' });
            if(DEBUG) console.log("Sucessfully loaded file")
            response.write(html);
            
            response.end();
            
            myEventEmitter.emit('event', fullUrl, 'INFO', 'Worte the homepage');
            if(DEBUG) console.log("Sucessfully loaded file")
        }
        catch{
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' }));
        response.end();

        }
          })
        }
        
        
        catch (error){
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' }));
        response.end();
        
        }
        break;
    case '/contacts':
        if(DEBUG) console.log('contact');

        try{
            fs.readFile(__dirname + "/views/contacts.html", function (error, html) {
            try{
 
            if(DEBUG) console.log("Sucessfully loaded file")
            
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
            
            myEventEmitter.emit('event', fullUrl, 'INFO', 'Worte the contact page');
        }
        catch{
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' }));
        response.end();

        }
          })
        }
        
        
        catch (error){
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({ error: 'An error occurred while loading the contact page' }));
        response.end();
        
        }
        
        break;

    case '/products':
        if(DEBUG) console.log('products');
        try{
            fs.readFile(__dirname + "/views/products.html", function (error, html) {
            try{
 
            if(DEBUG) console.log("Sucessfully loaded file")
            
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
            
            myEventEmitter.emit('event', fullUrl, 'INFO', 'Wrote the product page');
        }
        catch{
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);
        response.write(JSON.stringify({ error: 'An error occurred while loading the product page' }));
        response.end();

        }
          })
        }
        
        
        catch (error){
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' }));
        response.end();
        
        }

        break;

    case '/subscribe':
        if(DEBUG) console.log('subscribe');
        try{
            fs.readFile(__dirname + "/views/subscribe.html", function (error, html) {
            try{
 
            if(DEBUG) console.log("Sucessfully loaded file")
            
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
            
            myEventEmitter.emit('event', fullUrl, 'INFO', 'Wrote the subscribe page');
        }
        catch{
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);
        response.write(JSON.stringify({ error: 'An error occurred while loading the subscribe page' }));
        response.end();

        }
          })
        }
        
        
        catch (error){
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' }));
        response.end();
        
        }
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

