import React from 'react'
import styled from '@emotion/styled'
import { TextField } from '@mui/material'

interface TextInputProps {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

// styles...
const FormContainer = styled('div')({
  display: 'flex',
  marginTop: '10px',
  marginBottom: '20px',
  width: '550px',
})

/**
 *
 * @returns text field input
 */
const TextInput = (props: TextInputProps) => {
  return (
    <FormContainer>
      <TextField
        id='outlined-required'
        label='Put your post id'
        name='Id'
        type='number'
        fullWidth
        variant='outlined'
        value={props.value}
        onChange={props.handleChange}
      />
    </FormContainer>
  )
}

export default TextInput
