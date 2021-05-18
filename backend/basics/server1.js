// core library http
const http = require('http');
const fs = require('fs')

// fs for synchronous
let configFile = fs.readFileSync('config.json')
let config = JSON.parse(configFile);
console.log(config)


// using http method createServer to deal with Http request/response
let server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == '/courses'){
        res.setHeader('content-type', 'application/json');
        res.write("{success:true}");
        res.end();
    }
    else{
       
        fs.readFile('files/' + req.url, (err, data)=>{
            if(err) throw err;
            console.log('' + data)
            res.setHeader('content-type', 'text/html')
            res.write('' + data);
            res.end();
        })
    }

    
    // res.write('Hello from NodeJS');
    // res.end();
})



// listen to port 3000
server.listen(config.port, ()=>console.log(`running on port ${config.port}`));

