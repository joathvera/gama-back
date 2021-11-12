import nodemailer from 'nodemailer';
import { MailOptions } from "nodemailer/lib/json-transport";
// import ejs from 'ejs';

async function sendQuote(user: any, url : string) {
    try {
        if (!user || !url){
            throw {
                code: 418,
                message: "parameter user is " + user
            }
        }
        let transporter = nodemailer.createTransport({
            host: "ecbiz263.inmotionhosting.com",
            port: 465,
            secure: true,
            auth: {
                user: 'nodemail@dappertechnologies.com',
                pass: 'admin2020'
            }
        });
        let mailOptions: MailOptions = {
            from: 'j.vera@dappertechnologies.com',
            to: [
                "a.aguilar@dappertechnologies.com",
                "a.laguna@dappertechnologies.com"
            ],
            // cc: 'r.ruvalcaba@dappertechnologies.com',
            subject: 'Correo de prueba',
            html: 'Cuerpo del mensaje',
            attachments: [
                {
                    filename: 'documento-prueba.pdf',
                    path: 'https://firebasestorage.googleapis.com/v0/b/gamma-construcciones.appspot.com/o/files%2F27ekfsqwm1b?alt=media&token=257c4221-1270-4b30-a6b9-ecdfe4fea07c'
                }
            ]
        };
        let info = await transporter.sendMail(mailOptions);

        return {
            mailId:info.messageId,
            message:'mail sended'
        }
    } catch(error){
        throw error;
    }
}

export {
    sendQuote
}

