import React from 'react';
import styles from './PageNotFound.module.css';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundAnimation}>404</div>
            <h1>Oops! Page Not Found</h1>
            <p>The page you're looking for doesn't exist or was moved.</p>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
};

export default PageNotFound;
