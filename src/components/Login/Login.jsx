import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { login as authLogin } from '../../toolkit/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import './Login.responsive.css'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [error, setError] = useState('')

  const loginUser = async (data) => {
    setError('')
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin({ userData }));
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit(loginUser)} className="login-form">
        <h2 className="login-title">Login</h2>
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address"
              }
            })}
            className="form-input"
          />
          {errors.email && <span className="error-text">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
            className="form-input"
          />
          {errors.password && <span className="error-text">{errors.password.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Login</button>

        <p className="signup-text">
          Don't have an account?{' '}
          <span className="signup-link" onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login
