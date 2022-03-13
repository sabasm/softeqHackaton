import React from 'react'
import Menu from '../../Menu'
import * as Styled from './style'

export const Navigation = ({ children }) => {
  return (
    <Styled.Menu className='containersBorder'>
      <Styled.ProfilePicture>
        <img
          title='Profile picture'
          alt='profile_picture'
          src='https://cataas.com/cat/computer'
        />
      </Styled.ProfilePicture>
      <Styled.ProfileName>Username</Styled.ProfileName>
      <Menu />
      {children}
    </Styled.Menu>
  )
}
