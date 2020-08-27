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

function getFileAsList(filename) {
  var result_ns = getFileAsString(filename);
  return result_ns.split("\n");
}

function displayPreviews(folderlist) {
  var result = "";
  for(var i in folderlist) {
    result.concat('<A href="', i, '"><iframe src="', i, '/preview/" height="90" width="50%" scrolling="no"></iframe></A><P></P>')
  }
  return result;
}