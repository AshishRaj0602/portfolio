import React from "react";
import "./education.css"
import {TiTick} from "react-icons/ti"
const SkillCard = (props) => {
  return (
    <div className="skill__card">
      <div className="skill__card-item">
        <h4 className="skill__name">{props.name}</h4>
        <div className="skill__icon">{props.icon}</div>
        <ul className="skill__list">
          <li><span className="tick"><TiTick/></span>{props.opt1}</li>
          <li><span className="tick"><TiTick/></span>{props.opt2}</li>
          <li><span className="tick"><TiTick/></span>{props.opt3}</li>
          <li><span className="tick"><TiTick/></span>{props.opt4}</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
