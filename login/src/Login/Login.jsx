import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");
        
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response);
            props.onLogin();
        } catch (error) {
            console.error(error);
            setError("Login failed. Please check your email and password.");
        }
    }

    return (
        <div className={styles.bodyWrapper}>
            <div className={styles.loginContainer}>
                <h1 className={styles.loginTitle}>Login</h1>
                {error && <p className={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input id="1" type="text" placeholder="Email address" className={styles.inputEmail} value={email} onChange={handleEmailChange} />
                    <input id="2" type="password" placeholder="Password" className={styles.inputPassword} value={password} onChange={handlePasswordChange} />
                    <button type="submit" className={styles.loginButton}>LOGIN</button>
                </form>
                <a href="/signup" className={styles.signUpButton}>Sign Up</a>
            </div>
        </div>
    );
}

export default Login;
