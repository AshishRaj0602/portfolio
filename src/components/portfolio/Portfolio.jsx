import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/millionaire.jpg'
import IMG2 from '../../assets/onlinePayment.jpg'
import IMG3 from '../../assets/snake.jpg'
import IMG4 from '../../assets/slack6.png'
import IMG5 from '../../assets/portfolio.jpg'
import IMG6 from '../../assets/portfolio3.jpg'
import Project from './ProjectCard'
import ComminSoon from './ComminSoon'
const Portfolio = () => {
  return (
    <section id='project'>
      <h5>My Project</h5>
      <h2>Project</h2>

      <div className="container project__container">
        <Project img={IMG1} text="Millionaire Game" github="https://github.com/AshishRaj0602/MillionaireApp" live="https://millionaire0602.netlify.app/"/>
        <Project img={IMG2} text="Online Payment App" github="https://github.com/AshishRaj0602/onlinepay" live="https://onlinepay0602.netlify.app/"/>
        <Project img={IMG3} text="Snake Game" github="https://github.com/AshishRaj0602/Snake-game" live="https://verdant-axolotl-0ccb2e.netlify.app/"/>
        <Project img={IMG4} text="Slack Clone" github="https://github.com/AshishRaj0602/myslack" live="https://ashishraj0602.github.io/myslack"/>
        <Project img={IMG5} text="My Portfolio" github="https://github.com/AshishRaj0602/portfolio" live="https://ashishraj0602portfolio.netlify.app/"/>
        <ComminSoon img={IMG6} text="Airbnb clone"/>
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
