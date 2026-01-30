"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {

    const [toggleMenu, settoggleMenu] = useState(false)

    // Controls header visibility (true = visible, false = hidden)
    const [show, setShow] = useState(true);

    // Stores last scroll position to detect scroll direction
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {

        // Function to handle scroll behavior
        const controlHeader = () => {

            // If user scrolls DOWN, hide header
            if (window.scrollY > lastScrollY) {
                // scrolling down
                setShow(false);

                // If user scrolls UP, show header
            } else {
                // scrolling up
                setShow(true);
            }

            // Update last scroll position
            setLastScrollY(window.scrollY);
        };

        // Attach scroll listener
        window.addEventListener("scroll", controlHeader);

        // Cleanup event listener on unmount
        return () => window.removeEventListener("scroll", controlHeader);
    }, [lastScrollY]);

    return (

        <>
            <header
                className={`fixed top-0 left-0 w-full z-30 flex items-center justify-between px-6 lg:px-8 py-4 lg:py-5  transition-transform duration-200 ${show ? "translate-y-0 " : "-translate-y-full "
                    }`}
            >
                {/* Logo */}
                <div className=""
                >
                    <Link href={'/'}>
                    <h1 className="text-2xl font-medium outfit">NAYA </h1>
                    </Link>

                    {/* Use the Actual Logo Image Here */}
                </div>
                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-5 lg:gap-6">
                        <li>
                            <button className=" cursor-pointer">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17 17L21 21" />
                                    <path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => settoggleMenu(!toggleMenu)} className=" cursor-pointer">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3 5H21" />
                                    <path d="M3 12H21" />
                                    <path d="M3 19H21" />
                                </svg>
                            </button>
                        </li>
                    </ul>


                </nav>


            </header>

            {/*  Navigation */}
            <div className={`fixed top-0 right-0 w-[300px] md:w-[400px] h-screen px-6 py-6 bg-white transform duration-300 ease-in-out z-50 ${toggleMenu ? "translate-x-0" : "translate-x-full"}`}>
                <button className="cursor-pointer" onClick={() => { settoggleMenu(!toggleMenu) }}>
                    <span>
                        <svg
                            width="34px"
                            height="34px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                        >
                            <path
                                d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </span>
                </button>

               <ul className="pt-6  px-2 space-y-4 text-xl">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/shop'}>Shop</Link>
                </li>
               </ul>
            </div>
        </>
    );
}