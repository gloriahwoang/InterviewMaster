import "./InterviewExcelLineStyle.css";
import React from 'react'
import { Component } from 'react';
import { useState } from "react";


class InterviewExcelLine extends Component{
    render(){
      return(
            <div className='InterviewInformation'>
                <form>
                    <input className='company'
                        id='company'
                        type='text'
                        value=''
                        class=''
                        onChange=''
                        placeholder='Company'
                    />

                    <input className='position'
                        id='position'
                        type='text'
                        value=''
                        class=''
                        onChange=''
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
                        value=''
                        class=''
                        onChange=''
                        placeholder='Date'
                    />

                    <input
                        id=''
                        type='text'
                        value=''
                        class=''
                        onChange=''
                        placeholder='Location'
                    />

                    <input
                        id=''
                        type='text'
                        value=''
                        class=''
                        onChange=''
                        placeholder='Referrer'
                    />

                    <input
                        id=''
                        type='text'
                        value=''
                        class=''
                        onChange=''
                        placeholder='LinkedIn'
                    />

                    <textarea
                        id=''
                        type='text'
                        value=''
                        class=''
                        onChange=''
                        placeholder='Notes'
                    />
                </form>
            </div>

        )
    }
  }
  
export default InterviewExcelLine;
