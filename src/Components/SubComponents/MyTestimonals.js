import React from 'react'
import './StyleSheets/MyTestimonals.css'

const MyTestimonals = ({text, author}) => {
  return (
    <div className='my__test'>
        <div className='test__text'>
             {text}
        </div>

        <div className='test__author'>
            -{author}
        </div>
    </div>
  )
}

export default MyTestimonals