import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer4 b-t spacer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 m-b-30">
                    <h5 className="m-b-20">Address</h5>
                    <p>71 Amsteroum Avenue Cronish Night, NY 35098</p>
                </div>
                <div className="col-lg-3 col-md-6 m-b-30">
                    <h5 className="m-b-20">Phone</h5>
                    <p>Reception :  +205 123 4567 <br/>Office :  +207 235 7890</p>
                </div>
                <div className="col-lg-3 col-md-6 m-b-30">
                    <h5 className="m-b-20">Email</h5>
                    <p>Office :  <a href="#" className="link">info@wrappixel.com</a> <br/>Site :  <a href="#" className="link">wrapkit@wrappixel.com</a></p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="m-b-20">Social</h5>
                    <div className="round-social light">
                        <a href="#" className="link"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="link"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="link"><i className="fa fa-google-plus"></i></a>
                        <a href="#" className="link"><i className="fa fa-youtube-play"></i></a>
                        <a href="#" className="link"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="f4-bottom-bar">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex font-14">
                            <div className="m-t-10 m-b-10 copyright">All Rights Reserved by WrapPixel.</div>
                            <div className="links ml-auto m-t-10 m-b-10">
                                <a href="#" className="p-10 p-l-0">Terms of Use</a>
                                <a href="#" className="p-10">Legal Disclaimer</a>
                                <a href="#" className="p-10">Privacy Policy</a>
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
export default Footer;
