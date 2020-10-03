import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {
        return(
            <div className="homeBackground">
                
                <br />
                <Jumbotron className="homeBanner">
                    <h1>ISE Technical Club</h1>
                    <ul>
                        <li>Welcome to the official website of ISE Technical Club.</li>
                        <li>This is the one stop for everything you need.</li>
                        <li>Get online notes.</li>
                        <li>Get updates of VTU Results.</li>
                    </ul>
                </Jumbotron>
                <Jumbotron className="homeBanner">
                    <h1>Activities by ISTC</h1>
                    <ul>
                        <li>New events coming up on the EVENTS page.</li>
                        <li>Coding platform for contest conducted by ISTC.</li>
                    </ul>
                </Jumbotron>
            </div>
        )
    }
}


export default Home;
