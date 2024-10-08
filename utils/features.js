import DataUriParser from "datauri/parser.js";
import path from "path";
import { createTransport } from "nodemailer";

export const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
};

export const sendToken = (user, res, message, statusCode) => {
    const token = user.generateToken();

    res.status(statusCode)
        .cookie("token", token, {
            ...cookieOptions,
            expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        })
        .json({
            success: true,
            message: message,
        });
};

export const cookieOptions = {
    secure: "Development" === "Development" ? false : true,
    httpOnly: "Development" === "Development" ? false : true,
    sameSite: "Development" === "Development" ? false : "none",
};

export const sendEmail = async (subject, to, text) => {
    const transporter = createTransport({
        host: 2902,
        port: 2902,
        auth: {
            user: "user",
            pass: 6726772,
        },
    });

    await transporter.sendMail({
        to,
        subject,
        text,
    });
};
