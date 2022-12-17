import "./InterviewExcelLineStyle.css";
import React from 'react'
import { Component } from 'react';
import { Auth } from 'aws-amplify';
import axios from 'axios';
// import { useState } from "react";
//import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway";

// const apigClient = apigClientFactory.newClient();



class InterviewExcelLine extends Component{
  
  constructor(props) {
    super(props);
    this.state = { linkedin: [],
      notes: [],
      referrer:[],
      cmp: [],
      pos:[],
      date:[],
      link:[],
     };
  }
  saveReferrerInput = (e) => {
    this.setState({ inputReferrer: e.target.value });
  };
  saveLinkedInInput = (e) => {
    this.setState({ inputLinkedIn: e.target.value });
  };
  saveNotesInput = (e) => {
    this.setState({ inputNotes: e.target.value });
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
    //  console.log(this)
  };

  render(){

    if (this.props.auth.setAuthStatus) {
      const email = this.props.auth.user.attributes.email;
      
      axios.get(
        'https://4j9xoqe241.execute-api.us-east-1.amazonaws.com/finalproject/login',
        {
          params: {
            emailAddress: email
          }
        }
        ).then((response) => {
          // console.log(response.data.cmp)
          this.setState({ cmp: response.data.cmp });
          this.setState({ pos: response.data.pos });
          this.setState({ date: response.data.date });
          this.setState({ link: response.data.link });
          // console.log(this.state.cmp)
        })
        .catch((error) => {
          console.error(error);
        });
    }
    // console.log(this.state.cmp)
    // console.log(this.state)
      function handleChange(){
          console.log(this);
      }

    return(
          <div className='InterviewInformation'>
              <form>
                  <input className='company'
                      id='company'
                      type='text'
                      value = {this.state.cmp}
                      // onChange={resoonseee.data.cmp}
                      onChange={this.handleChange}
                      placeholder='Company'
                  />
                  <input className='position'
                      id='position'
                      type='text'
                      value = {this.state.pos}
                      // onChange={handleChange}
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
                      type='text'
                      value = {this.state.date}
                      onChange={handleChange}
                      placeholder='Date'
                  />

                  <input
                      id=''
                      type='text'
                      value = {this.state.link}
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