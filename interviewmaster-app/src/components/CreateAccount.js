import "./CreateAccountStyles.css";
import React from 'react';
import { Link } from 'react-router-dom';


const CreateAccount = () => {
    return (
        <div className='create-background'>
            <div className='create'>
                <h1 className="create-title">Create a New Account</h1>
                <p className="create-subtitle">Come join InterviewMaster today! Already have an account?
                    <a href="./login" className='loginhere'> Login here</a>
                    .</p>
                
                
                <div className="auth-form-container">
                <form className="create-form">
                    <label for='fullname'>Full Name</label>
                    <input type='fullname' placeholder='John Doe' id='fullname' name='fullname'/>
                    <label for='email'>Email</label>
                    <input type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
                    <label for='password'>Password</label>
                    <input type='password' placeholder='**********' id='password' name='password'/>
                    <Link to = "/sync"><button className="create-button">Join InterviewMaster</button></Link>
                </form>
                    <p>By submitting the form you agree to InterviewMaster's <a href="..">Terms of Service</a></p>
                </div>
               
            </div>
        </div>



    );
};

export default CreateAccount;