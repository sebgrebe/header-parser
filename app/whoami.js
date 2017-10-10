$(document).ready(function() {
	var div = document.getElementById('output');
	$.ajax({
		url: '/test',
		type: 'GET',
		error: (xhr,errorType) => {
				alert(errorType)
			},
		success: (data) => {
			console.log("ip: "+data)
		}
	
	})
})