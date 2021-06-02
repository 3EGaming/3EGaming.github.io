//script to get variables from url (https://3EGaming.github.io?variable=foo&anothervariable=bar). use: urlVariables["variablefromurl"]
var urlVariables = (function(var_a) {
    if (var_a == "") return {};
    var var_b = {};
    for (var i = 0; i < var_a.length; ++i)
    {
        var var_p=var_a[i].split('=', 2);
        if (var_p.length == 1)
            var_b[var_p[0]] = "";
        else
            var_b[var_p[0]] = decodeURIComponent(var_p[1].replace(/\+/g, " "));
    }
    return var_b;
})(window.location.search.substr(1).split('&'));