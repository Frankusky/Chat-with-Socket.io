"use strict";
let express = require("express"),
	app = express(),
	server = require("http").Server(app),
	io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", (req, res)=>{
	res.status(200);
})

io.on("connection", (socket)=>{
	socket.emit("messages", {username:"Servidor", message: "Welcome to my chat system!"})
	socket.on("newMessage", (data)=>{
		io.sockets.emit("messages",data)
	})
});

server.listen(8080, ()=>{
	console.log("Servidor corriendo en puerto 8080")
})
