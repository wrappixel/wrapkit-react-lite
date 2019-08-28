import React from 'react';

import img1 from '../../../assets/images/portfolio/img1.jpg';
import img2 from '../../../assets/images/portfolio/img2.jpg';
import img3 from '../../../assets/images/portfolio/img3.jpg';
import img4 from '../../../assets/images/portfolio/img4.jpg';
import img5 from '../../../assets/images/portfolio/img5.jpg';
import img6 from '../../../assets/images/portfolio/img6.jpg';

class PortfolioComponent extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Portfolio</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="spacer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h2 className="title">Our Recent work with three column</h2>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                        </div>
                    </div>
                    <div className="row m-t-40">
                        <div className="col-md-4">
                            <div className="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                                <a href="#" className="img-ho"><img className="card-img-top" src={img1} alt="wrappixel kit" /></a>
                                <div className="card-body">
                                    <h5 className="font-medium m-b-0">Branding for Theme Designer</h5>
                                    <p className="m-b-0 font-14">Digital Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-shadow" data-aos="flip-up" data-aos-duration="1200">
                                <a href="#" className="img-ho"><img className="card-img-top" src={img2} alt="wrappixel kit" /></a>
                                <div className="card-body">
                                    <h5 className="font-medium m-b-0">Button Designs Free</h5>
                                    <p className="m-b-0 font-14">Search Engine</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-shadow" data-aos="flip-right" data-aos-duration="1200">
                                <a href="#" className="img-ho"><img className="card-img-top" src={img3} alt="wrappixel kit" /></a>
                                <div className="card-body">
                                    <h5 className="font-medium m-b-0">Branding & Co Agency</h5>
                                    <p className="m-b-0 font-14">Admin templates</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-shadow" data-aos="flip-left" data-aos-duration="1200">
                                <a href="#" className="img-ho"><img className="card-img-top" src={img4} alt="wrappixel kit" /></a>
                                <div className="card-body">
                                    <h5 className="font-medium m-b-0">Zukandre Phoniex</h5>
                                    <p className="m-b-0 font-14">Branding</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-shadow" data-aos="flip-up" data-aos-duration="1200">
                                <a href="#" className="img-ho"><img className="card-img-top" src={img5} alt="wrappixel kit" /></a>
                                <div className="card-body">
                                    <h5 className="font-medium m-b-0">Sionage Mokcup</h5>
                                    <p className="m-b-0 font-14">Wll Mockup</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-shadow" data-aos="flip-right" data-aos-duration="1200">
                                <a href="#" className="img-ho"><img className="card-img-top" src={img6} alt="wrappixel kit" /></a>
                                <div className="card-body">
                                    <h5 className="font-medium m-b-0">Hard Cover Book Mock</h5>
                                    <p className="m-b-0 font-14">Book Covers</p>
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

export default PortfolioComponent;
