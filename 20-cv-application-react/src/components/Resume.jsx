import Avatar from '@mui/material/Avatar'
import { stringAvatar } from '../helper/helper'
import Divider from '@mui/material/Divider'
import { LeftPSContainer } from './styled/LeftPSContainer'
import React from 'react'
import { ResumeContext } from './context/ResumeContext'

export function ResumeA() {
  const { resumeState } = React.useContext(ResumeContext)
  return (
    <>
      <Avatar
        style={{ fontSize: 45, width: 140, height: 140, margin: '30px auto' }}
        {...stringAvatar('Kent Dodds')}
      />
      <Divider
        style={{ color: 'white' }}
        sx={{
          '&::after': {
            backgroundColor: '#ffffff69',
          },
          '&::before': {
            backgroundColor: '#ffffff69',
          },
        }}
      >
        Contact
      </Divider>
      <LeftPSContainer>
        {Object.keys(resumeState.personalDetails).map((key) => {
          if(key === 'name') return
          return (
            <>
              <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              <p>{resumeState.personalDetails[key]}</p>
            
            </>
          )
        })}
      </LeftPSContainer>
    </>
  )
}
