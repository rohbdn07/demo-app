import React from 'react'

import { useAppSelector } from '../../redux/hooks'
import usePagination from '../../hooks/Pagination'
import PaginationEl from '../pagination/PaginationEl'
import Post from './Post'

/**
 * @description it display the list of posts
 * @returns JSX Element of post list along with pagination component
 */
const PostList: React.FC = () => {
  const { allPosts, postById } = useAppSelector((state) => state.post)
  const [page, setPage] = React.useState(0)

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
        <PaginationEl
          data={allPosts}
          totalPage={maxPage}
          currentPage={page}
          defaultPage={1}
          size={'small'}
          color={'primary'}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  )
}

export default PostList
