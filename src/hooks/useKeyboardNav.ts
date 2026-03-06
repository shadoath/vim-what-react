import { useEffect } from 'react'
import { allKeysWithInfo } from '../contexts/BaseContext'

export const useKeyboardNav = (setSelectedKey: (key: string) => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore modifier-only keypresses and keypresses in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      const key = e.key
      if (key in allKeysWithInfo) {
        e.preventDefault()
        setSelectedKey(key)
      }
      if (key === 'Escape') {
        e.preventDefault()
        setSelectedKey('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setSelectedKey])
}
