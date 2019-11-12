import React from 'react';

import { Alert } from 'reactstrap';

class Notification extends React.Component {
    render() {
        return (
            <div>
                <div className="spacer" id="notification-component">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h1 className="title font-bold">Notification</h1>
                                <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Alert color="success">
                                I am an alert and I can be dismissed!
                        </Alert>
                            <Alert color="danger">
                                I am an alert and I can be dismissed!
                        </Alert>
                            <Alert color="warning">
                                I am an alert and I can be dismissed!
                        </Alert>
                            <Alert color="info">
                                I am an alert and I can be dismissed!
                        </Alert>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;
