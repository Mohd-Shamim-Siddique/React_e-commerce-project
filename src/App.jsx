import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/mainLayout/Layout'
import { Cart, Home, Product } from './components/index/index'
import PageNotFound from './components/PageNotFound'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [

      {
        path: '',
        element: <Home />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  },
])


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
