import "./FooterStyles.css"
import { Link } from 'react-router-dom';
import React from 'react'


const Footer = () =>{
    return(
        <div className='footer'>
            <div className='top'>
                <li>
                    <Link className='footer-nav' to={"./myinterviews"}>
                        My Interviews
                    </Link>
                </li>

                <li className='logo'>
                    InterviewMaster
                </li>
            
                <li>
                    <Link className='footer-nav' to={"/"}>
                        Home
                    </Link>
                </li>
            </div>

            <div className='bottom'>
                <p>© InterviewMaster, Inc. 2022</p>
            </div>

        </div>
    )
}

export default Footer