import { useEffect, useState } from "react";
import sasuke from '../assets/sasuke.jpeg'
import iron from '../assets/iron.jpg'
import lion from '../assets/lion_logo.png'
import login from '../assets/login.jpg'
import { LuArrowDownUp } from "react-icons/lu";
import axios from "axios";

const sortOptions = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Name: A to Z", value: "name_asc" },
  { label: "Name: Z to A", value: "name_desc" },
];

function Shop() {
  const [sort, setSort] = useState("price_asc");
  const [sortVisible, setSortVisible] = useState(false)
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: "Women TShirt", 
      category: "Women", 
      brand: "Nike", 
      price: 150, 
      oldPrice: 350, 
      image: sasuke 
    },    
  ])
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "price_asc") return a.price - b.price;
    if (sort === "price_desc") return b.price - a.price;
    if (sort === "name_asc") return a.name.localeCompare(b.name);
    if (sort === "name_desc") return b.name.localeCompare(a.name);
  });

  useEffect(()=>{
    axios.get('/api/products')
    .then(res=>{
      setProducts(res.data.data)
    }
    ).catch(err=>console.log(err)
    )
  }, [])
  function sortbyHandle(){
    setSortVisible(!sortVisible)
  }
  return (
    <div className="container mx-auto p-6 flex gap-6">
      {/* Sidebar Filters */}
      <div className="w-1/4 border-r pr-4">
        <h2 className="text-lg font-bold mb-2">Filters</h2>
        <div>
          <h3 className="font-semibold">Category</h3>
          <ul>
            <li><input type="checkbox" /> Men</li>
            <li><input type="checkbox" /> Women</li>
            <li><input type="checkbox" /> Kids</li>
            <li><input type="checkbox" /> Accessories</li>
            <li><input type="checkbox" /> Footwear</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Brand</h3>
          <ul>
            <li><input type="checkbox" /> Nike</li>
            <li><input type="checkbox" /> Adidas</li>
            <li><input type="checkbox" /> Puma</li>
            <li><input type="checkbox" /> Levi's</li>
            <li><input type="checkbox" /> Zara</li>
            <li><input type="checkbox" /> H&M</li>
          </ul>
        </div>
      </div>
      
      {/* Product List */}
      <div className="w-3/4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold">All Products</span>
          <div className="relative flex justify-center items-center gap-2">
          <span className="font-serif">{products.length} Products</span>
            <button onClick={sortbyHandle} className="border p-2 rounded flex items-center gap-2">
             <LuArrowDownUp/> Sort by
            </button>
            <ul className={`absolute ${sortVisible ? 'block' : 'hidden'} bg-gray-200 shadow-md top-10 w-44`}>
              {sortOptions.map(option => (
                <li key={option.value} onClick={() => {setSort(option.value); setSortVisible(!sortVisible)}} className="p-2 hover:bg-gray-100 cursor-pointer">
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {sortedProducts.map(product => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
              <h3 className="font-semibold mt-2">{product.name}</h3>
              <p>{product.category ? product.category : 'Unknown'} - {product.brand}</p>
              <p className="text-lg font-bold">${product.price} {product.oldPrice && <span className="line-through text-gray-500">${product.oldPrice}</span>}</p>
              <button className="mt-2 w-full bg-black text-white py-1">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop