import React, { Component } from "react";

let mapDetail = (detail) => {
  console.log(detail);
  return (
    <div className="contributor" key={detail.id}>
      <img src={detail.profile} alt="profile" />
      <div className="about">
        <div className="name">{detail.name}</div>
        <div className="desc">{detail.description}</div>
      </div>
      <div className="contact">
        You can find me here:{" "}
        {detail.contact.map((contact) => (
          <a key="contact.id" href={contact.link}>
            Profile
          </a>
        ))}
      </div>
    </div>
  );
};

class Contributor extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.details,
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1 style={{ "text-align": "center" }}>Contributors</h1>
        <div className="profile">
          {this.state.data.map((detail) => mapDetail(detail))}
        </div>
      </div>
    );
  }
}

export default Contributor;
