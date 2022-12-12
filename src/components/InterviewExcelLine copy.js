import "./InterviewExcelLineStyle.css";
import React from 'react'
import { Component } from 'react';
import { useState } from "react";

// const apigClient = apigClientFactory.newClient();


class InterviewExcelLine extends Component{
  state = {
    notes: "",
    linkedin: "",
    referrer:"",
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
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
                      onChange={this.saveInput}
                      placeholder='Referrer'
                  />

                  <input
                      type="text"
                      id="LinkedIn"
                      name="LinkedIn"
                      onChange={this.saveInput}
                      placeholder='LinkedIn'
                  />

                  <textarea
                      id='Notes'
                      type='text'
                      onChange={this.saveInput}
                      placeholder='Notes'
                  />
            </form>
            <button id = "save-button">Save</button>
          </div>

      )
  }
  }
  
export default InterviewExcelLine;