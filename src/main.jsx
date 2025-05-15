import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import ErrorPage from './Page/ErrorPage.jsx'
import Home from './Page/Home.jsx'
import ProductList from './Page/ProductList.jsx'
import CartList from './Page/CartList.jsx'
import ProductDetail from './Page/ProductDetail.jsx'
import { Provider } from 'react-redux'
import store from './State/Store.js'

const appRouter = createBrowserRouter([
     {
      path:'/',
      element:<App/>,
      errorElement:<ErrorPage/>,
      children:[
         {
          path:'/',
          element:<Home/>
         },
         {
          path:'/products',
          element:<ProductList/>
         },
         {
          path:"/cart",
          element:<CartList/>
         },
         {
          path:"/productDetail/:id",
          element:<ProductDetail/>
         }
      ]
     }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

   <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)
