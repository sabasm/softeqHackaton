import React from 'react'
import * as Styled from './style'
const Menu = () => {
  return (
    <Styled.Menu>
      <Styled.ButtonMenu to="/">Shout!</Styled.ButtonMenu>
      <Styled.ButtonMenu to="/layouts">Layouts</Styled.ButtonMenu>
      <Styled.ButtonMenu to="/accounts">Accounts</Styled.ButtonMenu>
      {/* <Styled.ButtonMenu to="/">Schedule</Styled.ButtonMenu> */}
    </Styled.Menu>
  )
}

export default Menu
