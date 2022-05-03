import "./../Page3.css";
import Man from './../images/manP3.png'
import Instagram from './../images/instagramP3.jpg';
import Fb from './../images/fbP3.jpg';
import Twitter from './../images/twitterP3.jpeg';
import Youtube from './../images/youtubeP3.jpeg';
import ReacLogo from './../images/reactlogoP3.png';
import screenshot from './../images/screenshotP3.png';
import Rythm from "./../images/rythm.svg";
import { useState } from 'react';






const Middlediv = () =>
{

    let [count,setCount]=useState(0);
   
    

    return(
    <>
    <div className="GrandParent_middleDiv">
        <h1 className="five_ways_annimate">5 Ways to animate a React App.</h1>
        <div className="allingment_box">
           <div className="name_date_block"> 
               <img src={Man} className="face" />
               <p className="name">Dmitry Nozhenko</p>
               <p className="date">jan 28 2019 . 10min read</p>
           </div>
           <div className="socialMedia">
           <img src={Fb} className="fb" />
           <img src={Twitter} className="twitter" />
           <img src={Instagram} className="instagram" />
           <img src={Youtube} className="youtube" />
           </div>
        </div>    
        <img src={ReacLogo} className="reactlogo" />

        <p className="animation_para">
            <pre>
                {`
                    Animation in Reactjs App is popular topic and there are many ways
                    to create diffrent types of annimation.Many developer creates 
                    animation exclusivly css and adding classes to HTML tags.This is
                    a great way and you should use it.If you want to create complex
                    animations you can pay attenstion to GreenSock is the most
                    poerfull animation platform.There are also a lot of libraries,
                    component for creating animation in React.

                    Lets talk about them.
                
                `}
            </pre>
            
            
        </p>
        <img src={screenshot} className="screenshot" />
        <button className="react_button">React</button>
        <button className="js_button">Javascript</button>
        <button className="animate_button">Animation</button>

        {/* usestate onclick event */}

        <button onClick={()=>{setCount(count+1)}} className="hand1" > {<img src={Rythm} /> }</button>
        <p className="counter_pointer1">{count + " "+"claps"}</p>
    

        <div className="name_date_block1"> 
               <img src={Man} className="face" />
               <p className="name">Dmitry Nozhenko</p>
               <p className="date">jan 28 2019 . 10min read</p>
           </div>
    
    
    
    
    </div>
    </>
    )


}

export default Middlediv; 