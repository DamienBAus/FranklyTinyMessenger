'use strict';
			
var myName;

document.body.onload = function(){
	document.getElementById('frankly-message-send').addEventListener("click", sendMessage);

	document.getElementById('frankly-message-textarea').addEventListener("keyup", 
		function(event){
			if(event.keyCode===13) sendMessage();
		});

	myName = prompt("Please enter your name");};

function sendMessage(){
	var messageTextarea = document.getElementById('frankly-message-textarea'),
		messageContent = messageTextarea.value,
		messageToSend = {
			content: messageContent,
			name: myName
		};
		
		if (messageContent.replace(/\n/g, "") == "") {
			return;
		}
		
	//writeMessage(messageToSend);
	emitMessage(messageToSend);
	
	messageTextarea.value = "";
}

function writeMessage(message){
	var messageString,
		messageClasses = "message";
		
	if (message.name === myName) {
		messageClasses = messageClasses + " me";
	}
	
	messageString = '<div class="' + messageClasses + '"><div class="name">' +
					message.name + 
					'</div><div class="content">' +
					message.content + 
					'</div></div></div>';
	
	document.getElementById('frankly-messages').insertAdjacentHTML('beforeend', messageString);
}

function scrollToBottom(){
	document.body.scrollTop = document.body.scrollHeight;
}

/* This code is for facilitating communication across sessions */
var socket = io();

function emitMessage(message){
	socket.emit('broadcastMessage', message);
}

socket.on('newMessage', function(message){
	writeMessage(message);
	
	scrollToBottom();
});
