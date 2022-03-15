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

const Preview = styled.section`
  background: var(--background-primary_color);
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  padding: 0.3rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
`
const PreviewContainer = styled.section`
  background: var(--background-secondary_color);
  width: 100%;
  /* min-height: 70vh; */
  height: max-content;
  margin-right: 1rem;
  text-align: left;
  box-sizing: border-box;
  padding: 0.3rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-around;
`
const PreviewElement = styled.article`
  background: var(--background-primary_color);
  min-height: 5vh;
  width: 100%;
  padding: 0.3rem;
  box-sizing: border-box;
  margin: 1rem 0;
`

export { Content, Title, Form, Preview, PreviewContainer, PreviewElement }
