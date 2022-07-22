var downloadsArea = document.getElementById("downloadsArea");

var sortedVersions = versions.sort((a, b) => b-a);

var isFirst = true;
versions.forEach(version => {
    downloadsArea.innerHTML += `<H${isFirst?1:2}>V${version} - <a href="./files/GettingOverItMultiplayer_V${version}.zip">Download</a></HH${isFirst?1:2}>`;
    isFirst = false;
});