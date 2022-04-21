import React from 'react'
import './StyleSheets/Resume.css'
import LinearProgress from '@mui/material/LinearProgress';

const Resume = () => {

  return (
    <div className='resume__main'>

      <div className='resume'>
      <div className='resume__left'>
        <div className='left__title'>EDUCATION</div>
      </div>

      <div className='resume__right'>
        <div className='uni__name'>
          University of Engineering & technology, Mardan  
        </div>
        <div className='uni__sub'>
        -Bachelor's Degree, Computer Software Engineering <br />
        -Not yet graduated (Currently in 8<sup>th</sup> semester)
        </div>
      </div>
      </div>


      {/* SKILSS */}
      <div className='resume' style={{border: 'none'}}>
      <div className='resume__left'>
        <div className='left__title'>SKILLS</div>
      </div>

      <div className='resume__right'>
        <div className='uni__name'>
          Programming Languages/Technologies Proficiency
        </div>
        <div className='uni__sub'>
        <div className='pro__title'>ReactJs</div>
        <LinearProgress variant="determinate" value={95} style={{height: '30px', width: '70%'}} />

        <div className='pro__title'>React Native</div>
        <LinearProgress variant="determinate" value={95} style={{height: '30px', width: '70%'}} />

        <div className='pro__title'>PyThon</div>
        <LinearProgress variant="determinate" value={30} style={{height: '30px', width: '70%'}} />

        <div className='pro__title'>NodeJs</div>
        <LinearProgress variant="determinate" value={60} style={{height: '30px', width: '70%'}} />

        <div className='pro__title'>Bootstrap</div>
        <LinearProgress variant="determinate" value={80} style={{height: '30px', width: '70%'}} />

        <div className='pro__title'>MaterialUI</div>
        <LinearProgress variant="determinate" value={90} style={{height: '30px', width: '70%'}} />
        </div>
      </div>
      </div>

    </div>
  )
}

export default Resume