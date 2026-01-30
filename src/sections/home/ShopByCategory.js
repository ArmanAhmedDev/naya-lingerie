"use client";

import Image from "next/image";
import Link from "next/link";




export default function ShopByCategory() {
    return (
        <>
            <section className="mt px-8 md:px-10 lg:px-20">
                {/* Page Title */}
                <h1 className="text-center text-2xl font-medium mb-12 ">
                    Shop By Category
                </h1>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2  gap-15 md:gap-8 lg:gap-10">

                    {/* Card 1 */}
                    <Link href={"/shop"}>
                    
                    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[400px] 2xl:h-[500px]  overflow-hidden ">

                
                        <Image
                            src="/images/CategoryImage_1.png"
                            alt="ShopByCategory"
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                        />
                         {/* Category Type */}
                            <h4 className="absolute bottom-4 left-6 text-white text-2xl  font-extralight z-20">
                                Bras
                            </h4>


                    </div>
                    
                    </Link>

                    {/* Card 2 */}

                    <Link href={"/shop"}>
                    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[400px] 2xl:h-[500px]  overflow-hidden ">
                        
                        <Image
                            src="/images/CategoryImage.webp"
                            alt="ShopByCategory"
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                        />

                         {/* Category Type */}
                            <h4 className="absolute bottom-4 left-6 text-white text-2xl  font-extralight">
                                Panties
                            </h4>
                    </div>
                    </Link>

                    {/* Card 3 */}

                    <Link href={"/shop"}>
                    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[400px] 2xl:h-[500px] overflow-hidden cursor-pointer ">
                        <Image
                            src="/images/CategoryImage_2.png"
                            alt="ShopByCategory"
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                        />

                         {/* Category Type */}
                            <h4 className="absolute bottom-4 left-6 text-white text-2xl font-extralight">
                                Swimwear
                            </h4>
                    </div>
    
                    </Link>

                    {/* Card 4 */}
                    <Link href="/shop">
                        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[400px] 2xl:h-[500px] overflow-hidden  cursor-pointer ">
                            {/* Image */}
                            <Image
                                src="/images/CategoryImage.jpg"
                                alt="ShopByCategory"
                                fill
                                className="object-cover "
                                priority
                                quality={100}
                            />

                            {/* Category Type */}
                            <h4 className="absolute bottom-4 left-6 text-white text-2xl  font-extralight">
                                Lingerie Sets
                            </h4>
                        </div>
                    </Link>

                </div>
            </section>
        </>
    )
}