var express = require('express')
var app = express()
var ip = 'hello';

const port = process.env.PORT || 4000;

app.use(express.static('app'))
app.get('/', function(req,res) {
})
app.get('/whoami',function(req,res) {
	res.sendFile('index.html',{root: 'app'});
})
app.get('/test',function(req,res) {
	var software = req.header('user-agent')
	var lang = req.header('accept-language')
	var ip = req.header('x-forwarded-for')
	var obj = {
		'lang': lang,
		'ip': ip,
		'software': software
	}
	res.send(obj)
})

// app.get( '/', function( req, res ) {
//     res.sendFile('index.html',{root: 'app'});
//   });

app.listen(port); 