import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Container } from '@mui/material'

import './App.css'
import AppRoutes from './routes'

/**
 * @description main hub for functional components that renders.
 * @returns JSX elements
 */
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <header className='App-header'>
            <h1>Get your posts</h1>
          </header>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
