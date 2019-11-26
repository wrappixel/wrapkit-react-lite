import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Col
} from 'reactstrap';

import img1 from '../../../assets/images/ui/img4.jpg';
import img2 from '../../../assets/images/ui/img5.jpg';
import img3 from '../../../assets/images/ui/img6.jpg';

const items = [
    {
        src: img1,
        altText: '',
        caption: ''
    },
    {
        src: img2,
        altText: '',
        caption: ''
    },
    {
        src: img3,
        altText: '',
        caption: ''
    }
];

class JsComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            modal1: false,
            modal2: false,
            activeIndex: 0
        };

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggle1() {
        this.setState(prevState => ({
            modal1: !prevState.modal1
        }));
    }

    toggle2() {
        this.setState(prevState => ({
            modal2: !prevState.modal2
        }));
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    render() {
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });
        return (
            <div>
                <div className="spacer" id="js-component">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="7" className="text-center">
                                <h1 className="title font-bold">Javascript Components</h1>
                                <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row className="m-b-40">
                        <Col md="6">
                            <Button type="button" onClick={this.toggle} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Large Modal</Button>
                            <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                            <Button type="button" onClick={this.toggle1} className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">Medium Modal</Button>
                            <Modal size="md" isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}>
                                <ModalHeader toggle={this.toggle1}>Modal title</ModalHeader>
                                <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle1}>Do Something</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle1}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                            <Button type="button" onClick={this.toggle2} className="btn btn-block waves-effect waves-light btn-outline-primary">Small Modal</Button>
                            <Modal size="sm" isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                                <ModalHeader toggle={this.toggle2}>Modal title</ModalHeader>
                                <ModalBody>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                                <ModalFooter className="justify-content-center">
                                    <Button color="primary" onClick={this.toggle2}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </Col>
                        <Col md="6">
                            <Carousel
                                activeIndex={activeIndex}
                                next={this.next}
                                previous={this.previous}
                            >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default JsComponents;
