"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails() {

     const params = useParams(); // useParams returns an object
    const id = params?.id;      // safe access

    const [product, setproduct] = useState(null)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get(`/api/product/${id}`);
                setproduct(res.data.product);
            } catch (error) {
                console.error("Error fetching products:", err);
            }
        }

        getProduct();
    }, [id]);

 if (!product) return <p>Loading...</p>;

    return (
        <>
            <section className="mt px-4 md:px-8 pt-8 ">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Left Part */}
                    <div className="md:w-1/2 w-full flex flex-col gap-4">

                        {/* Product Images */}
                        {product?.image?.map((img, index) => (
                            <div key={index} className="relative w-full  aspect-[3/4]">
                                <Image
                                    src={img}
                                    alt={product?.title || "product"}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Part */}
                    <div className="w-full md:w-1/2 px-4 md:px-8 space-y-3 pt-2">

                        {/* Product Title */}
                        <h1 className="text-3xl font-normal">{product?.title}</h1>

                        {/* Product Description */}
                        <p className="text-md font-light pt-2">{product?.description}</p>

                        {/* Product Price */}
                        <h1 className="text-2xl font-normal pt-3">${product?.price}</h1>

                        {/* Product Colors */}
                        <h4 className="pt-4">colors:</h4>

                        <div className="flex items-center gap-1 pt-2 px-8">
                            <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center ${["white", "beige", "gray"].includes(product?.color?.toLowerCase())
                                    ? "border border-black"
                                    : ""
                                    }`}
                            >
                                <span
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: product?.color }}
                                />
                            </span>
                        </div>


                        {/* Add to Cart Button */}
                    {/* <Link href={"#"}> */}
                        <button className="w-full py-3 text-center bg-black text-white text-md font-extralight mt-4 md:mt-8 cursor-pointer">
                            Add to Card
                        </button>
                    
                    {/* </Link> */}
                    </div>

                </div>
            </section>

        </>
    )
}