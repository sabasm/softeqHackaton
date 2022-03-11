import styled from 'styled-components'

const Article = styled.article`
  padding: 1rem 2rem;
  margin: 1rem;
  border: lightgray solid 1px;
  border-radius: 0.3rem;
  box-shadow: darkgray -0.1rem 0.2rem 0.2rem;
  display: flex;
  flex-flow: column nowrap;
`

const Button = styled.button`
  background-color: red;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border: none;
  padding: auto;
  outline: inherit;
  cursor: pointer;
  &:hover {
      background-color: darkred;
  }
  &:active{
    background-color: white;
    color: darkred;
  }
`
const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`

export { Section, Button, Article }
