
//default connect event
socket.on('connect', function() {
    console.log("receiver connected!");
});

socket.on('buttonClicked', function(clickedObj){
    clickedObj = clickedObj.clicked.clicked;

    if (userID == 'player1')
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
            door.object3D.position.set(door_position.x , 4 ,door_position.z);
        }
    }
});

socket.on('svgClicked', function(id) {
    id = id.clicked.clicked;

    if (id == 'area1_1')
    {
        //remove the door
        if(userID == 'player1')
        {
            door = document.querySelector('#area_1_left');
            door_position = JSON.parse(JSON.stringify((door.object3D.position)));
            door.object3D.position.set(door_position.x , 4 ,door_position.z);
        }
    
        if(userID == 'player2')
        {
            svgElement = document.querySelector('#' + id);
            svgElement.classList.add('fade');
        }
    }   
});