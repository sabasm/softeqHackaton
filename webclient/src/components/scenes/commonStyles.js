import styled from 'styled-components'

const Content = styled.section`
  width: 100%;
  background-color: var(--background-secondary_color);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`
const Title = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 0.6rem;
  text-align: left;
  border-radius: 8px 8px 0 6px;

  h1 {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
    display: inline;
  }
`

const Form = styled.form`
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  padding: 0.3rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  label {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0.3rem;

    input,
    textarea {
      resize: none;
      width: 100%;
      max-width: 320px;
      padding: 0.3rem;
      border: 1px solid var(--background-secondary_color);
      border-radius: 5px;
      box-sizing: border-box;
      margin: 0.3rem;
    }
  }
`

export { Content, Title, Form }
