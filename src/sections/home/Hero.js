"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section className="w-full h-full flex flex-col md:flex-row items-center "
            >
                {/* Left Part */}
                <div className="w-full md:w-1/2 h-screen z-20 flex flex-col justify-center items-center px-6"
                >
                    {/* Heading */}
                    <h1 className="text-white md:text-black font-normal md:font-medium text-[7vw] md:text-[3vw] xl:text-[2.5vw] text-center leading-snug">Intimates That Make You Feel Powerful</h1>

                    {/* Paragraph */}
                    <p className="text-white md:text-black font-extralight text-sm xl:text-md text-center leading-tight pt-4 hidden md:block lg:w-2/3">From delicate lace to modern essentials, explore lingerie that empowers your confidence and enhances your natural beauty.</p>

                    {/* CTA Button */}
                    <Link href={'/shop'}>
                        <button className="bg-white md:bg-transparent md:border md:border-black md:text-black sm:px-16 md:px-12 px-10 py-3  rounded-lg md:rounded-full mt-4 md:mt-8 text-lg md:text-md md:font-light cursor-pointer">
                            Shop Now
                        </button>
                    </Link>
                </div>

                {/* Right Part */}
                <div className="w-full absolute top-0 left-0 z-10 md:relative md:top-0 md:left-0 md:w-1/2 h-screen "
                >
                    {/* Black Overlay */}
                    <div className="w-full h-screen bg-black absolute top-0 left-0 opacity-15 z-20"></div>
                    {/* Hero Image */}
                    <Image className="object-cover" src={'/images/HeroImage.jpg'} alt="HeroImage" fill priority quality={100} />
                </div>

            </section>
        </>
    )
}