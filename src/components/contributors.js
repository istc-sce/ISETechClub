import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const fontAwesomeStyle = {
  color: "black",
};

let mapDetail = (detail) => {
  return (
    <div className="contributor" key={detail.id}>
      <img src={detail.profile} alt="profile" />
      <div className="overlay">
        <div className="about">
          <div className="name">
            <h3>{detail.name}</h3>
          </div>
          <div className="desc">
            {detail.description.map((orgDetails) => (
              <div key={orgDetails.id}>
                <p>{orgDetails.status} </p>
                <a href={orgDetails.organization} target="_blank" rel="noopener noreferrer">{orgDetails.name}</a>
              </div>
            ))}
          </div>
          <div className="contact">
            {detail.contact.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {(() => {
                  switch (contact.icon) {
                    case "desktop":
                      return (
                        <FontAwesomeIcon
                          style={fontAwesomeStyle}
                          icon={faDesktop}
                          size="lg"
                        />
                      );
                    case "linkedin":
                      return (
                        <FontAwesomeIcon
                          style={fontAwesomeStyle}
                          icon={faLinkedin}
                          size="lg"
                        />
                      );
                    case "github":
                      return (
                        <FontAwesomeIcon
                          style={fontAwesomeStyle}
                          icon={faGithub}
                          size="lg"
                        />
                      );
                    case "twitter":
                      return (
                        <FontAwesomeIcon
                          style={fontAwesomeStyle}
                          icon={faTwitter}
                          size="lg"
                        />
                      );
                    default:
                      return (
                        <FontAwesomeIcon
                          style={fontAwesomeStyle}
                          icon={faDesktop}
                          size="lg"
                        />
                      );
                  }
                })()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Contributors(props) {
  const data = props.details;
  return (
   
    <div className="profile">{data.map((detail) => mapDetail(detail))}</div>
 
  );
}
