import "./InterviewExcelLineStyle.css";
import React from 'react'
import { Component } from 'react';
import { Auth } from 'aws-amplify';
import axios from 'axios';

class InterviewExcelLine extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      cmp: [],
      pos: [],
      status: [],
      referral: [],
      date: [],
      location: [],
      referrer: [],
      link: [],
      notes: [],
    };
    this.handleSave = this.handleSave.bind(this);
  };
  
  
  update(property) {
    return (e) =>
      this.setState({
         [property]: e.target.value,
      });
  };

  handleSave(e) {
    e.preventDefault();
    // let excel = {
    //   company: this.state.company,
    //   position: this.state.position,
    //   status: this.state.status,
    //   referral: this.state.referral,
    //   date: this.state.date,
    //   location: this.state.location,
    //   referrer: this.state.referrer,
    //   linkedin: this.state.linkedin,
    //   notes: this.state.notes
    // };
  }


  render(){

    if (this.props.auth.setAuthStatus) {
      const email = this.props.auth.user.attributes.email;
      console.log(this)
      axios.get(
        'https://4j9xoqe241.execute-api.us-east-1.amazonaws.com/finalproject/login',
        {
          params: {
            'emailAddress': email
          }
          // headers: {'Access-Control-Allow-Origin': '*'},
        })
      // console.log(response)
      // this.setState({cmp: response.data.cmp})
      
        // .then((response) => {
        //   this.setState({ cmp: response.data.cmp });
        //   this.setState({ pos: response.data.pos });
        //   this.setState({ date: response.data.date });
        //   this.setState({ link: response.data.link });
        // })
    }    
    

    return(
          <div className='InterviewInformation'>
              <form>
                  <input className='company'
                      id='company'
                      type='text'
                      value={this.state.cmp}
                      onChange={this.update("cmp")}
                      placeholder='Company'
                  />

                  <div className='labelinput'>
                    <label htmlFor='label'>Position</label>
                    <input className='position'
                        id='position'
                        type='text'
                        value={this.state.pos}
                        onChange={this.update("pos")}
                        placeholder='Position'
                    />
                  </div>

                  <div className='labelinput'>
                    <label htmlFor='label'>Status</label>
                    <select className="Status" value={this.state.status} onChange={this.update("status")}>
                        <option value='Submitted'>Submitted</option>
                        <option value='PhoneCall'>Phone Call</option>
                        <option value='1stRound'>1st Round</option>
                        <option value='2ndRound'>2nd Round</option>
                        <option value='3rdRound'>3rd Round</option>
                        <option value='4thRound'>4th Round</option>
                        <option value='Offered'>Offered</option>
                        <option value='Rejected'>Rejected</option>
                    </select>
                  </div>

                  <div className='labelinput'>
                    <label htmlFor='label'>Referral</label>
                    <select className="Referral" value={this.state.referral} onChange={this.update("referral")}>
                        <option value='None'>None</option>
                        <option value='CoffeeChat'>Coffee Chat</option>
                        <option value='ReachedOut'>Reached Out</option>
                        <option value='Refferal'>Referral</option>
                    </select>
                  </div>
                  
                  <div className='labelinput'>
                    <label htmlFor='label'>Date</label>
                    <input className='Date'
                        id=''
                        type='date'
                        value={this.state.date}
                        onChange={this.update("date")}
                        placeholder='Date'
                    />
                  </div>


                  <div className='labelinput'>
                    <label htmlFor='label'>Location</label>
                    <input className='location'
                        id=''
                        type='text'
                        value={this.state.location}
                        onChange={this.update("location")}
                        placeholder='Location'
                    />
                  </div>


                  <div className='labelinput'>
                    <label htmlFor='label'>Referrer</label>
                    <input className='referrer'
                        id='Referrer'
                        type='text'
                        value={this.state.referrer}
                        onChange={this.update("referrer")}
                        placeholder='Referrer'
                    />
                  </div>

                  <div className='labelinput'>
                    <label htmlFor='label'>LinkedIn</label>
                    <input className='Linkedin'
                        type="text"
                        id="LinkedIn"
                        value={this.state.link}
                        onChange={this.update("link")}
                        placeholder='LinkedIn'
                    />
                  </div>

                  <div className='labelinput'>
                    <label htmlFor='label'>Notes</label>
                    <textarea className='notes'
                        id='Notes'
                        type='text'
                        value={this.state.notes}
                        onChange={this.update("notes")}
                        placeholder='Notes'
                    />
                  </div>
                    
              </form>
              <button onClick={this.handleSave}>Save</button>
              
            </div>
            
          

      )
  }
  }
  
export default InterviewExcelLine;