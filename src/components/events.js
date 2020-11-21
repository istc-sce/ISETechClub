import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Row, Col, Carousel } from 'react-bootstrap';
import Events from "./images/eventsIcon.jpg";
import Events1 from "./images/event1/events11.png";
import Events2 from "./images/event1/events12.png";
import "./events.css";


class Event extends Component {
    render() {
        return(
        
            <div>
                <br />
                <Jumbotron className="eventsHeader">
                    <section className="section-events">
                        <Container>
                                <Row>
                                    <Col sm={7} className="d-flex justify-content-start">
                                        <div className="d-flex align-items-center">
                                            <p className="eventhead">
                                            ISE Tech Club Events
                                            </p>
                                        </div>
                                    </Col> 
                                    <Col sm={5} className="d-flex justify-content-center">  
                                        <div className="thumb-events">
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
                                            An intriguing three-hour package on how to start  with competitive programming. The main aim of this session was to inculcate the habit of competitive programming among students which further enhances their mental ability and brushes up their problem-solving skills. 
                                            Programming is an extremely creative and logic based concept. Hence, in this era, where programming is becoming an irreplaceable concept, we try making it as creative as we can so that students enjoy doing it! We tried doing this by teaching the students on how to analyse a problem and approach it with some programming techniques. 
                                            We also motivated the students during the three-hour session. We got an amazing feedback from the students for the interactive session that we conducted.
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
