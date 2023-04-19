import "./App.css" ;
const Header=()=>
{
    return(
    <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-md-3 text-center">
                                <p  className="siren_D" ><span className="the_D">The</span>Siren</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-2  text-center"><a href="/home" className="all_D"><span>Home</span></a></div>
                            <div className="col-md-2  text-center"><a href="/bollywood" className="all_D"><span >Bollywood</span></a></div>
                            <div className="col-md-2  text-center"><a href="/technology" className="all_D"><span>Technology</span></a></div>
                            <div className="col-md-2  text-center"><a href="/holly" className="all_D"><span >Hollywood</span></a></div>
                            <div className="col-md-2  text-center"><a href="/fit" className="all_D"><span>Fitness</span></a></div>
                            <div className="col-md-2  text-center"><a href="/food" className="all_D"><span >Food</span></a></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" >
                        <hr/>
                    </div>
                </div>
            </div>


    </>
    )

}

export default Header;