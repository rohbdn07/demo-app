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

/**
 *
 * @returns text field input
 */
const TextInput: React.FC = () => {
  const [todo, setTodo] = React.useState<string>('')

  /** onChange handler for input todo */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value
    setTodo(() => value)
  }
  return (
    <FormContainer>
      <TextField
        id='outlined-required'
        label='todo'
        name='todo'
        fullWidth
        variant='outlined'
        value={todo}
        onChange={handleChange}
      />
    </FormContainer>
  )
}

export default TextInput
