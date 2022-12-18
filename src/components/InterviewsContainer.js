import "./InterviewsContainerStyles.css";
import InterviewExcelLine from "../components/InterviewExcelLine";
import React from 'react';

class InterviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputList: [] };
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick = () => {
    const inputList = this.state.inputList;
    this.setState({
      inputList: inputList.concat(<InterviewExcelLine auth={this.props.auth} />)
    });
  };

  render() {
    return (
      <div className="Container">
        <h1 >Your Interviews</h1>
        {/* <ul>
          <li>Company</li>
          <li>Position</li>
          <li>Status</li>
          <li>Referral</li>
          <li>Date</li>
          <li>Location</li>
          <li>Referrer</li>
          <li>LinkedIn</li>
        </ul> */}
        <div className='container2'>
          <InterviewExcelLine auth={this.props.auth} />
          {this.state.inputList.map((input, index) => (
            <InterviewExcelLine auth={this.props.auth} key={index} />
          ))}

          <div className='addbuttoncontainer'>
          <button onClick={this.handleclick} className="addbutton">
            +
          </button>
        </div>

        </div>
      </div>
    );
  }
}

export default InterviewsContainer;
