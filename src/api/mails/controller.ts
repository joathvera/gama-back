import express from 'express';
import * as service from './service';


async function sendQuoteController(req:express.Request, res:express.Response ){
    try{
        const user = req.body.user; 
        const urlFile = req.body.url;
        console.log(user, urlFile);

        const response = await service.sendQuote(user, urlFile);

        res.send({
            code: 200,
            message: "Email sended",
            data: response,
        });
    } catch(error){
        res.status(400).send(error);
    }
}

export {
    sendQuoteController
}
