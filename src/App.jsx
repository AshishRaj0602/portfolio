import React from 'react'
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience from './components/education/Education'
const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <Experience/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
