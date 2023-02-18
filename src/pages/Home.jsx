import React from 'react'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import Content from '../component/Content'
const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <Content/>
      <Footer/>
    </div>
  )
}

export default Home