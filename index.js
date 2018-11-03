var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200);
	if(req.url === '/test') {
		res.end('test');
	} else {
		res.end('Hi everybody!');
	}
});
server.listen(process.env.PORT || 8080);