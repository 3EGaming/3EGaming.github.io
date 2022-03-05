var pubID;
var prvID;

var socket;

var heartBeatInterval;

var toSend = [];

const webSocketLocation = 'wss://simple-message-app-test.herokuapp.com:42069';

function onMessage(event) {
    var splitData = event.data.split(",", 3);
    if (splitData[0] == "MSG") {
        newMessage(splitData[1], splitData[2]);
    } else if (splitData[0] == "USR") {
        newUser(splitData[1], splitData[2]);
    } else if (splitData[0] == "NEW") {
        pubID = splitData[1];
        prvID = splitData[2];
    } else if (splitData[0] == "DEL") {
        removeUser(splitData[1]);
    }
}

function connectToServer(newUsername) {
    socket = new WebSocket(webSocketLocation);
    socket.onopen = function(e) {
        socket.send(`NEW,${newUsername}`);
        heartBeatInterval = setInterval(queryNewMessages, 750);
    };
      
    socket.onmessage = onMessage;
      
    socket.onclose = function(event) {
        console.log(`connection closed\ncode=${event.code} reason=${event.reason} \n clean?: ${event.wasClean}`);
    };
}

function queryNewMessages() {
    socket = new WebSocket(webSocketLocation);
    socket.onopen = function(e) {
        for (let i = 0; i < toSend.length; i++) {
            socket.send(toSend[i]);
        }
        toSend = [];
        socket.send(`HRT,${prvID}`);
    };
      
    socket.onmessage = onMessage;
      
    socket.onclose = function(event) {
        if (!event.wasClean) {
            clearInterval(heartBeatInterval);
            alert(`Error: The connection closed.\ncode: ${event.code}`);
            window.location.reload();
        }
    };
}