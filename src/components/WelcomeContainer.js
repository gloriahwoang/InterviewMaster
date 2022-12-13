import "./WelcomeContainerStyles.css";
import React from 'react'


const WelcomeContainer = () => {
    return (
        <div className="Container">
            <h1>Welcome to InterviewMaster!</h1>
            <p>You have successfully registered a new account.</p>
            <p>You should have received two emails.
                Please verify both confirmation links to successfully create a new account.</p>
        </div>
        );
};

export default WelcomeContainer;