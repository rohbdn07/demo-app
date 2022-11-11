import React from 'react'
import styled from '@emotion/styled'

import { useAppDispatch } from '../redux/hooks'
import SmallButton from '../components/buttons/SmallButton'
import TextInput from '../components/inputs/TextInput'
import PostList from '../components/posts/PostList'
import { fetchParticularPostById, fetchPosts } from '../redux/actions/posts/post-actions'

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
  const dispatch = useAppDispatch()
  const [postId, setPostId] = React.useState<string>('')

  /** onChange handler for input todo */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value
    setPostId(() => value)
  }

  const clickHandler = () => {
    dispatch(fetchPosts())
  }

  const serachHandler = () => {
    if (postId !== '') dispatch(fetchParticularPostById(parseInt(postId)))
  }

  return (
    <>
      <Container>
        <InputWapper>
          <TextInput value={postId} handleChange={handleChange} />
          <SmallButton text='Find' bgColor='blue' clickHandler={serachHandler} />
          <SmallButton text='Find all' bgColor='black' clickHandler={clickHandler} />
        </InputWapper>
        <PostList />
      </Container>
    </>
  )
}

export default HomePage
