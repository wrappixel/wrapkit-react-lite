import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <div id="element">
                <div className="spacer" id="reactstrap-components">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h1 className="title font-bold">Buttons</h1>
                                <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="button-group">
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-outline-primary">Primary</button>
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-outline-secondary">Secondary</button>
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-outline-success">Success</button>
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-outline-info">Info</button>
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-outline-warning">Warning</button>
                                <button type="button" className="btn waves-effect waves-light btn-outline-danger">Danger</button>
                            </div>
                            <div className="button-group m-t-30">
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-rounded btn-primary">Primary</button>
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-rounded btn-secondary">Secondary</button>
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-rounded btn-success">Success</button>
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-rounded btn-info">Info</button>
                                <button type="button" className="btn mr-2 waves-effect waves-light btn-rounded btn-warning">Warning</button>
                                <button type="button" className="btn waves-effect waves-light btn-rounded btn-danger">Danger</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buttons;
