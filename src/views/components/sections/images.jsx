import React from 'react';

import img1 from '../../../assets/images/ui/img6.jpg';
import img2 from '../../../assets/images/ui/5.jpg';
import img3 from '../../../assets/images/ui/img5.jpg';

class Images extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Images</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 m-b-30">
                        <h4 className="card-title">Image with round corner</h4>
                        <h6 className="card-subtitle"><code>.img-rounded</code></h6>
                        <img src={img1} alt="image" className="img-responsive img-rounded" width="200" />
                        <p className="m-t-15 m-b-0"></p>
                    </div>
                    <div className="col-lg-4 text-center m-b-30">
                        <h4 className="card-title">Image with circle</h4>
                        <h6 className="card-subtitle"><code>.img-circle</code> Make sure the image is square not ractangle</h6>
                        <img src={img2} alt="image" className="img-circle" width="290" />
                        <p className="m-t-15 m-b-0"></p>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="card-title">Image with Thumbnail</h4>
                        <h6 className="card-subtitle"><code>img-thumbnail</code></h6>
                        <img src={img3} alt="image" className="img-responsive img-thumbnail" width="200" />
                        <p className="m-t-15 m-b-0"></p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Images;
