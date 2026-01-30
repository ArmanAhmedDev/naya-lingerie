import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FeaturedProducts from "@/sections/home/FeaturedProducts";
import ProductDetails from "@/sections/product/ProductDetails";
import ProductsRecomendation from "@/sections/product/ProductsRecomendation";

export default function ProductPage(){
    return(
        <>
       <Header/>
       <ProductDetails/>
       <ProductsRecomendation/>
       <Footer/>
        </>
    )
}