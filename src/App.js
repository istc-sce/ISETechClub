import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home.js";
import Programming from "./components/programming.js";
import Result from "./components/result.js";
import Notes from "./components/notes.js";
import Blogs from "./components/blogs.js";
import Teams from "./components/teams.js";
import contributor_details from "./contributors_details.json";
import blogs_details from "./blog_links.json";
import notes_data from "./notes_details.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

// Fetching the necessary data for the preview link.
const proxy = "https://cors-anywhere.herokuapp.com/";
const descPattern = '<meta.*name="description".*content="(.*?)".*>';
const titlePattern = "<title>(.*?)</title>";
const iconPattern = '<link.*?rel=".*?icon".*href="(.*?)".*?>';
const contentImagePattern = '<meta.*property="og:image".*content="(.*?)".*>';
const data = [];
let description, title, icon, contentImage, dataObj;

const getContent = async (url) => {
  var response = await fetch(proxy + url);
  switch (response.status) {
    // status "OK"
    case 200:
      var template = await response.text();
      try {
        description = template.match(descPattern)[1];
        title = template.match(titlePattern)[1];
        icon = template.match(iconPattern);
        contentImage = template.match(contentImagePattern)[1];
      } catch (err) {
        console.log(err);
      }
      dataObj = {
        title: title || "Missing Title for Article",
        description: description || "Missing Description for Article",
        image: contentImage || icon || "Missing Image for Article",
        link: url,
      };
      data.push(dataObj);
      break;
    default:
      break;
  }
};
blogs_details.forEach(getContent);

function App() {
  return (
    <div>
      <a
        href="https://github.com/niranjanhegde144/ISETechClub"
        target="_blank"
        rel="noopener noreferrer"
        className="forkLink"
      >
        <img
          border="0"
          alt="Github"
          width="150"
          height="150"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
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
      <Route
        path="/notes"
        render={(props) => <Notes details={notes_data} {...props} />}
      />
      <Route path="/programming" component={Programming} />
      <Route path="/result" component={Result} />
      <Route
        path="/blogs"
        render={(props) => <Blogs data={data} {...props} />}
      />
      <Route
        path="/team"
        render={(props) => <Teams details={contributor_details} {...props} />}
      />
      <p className="note">
        *NOTE: To contribute in this project, open in a desktop browser*
      </p>
    </div>
  );
}

export default App;
