import React from 'react'
import { Link } from 'react-router-dom'

const TopBanner = () => {
    return (

        <nav className="top-banner flex container">
            <div className="top-text">
                <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div className="logins flex">
                <Link to='/login'>SIGN IN</Link>
                <Link to='/signup'>SIGN UP</Link>
            </div>
        </nav>

    )
}

export default TopBanner