var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var oneDay = 86400000; 
//choices made in morning.html, workWithChoices.html, party1.html

app.use(express.static(__dirname)); //loads the website

io.on('connection', function(socket){ //listens for user events 

  socket.on('user input', function(msg){ //detects when event happens and runs code in brackets

   console.log('user input: ' + msg); //prints to console

	io.emit('server output' , msg); //outputs an event heard by all users

  });

}); 

http.listen(3002);
console.log('listening on :3002');