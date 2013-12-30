var express = require('express');
var fs = require('fs');
var htmlFile = "index.html";
var app = express();
app.use(express.logger());

var buffer = fs.readFileSync(htmlFile);

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
