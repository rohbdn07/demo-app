import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface ButtonProps {
  text: string
  bgColor: 'red' | 'blue'
}

/**
 * @description display button
 * @param text button's name
 * @param bgColor background color of button
 * @returns JSX Element
 */
const SmallButton = ({ text, bgColor }: ButtonProps) => {
  return (
    <>
      <Box sx={{ padding: '5px' }}>
        <Button size='large' variant='contained' sx={{ bgcolor: `${bgColor}` }}>
          {text}
        </Button>
      </Box>
    </>
  )
}

export default SmallButton
