import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';


let mapDetail = (detail) => {
    return(
        <Jumbotron className="homeCard" key={detail.id}>
            <Container>
                <h1>{detail.header}</h1>
                <ul>
                    {detail.content.map((content) => (
                        <li key={content.id}>
                            {content.text}
                        </li>
                    ))}
                </ul>
            </Container>
        </Jumbotron>
    );
};


export default function Home(props) {
    const data = props.details;
    return (
        <div className="homeBackground">
            <div className="bannerImage">
                <img src="https://media-exp1.licdn.com/dms/image/C511BAQFRMrZ7IbwQcw/company-background_10000/0?e=2159024400&v=beta&t=n6X6b5kikVkRnn8nkLk6W2TkEPCS3_k48lu2Xxmffl8" alt="ISE TECH CLUB" width="100%" height="auto" />
            </div>
            <br />
            <div>{data.map((detail) => mapDetail(detail))}</div>
        </div>
    );
  }
