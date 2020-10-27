import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter,faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const fontAwesomeStyle = {
  color: "white",
};

let mapDetail = (details) => {
  return (
    <div className="teamCard" key={details.id}>
      <p className="sectiontag text-medium text1">
        {details.team}
      </p>
      <div className="members">
        {details.members.map((detail) => (
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
                      <p>{orgDetails.status} <a href={orgDetails.organization} target="_blank" rel="noopener noreferrer">{orgDetails.name}</a>
                      </p>
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
                          case "google-play":
                            return (
                                <FontAwesomeIcon 
                                style = {fontAwesomeStyle}
                                icon = {faGooglePlay}
                                size = "lg"
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
        ))}
      </div>
    </div>
  );
};

export default function Contributors(props) {
  const data = props.details;
  return (
    <div className="homeBackground">
    <div className="profile">{data.map((detail) => mapDetail(detail))}</div>
    </div>
  );
}
