
// import Image from "next/image";
// import connectToDB from "../../lib/mongodb";
// import { useEffect, useState } from "react";
// import axios from "axios";

import IndexPage from "@/pages/Index";

export default function Home() {

//   const [products, setproducts] = useState([])

//   useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('/api/product');
//       setproducts(response.data.products);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   fetchProducts();
// }, []);

  

  return (
   <section>
    {/* {products.map((product) => (
      <div key={product._id}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <Image src={product.image[0]} alt={product.title} width={400} height={400} />
      </div>
    ))} */}

    <IndexPage/>
   </section>
  );
}
