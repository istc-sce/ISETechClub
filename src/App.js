import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home.js";
import Events from "./components/event.js";
import Programming from "./components/programming.js";
import Result from "./components/result.js";
import Notes from "./components/notes.js";
import Blogs from "./components/blogs.js";
import Contributors from "./components/contributors.js";
import details from "./contributors_details.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">ISTC</Navbar.Brand>
        <Nav className="navBarContent">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/event">Event</Nav.Link>
          <Nav.Link as={Link} to="/notes">Notes</Nav.Link>
          <Nav.Link as={Link} to="/programming">Programming</Nav.Link>
          <Nav.Link as={Link} to="/result">Result</Nav.Link>
          <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/contributors">Contributors</Nav.Link>
        </Nav>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/event" component={Events} />
      <Route path="/notes" component={Notes} />
      <Route path="/programming" component={Programming} />
      <Route path="/result" component={Result} />
      <Route path="/blogs" component={Blogs} />
      <Route
        path="/contributors"
        render={(props) => <Contributors details={details} {...props} />}
      />
    </div>
  );
}

export default App;
