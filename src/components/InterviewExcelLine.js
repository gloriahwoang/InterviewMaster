import "./InterviewExcelLineStyle.css";
import React from 'react'
import { Component } from 'react';
// import { useState } from "react";
//import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway";

// const apigClient = apigClientFactory.newClient();
import axios from 'axios';

// axios.put(
//   "https://4j9xoqe241.execute-api.us-east-1.amazonaws.com/finalproject/setup",
//   {test: 'jh4476@columbia.edu'}
//   )

class InterviewExcelLine extends Component{
  constructor(props) {
    super(props);
    this.state = { linkedin: [],
      notes: [],
      referrer:[],
     };
  }
  saveReferrerInput = (e) => {
    this.setState({ inputReferrer: e.target.value });
    console.log(e.target.value);
  };
  saveLinkedInInput = (e) => {
    this.setState({ inputLinkedIn: e.target.value });
    console.log(e.target.value);
  };
  saveNotesInput = (e) => {
    this.setState({ inputNotes: e.target.value });
    console.log(e.target.value);
  };


  addNewItem = () => {
    let { linkedin,notes,referrer, inputNotes, inputLinkedIn, inputReferrer } = this.state;
    console.log(inputNotes, inputLinkedIn, inputReferrer)
    linkedin.push(inputLinkedIn);
    notes.push(inputNotes);
    referrer.push(inputReferrer);
    this.setState({
        linkedin: linkedin,
        notes:notes,
        referrer:referrer
     });
     console.log(this)
  };

  render(){

      function handleChange(){
          console.log("working input");
      }

    return(
          <div className='InterviewInformation'>
              <form>
                  <input className='company'
                      id='company'
                      type='text'
                      onChange={handleChange}
                      placeholder='Company'
                  />

                  <input className='position'
                      id='position'
                      type='text'
                      value=''
                      onChange={handleChange}
                      placeholder='Position'
                  /> 


                  <select className="Status" >
                      <option value='Submitted'>Submitted</option>
                      <option value='PhoneCall'>Phone Call</option>
                      <option value='1stRound'>1st Round</option>
                      <option value='2ndRound'>2nd Round</option>
                      <option value='3rdRound'>3rd Round</option>
                      <option value='4thRound'>4th Round</option>
                      <option value='Offered'>Offered</option>
                      <option value='Rejected'>Rejected</option>
                  </select>

                  <select className="Referral">
                      <option value='None'>None</option>
                      <option value='CoffeeChat'>Coffee Chat</option>
                      <option value='ReachedOut'>Reached Out</option>
                      <option value='Refferal'>Referral</option>
                  </select>

                  <input
                      id=''
                      type='date'
                      value=''
                      onChange={handleChange}
                      placeholder='Date'
                  />

                  <input
                      id=''
                      type='text'
                      value=''
                      onChange={handleChange}
                      placeholder='Location'
                  />

                  <input
                      id='Referrer'
                      type='text'
                      name = 'Referrer'
                      onChange={this.saveReferrerInput}
                      placeholder='Referrer'
                  />

                  <input
                      type="text"
                      id="LinkedIn"
                      name="LinkedIn"
                      onChange={this.saveLinkedInInput}
                      placeholder='LinkedIn'
                  />

                  <textarea
                      id='Notes'
                      type='text'
                      onChange={this.saveNotesInput}
                      placeholder='Notes'
                  />
            </form>
            <button onClick={this.addNewItem}>Save</button>
          </div>

      )
  }
  }
  
export default InterviewExcelLine;