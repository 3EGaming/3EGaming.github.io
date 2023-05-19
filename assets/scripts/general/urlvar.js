//script to get variables from url (https://3EGaming.github.io?variable=foo&anothervariable=bar). use: urlVariables["variablefromurl"]
var urlVariables = (function() {
    var pairs = window.location.search.substr(1).split('&');
    var result = {};
	pairs.forEach(function(pair) {
		var splitPair = pair.split("=", 2);
		if (splitPair.length < 2)
			return;
		result[splitPair[0]] = decodeURIComponent(splitPair[1].replace(/\+/g, " "));
	});
    return result;
})();
