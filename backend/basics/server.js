// core library http
const http = require('http');
const fs = require('fs')

// using http method createServer to deal with Http request/response
let server = http.createServer((req,res)=>{
    console.log(req.url)
    fs.readFile('files/' + req.url, (err, data)=>{
        if(err) throw err;
        console.log('' + data)
        res.setHeader('content-type', 'text/html')
        res.write('' + data);
        res.end();
    })
    // res.write('Hello from NodeJS');
    // res.end();
})



// listen to port 3000
server.listen(3000, ()=>console.log('running on port 3000'));

