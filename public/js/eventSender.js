let socket = io();

//default connect event
socket.on('connect', function() {
    console.log("sender connected!");
    console.log(senderID);
});

// EVENTS SENT FROM THE MOBILE (WEBPAGE) USER
if(senderID == 'player1')
{

}

//EVENTS SENT FROM THE DESKTOP (A-FRAME) USER
if(senderID == 'player2')
{
    document.querySelector('#moveMaze').addEventListener('click', function() {
        socket.emit('clickedStart');
        console.log("moveMaze sent");
    });
}

//player1
function clickedButton(clickedObj)
{
    socket.emit('buttonClicked', {clicked:clickedObj});
}





