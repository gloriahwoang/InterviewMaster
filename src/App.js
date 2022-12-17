import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './App.css';
import Home from "./routes/Home";
// import Interviews from "./routes/Interviews";
import InterviewsContainer from './components/InterviewsContainer';
// import Login from "./routes/Login";
import Signup from "./routes/Signup";
import SyncingEmail from './routes/SyncingEmail';
import Welcome from './routes/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AlreadyLoggedin from './components/AlreadyLoggedin';
import LoginContainer from './components/LoginContainer';
// import InterviewExcelLine from './components/InterviewExcelLine';

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null,
  };

  setAuthStatus = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch (error) {
      if (error !== 'No current user') {
        console.error(error);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  render() {
    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser,
    };
    return (
      !this.state.isAuthenticating && (
        <div className="App">
          <Router>
            <div>
              <Navbar auth={authProps} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => <Home {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/myinterviews"
                  render={(props) => <InterviewsContainer {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/login"
                  render={(props) => <LoginContainer {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/signup"
                  render={(props) => <Signup {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/sync"
                  render={(props) => <SyncingEmail {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/welcome"
                  render={(props) => <Welcome {...props} auth={authProps} />}
                />
                <Route
                  exact
                  path="/alreadyloggedin"
                  render={(props) => (
                    <AlreadyLoggedin {...props} auth={authProps} />
                  )}
                />
                {/* <Route
                  path="/profile"
                  render={(props) => (
                    <Profile
                      {...props}
                      auth={authProps}
                      user={this.state.user}
                    />
                  )}
                />
                <Route
                  path="/settings"
                  render={(props) => (
                    <Settings
                      {...props}
                      auth={authProps}
                      user={this.state.user}
                    />
                  )}
                /> */}
              </Switch>
              <Footer />
            </div>
          </Router>
        </div>
      )
    );
  }
}

export default App;
