import React from 'react';
import slideOne from '../images/slider/img-1.jpg';
import slideTwo from '../images/slider/img-2.jpg';
import slideThree from '../images/slider/img-3.jpg';
import slideFour from '../images/slider/img-4.jpg';



function Header() {
return (
<div className="Header">
    <section id="home">
        <div className="container form-zone d-none d-lg-block">
            <div className="row">
                <div className="col-lg-4 offset-lg-8">
                    <div className="home-check-form">
                        <h3 className="form-heading">CHECK AVAILABILITY</h3>
                        <h4 className="form-subheading">OR CALL <a className="phone-number accent-text"
                                href="tel:+(256) 766-8963">(256) 766-8963</a></h4>
                        <form className="registration-form" id="registration-form">
                            <input type="text" className="form-control registration-input-box" name="textForm"
                                id="textForm" placeholder="Your Name" />
                            <input type="email" className="form-control registration-input-box" name="emailForm"
                                id="emailForm" placeholder="Your Email Address" />
                            <input type="phone" className="form-control registration-input-box" name="phoneForm"
                                id="phoneForm" placeholder="Your Phone Number" />
                            <input type="test" className="form-control registration-input-box" name="testForm"
                                id="testForm" placeholder="3 + 4 = ?" />
                            <input type="checkbox" name="checkboxForm" id="checkbox" />
                            <p className="checkbox-text">By submitting this form, you agree to our Privacy Policy and
                                Terms of use</p>
                            <button className="btn btn-primary">GET MORE INFO</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="container thumbnails">
                <div className="row carousel-indicators">
                    <div className="col active" data-target="#carouselExampleIndicators" data-slide-to="0">
                        <img src={slideOne} className="img-fluid" alt="..." />
                    </div>
                    <div className="col" data-target="#carouselExampleIndicators" data-slide-to="1">
                        <img src={slideTwo} className="img-fluid" alt="..." />
                    </div>
                    <div className="col" data-target="#carouselExampleIndicators" data-slide-to="2">
                        <img src={slideThree} className="img-fluid" alt="..." />
                    </div>
                    <div className="col" data-target="#carouselExampleIndicators" data-slide-to="3">
                        <img src={slideFour} className="img-fluid" alt="..." />
                    </div>
                </div>
        </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slideOne} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slideTwo} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slideThree} className="d-block" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={slideFour} className="d-block" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div className="container form-zone d-block d-lg-none">
            <div className="row">
                <div className="col-12 col-md-8 mx-auto col-lg-4 offset-lg-8">
                    <div className="home-check-form">
                        <h3 className="form-heading">CHECK AVAILABILITY</h3>
                        <h4 className="form-subheading">OR CALL <a className="phone-number accent-text"
                                href="tel:+(256) 766-8963">(256) 766-8963</a></h4>
                        <form className="registration-form" id="registration-form">
                            <input type="text" className="form-control registration-input-box" name="textForm"
                                id="textForm" placeholder="Your Name" />
                            <input type="email" className="form-control registration-input-box" name="emailForm"
                                id="emailForm" placeholder="Your Email Address" />
                            <input type="phone" className="form-control registration-input-box" name="phoneForm"
                                id="phoneForm" placeholder="Your Phone Number" />
                            <input type="test" className="form-control registration-input-box" name="testForm"
                                id="testForm" placeholder="3 + 4 = ?" />
                            <input type="checkbox" name="checkboxForm" id="checkbox" />
                            <p className="checkbox-text">By submitting this form, you agree to our Privacy Policy and
                                Terms of use</p>
                            <button className="btn btn-primary">GET MORE INFO</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    </section>


</div>
);
}

export default Header;