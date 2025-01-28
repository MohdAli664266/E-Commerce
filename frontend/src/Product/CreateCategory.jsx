import React, { useState} from 'react';
import BackgroundImage from '../assets/login.jpg';
import axios from 'axios';
import toast from 'react-hot-toast';

function CreateCategory() {
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    async function submitHandler(e){
        e.preventDefault();
        const data = {
            category
        }
        axios.post('/api/createcategory', data)
        .then(res=>{
            toast.success(res.data.message)
            setMessage(res.data.message)
            setSuccess(true)
        }).catch(err=>console.log(err)
        )
        reset();
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
                        Create Category
                    </h1>

                    {success && <p className='text-green-500 text-center'>{message}</p>}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-sm font-medium text-white">Category Name</label>
                            <input
                                type="text"
                                id="username"
                                name='username'
                                value={category}
                                required
                                onChange={(e)=>{setCategory(e.target.value); setSuccess(false)}}
                                className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                placeholder="Enter category name"
                            />
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-2 text-lg font-semibold rounded-lg text-white focus:outline-none transition-all bg-gray-600`}
                        >
                            Create
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateCategory;
