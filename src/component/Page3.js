import "./../Page3.css"
import Counter from "./counter";
import Middlediv from "./middlediv";
import Lowerdiv from "./lowerdiv";



const Page3=()=>
{
return(
<>
<div className="grandParentDivP3">
    <div className="headerP3">
        <div><p className="theP3">The</p>
        <p className="sirenP3">Siren</p>
        </div>
        <button className="get_started">Get Started</button>
    </div>
    <Counter  />  
    <Middlediv />  
    <Lowerdiv />

</div>
</>
)
}

export default Page3;