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
		dataType: 'json',
		error: (xhr,errorType) => {
				alert(errorType)
			},
		success: (data) => {
// 			var data = {
//     "ip": "109.147.71.88",
//     "lang": "de-DE",
//     "software": "Macintosh; Intel Mac OS X 10_11_5(sdasd)"
// }
// 			var lang_prop = data['lang']
// 			var lang = lang_prop.substr(0,lang_prop.indexOf(','))
// 			var software = collectSoftware(data['software'])
// 			var ip = data['ip']
// 			var obj = {
// 				ipaddress: ip,
// 				language: lang,
// 				software: software,
// 			}

// 			div.innerHTML = JSON.stringify(obj,null,4)
		}
	
	})
})