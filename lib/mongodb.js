"use server";

import mongoose from "mongoose";

/**
* Connect to MongoDB
* Logs success or error
*/
export async function connectToDB() {

    if (mongoose.connection.readyState >= 1) {
        return;
    }
    try {
        const res = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB:", res.connection.db.databaseName , res.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default connectToDB