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

/**
 * @description it display the list of posts
 * @returns JSX Element of post lists
 */
const PostList: React.FC = () => {
  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </ListItemAvatar>
          <ListItemText
            primary='sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  User: 1
                </Typography>
                {
                  ' — quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
                }

                <IconButton edge='end' aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
      </List>
    </>
  )
}

export default PostList
