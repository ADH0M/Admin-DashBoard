import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Overviwe from './components/pages/Overviwe.jsx'
import Products from './components/pages/Products.jsx'
import UsersPage from './components/pages/Users.jsx'
import SalesPage from './components/pages/Sales.jsx'
import OrdersPage from './components/pages/Orders.jsx'
import AnalyticsPage from './components/pages/Analytics.jsx'
import SettingsPage from './components/pages/Settings.jsx'

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
        element:<Products/>
      }, 
      {
        path:'/Users',
        element:<UsersPage/>
      }, 
      {
        path:'/Sales',
        element:<SalesPage/>
      }, 
      {
        path:'/Orders',
        element:<OrdersPage/>
      }, 
      {
        path:'/Analytics',
        element:<AnalyticsPage/>
      }, 
      {
        path:'/Settings',
        element:<SettingsPage/>
      }, 
    ],
    errorElement:<div>error </div>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
