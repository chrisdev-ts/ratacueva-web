"use client"

import { useEffect, useState } from 'react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
  duration?: number
  type?: 'success' | 'info' | 'warning'
}

export default function Toast({ message, isVisible, onClose, duration = 3000, type = 'success' }: ToastProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setTimeout(onClose, 300) // Wait for animation to complete
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  const getToastStyles = () => {
    switch (type) {
      case 'info':
        return {
          bg: 'bg-blue-600',
          icon: 'text-blue-200',
          close: 'text-blue-200 hover:text-white'
        }
      case 'warning':
        return {
          bg: 'bg-yellow-600',
          icon: 'text-yellow-200',
          close: 'text-yellow-200 hover:text-white'
        }
      default:
        return {
          bg: 'bg-green-600',
          icon: 'text-green-200',
          close: 'text-green-200 hover:text-white'
        }
    }
  }

  const styles = getToastStyles()

  const getToastIcon = () => {
  switch (type) {
    case 'info':
      return <svg className={`w-6 h-6 ${styles.icon}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
    case 'warning':
      return <svg className={`w-6 h-6 ${styles.icon}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
    default:
      return <CheckCircleIcon className={`w-6 h-6 ${styles.icon}`} />
  }
}

  const icon = getToastIcon()

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
    }`}>
      <div className={`${styles.bg} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}>
        <span className="flex-shrink-0">{icon}</span>  
        {/* <CheckCircleIcon className={`w-6 h-6 ${styles.icon} flex-shrink-0`} /> */}
        <span className="flex-1">{message}</span>
        <button
          onClick={() => {
            setIsAnimating(false)
            setTimeout(onClose, 300)
          }}
          className={`${styles.close} transition-colors`}>
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
} 