"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCardLoader from "@/components/loaders/ProductsCardLoader";
import Link from "next/link";



export default function ProductDisplay() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(false)
    const [hoveredId, sethoveredId] = useState(null)


    useEffect(() => {
        const fetchProducts = async () => {
            setloading(true)
            try {
                const response = await axios.get('/api/product');
                setloading(false)
                setproducts(response.data.products);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchProducts();
    }, []);


    return (
        <>
            <section className="mt px-6 mb-10"
            >
                {/* Page Title */}
                <div className="pt-10"
                >
                    <h1 className="text-4xl font-light"
                    >
                        Shop All
                    </h1>
                </div>
                {/* Product Filter & Sorting */}
                <div className="pt-10 flex items-center justify-between"
                >
                    {/* Total Product Count */}
                    <h3>
                        Total {products.length}
                    </h3>
                    {/* Product Sorting */}
                    <div className="pb-4">
                        <button className="flex items-center gap-2 cursor-pointer"
                        >
                            {/* Filter Icon */}
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z" />
                                </svg>
                            </span>
                            {/* Filter text */}
                            <h3>Filter</h3>
                        </button>
                    </div>
                </div>
                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-4"
                >


                    {products.map((product) => (
                        <div className="pb-8 " key={product._id}>
                            <Link href={`/shop/${product._id}`}>
                            
                            <div className="w-full aspect-[2/3] relative">
                            
                                <Image
                                    onMouseEnter={() => { sethoveredId(product._id) }}
                                    onMouseLeave={() => { sethoveredId(null) }}
                                    className=" object-cover cursor-pointer"
                                    src={hoveredId === product._id && product.image[1] ? product.image[1] : product.image[0]}
                                    alt={product.title}
                                    fill
                                    priority
                                    quality={100} />

                            </div>
                            </Link>

                            {/* Product Details Section */}
                            <div className="pt-3 space-y-1">

                                {/* Product Category */}
                                <span className="inline-flex text-xs md:text-sm text-gray-400">{product.category}</span>

                                {/* Product Title */}
                                <h1 className="font- text-sm md:text-[17px]">{product.title}</h1>

                                {/* Product Price */}
                                <p className="font-medium text-sm md:text-[17px]">${product.price}</p>

                                {/* Product Color */}
                                <div className="flex items-center gap-1 pt-2">
                                    <span className={`w-5 h-5 rounded-full flex items-center justify-center ${["white", "beige", "gray"].includes(product.color?.toLowerCase())
                                            ? "border border-black"
                                            : ""
                                        }`}>
                                        <span
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: product.color }}
                                        />
                                    </span>

                                   
                                </div>
                            </div>
                        </div>
                    ))}

                    {loading && <ProductsCardLoader />}

                </div>
            </section>
        </>
    )
}