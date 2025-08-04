"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { checkTokenValidity, clearAuthData } from '@/libs/checkAuth'

interface User {
  id?: string
  _id?: string
  name?: string
  lastName?: string
  secondLastName?: string
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (token: string, userData: User) => void
  logout: () => void
  updateUser: (userData: User) => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = () => {
      const token = localStorage.getItem('token')
      const userData = localStorage.getItem('user')
      
      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData)
          
          // Verificar si el token existe (validación local solamente)
          const isValid = checkTokenValidity()
          
          if (isValid) {
            setUser(parsedUser)
          } else {
            console.log('No se encontró token válido, limpiando datos de autenticación')
            clearAuthData()
          }
        } catch (error) {
          console.error('Error al analizar datos del usuario:', error)
          clearAuthData()
        }
      }
      
      setLoading(false)
    }

    initializeAuth()
  }, [])

  const login = (token: string, userData: User) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    clearAuthData()
    setUser(null)
  }

  const updateUser = (userData: User) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    updateUser,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}