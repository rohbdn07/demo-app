import React from 'react'
import styled from '@emotion/styled'

import SmallButton from '../components/buttons/SmallButton'
import TextInput from '../components/inputs/TextInput'

// styles
const Container = styled('div')({
  display: 'block',
  backgroundColor: '#e5e5e5',
  padding: '10px',
  borderRadius: '10px',
})

const InputWapper = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
})

// display components that comes under home page
const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <InputWapper>
          <TextInput />
          <SmallButton />
        </InputWapper>
      </Container>
    </>
  )
}

export default HomePage
