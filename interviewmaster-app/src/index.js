import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
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


const rootElement= document.getElementById('root');
const root=createRoot(rootElement);

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);