import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import cloudinary from "cloudinary";
import Stripe from "stripe";

connectDB();

export const stripe = new Stripe(process.env.STRIPE_API_SECRET);

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME || "deu1fhggt",
    api_key: process.env.CLOUDINARY_API_KEY || 874539949713422,
    api_secret:
        process.env.CLOUDINARY_API_SECRET || "ZquteUGn9o_JJdIQ522Pov8-8jY",
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
});
