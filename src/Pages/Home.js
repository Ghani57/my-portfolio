import React from 'react'
import About from '../Components/About'
import Body from '../Components/Body'
import Header from '../Components/Header'
import Resume from '../Components/Resume'
import Testimonals from '../Components/Testimonals'
import Work from '../Components/Work'

const Home = () => {
  return (
    <div className='home__page'>
        <div id='home'>
        <Header />
        </div>

        <div id='body'>
        <Body />
        </div>

        <div id='work'>
        <Work />
        </div>

        <div id='resume'>
        <Resume />
        </div>

        <div id='testimonals'>
        <Testimonals />
        </div>

        <div id='about'>
        <About />
        </div>
    </div>
  )
}

export default Home