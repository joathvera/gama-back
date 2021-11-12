import * as jwt from "jsonwebtoken";
import express from "express";


function check(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1] as string;
        const decodedToken = jwt.verify(token, process.env.TOKEN as string);
        console.log(decodedToken);

        next();
    } catch (error) {
        console.log(error);
        throw res.status(401).json({
            code: 401,
            message: "no puedes entrar"
        })
    }
}

function sign() {
    try {
        const token = jwt.sign("master", "secret");
        console.log(token);
        return;
    } catch (error) {
        console.log(error);

    }
}

export { sign,check };