"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductsCardLoader from "@/components/loaders/ProductsCardLoader";

export default function FeaturedProducts() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(false)
    const [hovered, sethovered] = useState(null)

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
        <section className="mt">
            <div className="flex items-center justify-between px-5 pb-8">
                <h3 className="text-2xl font-normal">Featured Products</h3>
                <Link className="underline" href={"/shop"}>view all</Link>
            </div>

            <div className="mx-6"
            >
                {/* Swiper JS Logic */}
                <Swiper
                    // Swiper JS Card sizes Responsiveness
                    spaceBetween={16}
                    slidesPerView={4}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            spaceBetween: 12,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 14,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                        },
                    }} >

                    {/* Products Cards */}
                    {products.map((product) => (
                        // Product Card Slider
                        <SwiperSlide className="flex flex-col" key={product._id}>
                            <div 
                            onMouseEnter={()=>{sethovered(product._id)}} 
                            onMouseLeave={()=>{sethovered(null)}} 
                            className="relative w-full  h-[75vh] sm:h-[60vh] md:h-[50vh] xl:h-[65vh] 2xl:h-[80vh]  "
                            >
                                {/* Product Link to Product Page */}
                                <Link href={`/shop/${product._id}`}
                                >
                                    {/* Product Image */}
                                    <Image 
                                    className=" object-cover w-full h-full" 
                                    src={hovered === product._id && product.image[1] ? product.image[1] : product.image[0]} 
                                    alt={product.title} fill />
                                </Link>
                            </div>

                            {/* Product Details */}
                            <div className="mt-2 flex flex-col  text-center ">
                              <span className="font-extralight text-md md:text-sm text-gray-600 pt-1 pb-1">
                                {product.category}
                              </span>

                              <h3 className="text-xl md:text-lg font-light">{product.title}</h3>

                              <span className="text-xl md:text-lg font-medium pt-1">$
                                {product.price}
                              </span>

                            
                            </div>

                        </SwiperSlide>


                    ))}

                    {loading && <ProductsCardLoader />}

                </Swiper>

            </div>
        </section>
    );
}