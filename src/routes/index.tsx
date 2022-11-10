import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

/**
 * @description Handles different routes of the application(pages)
 * @returns homePage routes to display page(s)
 */
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>Opps! this route doesnot exist. There is nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  )
}

export default AppRoutes
