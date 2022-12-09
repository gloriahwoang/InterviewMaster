import Hero from "../components/Hero";
import HomeImg1 from "../assets/chaos_organize.jpg"
import Hero2 from "../components/Hero2"
import React from 'react'


function Home(){
    return(
        <>
        <Hero
         cName="hero"
         heroImg={HomeImg1}
         title="How organized are your interviews?"
         text="Master and organize your interviews starting today!"
         buttonText="Join Today"
         url="/signup"
         btnClass="show"
         />
        <Hero2/>
        </>
    )
}

export default Home;