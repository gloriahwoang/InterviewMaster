import { Component } from 'react';
import "./NavbarStyles.css";
import {MenuItems} from "./MenuItems";
import { Link } from 'react-router-dom';

class Navbar extends Component{
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
          <Link to="/login">
            <button className='nav-login'>Log In</button>
          </Link>

          <Link to="/signup">
            <button className='nav-signup'>Sign Up</button>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar;