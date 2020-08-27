function readFile(filename) {
  async: true
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filename, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function makeStringIntoList(instring) {
  return (instring.split("\n"));
}

function displayPreviews(folderlist) {
  var result = "";
  for(var i in folderlist) {
    result.concat('<A href="', i, '"><iframe src="', i, '/preview/" height="90" width="50%" scrolling="no"></iframe></A><P></P>')
  }
  return result;
}