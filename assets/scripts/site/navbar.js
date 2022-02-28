var tabs = [
    ["home", "Home", "/"],
    ["games", "Games", "/games/"],
    ["social", "Social", "/social/"]
];
function CheckActive(tabID) {
    var classData = "";
    if (typeof thisPage != "undefined") {
        if (thisPage == tabID) {
            classData = "class=\"active\"";
        }
    }
    return classData;
}
function LoadNavBar() {
    if (typeof urlVariables != "undefined") {
        if (urlVariables["notopbar"] == "") {
            return;
        }
    }
    var barContent = "<li><img src=\"/assets/images/branding/LOGO3E.png\" height=\"51\" width=\"170\" style=\"display: block;margin-right: 0.3px;\" alt=\"3EGaming\"></li>";
    tabs.forEach(function (tab) {
        barContent += ("<li><a " + CheckActive(tab[0]) + " href=\"" + tab[2] + "\">" + tab[1] + "</a></li>");
    });
    barContent += ("<li style=\"float: right;\" " + CheckActive("settings") + "><a href=\"/settings/\"><img src=\"/assets/images/UI/settingsButton.png\" height=\"24.5\" width=\"24.5\" style=\"display: block;\"></a></li>");
    document.getElementById("topbar").innerHTML = ("<ul>" + barContent + "</ul><br><br>");
}
LoadNavBar();
