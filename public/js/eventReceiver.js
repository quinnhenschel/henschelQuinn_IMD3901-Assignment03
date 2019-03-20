
//default connect event
socket.on('connect', function() {
    console.log("receiver connected!");
});

socket.on('move_maze', function(data) {
    if(senderID == 'player1')
    {
        console.log("moveMaze recieved");
    }

    //create rgb color string for css
    //let colorStr = 'rgb(' + data.r + ',' + data.g + ',' + data.b + ')';
    //set background color with received color
    //document.body.style.backgroundColor = colorStr;
});

socket.on('clicked_start', function(){
    console.log("start the game");

    if(senderID == 'player1')
    {
        //door1_1 = document.querySelector('#door1_1');
        //door1_1.object3D.position.set(0,5,0);
    }
});

socket.on('buttonClicked', function(clickedObj){
    clickedObj = clickedObj.clicked.clicked;

    if (senderID == 'player1')
    {
        if (clickedObj == 'startButton')
        {
            door = document.querySelector('#door1_1');
            door_position = JSON.parse(JSON.stringify((door.object3D.position)));
            door.object3D.position.set(door_position.x ,4 ,door_position.z);
        }
        
        if (clickedObj == 'area1StartButton')
        {
            door = document.querySelector('#door2_start');
            door_position = JSON.parse(JSON.stringify((door.object3D.position)));
            door.object3D.position.set(door_position.x ,4 ,door_position.z);
        }
    }
})