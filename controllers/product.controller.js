"use server";

import { NextResponse } from "next/server";
import  { getProductService, createProductService, updateProductService, deleteProductService  , getProductByIdService} from "../services/product.service";
import cloudinary from "../lib/cloudinary";


// Handle GET request, call service, return response
export async function handleGet(request) {

    const products = await getProductService();

    if (products.length === 0) {
        return NextResponse.json({ error: "Products not found" }, { status: 400 });
    }

    return NextResponse.json({ products });
}

export async function handleGetById( id) {

    const product = await getProductByIdService(id)

    return NextResponse.json({ product });
}

// Handle POST request, call service, return response
export async function handlePost(request) {

    // Destructure form data
    const formdata = await request.formData();

    // Get data from the form
    const title = formdata.get("title");
    const description = formdata.get("description");
    const price = formdata.get("price");
    const color = formdata.get("color");
    const category = formdata.get("category");

    const imageFile = formdata.getAll("image");

    // Validate for required fields 
    if (!title || !description || !price || !color || !category) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!imageFile) {
        return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }


    const uploadedImages = [];
    for (const file of imageFile) {
        // In Node, file might already be a Buffer
        // Convert Buffer -> base64 string
        const buffer = Buffer.from(await file.arrayBuffer?.() ?? file.stream());
        const uploaded = await cloudinary.uploader.upload(
            `data:${file.type};base64,${buffer.toString("base64")}`,
            { folder: "products" }
        );
        uploadedImages.push(uploaded);
    }


    // Call service to create product
    const product = await createProductService({
        title,
        description,
        price,
        color,
        category,
        uploadedImages,
    });

    return NextResponse.json({ product });
}

// Handle PATCH request, call service, return response
export async function handlePatch(request, id) {

    // Destructure form data
    const formdata = await request.formData();

    // Get data from the form
    const title = formdata.get("title");
    const description = formdata.get("description");
    const price = formdata.get("price");
    const color = formdata.get("color");
    const category = formdata.get("category");

    const imageFile = formdata.get("image");

    let imageUrl;


    // Check if image file is uploaded or not
    if (imageFile && imageFile.size > 0) {
        // Converting image file to buffer to save in clodinary
        const arrayBuffer = await imageFile.arrayBuffer();
        const imageBuffer = Buffer.from(arrayBuffer);

        // Uploading image to cloudinary
        const uploadedImage = await cloudinary.uploader.upload(
            `data:${imageFile.type};base64,${imageBuffer.toString("base64")}`,
            { folder: "products" }
        )

        // Update image url variable by the url of uploaded image
        imageUrl = uploadedImage.secure_url
    }


    // Call service to update product
    const product = await updateProductService({
        id,
        title,
        description,
        price,
        color,
        category,
        imageUrl,
    });


    return NextResponse.json({ product });

}

// Handle DELETE request, call service, return response
export async function handleDelete(request, id) {

    // Call service to delete product
    const result = await deleteProductService({ id });

    return NextResponse.json({ result });
}