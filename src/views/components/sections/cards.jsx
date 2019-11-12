/* eslint-disable */
import React from 'react';

class Cards extends React.Component {
    render() {
        return (
            <div>
                <div className="spacer" id="card-component">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h1 className="title font-bold">Cards</h1>
                                <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-shadow">
                                <div className="card-body">
                                    <h3 className="card-title">Special title treatment</h3>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-success">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card card-shadow">
                                <div className="card-body">
                                    <h3 className="card-title">Special title treatment</h3>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;
