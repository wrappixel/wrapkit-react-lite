/* eslint-disable */
import React from 'react';

import logo from '../../../assets/images/logos/green-logo.png';
import logo2 from '../../../assets/images/logos/white-logo.png';

class HeaderComponent extends React.Component {
  render() {
    return (
        <div id="section">
            <div className="spacer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Header/Navigation</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="header1 po-relative">
                <div className="container">
                    <nav className="navbar navbar-expand-lg h1-nav">
                        <a className="navbar-brand" href="#"><img src={logo} alt="wrapkit" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header1" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ti-menu"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="header1">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About Me</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Work</a></li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="h1-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services <i className="fa fa-angle-down m-l-5"></i>
                            </a>
                            <ul className="b-none dropdown-menu animated fadeInUp">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li className="divider" role="separator"></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                                <li className="divider" role="separator"></li>
                                <li><a className="dropdown-item" href="#">One more separated link</a></li>
                            </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#">Freebies</a></li>
                            <li className="nav-item"><a className="btn btn-outline-success" href="#">Hire Me</a></li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="header1 po-relative bg-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-lg h2-nav">
                        <a className="navbar-brand" href="#"><img src={logo2} alt="wrapkit" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header1" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ti-menu"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="header1">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">About Me</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Work</a></li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="h1-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services <i className="fa fa-angle-down m-l-5"></i>
                            </a>
                            <ul className="b-none dropdown-menu animated fadeInUp">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li className="divider" role="separator"></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                                <li className="divider" role="separator"></li>
                                <li><a className="dropdown-item" href="#">One more separated link</a></li>

                            </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#">Freebies</a></li>
                            <li className="nav-item"><a className="btn btn-outline-info" href="#">Hire Me</a></li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
  }
}

export default HeaderComponent;
