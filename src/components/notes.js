import React from 'react';
import { Accordion, Card, Button, Jumbotron } from 'react-bootstrap';

let mapDetail = (detail) => {
    return (
        <Jumbotron className="notesCard" key={detail.id}>
            
                {(() => {
                  switch (detail.sem) {
                    case "Chemistry Cycle":
                      return (
                        <p className="sectiontag text1">
                            Chemistry Cycle
                        </p>
                      );
                    case "Physics Cycle":
                      return (
                        <p className="sectiontag text1">
                            Physics Cycle
                        </p>
                      );
                    default:
                      return (
                        <p className="sectiontag text1">
                            Semester - {detail.sem}
                        </p>
                      );
                  }
                })()}
            {detail.notes.map((subs) => (
                <Card key={subs.id}>
                    <Accordion className="notes">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0" className="sectiontag text2">
                                {subs.name}
                            </Accordion.Toggle>
                        </Card.Header>
                        {subs.module.map((mod) => (
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <a href={mod.link} target="_blank" rel="noopener noreferrer">{mod.title}</a>
                                </Card.Body>
                            </Accordion.Collapse>
                        ))}
                    </Accordion>
                </Card>
            ))}
        </Jumbotron>
    )
}


export default function Notes(props) {
    const data = props.details;
    return (
        <div>
            <br />
            <Jumbotron className="notesHeader">
                <p className="sectiontag text-big text1">
                    Information Science Engineering Notes
            </p>
            </Jumbotron>
            <div>
                {data.map((detail) => mapDetail(detail))}
            </div>
        </div>
    );
}

