
//default connect event
socket.on('connect', function() {
    console.log("receiver connected!");
    area1_available = false;
    area2_available = false;
    area3_available = false;
    
});

socket.on('buttonClicked', function(clickedObj){
    clickedObj = clickedObj.clicked.clicked;

    if (clickedObj == 'startButton')
    {
        if (userID == 'player1')
        {
            bgSound = document.querySelector('#ambience');
            bgSound.components['sound'].playSound();

            console.log("start");
            button = document.querySelector('#startButton');
            button.setAttribute('material', {color: '#ff6464'});
            button.setAttribute('material', {emissive: '#ff6464'});
            button.setAttribute('material', {emissiveIntensity: 0.4});
        }
        if (userID == 'player2')
        {
            svgElement = document.querySelector('#areaStart');
            svgElement.classList.remove('regular');
            svgElement.classList.add('clickable');
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

socket.on('svgClicked', function(id) {
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
    
    if (area1_available == true)
    {
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

    if(area2_available == true)
    {
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

    
});
