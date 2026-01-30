import { Poppins, Outfit } from "next/font/google";
import "./globals.css";

// Poppins font for headings
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400","500","600","700","800","900"], // headings usually need medium-bold
  subsets: ["latin"],
});

// Outfit font for body text
const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "NAYA — A New Standard of Intimate Wear",
  description:
    "Discover NAYA's premium lingerie collection designed for elegance, comfort, and confidence. Shop bras, panties, nightwear, and intimate essentials crafted for modern women.",
  keywords: [
    "NAYA lingerie",
    "premium lingerie",
    "luxury lingerie",
    "women underwear",
    "bras and panties",
    "nightwear",
    "intimate wear",
    "modern lingerie brand",
  ],
  openGraph: {
    title: "NAYA — Premium Lingerie for Confidence & Comfort",
    description:
      "Luxury lingerie crafted for elegance, comfort, and confidence. Explore NAYA’s exclusive collections.",
    siteName: "NAYA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}