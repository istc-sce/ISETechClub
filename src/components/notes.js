import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

let mapDetail = (detail) => {
    return (
        <div className="notes" key={detail.id}>
            <br/>
            <Accordion className="notesCard">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Semester - {detail.sem}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {detail.notes.map((subs) => (
                        <Card key={subs.id}>
                            <Accordion>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    {subs.name}
                                </Accordion.Toggle>
                                </Card.Header>
                                {subs.module.map((mod) =>(
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <a href={mod.link} target="_blank" rel="noopener noreferrer">{mod.title}</a>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                ))}
                            </Accordion>
                        </Card>
                        ))}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </div>
    )
}


export default function Contributors(props) {
    const data = props.details;
    return (
        <div className="notes darkMode">
            <div>
                <img className="bannerImageNotes" src="https://www.evergreenhealthfoundation.com/wp-content/uploads/2016/02/sticky-note-banner.jpg" alt="Notes" width="100%" height="auto" />
            </div>
            {data.map((detail) => mapDetail(detail))}
            <br />
        </div>
    );
  }
