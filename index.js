const http = require('http');
const fs = require('fs');
const port = 3000;

const myEventEmitter = require('./logEvents');
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
    //Enter if the url is for the hompage
    case '/':
        
        if(DEBUG) console.log("Homepage");
        try{
            //Display the homepage html file
            fs.readFile(__dirname + "/views/homepage.html", function (error, html) {
            try{
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            if(DEBUG) console.log("Sucessfully loaded file")
            response.end();
            myEventEmitter.emit('event', fullUrl, 'INFO', 'Wrote the homepage');//Use the MyEventEmitter to write the info in a log file
        }

        catch{
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);//Use the MyEventEmitter to write the error in a log file
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' })); //Show that an error occurred on the webpage
        response.end();

        }
          })
        }
        
        
        catch (error){
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);//Use the MyEventEmitter to write the error in a log file
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' }));//Show that an error occurred on the webpage
        response.end();
        
        }
        break;
        //Enter if the url is for the contacts page
    case '/contacts':
        if(DEBUG) console.log('contact');

        try{
            fs.readFile(__dirname + "/views/contacts.html", function (error, html) {
            try{
 
            
            //Write the contacts html file to the webpage
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
            if(DEBUG) console.log("Sucessfully loaded file");
            myEventEmitter.emit('event', fullUrl, 'INFO', 'Wrote the contact page');//Use the MyEventEmitter to write the info in a log file
        }
        catch{
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message); //Use the MyEventEmitter to write the error in a log file
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' }));//Show that an error occurred on the webpage
        response.end();

        }
          })
        }
        
        
        catch (error){
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);//Use the MyEventEmitter to write the error in a log file
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({ error: 'An error occurred while loading the contact page' }));//Show that an error occurred on the webpage
        response.end();
        
        }
        
        break;
    //Enter if the url is for the products page
    case '/products':
        if(DEBUG) console.log('products');
        try{

            fs.readFile(__dirname + "/views/products.html", function (error, html) {
            try{
            //Write the products html file to the webpage
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
            if(DEBUG) console.log("Sucessfully loaded file");
            myEventEmitter.emit('event', fullUrl, 'INFO', 'Wrote the product page'); //Use the MyEventEmitter to write the info in a log file
        }
        catch{
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);//Use the MyEventEmitter to write the error in a log file
        response.write(JSON.stringify({ error: 'An error occurred while loading the product page' })); //Show that an error occurred on the webpage
        response.end();

        }
          })
        }
        
        
        catch (error){
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message); //Use the MyEventEmitter to write the error in a log file
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' }));//Show that an error occurred on the webpage
        response.end();
        
        }

        break;

    //Enter if the url is for the subscribe page
    case '/subscribe':
        if(DEBUG) console.log('subscribe');
        try{
            
            fs.readFile(__dirname + "/views/subscribe.html", function (error, html) {
            try{
 
            
            //Write the subscribe html file to the webpage
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
            if(DEBUG) console.log("Sucessfully loaded file");
            myEventEmitter.emit('event', fullUrl, 'INFO', 'Wrote the subscribe page');//Use the MyEventEmitter to write the info in a log file
        }
        catch{
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);//Use the MyEventEmitter to write the error in a log file
        response.write(JSON.stringify({ error: 'An error occurred while loading the subscribe page' }));//Show that an error occurred on the webpage
        response.end();

        }
          })
        }
        
        
        catch (error){
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);//Use the MyEventEmitter to write the error in a log file
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({ error: 'An error occurred while loading the homepage' }));//Show that an error occurred on the webpage
        response.end();
        
        }
        break;
    
    //Enter if the url is for the about page
    case '/about':
        if(DEBUG) console.log('about');
        try{
            fs.readFile(__dirname + "/views/about.html", function (error, html) {
            try{
 
            
            //Write the about html file to the webpage
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
            if(DEBUG) console.log("Sucessfully loaded file");
            myEventEmitter.emit('event', fullUrl, 'INFO', 'Wrote the about page');//Use the MyEventEmitter to write the info in a log file
        }
        catch{
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);//Use the MyEventEmitter to write the error in a log file
        response.write(JSON.stringify({ error: 'An error occurred while loading the about page' }));//Show that an error occurred on the webpage
        response.end();

        }
          })
        }
        
        
        catch (error){
            console.error(error);
            let message = `500 - server error with internal error code of ${error.code}.`
            myEventEmitter.emit('event', fullUrl, 'ERROR', message);//Use the MyEventEmitter to write the error in a log file
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.write(JSON.stringify({ error: 'An error occurred while loading the about' }));//Show that an error occurred on the webpage
        response.end();
        
        }
        break;
}

//Enter to read and display the CSS files for the html files
if (request.url.match(".css$")) {
    const cssPath = (__dirname + "/views/Style/styles.css");
    const fileStream = fs.createReadStream(cssPath, "UTF-8");
    response.writeHead(200, { "Content-Type": "text/css" });
    fileStream.pipe(response);
  }

}


);

server.listen(port, () => {
    console.log(`Server running on port ${port}...`)
  });

