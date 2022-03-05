function appendToElement(eid, content) {
    document.getElementById(eid).innerHTML += content;
}

function newMessage(sender, content) {
    appendToElement("chatContent", `<div class=\"chatMessage\">${sender}: ${content}</div>`);
}

function newUser(name, id) {
    appendToElement("sideBar", `<div class=\"userCard\" id=\"${id}\">${name}</div>`);
}

function removeUser(id) {
    var thisUserCard = document.getElementById(id);
    if (thisUserCard == null) {
        return;
    }
    thisUserCard.remove();
}

function sendMessage() {
    var inputBox = document.getElementById("sendBox");
    toSend.push(`MSG,${prvID},${pubID},${inputBox.value}`);
    inputBox.value = "";
}