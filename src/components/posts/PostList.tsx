import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import { useAppSelector } from '../../redux/hooks'
import usePagination from '../../hooks/Pagination'
import PaginationEl from '../pagination/PaginationEl'

/**
 * @description it display the list of posts
 * @returns JSX Element of post lists
 */
const PostList: React.FC = () => {
  const posts = useAppSelector((state) => state.post.allPosts)
  const [page, setPage] = React.useState(0)

  const checkPosts = (): boolean => posts.length !== 0

  const itemsPerPage = 10
  const { currentData, maxPage, moveToNextPage } = usePagination({ data: posts, itemsPerPage })

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value)
    setPage(value)
    moveToNextPage(value)
  }

  return (
    <>
      {checkPosts() &&
        currentData()?.map((post) => (
          <List key={post?.id} sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
              </ListItemAvatar>
              <ListItemText
                primary={`${post.title}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      User id: {post?.userId}
                    </Typography>
                    {`- ${post?.body}`}

                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </List>
        ))}
      {posts.length > 0 && (
        <PaginationEl
          data={posts}
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
