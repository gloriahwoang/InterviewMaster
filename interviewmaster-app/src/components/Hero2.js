import "./Hero2Styles.css";
import calendar from "../assets/calendar.jpg"
import time from "../assets/time.jpg"

const Hero2 = () => {
    return (
        <div className='hero2'>
            <div className='first'>
                <div className='first-text'>
                    <h1>
                        View all your interviews in one page and plan out your progress
                    </h1>
                    <p>
                        InterviewMaster takes data from your email and automatically extracts all interview information and progresses into a one page viewer where you can organize and plan your journey.
                    </p>
                </div>
                
                <div className='image'>
                    <img alt="img" src={calendar}/>
                </div>
            </div>

            <div className='second'>
                <div className='image2'>
                    <img alt="img2" src={time}/>
                </div>


                <div className='second-text'>
                    <h1>
                        InterviewMaster automatically updates interview processes live
                    </h1>
                    <p>
                        Spend less time struggling to organize your interviews with automatic updates!
                    </p>
                </div>
                
            </div>

        </div>
    );
};

export default Hero2;