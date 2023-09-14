import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app/app'
import './index.scss'
import {createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";




const router = createBrowserRouter([
    {
        path: "/:mode",
        element:  <App />,
    },
    {
        path:"/",
        element:<Navigate to="/day" replace />
    }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
