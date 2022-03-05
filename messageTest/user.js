var username;

function logIn() {
    var newName = document.getElementById("usernameInput").value;
    if (newName == "") {
        return;
    }
    username = newName;
    console.log("Connecting with username: " + username);
    document.getElementById("loginCover").style.display = "none";
    connectToServer(username);
}