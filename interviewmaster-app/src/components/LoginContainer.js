import "./LoginStyles.css";
import React from 'react'


const LoginContainer = () => {
    return (
        <div className='login-background'>
            <div className='login'>
                <h1 className="login-title">Login</h1>
                <p className="login-subtitle">Don't have an account? <a href="./signup" className='registerhere'>
                    Register here.
                </a></p>
                

                <form className="login-form">
                    <label for='email'>Email</label>
                    <input type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
                    <label for='password'>Password</label>
                    <input type='password' placeholder='**********' id='password' name='password'/>
                    <button className="login-button">Login</button>
                </form>
            </div>
        </div>



    );
};

export default LoginContainer;