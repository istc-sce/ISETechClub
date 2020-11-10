import React from "react";
import "./programming_article.css";

if (typeof Storage == "undefined") {
  alert(
    "Sorry for the inconvenience!! This site is not optimal for this browser. Please use the modern web browsers."
  );
}

const getStorageValue = (key) => {
  return localStorage.getItem(key);
};

// This is not required in this component.
// const setStorageValue = (key, value) => {
//   localStorage.setItem(key, value);
// };

let createCard = (data) => {
  const topicName = data.topicName;
  const totalQuestions = data.questions.length;
  return (
    <div className="articleCard">
      <h3>{topicName}</h3>
      <p>Total Questions: {totalQuestions}</p>
      <p>Questions left: {totalQuestions - getStorageValue(topicName) || 0}</p>
    </div>
  );
};

function programming_articles(props) {
  return (
    <div className="cardsContainer">
      <h1 id="containerHeader">Important Selected Questions</h1>
      {props.data.map((element) => createCard(element))}
    </div>
  );
}

export default programming_articles;
