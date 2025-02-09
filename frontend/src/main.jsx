import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ContactUs from './Home/Contactus.jsx'
import Home from './Home/Home.jsx'
import Table from './Home/Table.jsx'
import {Toaster} from 'react-hot-toast'
import Products from './Product/Products.jsx'
import MyCart from './Product/MyCart.jsx'
import View from './Product/View.jsx'
import LoginSignup from './Home/LoginSignup.jsx'
import {Provider} from 'react-redux'
import { store } from './Store/store.js'
import Logout from './Home/Logout.jsx'
import Shop from './Shop/Shop.jsx'
import AdminPanel from './Admin/AdminPanel.jsx'
import CreateCategory from './Product/CreateCategory.jsx'
import AddProduct from './Product/AddProduct.jsx'
const route = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/login',
        element: <LoginSignup/>
      },
      {
        path:'/home',
        element: <Home/>
      },
      {
        path:'/products',
        element: <Products/>
      },
      {
        path:'/contactus',
        element: <ContactUs/>
      },
      {
        path:'/shop',
        element: <Shop/>
      },
      {
        path:'/signup',
        element: <LoginSignup/>
      },
      {
        path:'/logout',
        element: <Logout/>
      },
      {
        path:'/mycart',
        element: <MyCart/>
      },
      {
        path:'/view',
        element: <View/>
      },
      {
        path:'/table',
        element: <Table/>
      },
      {
        path:'/adminpanel',
        element: <AdminPanel/>,
        children:[
          {
            path: 'addproduct',
            element:<AddProduct/>
          },
          {
            path: 'createcategory',
            element:<CreateCategory/>
          },
          {
            path: 'allusers',
            element:<Table/>
          },
          
        ]
      },
    ]
  },

  {
    path:'*',
    element:<ContactUs/>
  }
])
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
    <RouterProvider router={route}/>
    <Toaster/>
    </Provider>
  // </StrictMode>,
)
