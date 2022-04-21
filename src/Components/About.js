import React from 'react'
import './StyleSheets/About.css'
import myPic from '../Images/ghani.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about__me'>

          <div className='about__left'>
            <img src={myPic} alt='PIC' />
          </div>

          <div className='about__right'>
          <div className='about__title'>
            About Me
          </div>
          <div className='about__sec'>
          Hello there! My Name is Ghani Rehman. I am a student of Computer Software Engineering (currently in 8<sup>th</sup> Semester).
          I am pretty much familiar and got really good experience in reactJs and react Native. I can develop handy websites 
          and mobile applications using these technologies.
          </div>

          <div className='contact'>
          <div className='contact__title'>
            Contact Details
          </div>
          <div className='con__details'>
            Address: <br /> Sheikh Muhammadi, Peshawar, KPK
            <br />
            ZIP: 25000
            <br />
            Phone: +92-3116665395
            <br />
            Email: ghanirehmankpk4@gmail.com
          </div>
        </div>
        </div>

        
        </div>

    </div>
  )
}

export default About