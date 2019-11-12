import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class HeaderBanner extends React.Component {
    render() {
        return (
            <div className="static-slider-head">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-6 align-self-center text-center" data-aos="fade-up" data-aos-duration="1200">
                            <h1 className="title">Wrapkit Lite</h1>
                            <h4 className="subtitle font-light">Powerful Reactstrap UI Kit with<br /> Beautiful Pre-Built Demos</h4>
                            <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBanner;
