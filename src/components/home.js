import React, {Component} from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {
        return(
            <div className="homeBackground">
                <a href="https://github.com/niranjanhegde144/ISETechClub" target="_blank" rel="noopener noreferrer" className='forkLink'>
                    <img
                        border='0' alt='Github' width='150' height='150'
                        src='https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149'
                    />
                </a>
                <div className="bannerImage">
                    <img src="https://media-exp1.licdn.com/dms/image/C511BAQFRMrZ7IbwQcw/company-background_10000/0?e=2159024400&v=beta&t=n6X6b5kikVkRnn8nkLk6W2TkEPCS3_k48lu2Xxmffl8" alt="ISE TECH CLUB" width="100%" height="auto" />
                </div>
                <br />
                <Jumbotron className="homeCard">
                    <Container>
                        <h1>ISE Technical Club</h1>
                        <ul>
                            <li>Welcome to the official website of ISE Technical Club.</li>
                            <li>This is the one stop for everything you need.</li>
                            <li>Get online notes.</li>
                            <li>Get updates of VTU Results.</li>
                        </ul>
                    </Container>
                </Jumbotron>
                <Jumbotron className="homeCard">
                    <Container>
                        <h1>Activities by ISTC</h1>
                        <ul>
                            <li>New events coming up on the EVENTS page.</li>
                            <li>Coding platform for contest conducted by ISTC.</li>
                        </ul>
                    </Container>
                </Jumbotron>
                <p className="note">*NOTE: To contribute in this project, open in a desktop browser*</p>
            </div>
        )
    }
}


export default Home;
