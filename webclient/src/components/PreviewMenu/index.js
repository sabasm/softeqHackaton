import React from 'react'

import * as Styled from './style'
const PreviewMenu = ({ children }) => {
  return (
    <Styled.Menu className='elementsWrapper'>
      {/* <Styled.ButtonMenu to="/">Schedule</Styled.ButtonMenu> */}
      {children}
    </Styled.Menu>
  )
}

export default PreviewMenu
