const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const socketIO  = require('socket.io')(server); //hello I am new
    //socket = one client
    //socketIO.sockets = all clients
    

const LISTEN_PORT = 8080; //make sure greater than 3000. Some ports are reserved/blocked by firewall ...

app.use((express.static(__dirname + '/public'))); //set root dir to the public folder

//routes
app.get('/color', function(req,res) {
    res.sendFile(__dirname + '/public/color.html');
});

app.get('/controller', function(req,res) {
    res.sendFile(__dirname + '/public/player2.html');
});

//websocket stuff
socketIO.on('connection', function(socket) {
    console.log(socket.id + ' has connected!');
    

    socket.on('disconnect', function(data) {
        console.log(socket.id + ' has disconnected');
    });

    ///////////////////// CUSTOM SOCKET EVENT LISTENERS + FUNCTIONS /////////////////////

    //////////// FROM PLAYER 2 ////////////

    socket.on('svg_clicked', function(id) {
        socketIO.sockets.emit('svgClicked', {clicked:id});
    });

    //////////// FROM PLAYER 1 ////////////

    socket.on('buttonClicked', function(clickedObj) {
        socketIO.sockets.emit('buttonClicked', {clicked:clickedObj});
    })

    ////////////////////////////////////////////////////////////////////////////////////

});

//finally, start server
server.listen(LISTEN_PORT);
console.log('listening to port: ' + LISTEN_PORT);