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
  const [message, setMessage] = React.useState<string>('')

  /** onChange handler for input todo */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const value = event.target.value
    setPostId(() => value)
  }

  const clickHandler = (): void => {
    dispatch(fetchPosts())
  }

  /** search handler post by postID */
  const serachHandler = (): void => {
    if (postId !== '' && parseInt(postId) <= 100) {
      dispatch(fetchParticularPostById(parseInt(postId)))
      setMessage('')
      return
    } else if (postId === '') {
      setMessage('')
      return
    }
    setMessage('Max searchable postID upto 100')
  }

  return (
    <>
      <Container>
        <InputWapper>
          <TextInput value={postId} handleChange={handleChange} />
          <SmallButton text='Find' bgColor='blue' clickHandler={serachHandler} />
          <SmallButton text='Find all' bgColor='black' clickHandler={clickHandler} />
        </InputWapper>
        {message !== '' ? message : <PostList />}
      </Container>
    </>
  )
}

export default HomePage
