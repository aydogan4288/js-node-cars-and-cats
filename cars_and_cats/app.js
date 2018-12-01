// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/images/cat1.jpg") {
         fs.readFile('images/cat1.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/cat2.jpeg") {
         fs.readFile('images/cat2.jpeg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpeg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/pagani.jpg") {
         fs.readFile('images/pagani.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/pagani.jpg") {
         fs.readFile('images/pagani.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }


    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7070);
// print to terminal window
console.log("Running in localhost at port 7070");
