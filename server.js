// Import required modules
const express = require('express');
const socketIo = require('socket.io');
const path = require('path');

// Set up the app and the server
const app = express();
const server = app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Serve static files like the HTML, CSS, and JavaScript
app.use(express.static(path.join(__dirname, 'public')));

// Initialize socket.io
const io = socketIo(server);

// When a user connects to the chat
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle sending messages
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Emit the message to all connected users
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});
