import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDetails } from "../Store/reducers";
import toast from "react-hot-toast";
import axios from "axios";
function MyCartProductSample({ product }) {
    const [id, setId] = useState(product.id)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function view(e){
        e.preventDefault();
        dispatch(productDetails(product));
        navigate('/view')        
    }

    async function drop(e){
      e.preventDefault();
      const data = {
        prod_id: product?.id,
        user_id: JSON.parse(sessionStorage.getItem('user')).UserId
      }
      await axios.post('/api/delete', data)
      .then(res=>{
        toast.success(res?.data?.message)
      })
      .catch(err=>console.log(err)
      )
           
  }

    return (
      <div className="shadow-lg shadow-gray-800 bg-white transition duration-300">
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
        <div className="flex">
        <button onClick={view} className={`w-full bg-yellow-400 hover:bg-orange-600 mt-4 py-2 font-bold text-white`}>
          View
        </button>
        <button onClick={drop} className={`w-full bg-red-600 hover:bg-orange-600 mt-4 py-2 font-bold text-white`}>
          Drop
        </button>
        </div>
      </div>
    );
}

export default MyCartProductSample
  