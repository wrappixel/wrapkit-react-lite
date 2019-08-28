import React from 'react';

class Form extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Form</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">User Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Username" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                            </div>
                            <div className="form-group col-md-12">
                                <div className="checkbox checkbox-success">
                                    <input id="checkbox1" type="checkbox" />
                                    <label htmlFor="checkbox1"> Remember me </label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                                <button type="submit" className="btn btn-inverse waves-effect waves-light">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Form;
