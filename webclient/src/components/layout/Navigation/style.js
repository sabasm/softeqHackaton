import styled from 'styled-components'

const Menu = styled.aside`
  background: var(--background-secondary_color);
  /* min-height: 60vh; */
  width: 160px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 1rem;
  margin-top: 1rem;
`
const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  background: var(--background-primary_color);
  border-radius: 50%;
  margin-bottom: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ProfileName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-primary_color);
  margin-bottom: 1rem;
`

export { Menu, ProfilePicture, ProfileName }
