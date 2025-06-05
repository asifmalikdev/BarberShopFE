'use client'

import { useState, useEffect } from 'react'
import { X, CheckCircle, AlertCircle } from 'lucide-react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-brand-blue' : 'bg-brand-red'
      }`}>
        {type === 'success' ? (
          <CheckCircle className="w-5 h-5 text-brand-white" />
        ) : (
          <AlertCircle className="w-5 h-5 text-brand-white" />
        )}
        <p className="text-brand-white font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 text-brand-white/80 hover:text-brand-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  )
}