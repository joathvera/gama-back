import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./api/router";
import { sign } from "./api/middleware-auth/auth";

require('dotenv').config();

// sign();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/api",router )

app.get("*",async(req:express.Request,res:express.Response)=>{
    res.status(404).send("user not found")
})


app.listen(port,function(){
    console.log('puerto ' + port);
    
})