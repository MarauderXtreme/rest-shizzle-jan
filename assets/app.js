function rest_in_peace(color, coffee, method, action) {
	
	var rest = JSON.stringify({Color:color, Coffee:coffee});
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.open(method, action);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(rest);
}

window.onload = function() {
	
	var submit_element = document.getElementById('rest-submit');
	
	submit_element.onclick = function() {
		var color		= document.getElementById('color').value;
		var coffee	= document.getElementById('coffee').value;
		var method	= document.getElementById('rest-form').getAttribute('method');
		var action	= document.getElementById('rest-form').getAttribute('action');
		rest_in_peace(color, coffee, method, action);
		return false;
	}

}
