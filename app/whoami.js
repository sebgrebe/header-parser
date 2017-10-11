$(document).ready(function() {
	var div = document.getElementById('output');
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
	$.ajax({
		url: '/test',
		type: 'GET',
		error: (xhr,errorType) => {
				alert(errorType)
			},
		success: (data) => {
			data = {"lang":"de-DE,de;q=0.8,en-US;q=0.6,en;q=0.4","ip":"109.147.71.88","software":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"}
			var lang_prop = data['lang']
			var lang = lang_prop.substr(0,lang_prop.indexOf(','))
			var software = collectSoftware(String(data['software']))
			console.log(software)
			var ip = data['ip']
			var obj = {
				'ipaddress': ip,
				'language': lang,
				'software': software,
			}
			div.innerHTML = JSON.stringify(obj)
		}
	
	})
})