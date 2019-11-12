import React from 'react';

class CallToAction extends React.Component {
    render() {
        return (
            <div className="coming-soon" id="coming">
                <div className="container py-5 mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h2 className="title text-white font-weight-bold">Pro Version coming soon</h2>
                                    <h6 className="subtitle font-light text-white">We will add Pro Version with tons of great features and multiple category demos which is ready to use...</h6>
                                    <a href="/#coming" className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">Upgrade To Pro</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CallToAction;
