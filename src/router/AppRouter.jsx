import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRouts } from '../auth/routes/AuthRouts'
import { JournalRouts } from '../journal/routes/JournalRouts'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y registro */}
      <Route path='/auth/*' element={<AuthRouts />} />
      {/* JournalApp */}
      <Route path='/*' element={<JournalRouts />} />
    </Routes>
  )
}
