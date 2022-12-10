import "./InterviewsContainerStyles.css";
import InterviewExcelLine from "../components/InterviewExcelLine";
import React from 'react'

const apigClient = apigClientFactory.newClient();

const InterviewsContainer = () => {
    return (
        <div className="Container">
            <h1>Your Interviews</h1>
            <ul>
                <li>Company</li>
                <li>Position</li>
                <li>Status</li>
                <li>Referral</li>
                <li>Date</li>
                <li>Location</li>
                <li>Referrer</li>
                <li>LinkedIn</li>
            </ul>
            <InterviewExcelLine/>
            <InterviewExcelLine/>
            <button className="addbutton">
                +
            </button>
        </div>
        
        );
};

export default InterviewsContainer;