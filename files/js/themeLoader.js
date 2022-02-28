var head = document.getElementsByTagName('HEAD')[0];

function LoadCss(cssPath) {
    var thisCss = document.createElement('link');
    thisCss.rel = 'stylesheet';
    thisCss.type = 'text/css';
    thisCss.href = cssPath; 

    head.appendChild(thisCss); 
}

LoadCss('/files/css/themes/common.css');

var mode;

if (getCookie("theme") == "") {
    mode = "dark";
} else {
    mode = getCookie("theme");
}

LoadCss('/files/css/themes/' + mode + '.css');

function OnClickTheme(newMode) {
    setCookie("theme",newMode,420);
    window.location.reload();
}