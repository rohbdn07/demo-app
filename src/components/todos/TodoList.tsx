import React, { useId } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import SmallButton from '../buttons/SmallButton'

/**
 * @description display list of todo items
 * @returns JSX ELement of list of todo items
 */
const TodoList = () => {
  const [checked, setChecked] = React.useState([0])
  const prefix1 = useId()

  React.useEffect(() => {
    setChecked([])
  }, [])

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    console.log(currentIndex)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
  }

  return (
    <>
      <List>
        {[0, 1, 2, 3].map((item) => {
          const labelId = `checkbox-list-label-${item}`
          return (
            <ListItem
              key={prefix1 + `${labelId}`}
              secondaryAction={
                <IconButton edge='end' aria-label='delete'>
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(item)}
                dense
                divider={true}
                sx={checked.includes(item) ? { textDecorationLine: 'line-through' } : null}
              >
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={checked.includes(item)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`Line item ${item + 1}`} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <SmallButton text='DELETE ALL' bgColor='red' />
    </>
  )
}

export default TodoList
