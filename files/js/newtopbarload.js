var loadTopbar;

if (urlVariables == undefined) {
    loadTopbar = true;
} else {
    if (urlVariables["notopbar"] == "") {
        loadTopbar = false;
    } else {
        loadTopbar = true;
    }
}
if (loadTopbar) {
    if (typeof thisPage == 'undefined') {
        var thisPage = "";
    }

    function CheckPage(pageName) {
        if (thisPage == pageName) {
            return ' class="active"';
        } else {
            return '';
        }
    }

    document.getElementById("topbar").innerHTML = '<ul><li><img src="/files/image/Branding/LOGO3E.png" height="51" width="170" style="display: block;margin-right: 0.3px;"></li><li><a' + 
            CheckPage("home") + ' href="/">Home</a></li><li><a' + 
            CheckPage("games") + ' href="/games/">Games</a></li><li><a' + 
            CheckPage("social") + ' href="/social/">Social</a></li><li style="float: right;"' + 
            CheckPage("settings") + '><a href="/settings/"><img src="/files/image/UI/settingsButton.png" height="24.5" width="24.5" style="display: block;"></a></li></ul><br><br>';
}
