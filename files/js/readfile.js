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

function readFileNew(filename) {
  fetch(filename)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.text().then(function(data) {
        console.log("Read from file: ".concat(data));
        return data;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
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