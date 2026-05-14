import express from "express";
import { imageMessageController, textMesssageController } from "../controllers/messageController.js";
import { protect } from "../middlewares/auth.js";

const messageRouter = express.Router();

messageRouter.post('/text', protect, textMesssageController);
messageRouter.post('/image', protect, imageMessageController);

export default messageRouter;