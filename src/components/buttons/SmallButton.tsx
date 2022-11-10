import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const SmallButton: React.FC = () => {
  return (
    <>
      <Box sx={{ padding: '5px' }}>
        <Button size='large' variant='contained'>
          ADD
        </Button>
      </Box>
    </>
  )
}

export default SmallButton
