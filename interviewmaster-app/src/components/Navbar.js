import "./NavbarStyles.css";
import {MenuItems} from "./MenuItems";
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';


export default class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error) {
      console.log(error.message);
    }
  }
  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          InterviewMaster
        </h1>

        <div className="menu-icons">
          <i classNAme="fa-solid fa-bars"></i>

        </div>

        <ul className='nav-menu'>
          {MenuItems.map((item, index) =>{
            return(
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            )
          })}

          {this.props.auth.isAuthenticated && this.props.auth.user && (
            <p>
              Hello {this.props.auth.user.username}
            </p>
          )}

          {!this.props.auth.isAuthenticated && (
            <div>
              <Link to="/login">
                <button className='nav-login'>Log In</button>
              </Link>

              <Link to="/signup">
                <button className='nav-signup'>Sign Up</button>
              </Link>
            </div>
          )}

          {this.props.auth.isAuthenticated && (
            <a href="/" onClick={this.handleLogOut} className="nav-logout">
            Log out
            </a>
          )}





        </ul>
      </nav>
    )
  }
}