require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000; // Use the port from environment variable or default to 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('A new client is connected');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the database');
        // Listen to port
        http.listen(PORT, () => {
            console.log('Listening for requests on port', PORT);
        });
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
    });
