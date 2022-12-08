import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from 'react'
import WelcomeContainer from "../components/WelcomeContainer";



function Welcome(){
    return(
        <>
        <Navbar/>
        <WelcomeContainer/>
        <Footer/>
        </>
    )
}

export default Welcome;