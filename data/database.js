import mongoose from "mongoose";

const strConnect =
    "mongodb+srv://phamhongsang12x10:XY1pow8PztRkhMVc@cluster0.loq8seh.mongodb.net/ShopTypeDev";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(
            process.env.MONGO_URI || strConnect
        );

        console.log(`Server connected to database ${connection.host}`);
    } catch (error) {
        console.log(`Some Error Occurred`, error);
        process.exit(1);
    }
};
