import React from 'react'
import styled from '@emotion/styled'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import SmallButton from '../components/buttons/SmallButton'
import TextInput from '../components/inputs/TextInput'
import PostList from '../components/posts/PostList'
import fetchPosts from '../redux/actions/posts/post-actions'

// styles
const Container = styled('div')({
  display: 'block',
  backgroundColor: '#e5e5e5',
  padding: '10px',
  borderRadius: '10px',
  marginBottom: '20px',
})

const InputWapper = styled('div')({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

// display components that comes under home page
const HomePage: React.FC = () => {
  const posts = useAppSelector((state) => state.post.allPosts)

  const dispatch = useAppDispatch()

  const clickHandler = () => {
    if (posts?.length === 0) {
      dispatch(fetchPosts())
    }
  }
  return (
    <>
      <Container>
        <InputWapper>
          <TextInput />
          <SmallButton text='Find' bgColor='blue' />
          <SmallButton text='Find all' bgColor='black' clickHandler={clickHandler} />
        </InputWapper>
        <PostList />
      </Container>
    </>
  )
}

export default HomePage
