import { Routes, Route } from 'react-router-dom'
import AuthProvider from '../contexts/AuthContext'
import Protected from './ProtectedRoute'

import LoginPage from '../pages/public/Login/page'

export const appRoutesMap = {
    login: {
        path: '/login'
    },
    appHome: {
        path: '/app'
    }
}

export function AppRoutes(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route path={appRoutesMap.login.path} element={<LoginPage />} />

        <Route path={appRoutesMap.appHome.path} element={<Protected />}>
          <Route path={appRoutesMap.appHome.path} element={<>...</>} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
