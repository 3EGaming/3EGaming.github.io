var tabs = 
[
    ["home", "Home", "/"],
    ["games", "Games", "/games/"],
    ["social", "Social", "/social/"]
]; 

function CheckActive(tabID) 
{
    var classData = "";
    if (typeof thisPage != "undefined") 
    {
        if (thisPage == tabID) 
        {
            classData = "class=\"active\"";
        }
    }
    return classData;
}

function LoadNavBar() 
{
    if (typeof urlVariables != "undefined") 
    {
        if (urlVariables["notopbar"] == "") 
        {
            return;
        }
    }
    var barContent = "<li><div class=\"navbarLogo\"></div></li>";
    tabs.forEach(function (tab) 
    {
        barContent += ("<li><a " + CheckActive(tab[0]) + " href=\"" + tab[2] + "\">" + tab[1] + "</a></li>");
    });
    //barContent += ("<li style=\"float: right;\" " + CheckActive("settings") + "><a href=\"/settings/\"><img src=\"/assets/images/UI/settingsButton.png\" height=\"23\" width=\"23\" style=\"display: block;\"></a></li>");
    document.getElementById("topbar").innerHTML = ("<ul>" + barContent + "</ul><br><br>");
}

LoadNavBar();
