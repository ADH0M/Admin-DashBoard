import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Overviwe from './components/pages/Overviwe.jsx'

const router = createBrowserRouter([
  {
    path:'',
    element:<App/>,
    children:[
      {
        index:true,
        element:<Overviwe/>
      }, 
      {
        path:'/Products',
        element:<div>Products</div>
      }, 
      {
        path:'/Users',
        element:<div>Users</div>
      }, 
      {
        path:'/Sales',
        element:<div>Sales</div>
      }, 
      {
        path:'/Orders',
        element:<div>Orders</div>
      }, 
      {
        path:'/Analytics',
        element:<div>Analytics</div>
      }, 
      {
        path:'/Settings',
        element:<div>Settings</div>
      }, 
    ],
    errorElement:<div>error </div>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
