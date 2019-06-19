import React from 'react';
import homeLayout from '../images/home-layout.png';
import phoneBtn from '../images/Phone-btn.svg';


class Floors extends React.Component {
render() {
return (
<section id="floors" className="m-top-bottom">
    {/* FLOOR PLANS ZONE*/}
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h2 className="title">FLOOR PLANS</h2>
                <nav>
                    {/* FLOOR PLANS TABS ZONE*/}
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-1b-tab" data-toggle="tab" href="#nav-1b"
                            role="tab" aria-controls="nav-1b" aria-selected="true">1 bedroom / 1 bath</a>
                        <a className="nav-item nav-link" id="nav-2b-tab" data-toggle="tab" href="#nav-2b" role="tab"
                            aria-controls="nav-2b" aria-selected="false">2 bedroom / 2 bath</a>

                    </div>
                </nav>
                {/* FLOOR PLANS TAB CONTENT ZONE*/}
                <div className="tab-content" id="nav-tabContent">
                    {/* FLOOR PLANS TAB 1 CONTENT ZONE*/}
                    <div className="tab-pane fade show active" id="nav-1b" role="tabpanel" aria-labelledby="nav-1b-tab">
                        <div className="row">
                            {/* CARD 1 ZONE*/}
                            <div className="col-md-6 col-lg-4">
                                <div className="card">
                                    <img src={homeLayout} className="img-fluid" alt="Home layout" />
                                    <div className="card-body">
                                        <h3 className="card-title">Plan FA (A1N)</h3>
                                        <p className="card-text">1 bedroom | 1 bath | 793 sqft</p>
                                        <div className="card-footer">
                                            <a href="#www.gcui.com" className="btn btn-primary">MORE INFO</a>
                                            <a href="#www.gcui.com" className=""><img src={phoneBtn} className="img-fluid" alt="phone button icon" /></a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 ZONE*/}
                            <div className="col-md-6 col-lg-4">
                                <div className="card">
                                    <img src={homeLayout} className="img-fluid" alt="Home layout" />
                                    <div className="card-body">
                                        <h3 className="card-title">1 Bedroom Jr.</h3>
                                        <p className="card-text">1 bedroom | 1 bath | 893 sqft</p>
                                        <div className="card-footer">
                                            <a href="#www.gcui.com" className="btn btn-primary">MORE INFO</a>
                                            <p className="price">$1.437 - $1.750</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    {/* FLOOR PLANS TAB 2 CONTENT ZONE*/}
                    <div className="tab-pane fade" id="nav-2b" role="tabpanel" aria-labelledby="nav-2b-tab">
                    <div className="row">
                            {/* CARD 1 ZONE*/}
                            <div className="col-md-6 col-lg-4">
                                <div className="card">
                                    <img src={homeLayout} className="img-fluid" alt="Home layout" />
                                    <div className="card-body">
                                        <h3 className="card-title">Plan FA (A1N)</h3>
                                        <p className="card-text">2 bedroom | 2 bath | 793 sqft</p>
                                        <div className="card-footer">
                                            <a href="#www.gcui.com" className="btn btn-primary">MORE INFO</a>
                                            <a href="#www.gcui.com" className=""><img src={phoneBtn} className="img-fluid" alt="phone button icon" /></a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 ZONE*/}
                            <div className="col-md-6 col-lg-4">
                                <div className="card">
                                    <img src={homeLayout} className="img-fluid" alt="Home layout" />
                                    <div className="card-body">
                                        <h3 className="card-title">2 Bedroom Jr.</h3>
                                        <p className="card-text">2 bedroom | 2 bath | 893 sqft</p>
                                        <div className="card-footer">
                                            <a href="#www.gcui.com" className="btn btn-primary">MORE INFO</a>
                                            <p className="price">$3.437 - $4.750</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 3 ZONE*/}
                            <div className="col-md-6 col-lg-4">
                                <div className="card">
                                    <img src={homeLayout} className="img-fluid" alt="Home layout" />
                                    <div className="card-body">
                                        <h3 className="card-title">2 Bedroom Jr.</h3>
                                        <p className="card-text">2 bedroom | 2 bath | 1.293 sqft</p>
                                        <div className="card-footer">
                                            <a href="#www.gcui.com" className="btn btn-primary">MORE INFO</a>
                                            <p className="price">$5.737 - $6.750</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
);
}
}

export default Floors;