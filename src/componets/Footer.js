import React from 'react';
import arrowUp from '../images/Arrow-up.svg';


class Footer extends React.Component {
    render() {
        return (
            <section id="location">
                {/* FOOTER ZONE*/}
                <div className="container-fluid">
                    <div className="row">
                        {/* MAP ZONE*/}
                        <div className="col-lg-6" id="Map">
                        <iframe title="myMap" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2848.974442139096!2d26.03310541552327!3d44.43368647910236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slujerului+map!5e0!3m2!1sro!2sro!4v1560887074512!5m2!1sro!2sro" width="100%" height="auto" frameborder="0" allowfullscreen></iframe>
                        {/* <img src={map} className="img-fluid" alt="Map" /> */}
                        </div>

                        {/* LOCATION ZONE*/}
                        <div className="col-lg-6 m-top-bottom" id="hours">
                            <div className="row">
                                <div className="col-lg-10"><h2>LOCATION</h2>
                            <p>Ask about conveniences you will enjoy...</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p></div>
                            </div>
                            

                            {/* HOURS ZONE*/}
                            <h3>HOURS:</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>
                                        Monday: 9:00 am to 6:00 pm
                                        <br/><br/>
                                        Thuesday: 9:00 am to 6:00 pm
                                        <br/><br/>
                                        Wednesday: 9:00 am to 6:00 pm
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        Thursday: 9:00 am to 6:00 pm
                                        <br/><br/>
                                        Friday: 9:00 am to 6:00 pm
                                        <br/><br/>
                                        Saturday: 10:00 am to 5:00 pm
                                    </p>
                                </div>
                            </div>
                        </div>
                    <div className="col-12 bottom-bar">
                        <a href="#home">
                        <img src={arrowUp} className="img-fluid" alt="Arow up to home" />
                        </a>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}



export default Footer;