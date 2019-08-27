import React from 'react';

import logo from '../../assets/images/logos/white-text.png';
import img1 from '../../assets/images/landingpage/demos-wrapkit-lite-pro.jpg';
import img2 from '../../assets/images/landingpage/prod-sections-dropdown.jpg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="topbar" id="top">
            <div className="header6">
                <div className="container po-relative">
                    <nav className="navbar navbar-expand-lg h6-nav-bar">
                        <a href="index.html" className="navbar-brand"><img src={logo} alt="wrapkit" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#h6-info" aria-controls="h6-info" aria-expanded="false" aria-label="Toggle navigation"><span className="ti-menu"></span></button>
                        <div className="collapse navbar-collapse hover-dropdown font-14 ml-auto" id="h6-info">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"> 
                                    <a className="nav-link" href="index.html">
                                        Sections
                                    </a>
                                </li>
                                <li className="nav-item"> 
                                    <a className="nav-link" href="#element">
                                        Elements
                                    </a>
                                </li>
                                <li className="nav-item dropdown mega-dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="h1-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <strong>Demos (Pro version)</strong> <i className="fa fa-angle-down m-l-5"></i>
                                    </a>
                                    <ul className="b-none dropdown-menu animated fadeInUp p-0">
                                        <li><a className="dropdown-item p-0" href="https://wrappixel.com/demos/ui-kit/wrapkit/wrapkit/iframe.html"><img src={img1} alt="wrapkit"/></a></li>
                                    </ul>
                                  </li>
                                <li className="nav-item dropdown mega-dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="h1-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <strong>Pro Sections</strong> <i className="fa fa-angle-down m-l-5"></i>
                                    </a>
                                    <ul className="b-none dropdown-menu animated fadeInUp p-0">
                                        <li><a className="dropdown-item p-0" href="https://wrappixel.com/demos/ui-kit/wrapkit/wrapkit/iframe.html"><img src={img2} alt="wrapkit"/></a></li>
                                    </ul>
                                  </li>
                            </ul>
                            <div className="act-buttons">
                                <a href="https://wrappixel.com/templates/wrapkit/" className="btn btn-success-gradiant font-14">Upgrade To Pro</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
  }
}
export default Header;
