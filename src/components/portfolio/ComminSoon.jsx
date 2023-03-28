import React from "react";
import './commingSoon.css'
const ComminSoon = (props) => {
  return (
    <article className="project__item">
      <div className="project__item-image">
        <img src={props.img} alt="" />
      </div>
      <h3>{props.text?props.text:"This is a portfolio item title"}</h3>
      <div className="project__item-cta">
        <div  className="btn" id="comming">
          Comming Soon
        </div>
        {/* <a href="GitHube.com" className="btn btn-primary" disable={true}>
          Live demo
        </a> */}
      </div>
    </article>
  );
};

export default ComminSoon;
