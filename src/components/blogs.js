import React from "react";
/*
'''
This is the template for the preview link of the blogs
'''

let articleMap = (dataObj) => {
  return (
    <div className="article">
      <img
        className="content-image"
        alt="content"
        src="https://miro.medium.com/max/1200/1*SDsFQNrCGFl2FtyT-LyRbA.jpeg"
        draggable="false"
      />
      <div className="content">
        <div className="header">
          <h1>Article Title</h1>
        </div>
        <div className="description">
          This is a small description about the article
        </div>
        <div className="url">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://niranjanhegde144.github.io/portfolio"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
};
*/

export default function Blogs(props) {
  const data = props.data;
  console.log(data);
  return <div>Blogs</div>;
}
