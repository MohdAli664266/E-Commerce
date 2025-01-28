import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isUserLogin } from '../Store/reducers';
function Logout() {
    sessionStorage.clear();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(isUserLogin(0))
      navigate('/login')
    }, [])
  return (
    <div>Logout</div>
  )
}

export default Logout