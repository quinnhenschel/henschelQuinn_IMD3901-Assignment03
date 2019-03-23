
//default connect event
socket.on('connect', function() {
    console.log("receiver connected!");
    area1_available = false;
    area2_available = false;
    area3_available = false;
    aframe_player_positionX = 0;
    aframe_player_positionZ = 0;
    mode = 1;
    textVisible = false
    console.log(mode);
});

socket.on('timerDone', function(){
    console.log("timer done");
    resetTimer();

    if (userID == 'player2')
    {
        svgElement = document.querySelector('#endDoor');
        svgElement.classList.remove('regular');
        svgElement.classList.add('clickable');
    }

});

socket.on('playerPosition', function(player1_position){
    player1_position = player1_position.position.position;  
    aframe_player_positionX = player1_position.x;
    aframe_player_positionZ = player1_position.z;
    
    if(userID == 'player2'){
        player = document.querySelector('#Player1');
        player.setAttribute('x', (aframe_player_positionX * 4.7) + 88);
        player.setAttribute('y', (aframe_player_positionZ * 4.7) + 295);
    }
});


socket.on('buttonClicked', function(clickedObj){
    clickedObj = clickedObj.clicked.clicked;
    

    if (clickedObj == 'startTimerButton' && textVisible == false)
    {

        textVisible = true;
        resetTimer();
        text = document.querySelector('#timerText');
        text.classList.add('visible');
        text = document.querySelector('#timerText2');
        text.classList.remove('visible');
    }
    
    if (clickedObj == 'resetTimerButton' && textVisible == true)
    {
        if(userID == 'player1')
        {
            anim = document.querySelector('#endDoor_openAnimation');
            anim.emit('endDoor_animation_start');
            bgSound = document.querySelector('#doorSound');
            bgSound.components['sound'].stopSound();
            bgSound.components['sound'].playSound();


    
        }
        if(userID == 'player2')
        {
            svgElement = document.querySelector('#endDoor');
            svgElement.classList.remove('clickable');
            svgElement.classList.add('regular');
        }

        textVisible = false;
        text = document.querySelector('#timerText');
        text.classList.remove('visible');
        countdown = document.querySelector('#timerText2');
        countdown.classList.add('visible');
        resetTimer();
    }
    
    if (clickedObj == 'startButton'){
        if (userID == 'player1'){
            bgSound = document.querySelector('#ambience');
            bgSound.components['sound'].playSound();
            
            console.log("start");
            button = document.querySelector('#startButton');
            button.setAttribute('material', {color: '#ff6464'});
            button.setAttribute('material', {emissive: '#ff6464'});
            button.setAttribute('material', {emissiveIntensity: 0.4});
        }
        if (userID == 'player2'){
            svgElement = document.querySelector('#areaStart');
            svgElement.classList.remove('regular');
            svgElement.classList.add('clickable');
            mode = 2;
            resetTimer()
            console.log(mode);
        }
    }
    
    if (clickedObj == 'area1StartButton'){
        if (area1_available == false){
            area1_available = true;
            if (userID == 'player1'){
                button = document.querySelector('#area1StartButton');
                button.setAttribute('material', {color: '#ff6464'});
                button.setAttribute('material', {emissive: '#ff6464'});
                button.setAttribute('material', {emissiveIntensity: 0.4});
            }
            if (userID == 'player2'){
                svgElement = document.querySelector('#area1_1');
                svgElement.classList.remove('regular');
                svgElement.classList.add('clickable');
    
                svgElement = document.querySelector('#area1_2');
                svgElement.classList.remove('regular');
                svgElement.classList.add('clickable');
            }
        }
        else{
            console.log("its locked rn");
        }
    }
    
    if (clickedObj == 'area2StartButton'){
        if (area2_available == false){
            area2_available = true;
            if (userID == 'player1'){
                button = document.querySelector('#area2StartButton');
                button.setAttribute('material', {color: '#ff6464'});
                button.setAttribute('material', {emissive: '#ff6464'});
                button.setAttribute('material', {emissiveIntensity: 0.4});
            }
            if (userID == 'player2'){
                svgElement = document.querySelector('#area2_1');
                svgElement.classList.remove('regular');
                svgElement.classList.add('clickable');
    
                svgElement = document.querySelector('#area2_2');
                svgElement.classList.remove('regular');
                svgElement.classList.add('clickable');
            }
        }
        else{
            console.log("its locked rn");
        }
    }

    if (clickedObj == 'area3StartButton'){
        if (area3_available == false){
            area3_available = true;
            if (userID == 'player1'){
                button = document.querySelector('#area3StartButton');
                button.setAttribute('material', {color: '#ff6464'});
                button.setAttribute('material', {emissive: '#ff6464'});
                button.setAttribute('material', {emissiveIntensity: 0.4});
            }
            if (userID == 'player2'){
                svgElement = document.querySelector('#area3_1');
                svgElement.classList.remove('regular');
                svgElement.classList.add('clickable');
    
                svgElement = document.querySelector('#area3_2');
                svgElement.classList.remove('regular');
                svgElement.classList.add('clickable');
            }
        }
        else{
            console.log("its locked rn");
        }
    }
});

