import Navbar from "./Header/Navbar"
import Footer from "./Footer/Footer"
import { Outlet } from 'react-router-dom';
import { useEffect } from "react";
import { isUserLogin } from './Store/reducers';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    
    if(sessionStorage.getItem('user'))
    {
      dispatch(isUserLogin(1))
    }
  },[])
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
export default App
