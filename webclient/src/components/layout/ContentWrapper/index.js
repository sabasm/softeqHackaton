import React from 'react'
import * as Styled from './style'

export const ContentWrapper = ({ children }) => {
  return <Styled.ContentWrapper className="containersBorder">{children}</Styled.ContentWrapper>
}
