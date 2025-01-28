import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function ProductCard({ product }) {
    const [id, setId] = useState(product.id)
    const navigate = useNavigate();

    function addToCart(e){
        e.preventDefault();
        const user = JSON.parse(sessionStorage.getItem('user'));
        const payload = {
          id,
          user
        }
      
        if(sessionStorage.getItem('user'))
        {
          axios.post('/api/addTocart', payload)
          .then(res=>{
            toast.success(res.data.message);            
          })
          .catch(err=>toast.error(err.message)
          )
        }else
        {
          toast.error("Please login first");
          navigate('/login');
        }
        
        
    }

    return (
      <div className="shadow-lg shadow-gray-800 p-4 bg-white relative hover:shadow-2xl transition duration-300">
        {/* Product Image */}
        <div className="flex justify-center items-center h-40 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-36 object-contain"
          />
        </div>
        
        {/* Product Name */}
        <h2 className="text-lg font-bold text-center text-gray-800">
          {product.name}
        </h2>
        
        {/* Product Description */}
        <p className="text-sm text-center text-gray-500 mt-1">
          {product.description}
        </p>
        
        {/* Price */}
        <p className="text-lg font-bold text-center text-green-500 mt-4">
          ${product.price}
        </p>
  
        {/* Rating */}
        <div className="flex justify-center mt-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < product.rating ? "gold" : "gray"}
                viewBox="0 0 24 24"

                className="w-5 h-5 mx-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.375l2.753 5.578 6.16.894-4.457 4.343 1.053 6.145L12 17.812l-5.509 2.883 1.053-6.145-4.457-4.343 6.16-.894L12 3.375z"
                />
              </svg>
            ))}
        </div>
  
        {/* Add to Cart Button */}
        <button onClick={addToCart} className={`w-full mt-4 py-2 rounded-md font-bold text-white ${
            product.brand === 'Garnier' ? 'bg-green-500' 
            : product.brand === 'Adidas' ? 'bg-orange-500'
            :'bg-yellow-400 hover:bg-orange-600'}`}>
          Add to Cart
        </button>
      </div>
    );
}

export default ProductCard
  