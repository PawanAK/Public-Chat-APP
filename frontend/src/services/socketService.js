// src/services/socketService.js
import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:5000'; // Replace with your server URL

const socket = io(SOCKET_SERVER_URL, { autoConnect: false });

// Event listeners can be added here as needed

const connectSocket = () => {
    if (!socket.connected) {
        socket.connect();
    }
};

const disconnectSocket = () => {
    if (socket.connected) {
        socket.disconnect();
    }
};

const emit = (event, data) => {
    if (socket.connected) {
        socket.emit(event, data);
    }
};

const on = (event, callback) => {
    socket.on(event, callback);
};

const off = (event, callback) => {
    socket.off(event, callback);
};

export default {
    connectSocket,
    disconnectSocket,
    emit,
    on,
    off,
};
