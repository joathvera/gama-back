import  express  from "express";
import { check } from "./middleware-auth/auth";
import { getUserController } from "./user/controller";
import * as EmailController from './mails/controller'


const router = express.Router();

router.get("/user/:userId",check, getUserController);
router.post("/user");

//MAIL CONTROLLER
router.post('/mail/send-quote', EmailController.sendQuoteController);


export {router};

