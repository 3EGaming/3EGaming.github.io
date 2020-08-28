function getFileAsPromise(filename) {
  return fetch(filename)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        
        // Examine the text in the response
        return response.text().then(function(data) {
          console.log("Read from file: ".concat(data));
          return data;
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function getFileAsString(filename) {
  getFileAsPromise(filename).then(function(val) { window.resultx = val; });
  return window.resultx;
}

function displayPreviews(folderlist) {
  var resulte = "";
  for(i in folderlist) {
    console.log("Adding item: ".concat(folderlist[i]))
    resulte.concat('<A href="', folderlist[i], '"><iframe src="', folderlist[i], '/preview/" height="90" width="50%" scrolling="no"></iframe></A><P></P>')
    window.resulte = resulte;
  }
  return window.resulte;
}