import React from 'react'
import NavBar from '../../components/NavBar'
import Hero from './Hero'
import Team from './team'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Team/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default About