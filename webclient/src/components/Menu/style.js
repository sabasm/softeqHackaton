import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 1rem;
  padding: 0.3rem;
`
const ButtonMenu = styled(Link)`
  background: var(--background-primary_color);
  color: white;
  border: 1px solid var(--background-primary_color);
  padding: 0.6rem 0.8rem;
  width: 100%;
  margin-bottom: 0.3rem;
  text-align: center;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  &:hover {
    background-color: var(--button-background-primary_hover-color);
  }
  &:active {
    background-color: var(--button-background-primary_active-color);
  }
`

export { Menu, ButtonMenu }
