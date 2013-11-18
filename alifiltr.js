function parseGetParams() { 
	var $_GET = {}; 
	var __GET = window.location.search.substring(1).split("&"); 
	for(var i=0; i<__GET.length; i++) { 
		var getVar = __GET[i].split("="); 
		$_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
	} 
	return $_GET; 
}
function setGetParams(params){
	a = parseGetParams();
	for(var key in params){
	    a[key] = params[key];
	}
	loc = window.location.href+'?';
    for(var key in a){
    	if(typeof(a[key]) != "undefined")
    		loc = loc + key + '=' + a[key] + '&';
    }
    window.location.href = loc;
}
params = {
	'shipCountry':'ru',
	'isFreeShip':'y',
	'isFavorite':'y',
	'isRtl':'yes',
}
setGetParams(params);