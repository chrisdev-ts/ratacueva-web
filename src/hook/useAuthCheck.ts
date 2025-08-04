"use client"

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { checkTokenValidity, redirectToLogin } from '@/libs/checkAuth'

const PUBLIC_ROUTES = [
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password',
  '/',
  '/products',
  '/about',
  '/contact'
]

export const useAuthCheck = (intervalMs: number = 30000) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isChecking, setIsChecking] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      setIsChecking(true)
      
      // Skip auth check for public routes
      if (PUBLIC_ROUTES.includes(pathname)) {
        setIsAuthenticated(true)
        setIsChecking(false)
        return
      }

      // Skip auth check for static routes (like _next, etc.)
      if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
        setIsAuthenticated(true)
        setIsChecking(false)
        return
      }

      const tokenValid = checkTokenValidity()
      
      if (!tokenValid) {
        console.log('No valid token found, redirecting to login...')
        setIsAuthenticated(false)
        redirectToLogin(pathname)
      } else {
        setIsAuthenticated(true)
      }
      
      setIsChecking(false)
    }

    // Check immediately
    checkAuth()

    // Set up interval to check periodically
    const interval = setInterval(checkAuth, intervalMs)

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [pathname, router, intervalMs])

  return {
    isChecking,
    isAuthenticated
  }
}