import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Components/Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   

      <div className='max-w-screen-2xl mx-auto bg-black'>
        <RouterProvider router={router} />
      </div>
      
    




  </React.StrictMode>
)
