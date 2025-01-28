import React, { useEffect, useState} from 'react';
import BackgroundImage from '../assets/login.jpg';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { isUserLogin } from '../Store/reducers';
import { useDispatch } from 'react-redux';
function LoginSignup() {
    const [disable, setDisable] = useState(true);
    const [heading, setHeading] = useState('Login');
    const [isLogin, setIsLogin] = useState(true);
    const [email, setemail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({});
    const [paramessage, setParamessage] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{  
        
        if(sessionStorage.getItem('user')){
            navigate('/shop')
        }
        
        if(username.includes("@")){
            setemail(username);
        }
        const newValues = {
            username: username,
            password: password,
            email: email,
          };
          setMessage(newValues);          
    }, [username, password, email]);

    function loginHandler(e) {
        e.preventDefault();
        setIsLogin(true);
        setHeading('Login');
    }

    function signupHandler(e) {
        e.preventDefault();
        setIsLogin(false);
        setHeading('Signup');
    }

    function passwordLengthChecker(e) {
        const value = e.target.value;
        setPassword(value);
        setDisable(value.length <= 7 || username.length <= 3);
        if(value.length <=7)
        {
            setParamessage("Password must contain atleas 8 characters");
        }else{
            setParamessage('');
        }
    }

    function usernameLengthChecker(e) {
        const value = e.target.value;
        setUsername(value);
        setDisable(value.length <= 3 || password.length <= 7);
        if(value.length <=3)
        {
            setParamessage("Username must contain atleas 4 characters");
        }else{
            setParamessage('');
        }
    }

    function emailLengthChecker(e) {
        const value = e.target.value;
        setemail(value);
        if(!value.includes("@"))
        {
            setParamessage("Invald Email");
        }else{
            setParamessage('');
        }
    }

    async function submitHandler(e){
        e.preventDefault();
        if(isLogin){
            await axios.post('/api/login',message)
            .then(response => {
                if(response.status==200){
                    toast.success(response.data.message);
                    sessionStorage.setItem('user', JSON.stringify(response.data.data));
                    dispatch(isUserLogin(1));
                    navigate('/products')
                }
            })
            .catch(error => {
                toast.error(error.response.data.message)                
            });
        }else
        {
            await axios.post('/api/signup',message)
            .then(response => {
                if(response.status==200){
                    toast.success(response.data.message);
                    navigate('/table')
                }                
            })
            .catch(error =>{
                toast.error(error.response.data.message);
                console.log((error));
            });
        }
    
      reset();
    }

    function reset(){
        setemail('');
        setPassword('');
        setUsername('');
        setDisable(!disable);
    }
    return (
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="absolute inset-0"></div>
            <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
                <form onSubmit={submitHandler} className="relative bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md transform transition duration-300">
                    <h1 className="text-3xl font-bold text-center text-white mb-6 animate-fade-in">
                        {heading} Form
                    </h1>

                    <h3 className={`w-full pb-2 text-lg font-semibold focus:outline-none transition-all ${disable ? 'block text-red-600' : 'hidden'}`}>
                       {paramessage}
                    </h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="text-sm font-medium text-white">Username</label>
                            <input
                                type="text"
                                id="username"
                                name='username'
                                value={username}
                                onChange={usernameLengthChecker}
                                className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                placeholder="Enter your username"
                            />
                        </div>

                        {!isLogin && (
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name='email'
                                    value={email}
                                    onChange={emailLengthChecker}
                                    className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                    placeholder="email your password"
                                />
                            </div>
                        )}

                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-sm font-medium text-white">Password</label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                value={password}
                                onChange={passwordLengthChecker}
                                className="w-full px-4 py-2 rounded-lg text-gray-600 focus:ring-[1px] focus:ring-indigo-400/90 focus:outline-none"
                                placeholder="Enter your password"
                            />
                        </div>

                       

                        <button
                            type="submit"
                            disabled={disable}
                            className={`w-full py-2 text-lg font-semibold rounded-lg text-white focus:outline-none transition-all ${disable ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300 hover:bg-gray-400/90'}`}
                        >
                            Submit
                        </button>

                        <div className="flex gap-4 justify-center mt-4">
                            <button
                                onClick={signupHandler}
                                className={`px-4 py-2 text-sm font-medium rounded-lg text-white transition-all ${isLogin ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-200 cursor-not-allowed'}`}
                            >
                                Signup
                            </button>
                            <button
                                onClick={loginHandler}
                                className={`px-4 py-2 text-sm font-medium rounded-lg text-white transition-all ${!isLogin ? 'bg-gray-300 hover:bg-gray-400' : 'bg-gray-200 cursor-not-allowed'}`}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginSignup;
