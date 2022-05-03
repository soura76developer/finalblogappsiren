import Pic1 from "./images/Pic1.jpg"
import Pic2 from "./images/Pic2.jpg"
import Pic3 from "./images/Pic3.jpg"
import "./App.css"
import LowerPhoto from "./lowerPhoto";
import Chotapackets from "./Chotapackets";
import Footer from "./Footer.js";

const BigImage=()=>
{
    return(
    <>
        <div className="body_allign1">
    

            
                {/* -------- */}
        <div className="headerP33">
        <div><p className="theP33">The</p>
        <p className="sirenP33">Siren</p>
        </div>
        <button className="get_started33"><div className="div_black"></div>
                                        <div className="div_black"></div>
                                        <div className="div_black"></div>
        </button>
        </div>
               {/* -------- */}



            <div className="pic1">
                < img src= {Pic1} alt="" className="pic1_D" />
                
            </div>

            <div className="pic2">
                <img src= { Pic2} alt="" className="pic2_D" />
            </div>

            {/* <div className="pic3">
                <img src={ Pic3} alt="" className="pic3_D" />
            </div> */}
            
            <br/>
            <br/>

            <LowerPhoto />
            <Chotapackets />
            <Footer />

            </div>
    </>
    )


}

export default BigImage ;