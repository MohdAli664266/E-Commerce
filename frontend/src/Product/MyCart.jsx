import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import sasuke from '../assets/sasuke.jpeg';
import iron from '../assets/iron.jpg';
import MyProductSample from "./MyProductSample";
import { useNavigate } from "react-router-dom";

 function MyCart() {
    const [products, setProducts] = useState([{}])
    const user = JSON.parse(sessionStorage.getItem('user'))
    const price = useRef()
    const quantity = useRef()
    const navigate = useNavigate()

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
        if(user!=null){
          axios.post('/api/myCart', user)
          .then(res=>{
              setProducts(res.data.data[0])
          })
          .catch(err=>console.log(err)
          )
        }else
        {
          toast.error('Login First');
          navigate('/login')
        }

        return ()=>{
          setProducts([{}])
        }
        
    },[]);

    const increaseQuantity = function(){
      quantity.current.innerText = parseInt(quantity.current.innerText) + 1
    }

    const decreaseQuantity = function(){
      quantity.current.innerText = parseInt(quantity.current.innerText) - 1
    }

    const paymentHandler = (index)=>{
      const method = paymentWay[index].method;
      toast.success('Payment success by '+method)
    }

  return (
    <div className="py-8 bg-gray-200">
      <h1 className="text-2xl font-bold mb-4 pl-4">My Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {products.map((product, index) => (
          <MyProductSample key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default MyCart
