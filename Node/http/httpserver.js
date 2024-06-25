
const { Console } = require('console');

const http = require('http');

const port = process.env.PORT || 8085;

const server  = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200;                       //To learn more about the HTTP Status codes -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Welcome to my Website </h1> <p> Hello World!</p>');
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});