fs = require('fs');

var words = [];

fs.readFile('frequent_words.txt', 'utf-8', function(error, data) {
	data = data.toLowerCase();
	splitted = data.split('\n');
	global.words = splitted.slice(0, splitted.length - 1);
	// console.log(global.words);
});

exports.home = function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello world.');
	response.end();
}

exports.random = function(request, response) {
	var word = global.words[Math.floor(Math.random() * global.words.length)]
	response.json({ 'word': word })
}
