var express = require('express')
var app = express()
function collectSoftware(str) {
		var collect = false
		var not_collected = true
		var i = 0
		var software = ''
		while (not_collected) {
			if (str[i-1] === '(' && i>0) {
				collect = true
			}
			else if (str[i+1] === ')') {
				not_collected = false
			}
			if (collect) {software += str[i]}
			i++
		}
		return software
	}

const port = process.env.PORT || 4000;

console.log('App running on Port 4000')

app.use(express.static('app'))
app.get('/', function(req,res) {
	res.sendFile('index.html',{root: 'app'});
})
app.get('/whoami',function(req,res) {
	var software = collectSoftware(req.header('user-agent'))
	var lang = req.header('accept-language')
	lang = lang.substr(0,lang.indexOf(','))
	var ip = req.header('x-forwarded-for')
	var obj = {
		'lang': lang,
		'ip': ip,
		'software': software
		}
	res.send(obj)
})

app.listen(port); 