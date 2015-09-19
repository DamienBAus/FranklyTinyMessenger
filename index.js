var express = require('express'),
    app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('workshop3.html');
});

app.use(express.static('static'));

io.on('connection', function(socket){
  socket.on('broadcastMessage', function(msg){
    io.emit('newMessage', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
