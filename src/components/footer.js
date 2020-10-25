import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
const fontAwesomeStyle = {
    color: "black",
    marginRight:"2px",
    
    '& a:hover': {
      color: 'white',
      cursor:"pointer",
  },    
  };
class Footer extends Component {
    
    render() {
        return(
            <div className="footer">
               <div className="footer-content">
                <div className="footer-section about">
                <h1 className="logo-text"><span>ISE</span>Techinical Club</h1>
                <p>
                ISTC OR Information Science Technical Club is a student run body founded by our alumni and students with the help of our HOD and few of our very experienced teachers in 2019.
                </p>
                <div className="contactwe">
                <FontAwesomeIcon
                                style={fontAwesomeStyle}
                                icon={faEnvelope}
                                size="sg"
                              />
                              istcsce@gmail.com
                     
                </div>
                <div className="socials">
                  <a href="https://www.linkedin.com/company/is-technical-club-sce"><FontAwesomeIcon
                                style={fontAwesomeStyle}
                                icon={faLinkedin}
                                size="2x"
                              /></a>
                              <a href="#">
                              <FontAwesomeIcon
                                style={fontAwesomeStyle}
                                icon={faInstagram}
                                size="2x"
                              />
                              </a>
               <a href="https://github.com/niranjanhegde144/ISETechClub">
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
                <br/>
                <ul>
               <li>
                  <Link eventKey="5" as={Link} to="/notes">
              Notes
            </Link>
                 </li>
                 <li>
            <Link eventKey="6" as={Link} to="/events">
              Events
            </Link>
                 </li>
                 <li>
            <Link eventKey="1" as={Link} to="/blogs">
              Blogs
            </Link>
                 </li>
                 <li>
            <Link eventKey="2" as={Link} to="/programming">
              Programming
            </Link>
                 </li>
                 <li>
            <Link eventKey="4" as={Link} to="/team">
              Team
            </Link>
                 </li>
                </ul>
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