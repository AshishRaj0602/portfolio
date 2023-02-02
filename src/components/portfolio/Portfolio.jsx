import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import Project from './ProjectCard'
const Portfolio = () => {
  return (
    <section id='project'>
      <h5>My Project</h5>
      <h2>Project</h2>

      <div className="container project__container">
        <Project img={IMG1}/>
        <Project img={IMG2}/>
        <Project img={IMG3}/>
        <Project img={IMG4}/>
        <Project img={IMG5}/>
        {/* <article className='project__item'>
          <div className="project__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="" className='btn'>GitHube</a>
          <a href="" className='btn btn-primary'>Live demo</a>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio
