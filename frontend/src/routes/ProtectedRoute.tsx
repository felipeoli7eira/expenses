import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
import DefaultTemplate from '../templates/default'

export default function Protected() {
  const { isSignedIn } = useContext(AuthContext)

  return isSignedIn ? (
    <DefaultTemplate>
      <Outlet />
    </DefaultTemplate>
  ) : (
    <Navigate to='/login' />
  )
}
