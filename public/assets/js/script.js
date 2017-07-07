"use strict";
let socket = io.connect("http://localhost:8080", {
	forceNew: true
})


let loadMessage = (data) => {
	let html = `<div><strong>${data.username}</strong> says: ${data.message}</div>`
	$("#roomChat").append(html);
}

socket.on("messages", (data) => {
	loadMessage(data);
})

let sendMessage = () => {
	let payload = {
		username: $("#username").val(),
		message: $("#message").val()
	};

	socket.emit("newMessage", payload);
	return false
}
