import "./LoginStyles.css";
import React, { Component } from 'react';
import { Auth } from "aws-amplify";
import FormErrors from "./FormErrors";
import Validate from "./FormValidation";

class LoginContainer extends Component {
    state = {
      username: "",
      password: "",
      errors: {
        cognito: null,
        blankfield: false
      }
    };
  
    clearErrorState = () => {
      this.setState({
        errors: {
          cognito: null,
          blankfield: false
        }
      });
    };
  
    handleSubmit = async event => {
      event.preventDefault();
  
      // Form validation
      this.clearErrorState();
      const error = Validate(event, this.state);
      if (error) {
        this.setState({
          errors: { ...this.state.errors, ...error }
        });
      }
  
      // AWS Cognito integration here
      try {
        const user = await Auth.signIn(this.state.username, this.state.password);
        console.log(user);
        this.props.auth.setAuthStatus(true);
        this.props.auth.setUser(user);
        this.props.history.push("/");
      }catch(error) {
        let err = null;
        !error.message ? err = { "message": error } : err = error;
        this.setState({
          errors: {
            ...this.state.errors,
            cognito: err
          }
        });
      }
    };
  
    onInputChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
      document.getElementById(event.target.id).classList.remove("is-danger");
    };
  
    render() {
      return (
        <div className='login-background'>
            <div className='login'>
                <h1 className="login-title">Login</h1>
                <p className="login-subtitle">Don't have an account? <a href="./signup" className='registerhere'>
                    Register here.
                </a></p>

                <FormErrors className="error" formerrors={this.state.errors} />

                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label for='username'>Username</label>
                    <input
                        type='text'
                        placeholder='Enter username or email'
                        id='username'
                        aria-describedby="usernameHelp"
                        value={this.state.username}
                        onChange={this.onInputChange}
                    />

                    <label for='password'>Password</label>
                    <input
                        type='password'
                        placeholder='**********'
                        id='password'
                        value={this.state.password}
                        onChange={this.onInputChange}
                    />
                    <button className="login-button">Login</button>
                </form>
            </div>
        </div>



      );
    }
  }
  
  export default LoginContainer;
