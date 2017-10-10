var express = require('express')
var app = express()
var ip = 'hello';

const port = process.env.PORT || 4000;

app.use(express.static('app'))
app.get('/', function(req,res) {
	var software = req.header('user-agent')
	var lang = req.header('accept-language')

})
app.get('/whoami',function(req,res) {
	console.log('whoami')
	res.sendFile('index.html',{root: 'app'});
})
app.get('/test',function(req,res) {
	console.log('ajax call')
	var ip = req.header('x-forwarded-for')
	res.send(ip)
})

// app.get( '/', function( req, res ) {
//     res.sendFile('index.html',{root: 'app'});
//   });

app.listen(port); 