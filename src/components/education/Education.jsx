
import React from 'react'
import "./education.css"
import {DiJava} from "react-icons/di"
import {DiJavascript1} from "react-icons/di"
import {FaHtml5} from "react-icons/fa"
import {FaReact} from "react-icons/fa"
import {FaBootstrap} from "react-icons/fa"
import {TbBrandReactNative} from "react-icons/tb"
import TextShpere from "./TextShpere"
import SkillCard from './SkillCard'
const Education = () => {
  console.log(TextShpere)
  return (
    <section id='skill'>
      <div className="container skill__container">
        <SkillCard icon={<DiJava/>} name="Java" opt1="OOPS" opt2="DSA" opt3="Recursion" opt4="Dynamic Programming"/>
        <SkillCard icon={<FaHtml5/>} name="HTML & CSS" opt1="Basic HTML tags" opt2="HTML 5" opt3="Css Layout" opt4="Animation"/>
        <SkillCard icon={<DiJavascript1/>} name="JavaScript" opt1="Prototype" opt2="Scope" opt3="Promises" opt4="Deep analysis"/>
        <SkillCard icon={<FaBootstrap/>} name="BootStrap" opt1="Basic Knowledge" opt2="Ateractive UI" opt3="Layout" opt4="Imp Concept"/>
        <SkillCard icon={<FaReact/>} name="React" opt1="JSX" opt2="Hooks" opt3="LifeCycle" opt4="All Imp Concept"/>
        <SkillCard icon={<TbBrandReactNative/>} name="ReactNative" opt1="Redux" opt2="Jest" opt3="ESLint" opt4="ES6"/>
      </div>
    </section>
  )
}

export default Education