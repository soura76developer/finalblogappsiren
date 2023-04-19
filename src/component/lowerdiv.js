import "./../Page3.css";
import Food2 from './../images/Food2.jpg';
import Pic3 from './../images/Pic3.jpg';
import Fit7 from './../images/Fit7.jpg';
import Man from './../images/manP3.png'


const Lowerdiv=()=>
{
return(
<>
<div className="parentDiv">
    
    <p className="more_the_siren">More From The Siren</p>
    <hr className="hr"/>
    <div className="compiler">
        <div>
        <img src={Food2} className="food2" />
        <p className="text1">
            <pre>
                {`
                Joshua Tree
                Overnight Adventure
                `}
            </pre>
        </p>

        <div className="name_date_block"> 
            <img src={Man} className="face" />
            <p className="name">Dmitry Nozhenko</p>
            <p className="date">jan 28 2019 . 10min read</p>
        </div>

        </div>
        <div>
        <img src={Pic3} className="pic3" />
        <p className="text2"><pre>{`
            Joshua Tree
            Overnight Adventure
        `}</pre></p>

            <div className="name_date_block2"> 
               <img src={Man} className="face" />
               <p className="name">Dmitry Nozhenko</p>
               <p className="date">jan 28 2019 . 10min read</p>
           </div>

        </div>
        <div>
        <img src={Fit7} className="fit7" />
        <p className="text3"><pre>{`
            Joshua Tree
            Overnight Adventure
        `}</pre></p>

            <div className="name_date_block3"> 
               <img src={Man} className="face" />
               <p className="name">Dmitry Nozhenko</p>
               <p className="date">jan 28 2019 . 10min read</p>
           </div>

        </div>

    </div>

</div>

</>
)
}

export default Lowerdiv;