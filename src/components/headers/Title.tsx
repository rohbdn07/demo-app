import React from 'react'
import styled from '@emotion/styled'

interface TitleProps {
  title: string
}

// styles...
const HeaderContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '10vh',
  border: '1px solid black',
  borderWidth: '2px',
  borderRadius: '5px',
  marginBottom: '25px',
  backgroundColor: '#ccc5b9',
  color: '#0b090a',
})

/** title component return header element */
const Title = (props: TitleProps) => {
  return (
    <HeaderContainer>
      <h1>{props.title}</h1>
    </HeaderContainer>
  )
}

export default Title
