import React from 'react'
import styled from '@emotion/styled'
import { TextField } from '@mui/material'

// styles...
const FormContainer = styled('div')({
  display: 'flex',
  marginTop: '10px',
  marginBottom: '20px',
  width: '550px',
})

// Text input form
const TextInput: React.FC = () => {
  return (
    <FormContainer>
      <TextField
        id='outlined-required'
        label='todo'
        name='todo'
        fullWidth
        variant='outlined'
        value={'hello world'}
      />
    </FormContainer>
  )
}

export default TextInput
