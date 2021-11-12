import express from "express";


import { getUser } from "./seervice";



async function getUserController(req: express.Request, res: express.Response) {
    try {
        const userId = req.params.userId || null;
        const response = await getUser(userId);
        res.send({
            code: 200,
            message: "nice",
            data: response
        })
    } catch (error) {
        console.log(error);
        res.status(error.code).send(error);
    }
}

export { getUserController };