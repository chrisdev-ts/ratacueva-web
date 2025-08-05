"use client"

import { useAuthCheck } from '@/hook/useAuthCheck'

interface AuthGuardProps {
  children: React.ReactNode
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isChecking, isAuthenticated } = useAuthCheck(30000)
  
  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Verificando autenticación...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">Redirigiendo al login...</div>
      </div>
    )
  }
  
  return <>{children}</>
}