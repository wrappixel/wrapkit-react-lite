import React from 'react';

class Labels extends React.Component {
    render() {
        return (
            <div>
                <div className="spacer" id="label-component">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h1 className="title font-bold">Labels</h1>
                                <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-b-30">
                            <h6 className="card-subtitle">Use class <code>.label </code> for get desire text.</h6>
                            <h1>Example heading <span className="label label-inverse">New</span></h1>
                            <h2>Example heading <span className="label label-success">New</span></h2>
                            <h3>Example heading <span className="label label-info">New</span></h3>
                            <h4>Example heading <span className="label label-primary">New</span></h4>
                            <h5>Example heading <span className="label label-danger">New</span></h5>
                            <h6>Example heading <span className="label label-warning">New</span></h6>
                        </div>
                        <div className="col-md-3 m-b-30">
                            <h6 className="card-subtitle">Use class <code>.label</code> and for colors <code>label-success & .label-light-success</code> for get desire label.</h6>
                            <span className="label label-inverse">Default</span> <span className="label label-light-inverse">Default</span>
                            <br />
                            <span className="label label-primary">Primary</span> <span className="label label-light-primary">Primary</span>
                            <br />
                            <span className="label label-success">Success</span> <span className="label label-light-success">Success</span>
                            <br />
                            <span className="label label-info">Info</span> <span className="label label-light-info">Info</span>
                            <br />
                            <span className="label label-warning">Warning</span> <span className="label label-light-warning">Warning</span>
                            <br />
                            <span className="label label-danger">Danger</span> <span className="label label-light-danger">Danger</span>
                        </div>
                        <div className="col-md-3 m-b-30">
                            <h6 className="card-subtitle">Use class <code>.label .label-rounded</code> and for colors <code>label-success</code> for get desire label.</h6>
                            <span className="label label-rounded label-inverse">Default</span>
                            <br />
                            <span className="label label-rounded label-primary">Primary</span>
                            <br />
                            <span className="label label-rounded label-success">Success</span>
                            <br />
                            <span className="label label-rounded label-info">Info</span>
                            <br />
                            <span className="label label-rounded label-warning">Warning</span>
                            <br />
                            <span className="label label-rounded label-danger">Danger</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Labels;
