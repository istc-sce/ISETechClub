import React from "react";

/* This is the template for the preview link of the blogs */

let articleMap = (dataObj) => {
  return (
    <div className="article" key={dataObj.id}>
      <img
        className="content-image"
        alt="content"
        src={dataObj.image}
        draggable="false"
      />
      <div className="content">
        <div className="header">
          <h3>{dataObj.title}</h3>
        </div>
        <div className="description">{dataObj.description}</div>
        <div className="url">
          <a target="_blank" rel="noopener noreferrer" href={dataObj.link}>
            {dataObj.link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Blogs(props) {
  // const data = props.data;
  // This is the sample data which has to be replaced by the props.data
  const data = [
    {
      id: 0,
      title:
        "Lazy Loading Images in React + CSS3 Transitions | by Ross Bulat | Medium",
      description:
        "Lazy loading and image state handling with components is one of those times where you ask why was it not done this way before? What this article will cover is how to handle image loading in React…",
      image: "https://miro.medium.com/max/1200/1*SDsFQNrCGFl2FtyT-LyRbA.jpeg",
      link:
        "https://medium.com/@rossbulat/lazy-image-loading-in-react-the-full-breakdown-4026619de2df",
    },
  ];
  return <div>{data.map((obj) => articleMap(obj))}</div>;
}
