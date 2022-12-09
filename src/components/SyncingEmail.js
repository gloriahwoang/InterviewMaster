import "./SyncingEmailStyles.css";
import React from 'react'


const SyncingEmailContainer = () => {
    return (
        <div className='sync-background'>
            <div className='sync'>
                <h1 className="sync-title">Syncing your Email</h1>
                <p className="sync-subtitle"> Do you agree to the <a href="">Terms of Service</a> and give InterviewMaster permission to sync to your email?</p>
                <div className="choice-button">
                    <button className="choice-accept">Accept Permission</button>
                    <button className="choice-decline">Decline Permission</button>
                </div>
                <button className="next">Next</button>
            </div>
        </div>



    );
};

export default SyncingEmailContainer;