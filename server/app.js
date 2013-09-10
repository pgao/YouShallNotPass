var express = require('express');
var handlers = require('./handlers');

var app = express();

app.use(express.static('./static'));
app.get('/random', handlers.random);

var port = process.env.PORT || 8888;
app.listen(port);
console.log('Express started on port ' + port);
