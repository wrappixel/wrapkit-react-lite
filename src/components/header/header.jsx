/* eslint-disable */
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

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
                                        <Link className="nav-link" to={"/components"}>
                                            Components
										</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/custom-components"}>
                                            Custom-Components
                                    	</Link>
                                    </li>
                                </ul>
                                <div className="act-buttons">
                                    <Link to="/#coming" className="btn btn-success-gradiant font-14">Upgrade To Pro</Link>
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
