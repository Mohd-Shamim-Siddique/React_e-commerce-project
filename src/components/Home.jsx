import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { status } = useSelector(state => state.user)

  useEffect(() => {
    if (!status) { 
      navigate('/login')
    }
  }, [status, navigate])

  if (!status) return null

  return (
    <main className="container">

      <section className="flex container hero-section">
        <div className="right-header flex flex-col">
          <p className="first-text">Explore the Latest in Tech Industries</p>
          <h1>Your Destination for Cutting-Edge Gadgets!</h1>
          <p>
            Welcome to Thapa eComStore, your ultimate destination for cutting-edge gadgets! Explore the latest in tech
            innovation and style with us. Shop now and discover a world of possibilities!
          </p>
          <button className="flex items-center gap-2 mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => navigate('/product')}
          >
            Explore Our Products <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="left-header">
          <img src="https://jscourse.csscourse.online/assets/heroSection-Cr4Kp07R.svg" alt="Hero Section" />
        </div>
      </section>

    </main>
  )
}

export default Home
