import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface ButtonProps {
  text: string
  bgColor: 'black' | 'blue'
  clickHandler: () => void
}

/**
 * @description display button
 * @param text button's name
 * @param bgColor background color of button
 * @param clickHandler this function execute onClick event
 * @returns JSX Element
 */
const SmallButton = ({ text, bgColor, clickHandler }: ButtonProps) => {
  return (
    <>
      <Box sx={{ padding: '5px' }}>
        <Button
          size='large'
          variant='contained'
          sx={{ bgcolor: `${bgColor}` }}
          onClick={clickHandler}
        >
          {text}
        </Button>
      </Box>
    </>
  )
}

export default SmallButton
