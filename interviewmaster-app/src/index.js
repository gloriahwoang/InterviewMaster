import ReactDOM from "react-dom/client";
import React from 'react'
import {Amplify} from 'aws-amplify';
import config from './config';
import App from './App';

Amplify.configure({
    Auth: {
        mandatorySignId: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);