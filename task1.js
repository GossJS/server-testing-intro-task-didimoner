const http = require('http');
const url = require('url');
const moment = require('moment');

//create a server object:
const server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.writeHead(200, {"myname": "dmitry"});
    
    const urlData = url.parse(req.url, true);
    
    switch (urlData.pathname) {
        case '/time':
            res.write(moment().format('DD-MM-YY H:mm'));
            break;
            
        case '/author':
            res.write('Dmitry Ibragimov')
            break;
            
        case '/length':
            const queryLength = urlData.search.length && urlData.search.length - 1;
            
            res.write(String(queryLength));
            break;
            
        default: 
            res.write('Cannot handle this url. For now.')
    }

  res.end();
}).listen(8080); //the server object listens on port 8080

exports.closeServer = function(){
  server.close();
};