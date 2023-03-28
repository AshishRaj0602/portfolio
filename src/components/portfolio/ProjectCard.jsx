/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './portfolio.css'

const Project = ({img ,text, github , live}) => {
  return (
    <article className='project__item'>
          <div className="project__item-image">
            <img src={img} alt={`${text} image`} />
          </div>
          <h3>{text? text:"This is a portfolio item title"}</h3>
          <div className="project__item-cta">
            <a href={github} className='btn' target="_blank" rel="noreferrer">GitHube</a>
            <a href={live} className='btn btn-primary' target="_blank" rel="noreferrer">Live demo</a>
          </div>
    </article>
  )
}

export default Project