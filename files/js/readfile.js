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
  window.resulte = "";
  for(i in folderlist) {
    console.log("Adding item: ".concat(folderlist[i]))
    window.resulte = window.resulte.concat('<div style="position:relative;"><iframe src="', folderlist[i], '/preview/" height="105" width="40%" scrolling="no"></iframe><A href="', folderlist[i], '" style="position:absolute; top:0; left:0; display:inline-block; width:50%; height:105px; z-index:5;"></A></div><P></P>')
  }
  return window.resulte;
}