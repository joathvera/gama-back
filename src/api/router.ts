import  express  from "express";
import { check } from "./middleware-auth/auth";
import { getUserController } from "./user/controller";


const router = express.Router();

router.get("/user/:userId",check, getUserController);
router.post("/user");


export {router};

