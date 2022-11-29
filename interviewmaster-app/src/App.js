import React from 'react';
import './App.css';
import Home from "./routes/Home";
import Interviews from "./routes/Interviews";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/myinterviews" element={<Interviews/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </div>
    );
}

export default App;