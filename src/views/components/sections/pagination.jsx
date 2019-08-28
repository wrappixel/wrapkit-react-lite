import React from 'react';

class Pagination extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Pagination</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 m-b-30">
                        <h4 className="card-title">Simple pagination</h4>
                        <h6 className="card-subtitle">To make pagination give class <code>pagination</code> to ul</h6>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-4 m-b-30">
                        <h4 className="card-title">Working with icons</h4>
                        <h6 className="card-subtitle">To make pagination give class <code>pagination</code> to ul</h6>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-4 m-b-30">
                        <h4 className="card-title">Disabled and active states</h4>
                        <h6 className="card-subtitle">To make pagination active or disable give class <code>.disabled & .active</code> to ul</h6>
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-6 m-b-30">
                        <h4 className="card-title">Sizing Large</h4>
                        <h6 className="card-subtitle">Fancy larger or smaller pagination? Add<code>.pagination-lg </code> for additional sizes.</h6>
                        <nav aria-label="...">
                            <ul className="pagination pagination-lg">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-6 m-b-30">
                        <h4 className="card-title">Sizing Small</h4>
                        <h6 className="card-subtitle">Fancy larger or smaller pagination? Add<code>.pagination-sm </code> for additional sizes.</h6>
                        <nav aria-label="...">
                            <ul className="pagination pagination-sm">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Pagination;
