var head = document.getElementsByTagName('HEAD')[0];

function LoadCss(cssPath) {
    var thisCss = document.createElement('link');
    thisCss.rel = 'stylesheet';
    thisCss.type = 'text/css';
    thisCss.href = cssPath; 

    head.appendChild(thisCss); 
}

LoadCss('./files/css/themes/common.css');

if (GetCookie("theme") == "") {
    var mode = "dark";
} else {
    var mode = GetCookie("theme");
}

LoadCss('./files/css/themes/' + mode + '.css');

function OnClickDarkMode() {
    //
}