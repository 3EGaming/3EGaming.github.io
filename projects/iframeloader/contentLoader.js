var bannedURLs = ["", ".", "./", "index.html", "contentLoader.js", "./index.html", "/index.html", "./contentLoader.js", "/contentLoader.js"]

loadpage = function()
{
    if (!bannedURLs.includes(document.getElementById('URL').value))
    {
        document.getElementById("mainContent").innerHTML = '<iframe src="' + document.getElementById('URL').value + '" height="100%" width="100%" frameborder="0"></iframe>';
    } else {
        alert("That url is not allowed.");
    }
}

document.getElementById("mainContent").innerHTML = '<div id="topbarload"></div><script src="https://3egaming.github.io/files/js/topbar.js"></script><P></P><H2>iframe loader</H2><P></P><form><input type="text" name="" id="URL" placeholder="URL"></form><button onclick="loadpage()">Load</button>';
