import React from 'react'
import { loginPage } from '../../network/extAPI/udsDevPortalAuth'
import * as Styled from './style'
const Menu = ({children}) => {
  return (
    <Styled.Menu>
      <Styled.ButtonMenu to='/'>Shout!</Styled.ButtonMenu>
      <Styled.ButtonMenu to='/layouts'>Layouts</Styled.ButtonMenu>
      <Styled.ButtonMenu to='/accounts'>Accounts</Styled.ButtonMenu>
      {/* <Styled.ButtonMenu to="/">Schedule</Styled.ButtonMenu> */}
      {children}
    </Styled.Menu>
  )
}

export default Menu