socket.on('svgClicked', function(id){
    id = id.clicked.clicked;
    if (id == 'areaStart'){
        if(userID == 'player1'){
            anim = document.querySelector('#door1_openAnimation');
            anim.emit('door1_animation_start');
            bgSound = document.querySelector('#doorSound');
            bgSound.components['sound'].stopSound();
            bgSound.components['sound'].playSound();
        }
        if(userID == 'player2'){
            svgElement = document.querySelector('#' + id);
            svgElement.classList.remove('clickable');
            svgElement.classList.add('fade');
        }
    }
    
    if (area1_available == true){
        if (id == 'area1_1'){
            area1_available = false;
            if(userID == 'player1'){
                anim = document.querySelector('#area1_door1_openAnimation');
                anim.emit('area1_door1_animation_start');
                bgSound = document.querySelector('#doorSound');
                bgSound.components['sound'].stopSound();
                bgSound.components['sound'].playSound();

                button = document.querySelector('#area1StartButton');
                button.setAttribute('material', {color: '#52C252'});
                button.setAttribute('material', {emissive: '#52C252'});
                button.setAttribute('material', {emissiveIntensity: 0.4});
            }
        
            if(userID == 'player2'){
                svgElement = document.querySelector('#' + id);
                svgElement.classList.remove('clickable');
                svgElement.classList.add('fade');

                svgElement = document.querySelector('#area1_2');
                svgElement.classList.remove('clickable');
                svgElement.classList.add('regular');
            }
        }
    

        if (id == 'area1_2'){
            area1_available = false;
            if(userID == 'player1'){
                anim = document.querySelector('#area1_door2_openAnimation');
                anim.emit('area1_door2_animation_start');
                bgSound = document.querySelector('#doorSound');
                bgSound.components['sound'].stopSound();
                bgSound.components['sound'].playSound();

                button = document.querySelector('#area1StartButton');
                button.setAttribute('material', {color: '#52C252'});
                button.setAttribute('material', {emissive: '#52C252'});
                button.setAttribute('material', {emissiveIntensity: 0.4});
            }
        
            if(userID == 'player2'){
                svgElement = document.querySelector('#' + id);
                svgElement.classList.remove('clickable');
                svgElement.classList.add('fade');

                svgElement = document.querySelector('#area1_1');
                svgElement.classList.remove('clickable');
                svgElement.classList.add('regular');
            }
        }
    }

    /////////////////////////////////////////////

    if(area2_available == true){
        if (id == 'area2_1'){
            area2_available = false;
            if(userID == 'player1'){
                anim = document.querySelector('#area2_door1_openAnimation');
                anim.emit('area2_door1_animation_start');
                bgSound = document.querySelector('#doorSound');
                bgSound.components['sound'].stopSound();
                bgSound.components['sound'].playSound();

                button = document.querySelector('#area2StartButton');
                button.setAttribute('material', {color: '#52C252'});
                button.setAttribute('material', {emissive: '#52C252'});
                button.setAttribute('material', {emissiveIntensity: 0.4});
            }
        
            if(userID == 'player2'){
                svgElement = document.querySelector('#' + id);
                svgElement.classList.remove('clickable');
                svgElement.classList.add('fade');

                svgElement = document.querySelector('#area2_2');
                svgElement.classList.remove('clickable');
                svgElement.classList.add('regular');
            }
        }
    
        if (id == 'area2_2'){
            area2_available = false;
            if(userID == 'player1'){
                anim = document.querySelector('#area2_door2_openAnimation');
                anim.emit('area2_door2_animation_start');
                bgSound = document.querySelector('#doorSound');
                bgSound.components['sound'].stopSound();
                bgSound.components['sound'].playSound();

                button = document.querySelector('#area2StartButton');
                button.setAttribute('material', {color: '#52C252'});
                button.setAttribute('material', {emissive: '#52C252'});
                button.setAttribute('material', {emissiveIntensity: 0.4});
            }
        
            if(userID == 'player2'){
                svgElement = document.querySelector('#' + id);
                svgElement.classList.remove('clickable');
                svgElement.classList.add('fade');

                svgElement = document.querySelector('#area2_1');
                svgElement.classList.remove('clickable');
                svgElement.classList.add('regular');
            }
        }
    }


    ////////////////////////////////////////

    if(area3_available == true)
    {
        if (id == 'area3_1'){
            area3_available = false;
            if(userID == 'player1'){
                anim = document.querySelector('#area3_door1_openAnimation');
                anim.emit('area3_door1_animation_start');
                bgSound = document.querySelector('#doorSound');
                bgSound.components['sound'].stopSound();
                bgSound.components['sound'].playSound();

                button = document.querySelector('#area3StartButton');
                button.setAttribute('material', {color: '#52C252'});
                button.setAttribute('material', {emissive: '#52C252'});
                button.setAttribute('material', {emissiveIntensity: 0.4});
            }
        
            if(userID == 'player2'){
                svgElement = document.querySelector('#' + id);
                svgElement.classList.remove('clickable');
                svgElement.classList.add('fade');

                svgElement = document.querySelector('#area3_2');
                svgElement.classList.remove('clickable');
                svgElement.classList.add('regular');
            }
        }
    
        if (id == 'area3_2'){
            area3_available = false;
            if(userID == 'player1'){
                anim = document.querySelector('#area3_door2_openAnimation');
                anim.emit('area3_door2_animation_start');
                bgSound = document.querySelector('#doorSound');
                bgSound.components['sound'].stopSound();
                bgSound.components['sound'].playSound();

                button = document.querySelector('#area3StartButton');
                button.setAttribute('material', {color: '#52C252'});
                button.setAttribute('material', {emissive: '#52C252'});
                button.setAttribute('material', {emissiveIntensity: 0.4});
            }
        
            if(userID == 'player2'){
                svgElement = document.querySelector('#' + id);
                svgElement.classList.remove('clickable');
                svgElement.classList.add('fade');

                svgElement = document.querySelector('#area3_1');
                svgElement.classList.remove('clickable');
                svgElement.classList.add('regular');
            }
        }


    } 
    
    if (id == 'endDoor'){
        console.log("end door clicked");
        if(userID == 'player1'){
            anim = document.querySelector('#endDoor_closeAnimation');
            anim.emit('endDoor_animation_start_close');
            bgSound = document.querySelector('#doorSound');
            bgSound.components['sound'].stopSound();
            bgSound.components['sound'].playSound();
            console.log("hgrtg");
        }
    
        if(userID == 'player2'){
            svgElement = document.querySelector('#' + id);
            svgElement.classList.remove('clickable');


        }
    }
});
