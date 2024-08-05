import express from 'express';
import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoute from './routes/user.routes.js';
import protectRoute from './middleware/protectRoute.js';


import connectToMongodb from './db/connectToMongodb.js';
import { app, server } from './socket/socket.js';


const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON payloads(from req.body)
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(protectRoute);

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoute)




// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


server.listen(PORT, () => {
    connectToMongodb();
    console.log(`Server is running on port ${PORT}`);
});