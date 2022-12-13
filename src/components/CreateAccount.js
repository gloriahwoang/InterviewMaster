import "./CreateAccountStyles.css";
import React, { Component } from 'react';
import FormErrors from "./FormErrors";
import Validate from "./FormValidation";
import { Auth } from "aws-amplify";
import { withRouter } from 'react-router-dom';
import axios from 'axios';


// import apigClinent.js


class CreateAccount extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        errors: {
          cognito: null,
          blankfield: false,
          passwordmatch: false
        }
      }

      clearErrorState = () => {
        this.setState({
          errors: {
            cognito: null,
            blankfield: false,
            passwordmatch: false
          }
        });
      }

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
        const { username, email, password } = this.state;
        try {
        const signUpResponse = await Auth.signUp({
            username,
            password,
            attributes: {
            email: email
            }
        })
        ;
        
        // email = this.state.email and pass the email to apigateway

        // setupPut(email, [], [])

        //var params = {
        //  "x-amz-meta-emailAddress": this.state.email
        //}
        // console.log(this.state.email)
          // apigClient.uploadPhotoItemPut(params, {}, {})
        axios.put(
          "https://4j9xoqe241.execute-api.us-east-1.amazonaws.com/finalproject/setup",
          {'x-amz-meta-emailAddress': this.state.email}
          );
        this.props.history.push("/Welcome");
        
        } catch (error) {
        let err = null;
        !error.message ? err = { "message": error } : err = error;
        this.setState({
            errors: {
            ...this.state.errors,
            cognito: err
            }
        });
        }
    }

    onInputChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        document.getElementById(event.target.id).classList.remove("is-danger");
      }
    
    render() {
      return (
        <div className='create-background'>
            <div className='create'>
                <h1 className="create-title">Create a New Account</h1>
                <p className="create-subtitle">Come join InterviewMaster today! Already have an account?
                    <a href="./login" className='loginhere'> Login here</a>
                    .</p>
                
                
                <div className="auth-form-container">
                <FormErrors className="error" formerrors={this.state.errors} />
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input 
                        type='username'
                        placeholder='John Doe' 
                        id='username' 
                        aria-describedby="userNameHelp"
                        value={this.state.username}
                        onChange={this.onInputChange}
                    />
                    <label>Email</label>
                    <input 
                        type='email'
                        placeholder='youremail@gmail.com'
                        id='email'
                        aria-describedby="emailHelp"
                        value={this.state.email}
                        onChange={this.onInputChange}
                    />
                    <label>Password</label>
                    <input
                    type='password'
                    placeholder='**********'
                    id='password'
                    value={this.state.password}
                    onChange={this.onInputChange}
                    />
                    <label>Confirm Password</label>
                    <input
                    type='password'
                    placeholder='**********'
                    id='confirmpassword'
                    value={this.state.confirmpassword}
                    onChange={this.onInputChange}
                    />
                    <button className="create-button">Join InterviewMaster</button>
                </form>
                    <p>By submitting the form you agree to InterviewMaster's <a href="..">Terms of Service</a></p>
                </div>
               
            </div>
        </div>
        );
      };
}
    export default withRouter(CreateAccount);