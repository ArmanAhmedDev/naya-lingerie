"use server";

import mongoose from "mongoose";

// Define the User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
},{timestamps: true});

// Check if model already exists (prevents recompiling error in Next.js hot reload)
const User = mongoose.model.User || mongoose.model("User", userSchema);

// Export the User model
export default User;