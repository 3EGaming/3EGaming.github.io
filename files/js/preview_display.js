function displayPreviews(folderlist) {
  window.resulte = "";
  for(i in folderlist) {
    console.log("Adding item: ".concat(folderlist[i]))
    window.resulte = window.resulte.concat('<div style="position:relative;"><iframe src="', folderlist[i], '/preview/" height="105" width="40%" scrolling="no"></iframe><A href="', folderlist[i], '" style="position:absolute; top:0; left:0; display:inline-block; width:50%; height:105px; z-index:5;"></A></div><P></P>')
  }
  return window.resulte;
}