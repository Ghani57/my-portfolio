import React from 'react'
import './StyleSheets/Body.css'
import dev from '../Images/dev.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Tooltip from '@mui/material/Tooltip';
import { Wave } from 'react-animated-text';

const Body = () => {

  return (
    <div className='body'>
        <div className='body__left'>
            <div className='body__header__subtitle'>
                LEVELING UP
            </div>

            <div className='body__header__title'>
                <Wave text='My Name is Ghani Rehman' 
                effect="verticalFadeIn"
                iterations={1}
                />

                <div className='ex__style'> </div>
            </div>

            <div className='expl'>
            I have been working on creating websites since 2018. I started working on reactjs at the beginning of 2020 and then after
            working on reactJs for a year, I started to work on creating mobile applications using React Native (cross-platform mobile
            application development framwework). I created a lot of project using these techonologies. I used tools like bootstrap,
            material UI, react native paper etc. for creating more attractive user interfaces.
            </div>

            <div className='social__links'>
                <Tooltip title='LinkedIn' arrow>
                <LinkedInIcon style={{color: '#0e76a8', cursor: 'pointer', fontSize: 36}}
                onClick={() => {
                    window.open('https://www.linkedin.com/in/ghani-rehman-625143186/', '_blank')
                }}
                />
                </Tooltip>

                <Tooltip title='Github' arrow>
                <GitHubIcon style={{color: '#6e5494', cursor: 'pointer', fontSize: 36}} 
                onClick={() => {
                        window.open('https://github.com/Ghani57?tab=overview&from=2021-08-01&to=2021-08-31', '_blank')
                    }}
                />
                </Tooltip>

                <Tooltip title='Instagram' arrow>
                <InstagramIcon style={{color: '#fd1d1d', cursor: 'pointer', fontSize: 36}} 
                onClick={() => {
                    window.open('https://www.instagram.com/firecracker.js/', '_blank')
                }}
                />
                </Tooltip>
            </div>
        </div>

        <div className='body__right'>
            
            <div className='my__pic'>
            <img src={dev} alt='PROFILE PIC' /> 
            </div>
            
        </div>

        
    </div>
  )
}

export default Body