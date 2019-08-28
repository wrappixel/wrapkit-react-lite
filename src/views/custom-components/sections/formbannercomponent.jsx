import React from 'react';

import banner from '../../../assets/images/form-banners/banner1/banner-img.png';

class FormBannerComponent extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Form Banner</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="bg-light">
                <section>
                    <div id="banner1" className="banner spacer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7 col-lg-5 align-self-center" data-aos="fade-right" data-aos-duration="1500">
                                    <h2 className="title font-bold">Give your Business Real boost Now!</h2>
                                    <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p>
                                    <div className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </div>
                                </div>
                                <div className="col-md-5 col-lg-6 align-self-center ml-auto" data-aos="fade-left" data-aos-duration="1500">
                                    <img src={banner} alt="We are Digital Agency" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
  }
}

export default FormBannerComponent;
