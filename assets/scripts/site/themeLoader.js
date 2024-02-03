var head = document.getElementsByTagName('HEAD')[0];

function LoadCss(cssPath) 
{
    var thisCss = document.createElement('link');
    thisCss.rel = 'stylesheet';
    thisCss.type = 'text/css';
    thisCss.href = cssPath; 

    head.appendChild(thisCss); 
}

LoadCss('/assets/styles/themes/common.css');

var mode = getCookie("theme");

if (mode == "") 
{
    mode = "dark";
}

LoadCss('/assets/styles/themes/' + mode + '.css');

function OnClickTheme(newMode) 
{
    setCookie("theme", newMode, 420);
    window.location.reload();
}
