
import "./../Page3.css"
import Rythm from "./../images/rythm.svg";
import Share from "./../images/share.svg";
import { useState } from 'react';


const Counter=()=>
{

    let [count,setCount]=useState(0);
    let [share,setShare]=useState('Share this artical');


    return(
    <>

    <div className="side_div">
    <button onClick={()=>{setCount(count+1)}} className="hand" > {<img src={Rythm} /> }</button>
    <p className="counter_pointer">{count}</p>
    <button onClick={()=>{setShare('Shared')}}className="share"><img src={Share} /></button>
    <p className="share_artical">{share}</p>
  
    
    
    </div>
    </>
    )
}

export default Counter;