import { useContext } from 'react'
import { AuthContext } from '../assets/providers/auth/AuthProvider'

export const useAuth = () => useContext(AuthContext)
