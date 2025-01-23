// Connect to the server via socket.io
const socket = io();

// DOM elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

// Handle form submission to send the message
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page refresh
  if (input.value.trim()) {
    socket.emit('chat message', input.value); // Send message to the server
    input.value = ''; // Clear input field
  }
});

// Listen for messages from the server and display them
socket.on('chat message', (msg) => {
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
});
