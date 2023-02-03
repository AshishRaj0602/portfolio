import React from "react";
import "./about.css";
import Me from "../../assets/About.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Go to know</h5>
      <h2>About Me</h2>

      <div className="container about--container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about--content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>fresher</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Project</h5>
              <small>15+ Project completed</small>
            </article>

            <article className="about__card">
              <FaProjectDiagram className="about__icon" />
              <h5>BackEnd</h5>
              <small>Currently I am learning backend</small>
            </article>
          </div>
          <p>
            <h3>Heyy this is Ashish</h3> Frontend developer, I create web pages with UI /
            UX user interface, I have brief knowledge about problem solving in
            java with Data structure and algorithm.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
