import "./InterviewsContainerStyles.css";
import InterviewExcelLine from "../components/InterviewExcelLine";
import React from 'react';
import InterviewExcelLineBlank from "./InterviewExcelLineBlank";
import axios from 'axios';

class InterviewsContainer extends React.Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            inputList: [],
            excelList : []};
        this.handleclick = this.handleclick.bind(this);
  }

  handleclick = () => {
    const inputList = this.state.inputList;
    this.setState({
      inputList: inputList.concat(<InterviewExcelLineBlank auth={this.props.auth} />)
    });
  };
    
    
    componentDidMount() {
        this._isMounted = true;
        if (this.props.auth.setAuthStatus) {
            const email = this.props.auth.user.attributes.email;
            console.log(this)
            axios.get(
                'https://1er3sfgrog.execute-api.us-east-1.amazonaws.com/finalproject-fetch/search',
                {
                    params: {
                        'q': email
                    }
                    // headers: {'Access-Control-Allow-Origin': '*'},
                })
                .then((response) => {
                    console.log(response.data);
                    response.data.map((item,index) => {
                        this.setState({
                            excelList: this.state.excelList.concat(<InterviewExcelLine auth={this.props.auth} cmp={item.cmp} pos={item.pos}
                                status={item.status} date={item.date} notes={item.notes} referral={item.referral} referrer={item.referrer} linkedin={item.linkedin} location={item.location} key={index}
                                insertedAtTimestamp={item.insertedAtTimestamp} useremail={item.useremail} />)
                            
                        })
                    })
                })
        }
    }

  componentWillUnmount() {
    this._isMounted = false;
  };
  

    render() {
      console.log("excelist",this.state.excelList);
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

            {this.state.excelList.map((input, index) => (
              input
          ))}    
          {this.state.inputList.map((input, index) => (
            // <InterviewExcelLineBlank auth={this.props.auth} key={index} />
              input
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
