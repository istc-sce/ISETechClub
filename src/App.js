import React from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home.js";
import Result from "./components/result.js";
import Notes from "./components/notes.js";
import Blogs from "./components/blogs.js";
import Teams from "./components/teams.js";
import Event from "./components/events.js";
import contributor_details from "./contributors_details.json";
// import blogs_details from "./blog_links.json";
import notes_data from "./notes_details.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer.js";
import ShortIcon from "./components/images/shortIcon.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import ProgrammingArticle from "./components/programming_articles";
import Programming from "./components/programming";
import Questions from "./components/programming_article_questions";

// Blogs
// // Fetching the necessary data for the preview link.
// const proxy = "https://cors-anywhere.herokuapp.com/";
// const descPattern = '<meta.*name="description".*content="(.*?)".*>';
// const titlePattern = "<title>(.*?)</title>";
// const iconPattern = '<link.*?rel=".*?icon".*href="(.*?)".*?>';
// // Have to verify this pattern
// const contentImagePattern = '<meta.*property="og:image".*content="(.*?)".*>';
const data = [];
// let description, title, icon, contentImage, dataObj;

// const getContent = async (url) => {
//   var response = await fetch(proxy + url);
//   switch (response.status) {
//     // status "OK"
//     case 200:
//       var template = await response.text();
//       try {
//         description = template.match(descPattern)[1];
//         title = template.match(titlePattern)[1];
//         icon = template.match(iconPattern);
//         contentImage = template.match(contentImagePattern)[1];
//       } catch (err) {
//         console.log(err);
//       }
//       dataObj = {
//         title: title || "Missing Title for Article",
//         description: description || "Missing Description for Article",
//         image: contentImage || icon || "Missing Image for Article",
//         link: url,
//       };
//       data.push(dataObj);
//       break;
//     default:
//       break;
//   }
// };
// blogs_details.forEach(getContent);

function App() {
  return (
    <div>
      <Navbar bg="dark" collapseOnSelect={true} varient="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img src={ShortIcon} alt="ISE Tech" className="homeIcon" />
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
            <Nav.Link eventKey="6" as={Link} to="/events">
              Events
            </Nav.Link>
            {/*
            <Nav.Link eventKey="1" as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            {/* 
            <Nav.Link eventKey="3" as={Link} to="/result">
              Result 
            </Nav.Link>
            */}
            <Nav.Link eventKey="4" as={Link} to="/team">
              Team
            </Nav.Link>
            <NavDropdown title="Programming" id="nav-dropdown">
              <NavDropdown.Item
                eventKey="7.1"
                as={Link}
                to="/programming/articles"
              >
                Article Section
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey="7.2"
                as={Link}
                to="/programming/problems"
              >
                Coding Section
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route
        path="/notes"
        render={(props) => <Notes details={notes_data} {...props} />}
      />
      <Route
        path="/programming/articles"
        render={(props) => <ProgrammingArticle data={Questions} {...props} />}
      />
      <Route path="/programming/problems" component={Programming} />
      <Route path="/result" component={Result} />
      {/* Need to pass the props when the data has been completely read. Data read should be either made synchronous or have to think about other method. */}
      <Route
        path="/blogs"
        render={(props) => <Blogs data={data} {...props} />}
      />
      <Route path="/events" component={Event} />
      <Route
        path="/team"
        render={(props) => <Teams details={contributor_details} {...props} />}
      />
      <Footer />
    </div>
  );
}

export default App;
