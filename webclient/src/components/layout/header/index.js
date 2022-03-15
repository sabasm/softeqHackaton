import React from 'react'
import * as Styled from './style'
import logo from '../../../assets/favicon.ico'
export const Header = () => {
  return (
    <Styled.Header>
      <Styled.Navbar>
        <Styled.NavAnchord to='/'>
          <img
            src={logo}
            alt='Flash'
            title='Flash'
            style={{ objectFit: 'contain', height: '0.8rem' }}
            width='auto'
            height='auto'
          ></img>
          Flash
        </Styled.NavAnchord>
      </Styled.Navbar>
    </Styled.Header>
  )
}
