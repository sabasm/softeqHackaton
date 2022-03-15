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
          src='https://i.kym-cdn.com/photos/images/original/002/254/523/e1a.png'
        />
      </Styled.ProfilePicture>
      <Styled.ProfileName>[LH]JohnDide</Styled.ProfileName>
      <Menu />
      {children}
    </Styled.Menu>
  )
}
