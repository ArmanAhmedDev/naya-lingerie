"use client";

import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
    return (
        <>
        <section className="mt">
            <div className="relative w-full h-[300px] md:h-[400px]  ">
                {/* Overlay */}
                <div className="absolute top-0 left-0 bg-black opacity-30 w-full h-[300px] md:h-[400px]  z-10"></div>
                {/* Banner Image */}
                <Image className=" object-cover object-center" src={'/images/Promobanner.webp'} alt="PromoBanner" fill priority quality={100} />

                {/* Texts */}
                <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
                >
                    {/* Tagline */}
                    <h5 className=" underline font-light text-xl pb-3">Sale Up to 30% Off</h5>
                    {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug font-normal text-nowrap">A Perfect Blend Of <br /> Sexy And Comfort</h1>

                {/* CTA Button */}
                <Link href={"/shop"}>
                <button className="bg-white px-10 py-2 text-black rounded-full mt-4 text-md cursor-pointer">
                    Shop Now
                </button>
                
                </Link>

                </div>
            </div>
        </section>
        </>
    )
}