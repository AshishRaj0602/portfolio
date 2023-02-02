import React from 'react'
import './portfolio.css'

const Project = (props) => {
  return (
    <article className='project__item'>
          <div className="project__item-image">
            <img src={props.img} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="project__item-cta">
            <a href="GitHube.com" className='btn'>GitHube</a>
            <a href="GitHube.com" className='btn btn-primary'>Live demo</a>
          </div>
    </article>
  )
}

export default Project