import React from 'react'
import * as Styled from './commonStyles'
export const Title = ({ children }) => {
  return (
    <Styled.Title className='elementsWrapper'>
      <h1>{children}</h1>
    </Styled.Title>
  )
}
