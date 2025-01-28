import axios from "axios";
import { useEffect, useState} from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import sasuke from '../assets/sasuke.jpeg';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FeedbackCard from "./FeedbackCard";

function MyCart() {
    const [products, setProducts] = useState([{}])
    const [comment, setComment] = useState(false)
    const user = JSON.parse(sessionStorage.getItem('user'))
    const price = useRef()
    const quantity = useRef()
    const navigate = useNavigate()
    const txtArea = useRef()
    const product = useSelector(state=>state.productInfo?.product)
    const dispatch = useDispatch()
    const rating = product?.rating;

    const paymentWay = [
      {method:"PayTM",
        img: ''
      },
      {method:"Google",
        img: ''
      },
      {method:"PhonePay",
        img: ''
      },
      {method:"Credit Card",
        img: ''
      }, 
      {method:"Netbanking",
        img: ''
      },
    ]
    useEffect(()=>{
      const prod_id = {prod_id : product?.id}
      axios.post('/api/productFeedback', prod_id)
      .then(res=>{
          setProducts(res.data.data[0])
      })
      .catch(err=>console.log(err)
      )        
    },[comment]);

    const increaseQuantity = function(){
      quantity.current.innerText = parseInt(quantity.current.innerText) + 1
    }

    const decreaseQuantity = function(){
      const qnt = parseInt(quantity.current.innerText);
      if(qnt > 1){
      quantity.current.innerText = qnt - 1
      }
    }

    const paymentHandler = (index)=>{
      const method = paymentWay[index].method;
      toast.success('Payment success by '+method)
    }

    async function feedbackHandler(){
      const data = {
        user,
        product_id:product?.id,
        feedbackText: txtArea.current.value
      }
      await axios.post('/api/feedback', data)
      .then(res=>{
        txtArea.current.value = ''
        setComment(true)
      })
      .catch(err=>console.log(err)
      )
    }

  return (
    <div className="bg-white/70 py-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
  {/* Product Image */}
  <div className="h-[400px] w-full flex justify-center items-center bg-gray-100 rounded-lg">
    <img className="w-full h-full p-4 max-w-xs object-contain" src={product?.image} alt="Sasuke Uchiha" />
  </div>

  {/* Product Details */}
  <div className="flex flex-col p-4">
    <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
    <h3 className="text-lg text-gray-600">{product?.brand}</h3>
    <div className="flex items-center mt-4">
      <span className="mr-2 font-medium">Rating:</span>
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill={i < rating ? "rgb(34,197,94)" : "gray"}
            viewBox="0 0 24 24"
            className="w-6 h-6 mx-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3.375l2.753 5.578 6.16.894-4.457 4.343 1.053 6.145L12 17.812l-5.509 2.883 1.053-6.145-4.457-4.343 6.16-.894L12 3.375z"
            />
          </svg>
        ))}
    </div>
    <p className="mt-4 text-gray-700 leading-relaxed">
   {product?.description}
    </p>

    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-2">
        Price: <span className="text-4xl text-green-500" ref={price}>${product?.price}</span>
      </h2>
      <h2 className="text-xl mb-4">Quantity: <b className="text-2xl" ref={quantity}>1</b></h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-black hover:bg-gray-800 text-white py-2 rounded-md shadow" onClick={decreaseQuantity}>
          Decrease
        </button>
        <button className="bg-black hover:bg-gray-800 text-white py-2 rounded-md shadow" onClick={increaseQuantity}>
          Increase
        </button>
      </div>
    </div>
  </div>

  {/* Payment Methods */}
  <div className="flex flex-col p-4 bg-gray-400/20 rounded-lg gap-4 shadow-md">
    <h1 className="text-xl font-bold text-gray-800">Choose Payment Method</h1>
    {paymentWay.map((method, index) => (
      <button
        key={index}
        onClick={()=>paymentHandler(index)}
        className="bg-white hover:bg-black hover:text-white py-2 rounded-md shadow"
      >
        {method.method}
        
      </button>
    ))}
  </div>
</div>

<div className="grid grid-cols-1 mt-4 gap-6 bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
  {/* Feedback Header */}
  <div className="bg-gray-100 rounded-md p-4">
    <h1 className="font-bold text-2xl text-gray-800">Feedback</h1>
  </div>

  {/* Feedback Input */}
  <div className="flex flex-col sm:flex-row items-center gap-4">
    <textarea
      placeholder="Write your feedback here..."
      ref={txtArea}
      className="w-full sm:w-3/4 p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-[1px] focus:ring-indigo-500 focus:border-black"
      rows="2"
    ></textarea>
    <button
      onClick={feedbackHandler}
      className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-6 rounded-lg shadow transition-all duration-200 ease-in-out">
        Submit
    </button>
  </div>

  {/* User Feedback Display */}
  {
    products.map((feedback, index)=>
      <FeedbackCard key={index} feedback={feedback}/>
    )
  }
</div>

    </div>
  );
}

export default MyCart
