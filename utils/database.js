import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB is already connected.");
        return;
    }

    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
        });

        isConnected = true;

        console.log(`MongoDB Connected to ${connection.host}`);
    } catch (error) {
        console.log(error);
    }
};
