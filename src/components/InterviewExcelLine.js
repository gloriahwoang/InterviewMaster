import "./InterviewExcelLineStyle.css";
import React from 'react'
import { Component } from 'react';
import { Auth } from 'aws-amplify';
import axios from 'axios';
import Select from 'react-select';
// import { useState } from "react";
//import { APIGatewayClient, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway";

// const apigClient = apigClientFactory.newClient();



class InterviewExcelLine extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      status: "",
      date: "",
      location: "",
      referrer: "",
      linkedin: "",
      notes: ""
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
      
      const resoonseee = axios.get(
        'https://4j9xoqe241.execute-api.us-east-1.amazonaws.com/finalproject/login',
        {
          headers: {
            'x-amz-meta-emailAddress': email,
            'Access-Control-Allow-Origin': '*'
          }
        }
      )

      console.log('lemme have a look shit',resoonseee)
    }
    // console.log('InterviewExcel',this);

      // function handleChange(){
      //     console.log("working input");
      // }
    
    console.log("this.props", this.props);
    console.log("this.state", this.state);
    return (
      <div className='InterviewInformation'>
        <form>
          <input className='company'
            id='company'
            type='text'
            value={this.state.company}
            onChange={this.update("company")}
            placeholder='Company'
            />

                  
          <input className='position'
                id='position'
                type='text'
                value={this.state.position}
                onChange={this.update("position")}
                placeholder='Position'
            /> 


          <select className="Status"  value={this.state.status} onChange={this.update("status")}>
              <option value='Submitted'>Submitted</option>
              <option value='PhoneCall'>Phone Call</option>
              <option value='1stRound'>1st Round</option>
              <option value='2ndRound'>2nd Round</option>
              <option value='3rdRound'>3rd Round</option>
              <option value='4thRound'>4th Round</option>
              <option value='Offered'>Offered</option>
              <option value='Rejected'>Rejected</option>
          </select>

        
          <select className="Referral" value={this.state.referral} onChange={this.update("referral")}>
              <option value='None'>None</option>
              <option value='CoffeeChat'>Coffee Chat</option>
              <option value='ReachedOut'>Reached Out</option>
              <option value='Refferal'>Referral</option>
          </select>

          <input
              id=''
              type='date'
              value={this.state.date}
              onChange={this.update("date")}
              placeholder='Date'
          />

          <input
              id=''
              type='text'
              value={this.state.location}
              onChange={this.update("location")}
              placeholder='Location'
          />

          <input
              id='Referrer'
              type='text'
              value={this.state.referrer}
              onChange={this.update("referrer")}
              placeholder='Referrer'
          />

          <input
              type="text"
              id="LinkedIn"
              value={this.state.linkedin}
              onChange={this.update("linkedin")}
              placeholder='LinkedIn'
          />

          <textarea
              id='Notes'
              type='text'
              value={this.state.notes}
              onChange={this.update("notes")}
              placeholder='Notes'
          />
        </form>
        <button onClick={this.handleSave}>Save</button>
      </div>
    )
  }
  }
  
export default InterviewExcelLine;