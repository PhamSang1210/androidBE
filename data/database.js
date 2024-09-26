import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://phamhongsang12x10:XY1pow8PztRkhMVc@cluster0.loq8seh.mongodb.net/ShopTypeDev"
    );

    console.log(`Server connected to database ${connection.host}`);
  } catch (error) {
    console.log("Some Error Occurred", error);
    process.exit(1);
  }
};
