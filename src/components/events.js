import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Events from "./images/eventsIcon.jpg";
import Events1 from "./images/event1/events11.png";
import Events2 from "./images/event1/events12.png";


class Event extends Component {
    render() {
        return(
        
            <div>

                <Jumbotron className="eventsHeader">
                    <section>
                        <Container>
                                <Row>
                                    <Col sm={7} className="d-flex justify-content-start">
                                        <div className="d-flex align-items-center">
                                            <p className="eventhead">
                                            ISE TECH CLUB EVENTS
                                            </p>
                                        </div>
                                    </Col> 
                                    <Col sm={5} className="d-flex justify-content-center">  
                                        <div className="eventImage">
                                            <img src={ Events } alt=" Events " className="imgfluid" />
                                        </div>
                                    </Col>
                                </Row>
                        </Container>
                    </section>
                </Jumbotron>
                <Jumbotron className="eventsHeader">
                    <section>
                        <div>
                        <Container>
                            <Row>
                                <Col sm={7} className="d-flex justify-content-start">
                                    <div>
                                        <h2 className="eventtext">
                                            WORKSHOP ON COMPETITIVE PROGRAMMING
                                        </h2>
                                        <p className="mt-3">
                                            An interesting and informative 3 hours session on how to start off with competitive programming. 
                                            Aim of this workshop was to motivate students to participate in competitive programming and improve 
                                            their problem analysis skills. Programming is an extremely creative profession, it is a logic based 
                                            creativity. We taught them some programming techniques and analysis of the problems. It waas a very 
                                            good interactive session where we got well response from the students. Techniques on how to program 
                                            and why to program were taught, which motivated learners to think in a different perspective.
                                        </p>
                                    </div>
                                </Col>
                                <Col sm={5} className="d-flex justify-content-end">
                                    <div>
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                className="d-block w-100"
                                                src={ Events1 }
                                                alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                className="d-block w-100"
                                                src={ Events2 }
                                                alt="Third slide"
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                            
                           
                        </div>
                    </section>
                </Jumbotron>
                
            </div>
            
        )
    }
}


export default Event;
