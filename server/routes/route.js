import express from "express";

import { addUser, getUsers } from "../controller/user-controller.js";
import { newConversation, getConversation } from '../controller/conversation-controller.js';


import { getMessages, newMessage } from "../controller/message-controller.js";

import { uploadImage , getImage } from "../controller/image-controller.js";


import upload from '../utils/upload.js';



const route = express.Router();



route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);

route.post('/file/upload', upload.single('file'), uploadImage);
route.get('./file/:filename', getImage);









export default route;