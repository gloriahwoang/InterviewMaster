import "./InterviewsContainerStyles.css";
import InterviewExcelLine from "../components/InterviewExcelLine";
import React from 'react'

// const apigClient = apigClientFactory.newClient();

class InterviewsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputList: []};
        this.handleclick = this.handleclick.bind(this);
    }

    handleclick = () => {
        const inputList = this.state.inputList;
        this.setState({
            inputList: inputList.concat(<InterviewExcelLine/>)
        });
    }
    render() {
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
            <InterviewExcelLine />
            {this.state.inputList.map(function (input, index) {
                    return input;  
                })}
            <button onClick={this.handleclick} className="addbutton">+</button>
                
        </div>
        
    );
    }
};

export default InterviewsContainer;