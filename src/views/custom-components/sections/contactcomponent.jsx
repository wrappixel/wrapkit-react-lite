import React from 'react';

class ContactComponent extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Contact Form</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="contact1">
                <div className="row">
                    <div className="container">
                        <div className="spacer">
                            <div className="row m-0">
                                <div className="col-lg-8">
                                    <div className="contact-box p-r-40">
                                        <h4 className="title">Quick Contact</h4>
                                        <form data-aos="fade-left" data-aos-duration="1200">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group m-t-15">
                                                        <input className="form-control" type="text" placeholder="name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group m-t-15">
                                                        <input className="form-control" type="text" placeholder="email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group m-t-15">
                                                        <textarea className="form-control" rows="3" placeholder="message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <button type="submit" className="btn btn-danger-gradiant m-t-20 btn-arrow"><span> SUBMIT <i className="ti-arrow-right"></i></span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="detail-box p-40 bg-info" data-aos="fade-right" data-aos-duration="1200">
                                        <h2 className="text-white">Wrappixel Headquarters</h2>
                                        <p className="text-white m-t-30 op-8">251 546 9442
                                            <br /> info@wrappixel.com</p>
                                        <p className="text-white op-8">601 Sherwood Ave.
                                            <br /> San Bernandino, CA 92404</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ContactComponent;
