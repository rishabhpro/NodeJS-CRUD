const http = require('http');
const fs = require('fs')


const PORT = 3000;

const server = http.createServer((req ,res) => {

    if(req.url === '/'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("page/home.html" , "utf8" , (err , data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        }); 

    }else if(req.url === '/about'){

        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile("page/about.html" , "utf8" , (err , data) => {
            if(err) throw err;
            res.write(data);
            res.end();
        }); 

    }else{

        res.writeHead(404 , {'Content-Type': 'text/html'});
        res.write('<h1>404 Page not found</h1>')
        res.end()
    }


})

server.listen(PORT);

console.log(`Starting server at http://localhost:${PORT}`);
