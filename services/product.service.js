"use server"

import mongoose from "mongoose";
import Product from "../models/product.models";
import connectToDB from "../lib/mongodb";

// Service: Fetch product data 
export async function getProductService(){

    try {
        
        // Check if Database is connected or not
        await connectToDB();

        // Fetched all products and returned response
        return await Product.find({});
        
    } catch (error) {
        return { error: "Error during fetching products" };
    }

   
}

export async function getProductByIdService(id){
  try {

    await connectToDB();

    return await Product.findById(id);
    
  } catch (error) {
    return { error: "Error during fetching products" };
  }

}

// Service: Create new product 
export async function createProductService({title, description, price, color, category, uploadedImages}){
      try {

        // Check if Database is connected or not
        await connectToDB();

        // Creating new product object
        const newProduct = new Product({
            title,
            description,
            price,
            color,
            category,
           image: uploadedImages.map(img => img.secure_url)
        });
    

        // Saving product to database
       await newProduct.save();

        // Returned response from server
       return { message: "Product Created" };


    } catch (error) {
        return { error: "Error during creating product" };
    }


    
}



// Service: Update product 
export async function updateProductService({id , title, description, price, color, category, imageUrl}){
    try {

        // Check if Database is connected or not
        await connectToDB();

        // Updating product in database
        await Product.findByIdAndUpdate(id, {
            title,
            description,
            price,
            color,
            category,
            image: imageUrl
        });

        return { message: "Product Updated" };
        
    } catch (error) {
        return { error: "Error during updating product" };
    }
}
   


// Service: Delete product
export async function deleteProductService({id}){

    try {
        
        // Check if Database is connected or not
        await connectToDB();

       const product = await Product.findById(id);

        if(!product){
            return { error: "Product not found" };
        }
        
        // Deleting product from database
        await Product.findByIdAndDelete(id);

        return { message: "Product Deleted" };

    } catch (error) {
        return { error: "Error during deleting product" };
    }

    
}