import React from 'react';
import locationIcon from '../images/Location-icon.svg';
import phoneIcon from '../images/Phone-icon.svg';

class Navbar extends React.Component {

 

  render () {
    return (
      <nav id="navbar-spy" className="navbar sticky-top navbar-expand-lg navbar-dark bg-light">
        <div className="container">
          <span class="navbar-text Details-Apartment">
            <p className="nav-title wow fadeInUp">771 LINDERBERGH APARTMENTS</p>
            <p className="nav-street"><img src={locationIcon} alt="Location icon" /> 771 Linderbergh Drive, Atlanta, GA 30324</p>
            <p className="nav-phone"><img src={phoneIcon} alt="Phone icon" />(404) 445-2551</p>
          </span>
          
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#floors">FLOOR PLANS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#property">PROPERTY DETAILS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#location">LOCATION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="www.google.com">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      );
  } 

}

export default Navbar;