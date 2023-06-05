import React from "react"
import Layout from '../components/Layout'
import Home from '../components/Home'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Carouselx from '../components/Carouselx'
import About from '../components/About'
import Banner from '../components/Banner'
import Personal from '../components/Personal'
import Contact from '../components/Contact'

const IndexPage = () => {

  return (
    <Layout>
      <Home />
      <Stats />
      <Projects />
      <About />
      <Carouselx />
      <Banner />
      <Personal />
      <Contact />
    </Layout>
  )
}

export default IndexPage
