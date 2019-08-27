import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Dropdowns extends React.Component {
  render() {
    return (
        <div>
            <div className="spacer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-7 text-center">
                            <h1 className="title font-bold">Dropdowns</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                        </div>
                    </div>        
                </div>    
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="btn-group">
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-danger" caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">Link</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 1</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 2</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div className="btn-group">
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-info" caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">Link</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 1</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 2</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div className="btn-group">
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-primary" caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">Link</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 1</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 2</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div className="btn-group">
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-warning" caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">Link</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 1</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 2</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div className="btn-group">
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-success" caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">Link</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 1</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 2</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                        <div className="btn-group">
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="button" className="btn btn-secondary" caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" href="/blah">Link</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 1</DropdownItem>
                                    <DropdownItem tag="a" href="/blah">Link 2</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Dropdowns;
