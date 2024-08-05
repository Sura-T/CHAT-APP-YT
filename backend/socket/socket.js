import {server} from 'socket.io';
import http, { createServer } from 'http';
import express from 'express';
// import { Socket } from 'dgram';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost/3000'],
        methods: ["GET","POST"]
    }
});

const userSocketMap = {};

io.on('connection', (Socket) => {
    console.log('a user connected', socket.id)
})

socket.on("disconnect", () => {
    console.log('a user disconnected', socket.id);
})

export {app,io,server};