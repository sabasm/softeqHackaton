import styled from 'styled-components'

const ContentWrapper = styled.aside`
  /* min-height: 90vh; */
  background: var(--background-secondary_color);
  /* background-color: red; */
  flex-grow: 6;
  flex-shrink: 0;
  max-width: 720px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  padding:1rem;
  margin-right: 0.5rem;
`

export { ContentWrapper }
