import "./NavbarStyles.css";
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';


class Navbar extends Component {
  handleLogOut = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
      this.props.history.push("/");
    }catch(error) {
      console.log(error.message);
    }
  }
  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <Link to="/">
            InterviewMaster
          </Link>
        </h1>

          <ul className='nav-menu'>
          {this.props.auth.isAuthenticated && (
              <div>
                <Link to="/">
                  <button className='home'>Home</button>
                </Link>

                <Link to="/myinterviews">
                  <button className='myinterviews'>My Interviews</button>
                </Link>
            </div>
            )}

          {this.props.auth.isAuthenticated && this.props.auth.user && (
            <p className='username'>
              Hello,  {this.props.auth.user.username}
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
export default withRouter(Navbar);