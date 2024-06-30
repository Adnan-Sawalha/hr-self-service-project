import React, {useState} from 'react'
import styles from './Login.module.css'

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        props.onLogin();
    }

    return (
        <div className={styles.bodyWrapper}>
            <div className={styles.loginContainer}>
                <h1 className={styles.loginTitle}>Login</h1>
                <form onSubmit = {handleSubmit}>
                    <input id = "1" type="text" placeholder="email address" className={styles.inputEmail} value = {email} onChange = {handleEmailChange}/>
                    <input id = "2" type="password" placeholder="password" className={styles.inputPassword} value = {password} onChange = {handlePasswordChange}/>
                    <button type="submit" className={styles.loginButton}>LOGIN</button>
                </form>
                <a className={styles.signUpButton}>Sign Up</a>
            </div>
        </div>
    );
}

export default Login;
