var express = require('./node_modules/express');
var handlers = require('./handlers')

var app = express();

app.get('/', handlers.home);

app.get('/random', handlers.random)

app.listen(8888);
console.log('Express started on port 8888');
