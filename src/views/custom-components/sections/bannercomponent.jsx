/* eslint-disable */
import React from 'react';

class BannerComponent extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Banners</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="static-slider10">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-md-6 align-self-center text-center" data-aos="fade-down" data-aos-duration="1200">
                            <span className="label label-rounded label-inverse">Creating Brands</span>
                            <h1 className="title">ONE BILLON People Use Facebook</h1>
                            <h6 className="subtitle op-8">Pellentesque vehicula eros a dui pretium ornare. Phasellus congue vel quam nec luctus.In accumsan at eros in dignissim. Cras sodales nisi nonn accumsan.</h6>
                            <a className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20" data-toggle="collapse" href=""><span>Do you Need Help? <i className="ti-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-slider3">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-md-8 align-self-center text-center" data-aos="fade-right" data-aos-duration="1200">
                            <h1 className="title">I’m Johanthan Doe, an <b className="font-bold">Entreprenuer, Designer & Front-end Developer</b>, Making <span className="text-success-gradiant font-bold typewrite" data-period="2000" data-type='[ "Photoshop", "Web Application", "Web Designing", "Web Development" ]'></span></h1>
                            <a className="btn btn-success-gradiant btn-md btn-arrow m-t-20" data-toggle="collapse" href=""><span>Checkout My Work <i className="ti-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default BannerComponent;
