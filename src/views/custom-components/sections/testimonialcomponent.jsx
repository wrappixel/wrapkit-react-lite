/* eslint-disable */
import React from 'react';

import img1 from '../../../assets/images/testimonial/1.jpg';
import img2 from '../../../assets/images/testimonial/2.jpg';
import img3 from '../../../assets/images/testimonial/3.jpg';

class TestimonialComponent extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Testimonial</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="testimonial3 spacer bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h2 className="title">Check what our Customers are Saying</h2>
                                <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                            </div>
                        </div>
                        <div className="row testi3 m-t-40">
                            <div className="col-lg-4 col-md-4" data-aos="fade-right">
                                <div className="card card-shadow">
                                    <div className="card-body">
                                        <h6 className="font-light m-b-30">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h6>
                                        <div className="d-flex no-block align-items-center">
                                            <span className="thumb-img"><img src={img1} alt="wrapkit" className="circle"/></span>
                                            <div className="m-l-20">
                                                <h6 className="m-b-0 customer">Michelle Anderson</h6>
                                                <div className="font-10">
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-muted"><i className="fa fa-star"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4" data-aos="fade-up">
                                <div className="card card-shadow">
                                    <div className="card-body">
                                        <h6 className="font-light m-b-30">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h6>
                                        <div className="d-flex no-block align-items-center">
                                            <span className="thumb-img"><img src={img2} alt="wrapkit" className="circle"/></span>
                                            <div className="m-l-20">
                                                <h6 className="m-b-0 customer">Mark mesty</h6>
                                                <div className="font-10">
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-muted"><i className="fa fa-star"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4" data-aos="fade-left">
                                <div className="card card-shadow">
                                    <div className="card-body">
                                        <h6 className="font-light m-b-30">“Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras venene veliel vestibulum.”</h6>
                                        <div className="d-flex no-block align-items-center">
                                            <span className="thumb-img"><img src={img3} alt="wrapkit" className="circle"/></span>
                                            <div className="m-l-20">
                                                <h6 className="m-b-0 customer">Limpsy adam</h6>
                                                <div className="font-10">
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                                    <a href="" className="text-muted"><i className="fa fa-star"></i></a>
                                                </div>
                                            </div>
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

export default TestimonialComponent;
