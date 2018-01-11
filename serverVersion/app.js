var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var oneDay = 86400000; 
//choices made in morning.html, workWithChoices.html, party1.html

var block = ["1", "0", "0"];  //0 indicates nothing blocked rest 1-3 correspond to choice blocked
								
app.use(express.static(__dirname)); //loads the website

io.on('connection', function(socket){ //listens for user events 

  socket.on('user input', function(msg){ //detects when event happens and runs code in brackets

   console.log('user input: ' + msg); //prints to console

	io.emit('server output' , msg); //outputs an event heard by all users

  });

  socket.on('getBlock', function(msg){ 
  	console.log('getBlock: ' + msg);
  	if(msg == "0"){
	socket.emit('block' , block[0]);
	}
	if(msg == "1"){
	socket.emit('block' , block[1]);
	}
	if(msg == "2"){
	socket.emit('block' , block[2]);
	}
});

socket.on('setBlock', function(msg){ 
	console.log('setBlock: ' + msg);
  	if(msg == "0"){
	block[0] = msg;
	}
	if(msg == "1"){
	block[1] = msg;
	}
	if(msg == "2"){
	block[2] = msg;
	}
});

});
http.listen(3002);
console.log('listening on :3002');