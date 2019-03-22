let socket = io();

//ON CONNECTION FOR BOTH USERS
socket.on('connect', function() {
    console.log("sender connected!");
});

// EVENTS SENT FROM THE DESKTOP (A-FRAME) USER
if(userID == 'player1')
{
    function clickedButton(clickedObj)
    {
        socket.emit('buttonClicked', {clicked:clickedObj});
    }

    function sendPosition(player1_position)
    {
        socket.emit('playerPosition', {position:player1_position});
    }
}

// EVENTS SENT FROM THE MOBILE (WEBPAGE) USER
function svgElementClicked(id)
{
    socket.emit('svg_clicked', {clicked:id});

}








