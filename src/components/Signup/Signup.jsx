import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { login } from '../../toolkit/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import './Signup.css'
import './Signup.responsive.css'

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error, setError] = useState('')

    const signupUser = async (data) => {
        setError('')
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login({ userData }))
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="signup-wrapper">
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit(signupUser)} className="signup-form">
                <h2 className="signup-title">Create Account</h2>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: "Name is required" })}
                        className="form-input"
                    />
                    {errors.name && <span className="error-text">{errors.name.message}</span>}
                </div>

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
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }
                        })}
                        className="form-input"
                    />
                    {errors.password && <span className="error-text">{errors.password.message}</span>}
                </div>

                <button type="submit" className="submit-btn">Sign Up</button>

                <p className="signup-text">
                    Already have an account?{' '}
                    <span className="signup-link" onClick={() => navigate('/login')}>
                        Login
                    </span>
                </p>
            </form>
        </div>
    )
}

export default Signup

