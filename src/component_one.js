import Pic1 from "./images/Pic1.jpg"
import Pic2 from "./images/Pic2.jpg"
import Pic3 from "./images/Pic3.jpg"
import "./App.css"
import Component_two from "./component_two";
import Chotapackets from "./Chotapackets";
import Footer from "./Footer.js";
import Header from "./header.js"

const Component_one=()=>
{
    return(
    <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-center">
                        < img src= {Pic1} alt="" className="pic1_D" />
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12 text-center p-2">
                                <img src= { Pic2} alt="" className="pic2_D" />
                            </div>
                            <div className="col-md-12 text-center p-2">
                                 <img src= { Pic2} alt="" className="pic2_D" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Component_two />
                        {/* <Chotapackets />
                        <Footer /> */}
                    </div>
                </div>
            </div>
    </>
    )


}

export default Component_one ;