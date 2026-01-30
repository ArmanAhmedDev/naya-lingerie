"use client";

import { useState } from "react";
import axios from "axios";

export default function TestPage() {
    // Form state
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]); // For multiple files

    const handleForm = async (e) => {
        e.preventDefault();

        // Create FormData
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("color", color);
        formData.append("category", category);

        // Append multiple images
        for (let i = 0; i < images.length; i++) {
            formData.append("image", images[i]);
        }

        try {
            const res = await axios.post("/api/product", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log("Product created:", res.data);
            // Clear form
            setTitle("");
            setDescription("");
            setPrice("");
            setColor("");
            setCategory("");
            setImages([]);
        } catch (err) {
            console.error("Error creating product:", err);
        }
    };

    return (
        <section>
            <form onSubmit={handleForm} className="flex flex-col gap-2 max-w-md">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="file"
                    multiple
                    onChange={(e) => setImages([...e.target.files])}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}