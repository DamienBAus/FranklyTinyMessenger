document.getElementById('frankly-message-send').addEventListener("click", sendMessage)
			
var myName = "Damien";

function sendMessage(){
	var messageTextarea = document.getElementById('frankly-message-textarea'),
		messageContent = messageTextarea.value,
		messageToSend = {
			content: messageContent,
			name: myName
		};
		
	writeMessage(messageToSend);
	
	checkWithBot(messageToSend);
	
	messageTextarea.value = "";
	
	scrollToBottom();
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

function checkWithBot(message){
	if (message.content.indexOf("Hi") > -1) {
		writeMessage({
			name: "Bot",
			content: "Hi there!"
		});
	}
}

function scrollToBottom(){
	document.body.scrollTop = document.body.scrollHeight;
}