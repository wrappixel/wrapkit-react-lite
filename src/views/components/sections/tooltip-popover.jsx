import React from 'react';
import { Button, Tooltip, Popover, PopoverHeader, PopoverBody, Container, Row, Col } from 'reactstrap';

class TooltipItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <span>
                <Button className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
                    {this.props.item.text}
                </Button>
                <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
                    Tooltip Content!
          </Tooltip>
            </span>
        );
    }
}

class PopoverItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <span>
                <Button className="mr-1" color="secondary" id={'Popover-' + this.props.id} type="button">
                    {this.props.item.text}
                </Button>
                <Popover placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
                </Popover>
            </span>
        );
    }
}

class TooltipPopover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tooltips: [
                {
                    placement: 'top',
                    text: 'Tooltip on Top'
                },
                {
                    placement: 'bottom',
                    text: 'Tooltip on Bottom'
                },
                {
                    placement: 'left',
                    text: 'Tooltip on Left'
                },
                {
                    placement: 'right',
                    text: 'Tooltip on Right'
                }
            ],
            popovers: [
                {
                    placement: 'top',
                    text: 'Popover on Top'
                },
                {
                    placement: 'bottom',
                    text: 'Popover on Bottom'
                },
                {
                    placement: 'left',
                    text: 'Popover on Left'
                },
                {
                    placement: 'right',
                    text: 'Popover on Right'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                <div className="spacer" id="toolpop-component">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h1 className="title font-bold">Tooltip & Popover</h1>
                                <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col md="12" className="text-center">
                            <div className="button-box">
                                {this.state.tooltips.map((tooltip, i) => {
                                    return <TooltipItem key={i} item={tooltip} id={i} />;
                                })}
                            </div>
                            <div className="button-box m-t-40">
                                {this.state.popovers.map((popover, i) => {
                                    return <PopoverItem key={i} item={popover} id={i} />;
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TooltipPopover;
