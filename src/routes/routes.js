// routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Sign from '../sign';
import Login from '../login';
import Root from '../root';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<Root />,
      // loader:<div className='loader'></div>,
      children:[
        {
          index: true,
          element:<Sign />,
        },
        {
        path: "/login",
        element:<Login />,
      }
      
    ],
      errorElement:<div>Page not found</div>
    },
    
  ]
)
  


export default router;
