var userID;
var mode; 

function onSceneLoad(){
    bgSound = document.querySelector('#ambience');
    bgSound.components['sound'].playSound();
}


counter = 0;
var timer = 30;
const intervalId = setInterval(() => 
{
    console.log(timer);
    counter += 1;
    timer = 29 - counter;

    if(userID == 'player1'){
        document.getElementById("player1_secondsRemaining").innerHTML = timer;
    }
    
    if (counter === 30) 
    {
        console.log('Done');
        socket.emit('timerDone', {});
        counter = 0;
    }
}, 1000);


function resetTimer(){
    counter = 0;
    timer = 30;
}

