var content = document.getElementById("c");

for(var key in versions) {
    content.innerHTML += `<H2 id="V${key}">V${key}</H2><H3 class="info">${versions[key]}</H3><br>`;
}