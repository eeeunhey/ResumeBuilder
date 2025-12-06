import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/hero'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import CallToAction from '../components/home/CallToAction'
import Footer from '../components/home/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <div>
          <Navbar />
            <Banner />
            <Hero />
            <Features />
            <Testimonial />
            <CallToAction />
            <Footer />
        </div>
    </div>
  )
}

export default Home