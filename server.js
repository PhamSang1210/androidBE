import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import cloudinary from "cloudinary";
import Stripe from "stripe";

connectDB();

export const stripe = new Stripe(
    "sk_test_51Q3vwIHaUIggDLgSD3y9P5SDRGjyXmVGAcTZDeNYOdWnOD8Z51S8yDBvgRut6yylAGnnrf8Jlw7QNGHRPHwLiLY000UIsM3XhK"
);

cloudinary.v2.config({
    cloud_name: "deu1fhggt",
    api_key: 874539949713422,
    api_secret: "ZquteUGn9o_JJdIQ522Pov8-8jY",
});

app.listen(5000, () => {
    console.log(`Server listening on port: 5000.`);
});
