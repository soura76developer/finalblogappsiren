import "./App.css";
import Pic5 from "./images/Pic5.jpg"
import Pic4 from "./images/Pic4.jpg"
import Pic6 from "./images/Pic6.jpg"
import Pic1 from "./images/Pic1.jpg"
import JoshuaText from "./JoshuaText";
import Arrow from "./images/arrow.svg"



const Component_two=()=>
{
    const apple=[{name:"RAJ SAHA",src:Pic4,header:"Joshua Tree Overnight Adventure",content:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces",date:"/ August 21 2017",class:"2",section:"DEMY 1"},{name:"RAJU SAHA",src:Pic5,header:"Joshua Tree Overnight Adventure",content:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces",date:"/ August 21 2017",class:"24",section:"DEMY 41"},{name:"RAJ SHARMA",src:Pic1,header:"Joshua Tree Overnight Adventure",content:"Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces",date:"/ August 21 2017",class:"26",section:"DEMY 34"},]
     return(
    <>
            {/* <div className="the_latest"> <p className="the_latest_D">The Latest</p> </div>
            <div className="small_col"></div>

            <div className="same1">
                <img src={Pic5} alt="" className="same_D" /> 
                
            </div>
            <div className="same2">
                <img src={Pic4} alt="" className="same_D" />  
                         
            </div>
            <div className="same3">
                <img src={Pic6} alt="" className="same_D" />           
            </div>
        
            <JoshuaText />

            <div class="latest_articles"> <p class="latest_articles_D">Latet Articles</p> </div>
            <div class="small_col1"></div>

            <div class="br1">  </div>

            <div class="add_box"> <p class="add_D">Advertistement</p> </div>
            
            <div class="chota_pic">
                <img src= {Pic1} alt="" class="chota_pic_D"/>  
                <p className="catch_big_text">Catch waves with an adventure guide</p> 
                <hr className="hr_style"/>
            </div>

            <div class="br2">  </div>

            <div class="chota1_pic">
                <img src= {Pic1} alt="" class="chota1_pic_D"/>  
                <p className="catch_big_text1">Catch waves with an adventure guide</p>  
            
                <hr className="hr_style1"/>       
            </div>

            <div class="br3">  </div>

            <div class="chota2_pic">
                <img src= {Pic1} alt="" class="chota2_pic_D"/>   
                <p className="catch_big_text2">Catch waves with an adventure guide</p> 
                <hr className="hr_style2"/>        
            </div>
            
            <div class="br4">  </div>

            <div class="chota3_pic">
                <img src= {Pic1} alt="" class="chota3_pic_D"/>  
                <p className="catch_big_text3">Catch waves with an adventure guide</p> 
                <img src= {Arrow} alt="" class=""/>  
                <p className="top_posts_firstpage">Top Posts</p>
                <img src= {Pic6} alt="" class="topPostsAdd"/>  
                <p className="catch_waves_pre"><pre>{`
                    Catch waves with an 
                    advantage guide `}
                </pre></p>

                <p className="number1">1</p>

                <img src= {Pic5} alt="" class="IceShip"/>  
            </div>
             */}

            <div className="row mt-3">
                <div className="col-md-12 mt-2">
                    <p className="the_latest_D  mb-0">The Latest</p><br/>
                </div>    
            </div> 
            <div className="row p-1 article_over_view">
                {apple.map((value)=>(
                 
                    <div className="col-md-4 text-center">
                         <img src={value.src} alt="" className="latest_img_style" />
                         <div className="row justify-content-center">
                            <div className="col-md-12">
                                <p className="c2_heading_one">{value.header}</p>
                            </div>
                            <div className="col-md-10">
                                <p className="c2_content">{value.content}</p>
                            </div>
                            <div className="col-md-3 text-end">
                                <p className="c2_travel">Travel</p>
                            </div>
                            <div className="col-md-5 text-start">
                                <p>{value.date}</p>
                            </div>
                         </div>
                       
                    </div>
                ))}
            </div>
          
</>
)
}

export default Component_two;