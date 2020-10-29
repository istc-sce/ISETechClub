import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const fontAwesomeStyle = {
  color: "black",
  marginRight: "2px",

  '& a:hover': {
    color: 'white',
    cursor: "pointer",
  },
};
class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="follow-us"> Follow US</h2>
            <div className="socials">
              <a href="https://www.linkedin.com/company/is-technical-club-sce" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon
                style={fontAwesomeStyle}
                icon={faLinkedin}
                size="2x"
              /></a>
              <a href="https://www.instagram.com/istcsce/?igshid=auqnvolgbjii" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  style={fontAwesomeStyle}
                  icon={faInstagram}
                  size="2x"
                />
              </a>
              <a href="https://github.com/istc-sce" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  style={fontAwesomeStyle}
                  icon={faGithub}
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick links</h2>

            <ul>
              <li>
                <Link as={Link} to="/notes">
                  Notes
            </Link>
              </li>
              <li>
                <Link as={Link} to="/events">
                  Events
            </Link>
              </li>
              {/* <li>
            <Link  as={Link} to="/programming"> 
              Programming
            </Link>
                 </li>*/}
              <li>
                <Link as={Link} to="/team">
                  Team
            </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section contactWe">
            <h2>
              Contact Us
                    </h2>
            <div className="contactwe">

              <h3> <FontAwesomeIcon
                style={fontAwesomeStyle}
                icon={faEnvelope}
                size="sm"
              /> <a href="mailto:istcsce@gmail.com">istcsce@gmail.com</a></h3>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&#169; copyright reserved || ISTC </p>
        </div>
      </div>

    )
  }
}


export default Footer;