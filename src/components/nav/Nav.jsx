import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
 import {RiServiceLine} from 'react-icons/ri'
 import {IoMdCall} from 'react-icons/io'
 import { useState } from 'react'
const Nav = () => {
  const [activeNav,setActiveNav] =useState('#');
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><FaHome/></a>
      <a href="#skill" onClick={()=> setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#project" onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><IoMdCall/></a>
    </nav>
  )
}

export default Nav
