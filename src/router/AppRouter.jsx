import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouts } from '../auth/routes/AuthRouts'
import { JournalRouts } from '../journal/routes/JournalRouts'
import { CheckingAuth } from '../ui'
import { useCheckAuth } from '../hooks'

export const AppRouter = () => {

  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }
  return (
    <Routes>
      {
        (status === 'authenticated')
          ? <Route path='/*' element={<JournalRouts />} />
          : <Route path='/auth/*' element={<AuthRouts />} />
      }
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
