$(document).ready(function() {
	var div = document.getElementById('output');
	$.ajax({
		url: '/test',
		type: 'GET',
		error: (xhr,errorType) => {
				alert(errorType)
			},
		success: (data) => {
			var obj = data;
		}
	div.innerHTML = obj
	})
})