/* eslint-disable */
import React from 'react';

class Breadcrumbs extends React.Component {
    render() {
        return (
            <div>
                <div className="spacer" ref={(div) => { this.ComponentBreadcrumb = div; }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h1 className="title font-bold">Breadcrumbs</h1>
                                <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ol className="breadcrumb m-b-10">
                                <li className="breadcrumb-item active">Home</li>
                            </ol>
                            <ol className="breadcrumb m-b-10">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Library</li>
                            </ol>
                            <ol className="breadcrumb m-b-10">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Library</a></li>
                                <li className="breadcrumb-item active">Data</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumbs;
