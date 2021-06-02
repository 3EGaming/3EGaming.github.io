var head = document.getElementsByTagName('HEAD')[0];

function LoadCss(cssPath) {
    var thisCss = document.createElement('link');
    thisCss.rel = 'stylesheet';
    thisCss.type = 'text/css';
    thisCss.href = cssPath; 

    head.appendChild(thisCss); 
}

LoadCss('/files/css/themes/common.css');

if (getCookie("theme") == "") {
    var mode = "dark";
} else {
    var mode = getCookie("theme");
}

LoadCss('/files/css/themes/' + mode + '.css');

function OnClickThemeCommon() {
    setCookie("theme",mode,420);
    window.location.reload();
}

function OnClickDarkMode() {
    mode = "dark";
    OnClickThemeCommon();
}

function OnClickLightMode() {
    mode = "light";
    OnClickThemeCommon();
}