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
import { Box } from '@mui/material'

import { PostModel } from '../../models/redux-models'

/** interfaces */
interface PostProps {
  data: PostModel
}

/** Post component accepts props and render Post according to given props */
const Post = (props: PostProps) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='post_image' src='https://picsum.photos/200/300/?blur=2' />
        </ListItemAvatar>
        <ListItemText
          primary={`${props.data.title}`}
          secondary={
            <React.Fragment>
              <Box sx={{ display: 'block' }} component='span'>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  UserID: {props.data.userId}, PostID: {props.data.id}
                </Typography>
                <Typography
                  sx={{ display: 'block' }}
                  component='span'
                >{`- ${props.data.body}`}</Typography>
              </Box>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </List>
  )
}

export default Post
