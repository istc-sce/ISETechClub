import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faPhone } from '@fortawesome/fontawesome-free-solid'

let mapDetail = (detail) => {
  return (
    <div className="contributor" key={detail.id}>
      <img src={detail.profile} alt="profile" />
      <div className="overlay">
        <div className="about">
          <div className="name">{detail.name}</div>
          <div className="desc">{detail.description}</div>
        </div>
        <div className="contact">
          {detail.contact.map((contact) => (
            <a
              key="contact.id"
              href={contact.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={contact.icon} />
            </a>
          ))}
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
