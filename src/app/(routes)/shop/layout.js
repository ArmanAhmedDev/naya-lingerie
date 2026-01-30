
export const metadata = {
  title: "Shop Lingerie — NAYA Official Store",
  description:
    "Shop premium lingerie at NAYA. Explore bras, panties, thongs, nightwear, and intimate essentials designed for comfort, confidence, and everyday luxury.",
  keywords: [
    "buy lingerie online",
    "NAYA shop",
    "lingerie store",
    "luxury underwear",
    "women lingerie shop",
    "thong panties",
    "nightwear for women",
  ],
  openGraph: {
    title: "Shop Lingerie — NAYA Official Store",
    description:
      "Explore NAYA’s premium lingerie collection. Designed for beauty, comfort, and confidence.",
    siteName: "NAYA",
    type: "website",
  },
};

export default function ShopLayout({children}){
    return(
        <div className="">
            {children}
        </div>
    )
}