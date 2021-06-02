var topbarcontent = '<ul><li><img src="/files/image/Branding/LOGO3E.png" height="51" width="170" style="display: block;margin-right: 0.3px;"></li>';

if (typeof thisPage == 'undefined') {
    var thisPage = "";
}

topbarcontent += '<li><a';
if (thisPage == "home") {
    topbarcontent += ' class="active"';
}
topbarcontent += ' href="/">Home</a></li><li><a'
if (thisPage == "games") {
    topbarcontent += ' class="active"';
}
topbarcontent += ' href="/games/">Games</a></li><li><a';
if (thisPage == "social") {
    topbarcontent += ' class="active"';
}
topbarcontent += ' href="/social/">Social</a></li><li style="float: right;"><a href="/settings/"><img src="/files/image/UI/settingsButton.png" height="25" width="25" style="display: block;"></a></li></ul>';

document.getElementById("topbar").innerHTML = topbarcontent;