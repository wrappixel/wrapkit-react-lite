import React from 'react';

class PricingComponent extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Pricing</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="pricing8 spacer b-t">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="title">Simple Pricing to make your Work Effective</h2>
                            <h6 className="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>                                
                        </div>
                    </div>
                    <div className="row m-t-40">
                        <div className="col-md-4 ml-auto pricing-box align-self-center">
                            <div className="card b-all ">
                                <div className="card-body p-30 text-center">
                                    <h5>Regular Plan</h5>
                                    <sup>$</sup><span className="text-dark display-5">39</span>
                                    <h6 className="font-light font-14">YEARLY</h6>
                                    <p className="m-t-40">The Master license allows you to customize, store and even host your website using your platform</p>
                                    
                                </div>
                                <a className="btn btn-info-gradiant p-15 btn-arrow btn-block " data-toggle="collapse" href="#">CHOOSE PLAN </a>
                            </div>
                        </div>
                        <div className="col-md-4 ml-auto pricing-box align-self-center">
                            <div className="card b-all ">
                                <div className="card-body p-30 text-center">
                                    <h5>Master Plan</h5>
                                    <sup>$</sup><span className="text-dark display-5">49</span>
                                    <h6 className="font-light font-14">YEARLY</h6>
                                    <p className="m-t-40">The Master license allows you to customize, store and even host your website using your platform</p>
                                    
                                </div>
                                <a className="btn btn-danger-gradiant p-15 btn-arrow btn-block " data-toggle="collapse" href="#">CHOOSE PLAN </a>
                            </div>
                        </div>
                        <div className="col-md-4 ml-auto pricing-box align-self-center">
                            <div className="card b-all ">
                                <div className="card-body p-30 text-center">
                                    <h5>Premium Plan</h5>
                                    <sup>$</sup><span className="text-dark display-5">69</span>
                                    <h6 className="font-light font-14">YEARLY</h6>
                                    <p className="m-t-40">The Master license allows you to customize, store and even host your website using your platform</p>
                                    
                                </div>
                                <a className="btn btn-info-gradiant p-15 btn-arrow btn-block " data-toggle="collapse" href="#">CHOOSE PLAN </a>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
  }
}

export default PricingComponent;
