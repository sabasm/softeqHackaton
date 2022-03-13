import styled from 'styled-components'

const RowController = styled.div`
  display: flex;
  /* background: red; */
  width: 100%;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  max-width: 100%;
  padding: 1.6rem 0.6rem 1rem 0.6rem;
  box-sizing: border-box;
`
const Button = styled.button`
  background: var(--button-background-primary-color);
  color: white;
  border: 1px solid var(--background-primary_color);
  padding: 0.3rem 0.8rem;
  width: 100%;
  max-width: 96px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  &:hover {
    background-color: var(--button-background-primary_hover-color);
    transform: scale(1.05);
  }
  &:active {
    background-color: var(--button-background-primary_active-color);
  }
`

export { RowController, Button }
