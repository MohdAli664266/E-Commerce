import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

 function Products() {
    const [products, setProducts] = useState([{}])

    useEffect(()=>{
        axios.get('/api/products')
        .then(res=>{
            setProducts(res.data.data)
        })
        .catch(err=>console.log(err)
        )
    },[]);
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products
