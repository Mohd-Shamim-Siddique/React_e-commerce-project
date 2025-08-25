import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/mainLayout/Layout'
import { Cart, Home, Product } from './components/index/index'
import PageNotFound from './components/PageNotFound'
import { login, logout } from './toolkit/slices/userSlice'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'


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
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])


const App = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const fetchUser = async () => {
    const userData = await authService.getCurrentUser()
    if (userData) {
      dispatch(login({ userData }))
    } else {
      dispatch(logout())
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (loading) return <p style={{
    textAlign: 'center', marginTop: '200px', fontSize: '32px',
    fontWeight: 'bold'
  }}>loading...</p>


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
