import React from 'react'
import styled from '@emotion/styled'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import SmallButton from '../components/buttons/SmallButton'
import TextInput from '../components/inputs/TextInput'
import PostList from '../components/posts/PostList'

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
  flexWrap: 'wrap',
})

// display components that comes under home page
const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <InputWapper>
          <TextInput />
          <SmallButton text='Find' bgColor='blue' />
          <SmallButton text='Find all' bgColor='black' />
        </InputWapper>
        <PostList />
        <Stack spacing={2}>
          <Pagination count={20} color='primary' size='small' page={2} />
        </Stack>
      </Container>
    </>
  )
}

export default HomePage
