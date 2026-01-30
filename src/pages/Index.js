import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedProducts from "@/sections/home/FeaturedProducts";
import Hero from "@/sections/home/Hero";
import PromoBanner from "@/sections/home/PromoBanner";
import ShopByCategory from "@/sections/home/ShopByCategory";
import TextWithImage from "@/sections/home/TextWithImage";

export default function IndexPage(){
    return(
        <>
     
        <Header/>
        <Hero/>
        <FeaturedProducts/>
        <PromoBanner/>
        <ShopByCategory/>
        <TextWithImage/>
        <Footer/>

       
        </>
    )
}