import React from 'react'
import MyTestimonals from './SubComponents/MyTestimonals'
import './SubComponents/StyleSheets/MyTestimonals.css'

const Testimonals = () => {
  return (
    <div className='testimonials'>
      <MyTestimonals text='Ghani! Your work is awesome man.It was a very good decision that I started this project together with you.
      Your work is not just awesome but is so much valuable. 
      Your frontend design in our project was incredible. GOOD JOB!!!' 
      author='Haris Kamal (My projectmate)'
      />

      <MyTestimonals text='It is a distinct pleasure for me to recommend Ghani Rehman to any and all interested parties. 
      He has been professional, comprehensive and competent throughout the process of our working together. The reaction to our 
      new web site has been overwhelmingly positive; as one commented the site is “FANTASTIC.”'
      author='Haris Khan Yousafzai (ClassMate)'
      />

      <MyTestimonals text='Ghani is a proactive front-end engineer working on performant web applications that scales better. 
      His expertise are ranging from chat apps to robust e-commerce web apps which are mainly focused on ReactJS and Nextjs.'
      author='Syed Furqan Ali Shah (Freelancer)'
      />
    </div>
  )
}

export default Testimonals