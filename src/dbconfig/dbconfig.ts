import { error, log } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Connected to MongoDB");
            
        })
        connection.on('error' , (err) => {
            console.log("Error connecting to MongoDB:", err);
            process.exit(1);
            
        })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);

    }

}
