import React from 'react'
import styled from '@emotion/styled'

import { useAppSelector } from '../../redux/hooks'
import usePagination from '../../hooks/Pagination'
import PaginationEl from '../pagination/PaginationEl'
import Post from './Post'

// styles
const PaginationContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
})

/**
 * @description this component display the list of posts with pagination
 * @returns JSX Element of post list along with pagination component
 */
const PostList: React.FC = () => {
  const { allPosts, postById } = useAppSelector((state) => state.post)
  const [page, setPage] = React.useState<number>(0)

  const checkPosts = (): boolean => allPosts.length !== 0
  const checkParticularPost = (): boolean => postById.id !== 0

  const itemsPerPage = 10
  const { currentData, maxPage, moveToNextPage } = usePagination({ data: allPosts, itemsPerPage })

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value)
    moveToNextPage(value)
  }

  return (
    <>
      {checkParticularPost() ? (
        <Post data={postById} />
      ) : (
        checkPosts() && currentData()?.map((post) => <Post key={post.id} data={post} />)
      )}
      {allPosts.length > 0 && (
        <PaginationContainer>
          <PaginationEl
            data={allPosts}
            totalPage={maxPage}
            currentPage={page}
            defaultPage={1}
            size={'small'}
            color={'primary'}
            handlePageChange={handlePageChange}
          />
        </PaginationContainer>
      )}
    </>
  )
}

export default PostList
