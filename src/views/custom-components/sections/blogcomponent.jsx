/* eslint-disable */
import React from 'react';

import img1 from '../../../assets/images/blog/blog-home/img3.jpg';
import img2 from '../../../assets/images/blog/blog-home/img2.jpg';
import img3 from '../../../assets/images/blog/blog-home/img1.jpg';

class BlogComponent extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Blog</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="blog-home2 spacer">
                <div className="container">
                    <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                            <h2 className="title">Recent Blogs</h2>
                            <h6 className="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
                            </div>
                    </div>
                    <div className="row m-t-40">
                        <div className="col-md-4">
                            <div className="card" data-aos="flip-left" data-aos-duration="1200">
                                <a href="#"><img className="card-img-top" src={img1} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">You should have eagle’s eye on new trends and techonogies</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>    
                                <a data-toggle="collapse" href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" data-aos="flip-up" data-aos-duration="1200">
                                <a href="#"><img className="card-img-top" src={img2} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">New Seminar on Newest Food Recipe from World’s Best</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>    
                                <a data-toggle="collapse" href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </div> 
                        </div>
                        <div className="col-md-4">
                            <div className="card" data-aos="flip-right" data-aos-duration="1200">
                                <a href="#"><img className="card-img-top" src={img3} alt="wrappixel kit" /></a>
                                <div className="date-pos bg-info-gradiant">Oct<span>23</span></div>
                                <h5 className="font-medium m-t-30"><a href="#" className="link">Learn from small things to create something bigger.</a></h5>
                                <p className="m-t-20">Business Park, Opp. Corns Sam Restaurant, New Yoark, US</p>    
                                <a data-toggle="collapse" href="#" className="linking text-themecolor m-t-10">Learn More <i className="ti-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default BlogComponent;
