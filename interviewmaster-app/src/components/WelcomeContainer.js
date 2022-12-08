import "./WelcomeContainerStyles.css";
import React from 'react'


const WelcomeContainer = () => {
    return (
        <div className="Container">
            <h1>Welcome to InterviewMaster!</h1>
            <p>You have successfully registered a new account.</p>
            <p>We've sent you a email. Please click on the confirmation link to verify your account.</p>
        </div>
        );
};

export default WelcomeContainer;