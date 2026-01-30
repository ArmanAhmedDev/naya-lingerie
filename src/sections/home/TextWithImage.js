"use client";


import Image from "next/image";
import Link from "next/link";



export default function TextWithImage() {
    return (
        <>
            <section className="mt-30 px-6 md:px-10 w-full h-[130vh]  sm:h-[160vh] md:h-[180vh] lg:h-[200vh]"
            >
                {/* Container */}
                <div className="relative"
                >
                    {/* Text Section */}
                    <div className="relative">
                        <h1 className="text-[6vw] md:text-5xl md:absolute md:top-0 md:left-0 leading-snug">Unveil Confidence, Embrace <br /> Elegance</h1>

                        <p className="text-lg md:w-2/3 md:absolute md:top-21 md:right-0 pt-6 font-light">
                            Explore our luxurious lingerie crafted to celebrate every curve. From delicate lace to everyday comfort, each piece inspires confidence and effortless allure.
                        </p>
                    </div>

                    {/* Image Section */}

                    <div className="flex flex-col items-center justify-center pt-10 md:absolute md:top-56 md:right-16">
                        <Image className="w-full h-full" src={'/images/76851149.jpg'} alt="TextWithImage" width={500} height={500} quality={100} priority />

                        {/* Link to shop page */}
                        <Link className="   flex items-center justify-center underline pt-12 text-lg  font-light" href={"/shop"}>
                            View all
                        </Link>
                    </div>


                </div>

            </section>
        </>
    )
}