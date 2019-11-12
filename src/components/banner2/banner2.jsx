import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
class HeaderBanner2 extends React.Component {
    render() {
        return (
            <div className="static-slider-head banner2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div class="col-lg-8 col-md-6 align-self-center text-center" data-aos="fade-up" data-aos-duration="1200">
                            <h1 class="title">Wrapkit Lite</h1>
                            <h4 class="subtitle font-light">Free Reactstrap UI Kit with<br /> Lots of Ready to Use Sections</h4>
                            <a href="https://wrappixel.com/templates/wrapkit-react-lite/" className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">Download Free</a>
                            <Link to="/#coming" className="btn btn-md m-t-30 btn-info-gradiant font-14">Upgrade To Pro</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderBanner2;
