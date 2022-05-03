import "./App.css";
import Pic5 from "./images/Pic5.jpg"


const Chotapackets =()=>
{
    return(
    <>
    <div className="Chotapackets_div">
        <hr/>
        <img src= {Pic5} alt="" class="IceShip_component2"/>
        <p className="text_style"><pre>{`
            Catch waves with
            adventure guide
        `}</pre></p>
        <p  class="IceShip_component2_text">2</p>
        <hr/>
 
        <img src= {Pic5} alt="" class="IceShip_component3"/>  
        <p className="text_style"><pre>{`
            Catch waves with
            adventure guide
        `}</pre></p>
        <p class="IceShip_component3_text">3</p>
        <hr/>
        <img src= {Pic5} alt="" class="IceShip_component4"/> 
        <p className="text_style"><pre>{`
            Catch waves with
            adventure guide
        `}</pre></p>
        <p class="IceShip_component4_text">4</p> 
    
    </div>
    
    </>
    )


}

export default Chotapackets;