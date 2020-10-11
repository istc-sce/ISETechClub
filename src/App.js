import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home.js";
import Programming from "./components/programming.js";
import Result from "./components/result.js";
import Notes from "./components/notes.js";
import Blogs from "./components/blogs.js";
import Contributors from "./components/contributors.js";
import contributor_details from "./contributors_details.json";
import notes_data from "./notes_details.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div>
      <a href="https://github.com/niranjanhegde144/ISETechClub" target="_blank" rel="noopener noreferrer" className='forkLink'>
          <img
            border='0' alt='Github' width='150' height='150'
            src='https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149'
          />
        </a>
      <Navbar bg="light" collapseOnSelect={true} varient="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
            src={process.env.PUBLIC_URL + "/favicon.ico"}
            alt="ISE Tech"
            className="homeIcon"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="text-center navBarContent"
          id="basic-navbar-nav"
        >
          <Nav>
            <Nav.Link eventKey="5" as={Link} to="/notes">
              Notes
            </Nav.Link>
            <Nav.Link eventKey="1" as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/programming">
              Programming
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/result">
              Result
            </Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/team">
              Team
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/notes" 
        render={(props) => <Notes details={notes_data} {...props} />}      
      />
      <Route path="/programming" component={Programming} />
      <Route path="/result" component={Result} />
      <Route path="/blogs" component={Blogs} />
      <Route
        path="/team"
        render={(props) => <Contributors details={contributor_details} {...props} />}
      />
    </div>
  );
}

export default App;
