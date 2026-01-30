"use server";

import mongoose from "mongoose";

// Define the Product Schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
        index: true
    },
    description: {
        type: String,
        // required: true,
    },
    price: {
        type: Number,
        // required: true,
        trim: true
    },
    color: {
        type: String,
        // required: true,
        default: "none"
    },
    category: {
        type: String,
        // required: true,
        default: "none"
    },
    image: {
        type: [String], // ✅ array of strings
        required: true,
    }

}, { timestamps: true });

// Check if model already exists (prevents recompiling error in Next.js hot reload)
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

// Export the Product model
export default Product;