import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import './footer.css'
const FooterSocials = () => {
  return (
    <div className="footer__socials">
        <a href="https://www.linkedin.com/in/ashish-rajpoot-5b6614256/" target="__blank"><FaLinkedinIn/></a>
        <a href="https://github.com/AshishRaj0602" target="__blank"><FaGithub/></a>
        <a href="https://www.youtube.com/channel/UCqNffzIecrtmH5ZcmkgEnPA" target="__blank"><FaYoutube/></a>
    </div>
  )
}

export default FooterSocials