import React, { useEffect, useState} from 'react';
import BackgroundImage from '../assets/login.jpg';
import sasuke from '../assets/sasuke.jpeg';

import axios from 'axios';
import toast from 'react-hot-toast';

function AddProduct() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [catId, setCatId] = useState();
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [allCategory, setAllCategory] = useState([]);
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [description, setDescription] = useState('')

    useEffect(()=>{
        axios.get('/api/allcategory')
        .then(res=>{
            setAllCategory(res.data.data)
        }).catch(err=>console.log(err)
        )
    }, [])

    async function submitHandler(e){
        e.preventDefault();
        toast.success('Working')
        
        
    }

    function categoryHandler(e){
        e.preventDefault();
        setCategory(e.target.value);
        setCatId(parseInt(document.querySelector("#dropdown").value))        
    }

    async function fileHandler(e){
        e.preventDefault();
        const image = e.target.files[0];
        if(image){
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result); // Store the base64 preview in state
            };
            reader.readAsDataURL(image);
        }else{
            toast.error('File is not uploaded')
        }
        
    }
    function reset(){
        setCategory('')
    }
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="absolute inset-0"></div>
            <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <form onSubmit={submitHandler} className="relative bg-gray-400/40 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md transform transition duration-300">
                    <h1 className="text-3xl font-bold text-center text-white mb-6 animate-fade-in">
                        Add Product
                    </h1>

                    {success && <p className='text-green-500 text-center'>{message}</p>}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className="text-sm font-medium text-white">Product Name</label>
                            <input
                                type="text"
                                id="name"
                                name='name'
                                value={name}
                                required
                                onChange={(e)=>{setName(e.target.value); setSuccess(false)}}
                                className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                placeholder="Name"
                            />
                        </div>

                        <div className="flex flex-col col-span-2 gap-1">
                            <label htmlFor="category" className="text-sm font-medium text-white">Category Name</label>
                            <select 
                                id="dropdown"
                                value={category}
                                className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                onChange={categoryHandler}>
                                <option value="">---Select---</option>
                                {
                                    allCategory.map((cate, index)=>(
                                        <option key={index} value={cate.id}>{cate.category_name}</option>
                                    ))
                                }
                            </select>
                            
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="brand" className="text-sm font-medium text-white">Brand</label>
                            <input
                                type="text"
                                id="brand"
                                name='brand'
                                value={brand}
                                required
                                onChange={(e)=>{setBrand(e.target.value); setSuccess(false)}}
                                className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                placeholder="Brand name"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="stock" className="text-sm font-medium text-white">Stock</label>
                            <input
                                type="text"
                                id="stock"
                                name='stock'
                                value={stock}
                                required
                                onChange={(e)=>{setStock(e.target.value); setSuccess(false)}}
                                className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                placeholder="Enter category name"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-sm font-medium text-white">Price/item</label>
                            <input
                                type="number"
                                id="price"
                                name='price'
                                value={price}
                                required
                                onChange={(e)=>{setPrice(e.target.value); setSuccess(false)}}
                                className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                placeholder="Enter category name"
                            />
                        </div>

                        <div className="flex flex-col col-span-3 gap-1">
                            <label htmlFor="description" className="text-sm font-medium text-white">Description</label>
                            <input
                                type="textarea"
                                id="description"
                                name='description'
                                value={description}
                                required
                                onChange={(e)=>setDescription(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                placeholder="Describe your product.."
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="preview" className="text-sm font-medium text-white">Preview</label>
                            <img 
                            src={file ? preview : sasuke}
                            className='h-20 w-20 object-contain'
                            alt="" />
                        </div>

                        <div className="flex flex-col col-span-2 gap-1">
                            <label htmlFor="file" className="text-sm font-medium text-white">Upload Image</label>
                            <input
                                type="file"
                                id="phote"
                                name='photo'
                                accept='image/*'
                                required
                                onChange={fileHandler}
                                className="bg-transparent rounded-full sm:px-2 py-1 text-black outline-none file:outline-none file:rounded-full file:text-gray-500 file:border-none file:cursor-pointer w-full px-4 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                            />
                        </div>
                        

                    </div>
                    <button
                            type="submit"
                            className={`w-full py-2 text-lg font-semibold rounded-lg text-white focus:outline-none transition-all bg-gray-600`}
                        >
                            Add Product
                        </button>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
