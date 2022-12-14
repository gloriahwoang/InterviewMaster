import "./InterviewExcelLineStyle.css";
import React from 'react'
import { Component } from 'react';
import { Auth } from 'aws-amplify';
import axios from 'axios';
// import { response } from "express";

class InterviewExcelLine extends Component{
  
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      cmp: this.props.cmp,
      pos: this.props.pos,
      status: this.props.status,
      referral: this.props.referral,
      date: this.props.date,
      location: this.props.location,
      referrer: this.props.referrer,
      linkedin: this.props.linkedin,
      notes: this.props.notes,
      time: this.props.insertedAtTimestamp,
      email: this.props.useremail
    };
    this.handleSave = this.handleSave.bind(this);
  };
  
  // componentDidMount() { 
  //   this._isMounted = true;
  //   if (this.props.auth.setAuthStatus) {
  //     const email = this.props.auth.user.attributes.email;
  //     console.log(this)
  //     axios.get(
  //       'https://1er3sfgrog.execute-api.us-east-1.amazonaws.com/finalproject-fetch/search',
  //       {
  //         params: {
  //           'q': email
  //         }
  //         // headers: {'Access-Control-Allow-Origin': '*'},
  //       }) 
  //       .then((response) => {
  //         console.log(response.data);
  //         this.setState({
  //           cmp: response.data.cmp,
  //           pos: response.data.pos,
  //           status: response.data.status,
  //           referral: response.data.referral,
  //           date: response.data.date,
  //           location: response.data.location,
  //           referrer: response.data.referrer,
  //           link: response.data.link,
  //           notes: response.data.notes,
  //           time: response.data.insertedAtTimestamp,
  //           email: response.data.useremail});
  //       })
  //   }    
  // };
  // componentWillUnmount() {
  //   this._isMounted = false;
  // };
  
  update(property) {
    return (e) =>
      this.setState({
         [property]: e.target.value,
      });
  };

  handleSave(e) {
    e.preventDefault();
    if (this.props.auth.setAuthStatus) {
      // console.log("handlesave,this", this)
      axios.put(
        'https://4j9xoqe241.execute-api.us-east-1.amazonaws.com/finalproject/update',
        {
          params: {
            data:{
              cmp: this.state.cmp,
              pos: this.state.pos,
              status: this.state.status,
              referral: this.state.referral,
              date: this.state.date,
              location: this.state.location,
              referrer: this.state.referrer,
              linkedin: this.state.linkedin,
              notes: this.state.notes,
              insertedAtTimestamp: this.state.time,
              useremail: this.state.email,
            }
          }
        })
    }    
  }



  render() {
    console.log("state", this.state);
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
                        <option value='None'>None</option>
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
                        type='text'
                        value={this.state.date}
                        onChange={this.update("date")}
                        placeholder='Format 27 10 2022'
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
                        value={this.state.linkedin}
                        onChange={this.update("linkedin")}
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