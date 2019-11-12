/* eslint-disable */
import React from 'react';

import img1 from '../../../assets/images/features/feature13/img1.jpg';
import img2 from '../../../assets/images/features/feature13/img2.jpg';
import img3 from '../../../assets/images/features/feature13/img3.jpg';
import img4 from '../../../assets/images/features/feature13/img4.jpg';
import img5 from '../../../assets/images/features/feature30/img1.jpg';

class FeatureComponent extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Features</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="spacer feature4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <span className="label label-danger label-rounded">Feature 1</span>
                            <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </div>
                    </div>
                    <div className="row m-t-40">
                        <div className="col-md-6 wrap-feature4-box">
                            <div className="card" data-aos="zoom-out-right" data-aos-duration="1200">
                                <div className="card-body">
                                    <div className="icon-round bg-light-info"><i className="fa fa-star"></i></div>
                                    <h5 className="font-medium">Instant Solutions</h5>
                                    <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pellentesque ipsum.</p>
                                    <a href="#" className="linking text-themecolor">Explore More<i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wrap-feature4-box">
                            <div className="card" data-aos="zoom-out-left" data-aos-duration="1200">
                                <div className="card-body">
                                    <div className="icon-round bg-light-info"><i className="fa fa-check-circle"></i></div>
                                    <h5 className="font-medium">Powerful Techniques </h5>
                                    <p className="m-t-20">You can relay on our amazing features list and also our customer services will be great experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pellentesque ipsum. </p>
                                    <a className="linking text-themecolor" href="#">Explore More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light spacer feature20 up">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <span className="label label-success label-rounded">Feature 2</span>
                            <h2 className="title">Awesome with Extra Ordinary Flexibility</h2>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </div>
                    </div>
                    <div className="row wrap-feature-20">
                        <div className="col-lg-6" data-aos="flip-left" data-aos-duration="1200">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="card-body d-flex no-block">
                                            <div className="m-r-20"><img src={img1} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Make your website in no-time with us.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <a href="javascript:void(0)" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="flip-right" data-aos-duration="1200">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="card-body d-flex no-block">
                                            <div className="m-r-20"><img src={img2} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Make your website in no-time with us.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <a href="javascript:void(0)" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1200">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="card-body d-flex no-block">
                                            <div className="m-r-20"><img src={img3} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Make your website in no-time with us.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <a href="javascript:void(0)" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1200">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="card-body d-flex no-block">
                                            <div className="m-r-20"><img src={img4} width="70" className="rounded" alt="img" /></div>
                                            <div>
                                                <h5 className="font-medium">Make your website in no-time with us.</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <a href="javascript:void(0)" className="text-white linking bg-success-gradiant">Lets Talk <i className="ti-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer ">
                <div className="container feature30">
                    <div className="row">
                        <div className="col-lg-10"><img src={img5} className="rounded img-responsive" alt="wrappixel" /></div>
                        <div className="col-lg-5 col-md-7 text-center wrap-feature30-box" data-aos="fade-left" data-aos-duration="1800" data-aos-easing="linear">
                            <div className="card card-shadow">
                                <div className="card-body">
                                    <div className="p-20">
                                        <span className="label label-info label-rounded">Feature 3</span>
                                        <h3 className="title">The New way of Making Your Website in mins</h3>
                                        <p>You can relay on our amazing features list and also our customer services will be great experience. You will love it for sure.</p>
                                        <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="#"><span>Explore More <i className="ti-arrow-right"></i></span></a>
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

export default FeatureComponent;
