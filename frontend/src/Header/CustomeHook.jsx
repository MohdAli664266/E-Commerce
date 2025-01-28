import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useNavItems = () => {
  const [navItems, setNavItems] = useState(['Home', 'Shop', 'Contact Us', 'Login', 'MyCart']);
  
  const isLogin = useSelector((state) => state.userInfo.isLogin);

  useEffect(() => {
    setNavItems((prev) => {
      const updatedNav = [...prev];
      updatedNav[3] = isLogin ? 'Logout' : 'Login'; 
      return updatedNav;
    });
  }, [isLogin]); // Dependency array with `isLogin`

  return navItems;
};

export default useNavItems;
