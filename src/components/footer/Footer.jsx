import React from 'react'
import './footer.css'
import FooterSocials from './FooterSocials'
const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Ashish</a>
      <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <FooterSocials/>
      <div className="footer__copyright">
        <small>&copy; Ashish</small>
      </div>
    </footer>
  )
}

export default Footer