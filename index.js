var express = require('express'),
    app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('C:/Users/Damo/Documents/GitHub/FranklyTinyMessenger/workshop2.html');
});

app.use(express.static('C:/Users/Damo/Documents/GitHub/FranklyTinyMessenger/static'));

io.on('connection', function(socket){
  socket.on('boardState', function(msg){
    io.emit('boardState', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
