import React from 'react';
import checkIcon from '../images/check.svg';

class Property extends React.Component {
render() {
return (
<section id="property" className="m-top-bottom">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h2 className="title w-100">PROPERTY DETAILS</h2>
            </div>
        </div>
        <div className="row" id="section1">
            {/* AT A GLANCE ZONE*/}
            <div className="col-lg-6">
                <h3 className="w-100">AT A GLANCE</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </div>

            {/* WHY LIVE HERE? ZONE */}
            <div className="col-lg-6">
                <h3 className="w-100">WHY LIVE HERE?</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clitakasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </p>
            
             </div>
        </div>
            

        <div className="row" id="section2">
            {/* AMENITIES ZONE */}
            <div className="col-12">
                <h3 className="w-100">AMENITIES</h3>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="amenitie">
                    <img src={checkIcon} alt="CheckBox icon" /> Control Access Entry Gate
                </div>
                <div className="amenitie">
                    <img src={checkIcon} alt="CheckBox icon" /> 24 Hour Fitness Center
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="amenitie">
                    <img src={checkIcon} alt="CheckBox icon" /> BBQ/Picnic Area
                </div>
                <div className="amenitie">
                    <img src={checkIcon} alt="CheckBox icon" /> Minutes from Maria
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="amenitie">
                    <img src={checkIcon} alt="CheckBox icon" /> Business Center
                </div>
                <div className="amenitie">
                    <img src={checkIcon} alt="CheckBox icon" /> Sait Water Pool
                </div>
            </div>
        </div>

        <div className="row" id="section3">
            {/* PET POLICY ZONE */}
            <div className="col-lg-6">
                <h3 className="w-100">PET POLICY</h3>
                <p>Cats and Dogs are allowd.</p>
                <p>Maxiimum number of pet(s): 1</p>
                <p>Restrictions or other terms: Examples: Pit bull, Rottweiler, Chow, Doberman, German Shepherd,Huskies.
                    <br />
                    Check with Management regarding other restricted breeds. </p>
            </div>

            {/* PARKING ZONE */}
            <div className="col-lg-6">
                <h3 className="w-100">PARKING</h3>
                <p>Surface lot</p>
            </div>
        </div>

        <div className="row" id="section4">
            {/* BUILDING INFORMATION ZONE */}
            <div className="col-lg-6">
                <h3 className="w-100">BUILDING INFORMATION</h3>
                <p>Build: 2000</p>
                <p>Units: 204</p>
            </div>

            {/* PARKING ZONE */}
            <div className="col-lg-6">
                <h3 className="w-100">MANAGEMENT COMPANY</h3>
                <p>This property is managed by Metzger & Company, Inc.</p>
            </div>
        </div>
    </div>
</section>
)
}
}

export default Property;