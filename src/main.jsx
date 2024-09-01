import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

const router =  createBrowserRouter([
  {path: "/", element: <Home />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
