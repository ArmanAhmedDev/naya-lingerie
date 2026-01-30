"use client";

import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-[#EEE6D9] py-14">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo Section */}
          <div className="">
            <Link href={'/'}>
            <h1 className="text-2xl font-medium">NAYA</h1>
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-normal mb-3">Links</h2>
            <Link className="font-extralight cursor-pointer text-md" href={"/"}>Home</Link>
            <Link className="font-extralight cursor-pointer text-md" href={"/shop"}>Shop</Link>
            
          </div>

          {/* Privacy Policy */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-normal mb-3">Privacy Policy</h2>
            <Link className="font-extralight cursor-pointer text-md" href={"#"}>Policy</Link>
            <Link className="font-extralight cursor-pointer text-md" href={"#"}>Terms</Link>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-normal mb-3">Social Media</h2>
            <Link className="font-extralight cursor-pointer text-md" href={"#"}>Facebook</Link>
            <Link className="font-extralight cursor-pointer text-md" href={"#"}>Tiktok</Link>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center mt-24">
          <p className="text-xs font-extralight">Copyright © 2023 NAYA. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
}