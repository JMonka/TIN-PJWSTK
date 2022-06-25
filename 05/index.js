function makeid(length) {
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
         charactersLength));
   }
   return result;
}

const http = require('http');
const server = http.createServer(function (request, response) {

   if (request.url === "/hello") {
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Wszyscy lubimy pomidory");
   } else
      if (request.url === "/") {
         response.writeHead(200, { "Content-Type": "text/plain" });
         response.end("Home ");
      } else
         if (request.url === "/random") {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end(makeid(5));
         } else {
            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end("Jestes tu: url=" + request.url);
         }

});

server.listen(8000, "127.0.0.1");
console.log("server up");