exports.home = function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello world.')
	response.end();
}

exports.random = function(request, response) {
	response.write('buffalo');
	response.end();
}
