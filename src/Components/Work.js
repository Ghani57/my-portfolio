import React from 'react'
import {myWork} from '../Data/MyWork'
import './StyleSheets/Work.css'

const Work = () => {

  return (
    <div className='my__work'>
        <div className='work__title'>
            CHECK OUT SOME OF MY PROJECTS
        </div>

        <div className='p__title'>
            <div className='p__category'>React Projects</div>
        </div>
        <div className='my__projects'
        >
        {
            myWork.map((project, index) => {
                return (
                    <div className='project__image'
                    onClick={() => {
                        window.open(project.url, '_blank')
                    }}
                    >
                        <img src={project.image} alt='Project Pic' />

                        <div className='link__hover'>
                            {project.projectName}
                        </div>

                        <div className='link__overlay'>
                            <div className='par'>
                            {
                                project.projectName
                            }
                        
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Work